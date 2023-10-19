 
 
import { parse } from 'csv-parse/sync';
import ParserDecorator from "./ParserDecorator";
export default  class CSVParserDecorator extends ParserDecorator{
   


    parseData():  string[] {
    const previousData=super.parseData()
     
    const parsedNewData = parse(this.getData(),{delimiter:',',columns: true,
    skip_empty_lines: true}).map(item=>item['NOME'])
    console.log('Parsing CSV...')
    const parsedDataFinal = Array.from( new Set([...previousData,...parsedNewData]))
    return parsedDataFinal
   }
}