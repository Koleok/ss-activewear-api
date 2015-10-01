SS_Api = function (options) {
    options = options || {};

    this.username = options.username; // Use S&S account number
    this.api_key = options.api_key; // Use S&S api key
}

SS_Api.prototype = {
    constructor: SS_Api,

    init: function (options) {
        this.username = options.username; // Use S&S account number
        this.api_key = options.api_key; // Use S&S api key
    },

    typeName: function () {
        return "SS_Api";
    }
}

class SS_Api {

    constructor(options) {
        options = options || {};
        this.username = options.username; // Use S&S account number
        this.api_key = options.api_key; // Use S&S api key
    }

    static init(options) {
        options = options || {};
        this.username = options.username; // Use S&S account number
        this.api_key = options.api_key; // Use S&S api key
    }
}