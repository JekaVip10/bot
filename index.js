const { VK, MessageContext, Keyboard } = require('vk-io');
const { BOT } = require("./setting_bot/setting_comand.js");
let bot = new BOT("Bоt");

const vk = new VK({
    token: '1797d6befdf5054a80df75c9d638678601d274a6b57772a259ba93ac96f58982ea27f7cd8ffc8576ae7b4'
});

var mainBot = bot.creatMain("Инструкция", "Команды", "Игры", "Скоро будет");

vk.updates.on('message_new', async (context) => {
	var h = true;
	var word = bot.check(context.text);

	    // В случае если пользователь введет любое число
    var x = Number(context.text);
    if(typeof context.text === "string" && isNaN(x) === false) {
        h = false;
        var c = Number(x) * Number(x);
        context.send("Я цифру " + x + " возвел в степень: " + c);
    } if (isNaN(x) === true) {
        toString(context.text);
    } 


    // Команды
    if(word === "КЛАВИАТУРА" || word === "КНОПКИ") {
    	h = false;
    	await context.send({ message: `Клавиатура обновлена`, keyboard: mainBot });
    }

    if(word === "ИГРЫ") {
    	h = false;
    	await context.send({ message: `Игры потом...` });
    }

    if(word === "КОМАНДЫ") {
    	h = false;
    	await context.send({ message: `Команды в список не добавили...` });
    }

    /* Это мой велосипед */
    if(h === true) {
    	context.send("Рандом");
    }
});

console.log(bot.status());
vk.updates.start().catch(console.error);