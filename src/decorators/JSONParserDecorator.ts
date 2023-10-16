 
 
import ParserDecorator from "./ParserDecorator";
export default class JSONParserDecorator extends ParserDecorator{
   
 

   parseData(): string[] {
    const previousData=super.parseData()
    const parsedNewData = JSON.parse( this.getData()).map(item=>item['Nome'])
    console.log('Parsing JSON...')
    const parsedDataFinal = Array.from( new Set([...previousData,...parsedNewData]))
    return parsedDataFinal
   }
}