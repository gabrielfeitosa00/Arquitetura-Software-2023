 
import { parse } from 'node-html-parser';
import ParserDecorator from "./ParserDecorator";
 export default class HTMLParserDecorator extends ParserDecorator{
    
  
 
    parseData(): string[] {
     const previousData=super.parseData()
     const parsedNewData = (parse(this.getData()) ).querySelectorAll('tbody  tr ').map(item=>item.childNodes[3].text)
     
     console.log('Parsing HTML...')
     const parsedDataFinal = Array.from( new Set([...previousData,...parsedNewData ]))
     return parsedDataFinal
    }
 }