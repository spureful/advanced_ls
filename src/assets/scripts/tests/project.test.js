const webdriverio = require("webdriverio");
const options = require("wdio.conf");
const client = webdriverio.multiremote(options);
const shared = {
	host: "localhost",
	port: 4444
};
const page = document.querySelector(".welcome");
const loginBtn = document.querySelector(".autorise-btn");

jest.setTimeout(30000);


beforeAll(() => {
    return client.init().url('http://localhost:7777/overlay');
});

test("На странице приветствия есть кнопка авторизации", () => {

        return client
        .isExisting('.autorise-btn')
        .then(browsers => {
            for (const browserName in browsers) {
                expect(browsers[browserName]).toBe(true);
            }
        })
        .screenshot()
        .then(browsers => {
            for (const browserName in browsers) {
                fs.writeFileSync(`./screenshots/overlay_${browserName}_has_open.png`, browsers[browserName].value, 'base64');
            }
        });
}
);