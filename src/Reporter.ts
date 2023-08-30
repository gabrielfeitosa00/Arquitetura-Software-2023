 
import * as fs from 'node:fs';
export default abstract class Reporter{
    public cidades:any = undefined;
    ler (caminho:string) {
        this.cidades = fs.readFileSync(caminho);
      }
    
      parse () {
        this.cidades = JSON.parse(this.cidades);
      }

      abstract reportar():any;
}