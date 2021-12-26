// Короче не трогать то что настроенно;
const { VK, MessageContext, Keyboard } = require('vk-io');
const { HearManager } = require('@vk-io/hear');
var time = new Date();

class BOT {
  constructor(name) {
    this.color1;
    this.param4;
    this.param3;
    this.param2;
    this.param1; 
    this.name = name;
  } 
  status() { 
  	return this.name + ": я начинаю работу " + "[" + time + "]" 
 	}
	check(param1) {
		this.param1 = param1;
		var wordUp = Array.prototype.map.call( this.param1, function(v) {
			return v.toUpperCase();
		}).join("");
		return wordUp;
 	}
  creatMain(param1, param2, param3, param4) {
    this.param1 = param1;
    this.param2 = param2;
    this.param3 = param3;
    this.param4 = param4;

    const main = Keyboard.builder()
    .textButton({
      label: this.param1,
      payload: {
        command: this.param1
      }
    })
    .row()
    .textButton({
      label: this.param2,
      payload: {
        command: this.param2
      },
      color: Keyboard.POSITIVE_COLOR
    })
    .textButton({
      label: this.param3,
      payload: {
        command: this.param3
      },
      color: Keyboard.POSITIVE_COLOR
    })
    .row()
    .textButton({
      label: this.param4,
      payload: {
        command: this.param4
      },
      color: Keyboard.NEGATIVE_COLOR
    }); 

   return main;
  }
  creatMessageTwoButton(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
    const builderLineTwo = Keyboard.builder()
    .textButton({
      label: this.param1,
      payload: {
        command: this.param1
      },
      color: Keyboard.POSITIVE_COLOR
    })
    .textButton({
      label: this.param2,
      payload: {
        command: this.param2
      },
      color: Keyboard.NEGATIVE_COLOR
    })
    builderLineTwo.inline();
    return builderLineTwo;
  }
  creatMessageButton(param1) {
    this.param1 = param1;
    const builderLine = Keyboard.builder()
    .textButton({
      label: this.param1,
      payload: {
        command: this.param1
      },
      color: Keyboard.POSITIVE_COLOR
    })
    builderLine.inline();
    return builderLine;
  }
}

exports.BOT = BOT;