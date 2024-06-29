import StandartTranslation from "./translations/uk.json";
import CustomTranslation from "./translations/custom/uk.json";
import TableHeadersTranslation from "./translations/custom/uk-table-headers.json";
import CTBTranslation from "./extensions/content-type-builder/translations/uk.json";
import EmailTranslation from "./extensions/email/translations/uk.json";
import I18NTranslation from "./extensions/i18n/translations/uk.json";
import UploadTranslation from "./extensions/upload/translations/uk.json";
import UserPermissionsTranslation from "./extensions/users-permissions/translations/uk.json";
import SFVTranslation from "./extensions/phone-validator/translations/uk.json";
import {addPrefixToKeys} from "./addPrefixToKeys";


const CTB = addPrefixToKeys(CTBTranslation, "content-type-builder.")
const Email = addPrefixToKeys(EmailTranslation, "email.")
const I18N = addPrefixToKeys(I18NTranslation, "i18n.")
const Upload = addPrefixToKeys(UploadTranslation, "upload.")
const UserPermissions = addPrefixToKeys(UserPermissionsTranslation, "users-permissions.")
const SFV = addPrefixToKeys(SFVTranslation, "phone-validator.")

export default {
    config: {
        locales: [
            // 'ar',
            // 'fr',
            // 'cs',
            // 'de',
            // 'dk',
            // 'es',
            // 'he',
            // 'id',
            // 'it',
            // 'ja',
            // 'ko',
            // 'ms',
            // 'nl',
            // 'no',
            // 'pl',
            // 'pt-BR',
            // 'pt',
            // 'ru',
            // 'sk',
            // 'sv',
            // 'th',
            // 'tr',
            "uk",
            // 'vi',
            // 'zh-Hans',
            // 'zh',
        ],
        translations: {
            uk: {...StandartTranslation, ...CTB, ...SFV, ...SFVTranslation, ...Email, ...I18N, ...Upload, ...UserPermissions, ...CustomTranslation, ...TableHeadersTranslation,},
            en: require("./translations/custom/en.json"),
        },
    },
    bootstrap(app: any) {
        console.log(app);
    },
};
