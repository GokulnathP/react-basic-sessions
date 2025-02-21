import i18next from "i18next";
import {initReactI18next} from "react-i18next";

i18next.use(initReactI18next).init({
    resources: {
        en: {
            user: {
                greet: "Hello",
                errors: {
                    "username": "Please enter valid username",
                    "email": "Please enter valid email id",
                    "password": "Please enter valid password"
                }
            }
        },
        sp: {
            user: {
                greet: "Hola"
            }
        }
    },
    lng: "en"
});
