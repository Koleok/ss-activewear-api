/* global log:true */
log = console.log.bind(console);

class SS_Api {

    constructor(options) {
        this.username = options.username; // S&S account number
        this.api_key = options.api_key; // S&S api key
    }

    init(options) {
        this.username = options.username; // S&S account number
        this.api_key = options.api_key; // S&S api key
    }

    get typeName() {
        return "SS_Api";
    }

    get auth() {
        let encodedCreds = new Buffer(`${this.username}:${this.api_key}`).toString('base64');
        return `Basic ${encodedCreds}`;
    }

    /******************************************************************
     *  Pass an object like:
     *  params: {fields: 'specID, brandName'}
     *  to limit fields and cut wait times
     *****************************************************************/
    call({
        method, endpoint, data = null, params = null
    }) {
        if (!this.username || !this.api_key || !method || !endpoint) {
            throw new Meteor.Error('400', 'S&S activewear: Missing parameter for SS call');
        }

        let apiUrl = `https://api.ssactivewear.com/v1${endpoint}`;
        let options = {
            headers: {
                "Authorization": this.auth,
                "Content-Type": "application/json"
            },
            data: data,
            params: params
        };

        let result = HTTP.call(method, apiUrl, options);
        return result.data;
    }

    get styles() {
        return this.call({
            method: 'GET',
            endpoint: '/styles?fields=Title,styleID,brandName'
        })
    }

    get products() {
        return this.call({
            method: 'GET',
            endpoint: '/products'
        })
    }

    get categories() {
        return this.call({
            method: 'GET',
            endpoint: '/categories'
        })
    }

    get specs() {
        return this.call({
            method: 'GET',
            endpoint: '/specs'
        })
    }
}

ss = new SS_Api({
    username: Meteor.settings.ss_activewear.username,
    api_key: Meteor.settings.ss_activewear.api_key
});