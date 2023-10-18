 
 import { parse } from "yaml";
import ParserDecorator from "./ParserDecorator";
export default class YAMLParserDecorator extends ParserDecorator{
   
 

   parseData(): string[] {
    const previousData=super.parseData()
    const parsedNewData = (parse(this.getData()) ).cities.map(item=>item.name) 
    
    console.log('Parsing YAML..')
    const parsedDataFinal = Array.from( new Set([...previousData,...parsedNewData]))
    return parsedDataFinal
   }
}