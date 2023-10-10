 
 
import { parse } from 'csv-parse/sync';
import ParserDecorator from "./ParserDecorator";
export default  class CSVReaderDecorator extends ParserDecorator{
   
 

    parseData(data: string):  string[] {
 
    const parsedData = parse(super.parseData(data).join(''),{delimiter:',',columns: true,
    skip_empty_lines: true})

    return parsedData.map(item=>item['NOME'])
   }
}