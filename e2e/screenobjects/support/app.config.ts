import fs from 'fs';
import { join } from 'path'

interface UsersYape {
    username: string;
    password: string;
    phone: string;
    idc: string;
}

interface RedisConfig {
    host: string;
    password: string;
    port: number;
    ssl: boolean;
}

interface ApiPersonality {
    host: string;
    endPointPersonality: string;
}

interface AppPaths {
    pathApk: string;
    pathIpa: string;
}

interface EnvironmentConfig {
    usersYape: UsersYape[];
    redis: RedisConfig[];
    apisPersonality: ApiPersonality[];
    app: AppPaths[];
}

interface ConfigFile {
    [key: string]: EnvironmentConfig;
}

class AppConfig {
    private config: ConfigFile;
    private env: string;

    constructor(env: string) {
        this.config = JSON.parse(fs.readFileSync(join(process.cwd(), 'e2e/data/appConfig.json'), 'utf-8'));
        this.env = env;

        if (!this.config[env]) {
            throw new Error(`Environment ${env} not found in config file`);
        }
    }

    getUsersYape(): UsersYape[] {
        return this.config[this.env].usersYape;
    }

    getRedisConfig(): RedisConfig[] {
        return this.config[this.env].redis;
    }

    getApisPersonality(): ApiPersonality[] {
        return this.config[this.env].apisPersonality;
    }

    getAppPaths(): AppPaths[] {
        return this.config[this.env].app;
    }
}

export default AppConfig;