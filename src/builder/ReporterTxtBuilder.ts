import FileReader from "../FilReader";
import CSVParserDecorator from "../decorators/CSVParserDecorator";
import IParser from "../decorators/IParser";
import JSONParserDecorator from "../decorators/JSONParserDecorator";
import XMLParserDecorator from "../decorators/XMLParser";
import YAMLParserDecorator from "../decorators/YAMLParserDecorator";
import IReporterBuilder from "./IReporterBuilder";
import IStrategyParams from "./IStrategyParams";

export default class ReporterTxtBuilder implements IReporterBuilder{
    private fileReader:FileReader
    private strategies: Array<IStrategyParams>
    private parser: IParser
constructor(fileReader: FileReader,parser: IParser,strategies: IStrategyParams[]){
    this.fileReader = fileReader
    this.parser =  parser
    this.strategies = strategies
}
    dataOutput(data: string[]): void {
        let result = `Relatório de Nomes de Cidades
    =============================`;
    
        for (const city of data) {
          result += '* ' + city + '\n';
        }
    
        console.log(result)
      
    }
    dataInput(): string[] {
        for(const strategy of this.strategies){
            const data = this.fileReader.readFile(strategy.path)
            switch(strategy.fileType){
                case  'JSON':
                    this.parser = new JSONParserDecorator(this.parser,data)
                    break;
                case 'CSV':
                    this.parser = new CSVParserDecorator(this.parser,data)
                    break;
                case 'YAML':
                    this.parser = new YAMLParserDecorator(this.parser,data)
                    break;
                case 'XML':
                    this.parser = new XMLParserDecorator(this.parser,data)
                    break;  
                default:
                    console.log(`Unsupported extension, the file at ${strategy.path} won't be read`)
            }
        }
        return this.parser.parseData()
    }
}