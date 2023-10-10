import * as fs from 'node:fs';
 
export default class FileReader  {
readFile(path:string ): string {
    const buffer =  fs.readFileSync(path).toString()
    return buffer
}
}