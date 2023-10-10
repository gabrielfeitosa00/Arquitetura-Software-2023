 
import * as fs from 'node:fs';
import IFormatterStrategy from './IFormatterStrategy';
export default class CitiesReporter{
    public cidades: string = '';
    private cidadesJson:Array<any>=[];
    private reporterStrategy: IFormatterStrategy;

    constructor(strategy: IFormatterStrategy) {
        this.reporterStrategy = strategy;
    }
     private ler (caminho:string) {
        this.cidades = fs.readFileSync(caminho).toString();
      }
    
      private parse () {
        this.cidadesJson = JSON.parse(this.cidades);
      }
      public executeReporter(caminho:string){
        this.ler(caminho)
        this.parse()
       return this.reporterStrategy.reportar(this.cidadesJson)
    }

     
}