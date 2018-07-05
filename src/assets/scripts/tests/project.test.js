//const webdriverio = require("webdriverio");
//const options = require("wdio.conf");
//const client = webdriverio.multiremote(options);
//const shared = {
//	host: "localhost",
//	port: 4444
//};
const page = document.querySelector(".welcome");
const loginBtn = document.querySelector(".autorise-btn");

jest.setTimeout(30000);


test("На странице приветствия есть кнопка авторизации", () => {

       expect(page).toContain(loginBtn);
}
);