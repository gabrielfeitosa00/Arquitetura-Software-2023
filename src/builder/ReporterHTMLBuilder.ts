import FileReader from "../FilReader";
import CSVParserDecorator from "../decorators/CSVParserDecorator";
import HTMLParserDecorator from "../decorators/HTMLParserDecorator";
import IParser from "../decorators/IParser";
import JSONParserDecorator from "../decorators/JSONParserDecorator";
import XMLParserDecorator from "../decorators/XMLParser";
import YAMLParserDecorator from "../decorators/YAMLParserDecorator";
import IReporterBuilder from "./IReporterBuilder";
import IStrategyParams from "./IStrategyParams";

export default class ReporterHTML1Builder implements IReporterBuilder{
    private fileReader:FileReader
    private strategies: Array<IStrategyParams>
    private parser: IParser
constructor(fileReader: FileReader,parser: IParser,strategies: IStrategyParams[]){
    this.fileReader = fileReader
    this.parser =  parser
    this.strategies = strategies
}
    dataOutput(data: string[]): void {
        let result = `
        <!DOCTYPE HTML>
        <html>
          <head>
            <meta http-equiv="content-type" content="text/html; charset=utf-8" />
            <title>Relatório de Nomes de Cidades</title>
          </head>
          <body>
            <h1>Relatório de Nomes de Cidades</h1>
            <ul>
        `;
      
          for (let i = 0; i < data.length; i++) {
            result += '     <li>' + data[i] + '</li>\n';
          }
      
          result += `
            </ul>
          </body>
        </html>`;
    
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
                case 'HTML':
                    this.parser = new HTMLParserDecorator(this.parser,data)
                    break;  
                default:
                    console.log(`Unsupported extension, the file at ${strategy.path} won't be read`)
            }
        }
        return this.parser.parseData()
    }
}