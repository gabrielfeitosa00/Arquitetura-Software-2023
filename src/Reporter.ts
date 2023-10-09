 
import * as fs from 'node:fs';
import IFormatterStrategy from './IFormatterStrategy';
export default class Reporter{
    public cidades:any = undefined;
    private reporterStrategy: IFormatterStrategy;

    constructor(strategy: IFormatterStrategy) {
        this.reporterStrategy = strategy;
    }
     private ler (caminho:string) {
        this.cidades = fs.readFileSync(caminho).toString().split('');
      }
    
      private parse () {
        this.cidades = JSON.parse(this.cidades);
      }
      public executeReporter(caminho:string){
        this.ler(caminho)
        this.parse()
       return this.reporterStrategy.reportar(this.cidades)
    }

     
}