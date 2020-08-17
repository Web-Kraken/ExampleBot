const Discord = require('discord.js');
const conf = require('./config.json');

module.exports = class ExampleBot {
    constructor() {
        this._client = new Discord.Client();

        this._init();
    }

    _init() {
        this._client.on('ready', this._on_client_ready);
        this._client.on('message', this._on_client_message);

        this.login();
    }

    _on_client_ready() {
        console.log(`Logged in as ${this.user.tag}!`);
    }

    _on_client_message(msg) {
        /*
            Your logic here...
        */
    }

    login() {
        this._client.login(conf.discord.token);
    }

    shutdown() {
        this._client.destroy();
    }
};
