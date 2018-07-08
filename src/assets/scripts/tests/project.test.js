const webdriverio = require("webdriverio");
const options = (function opt() {
  const shared = {
    host: 'localhost',
    port: 4444,
    path: '/wd/hub',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    maxInstances: 1
};

exports.firefox = {
    ...shared,
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

exports.chrome = {
    ...shared,
    desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["disable-gpu", 'no-sandbox', 'disable-setuid-sandbox', 'incognito', 'disable-dev-shm-usage']
        }
    }
};

exports.opera = {
    ...shared,
    desiredCapabilities: {
        browserName: 'opera',
        operaOptions: {
            args: ["disable-gpu", 'no-sandbox', 'disable-setuid-sandbox', 'incognito', 'disable-dev-shm-usage']
        }
    }
};

})();
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