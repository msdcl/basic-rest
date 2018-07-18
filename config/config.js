let appConfig = {};

appConfig.port = 3001;
appConfig.allowedCorsorigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb://127.0.0.1:27017/finalDB',
}
appConfig.appVersion = '/api/v1';

module.exports={

    port:appConfig.port,
    allowedCorsorigin : appConfig.allowedCorsorigin,
    environment : appConfig.env,
    db : appConfig.db,
    version : appConfig.appVersion
}// end module exports