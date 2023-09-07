 
import * as fs from 'node:fs';
import IReportStrategy from './IReporterStrategy';
export default abstract class Reporter implements IReportStrategy{
    public cidades:any = undefined;
    ler (caminho:string) {
        this.cidades = fs.readFileSync(caminho);
      }
    
      parse () {
        this.cidades = JSON.parse(this.cidades);
      }

      abstract reportar():any;
}