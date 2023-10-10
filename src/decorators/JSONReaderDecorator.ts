 
 
import ParserDecorator from "./ParserDecorator";
export default class JSONReaderDecorator extends ParserDecorator{
   
 

   parseData(data: string): string[] {
    const parsedData = JSON.parse( super.parseData(data).join(''))
    return parsedData.map(item=>item['Nome'])
   }
}