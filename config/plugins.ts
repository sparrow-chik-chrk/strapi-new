import {Config as ImageOptimizerConfig} from "strapi-plugin-image-optimizer/dist/server/models/config";

export default ({env}) => ({
    // upload: {
    //   config: {
    //     provider: 'strapi-provider-cloudflare-r2',
    //     providerOptions: {
    //       accessKeyId: env('CF_ACCESS_KEY_ID'),
    //       secretAccessKey: env('CF_ACCESS_SECRET'),
    //       /**
    //        * `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`
    //        */
    //       endpoint: env('CF_ENDPOINT'),
    //       params: {
    //         Bucket: env('CF_BUCKET'),
    //       },
    //       /**
    //        * Set this Option to store the CDN URL of your files and not the R2 endpoint URL in your DB.
    //        * Can be used in Cloudflare R2 with Domain-Access or Public URL: https://pub-<YOUR_PULIC_BUCKET_ID>.r2.dev
    //        * This option is required to upload files larger than 5MB, and is highly recommended to be set.
    //        * Check the cloudflare docs for the setup: https://developers.cloudflare.com/r2/data-access/public-buckets/#enable-public-access-for-your-bucket
    //        */
    //       cloudflarePublicAccessUrl: env('CF_PUBLIC_ACCESS_URL'),
    //     },
    //     actionOptions: {
    //       upload: {},
    //       uploadStream: {},
    //       delete: {},
    //     },
    //   },
    // },
    "image-optimizer": {
        enabled: true,
        config: {
            include: ["jpeg", "jpg", "png"],
            exclude: ["gif"],
            formats: ["original", "webp", "avif"],
            sizes: [
                {
                    name: "small",
                    width: 500,
                    withoutEnlargement: true,
                },
                {
                    name: "medium",
                    width: 750,
                    withoutEnlargement: true,
                },
                {
                    name: "large",
                    width: 1280,
                    withoutEnlargement: true,
                },
                {
                    name: "full",
                    width: 1920,
                    withoutEnlargement: true,
                }
            ],
            quality: 90,
        } satisfies ImageOptimizerConfig,
    },
    "users-permissions": {
        enabled: false,
    },
    "strapi-content-type-explorer": {
        enabled: true,
        resolve: "./src/plugins/strapi-content-type-explorer",
    },
    "cloud": {
        enabled: false,
    },
    "email": {
        config: {
            provider: "nodemailer",
            providerOptions: {
                host: "maildev",
                port: 1025,
                ignoreTLS: true,
            },
            settings: {
                defaultFrom: env("DEFAULT_FROM", "studnikovs@strapi.io"),
                defaultReplyTo: env("DEFAULT_REPLY_TO", "studnikovs@strapi.io")
            }
             // provider: "mailgun",
        // providerOptions: {
        //     apiKey: env("MAILGUN_API_KEY"),
        //     domain: env("MAILGUN_DOMAIN"),
        //     url: env("MAILGUN_URL", "https://api.mailgun.net"), // Optional. For European domains use 'https://api.eu.mailgun.net'
        // },
        //
        }

    }
});
