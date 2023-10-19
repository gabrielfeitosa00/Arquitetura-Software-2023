import IParser from "./IParser";
export default class BaseParser implements IParser{
  private data:string
  constructor(data:string){
    this.data = data
  }
  // Parser base para iniciar o encadeamento
  // Não Retorna nada para não interferir nos outros parsers
  parseData():  string[]  {
   console.log('Base parsing...',this.data.trim()) 
    return []
}
}