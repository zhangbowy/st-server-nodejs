import {MidwayConfig} from '@midwayjs/core';
import { Console } from '../entity/console';
import {AppKey} from "../entity/appKey";
import {User} from "../entity/user";

export default {
    // use for cookie sign key, should change to your own and keep security
    keys: '1668416657483_2560',
    koa: {
        port: 7001,
    },

    httpProxy: {
        match: /\/api\//,
        host: 'http://daily-performance.sunmeta.top',
    },

    redis: {
        client: {
            port: 6379, // Redis port
            host: "127.0.0.1", // Redis host
            password: "",
            db: 0,
        },
    },

    socketIO: {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    },

    mongoose: {
        dataSource: {
            default: {
                uri: 'mongodb://127.0.0.1:27017/st',
                options: {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    user: '',
                    pass: ''
                },
                // 关联实体
                entities: [ Console, AppKey, User ]
            }
        }
    },

    dingTalk: {
        appKey: 'dingzhpule0quaxn8iak',
        appSecret: 'I6J6n7eg5Iq56kcR0r1CZ6KEAUR9V6zHVeN_Gzbd8VUGiUx3EeaFPgYjaZSS4ytz',
        redirect_uri: 'http://st.mawenqing.net/api/user/auth'
    }
} as MidwayConfig;
