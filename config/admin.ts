export default ({env}) => ({
    apiToken: {
        salt: env("API_TOKEN_SALT", "someRandomLongString"),
    },
    auth: {
        secret: env("ADMIN_JWT_SECRET", "someSecretKey"),
        events: {
            onConnectionSuccess(e) {
                console.log(e.user, e.provider);
            },
            onConnectionError(e) {
                console.error(e.error, e.provider);
            },
        },
        options: {
            expiresIn: "30d",
        },
    },
    url: env("PUBLIC_ADMIN_URL", "/admin"),
    autoOpen: false,
    // watchIgnoreFiles: [
    //   './my-custom-folder', // Folder
    //   './scripts/someScript.sh', // File
    // ],
    serveAdminPanel: env.bool("SERVE_ADMIN", true),
    // forgotPassword: {
    //   from: env('FORGOT_PASS_FROM','no-reply@example.com'),
    //   replyTo: env('FORGOT_PASS_REPLY_TO','no-reply@example.com'),
    // },
    transfer: {
        token: {
            salt: env("TRANSFER_TOKEN_SALT", "anotherRandomLongString"),
        },
    },
    flags: {
        nps: env.bool("FLAG_NPS", false),
        promoteEE: env.bool("FLAG_PROMOTE_EE", false),
    },
});
