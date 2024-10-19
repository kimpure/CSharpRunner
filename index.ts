import * as edge from 'edge-js';
import * as fs from 'fs';
import * as yaml from 'js-yaml'

const config = yaml.load(fs.readFileSync('config.yml', 'utf8')) as {
    runStartBaseCode: string,
    runEndBaseCode: string,
};

const runCSharp = (codeBase: string): Promise<string> | string => {
    try {
        const result = edge.func(
            config.runStartBaseCode + 
            codeBase + 
            config.runEndBaseCode);
    
        return new Promise((resolve, reject) => {
            result(null, (error: any, result: any) => {
                if (error) {
                    reject(error as string);
                } else {
                    resolve(result as string);
                }
            });
        });
    } catch (err) {
        return err as string
    }
}

export { runCSharp }

