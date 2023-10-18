 
 import parse from "xml-parser";
import ParserDecorator from "./ParserDecorator";
 export default class XMLParserDecorator extends ParserDecorator{
    
  
 
    parseData(): string[] {
     const previousData=super.parseData()
     // Parsea os dados do XML e filtra fora resultados undefined 
 
     const parsedNewData = (parse(this.getData()) ).root.children
          .filter(item=>item.children[1].content!==undefined)
          .map(item=>String(item.children[1].content))
     
     console.log('Parsing XML..')
     const parsedDataFinal = Array.from( new Set([...previousData, ...parsedNewData ]))
     return parsedDataFinal
    }
 }