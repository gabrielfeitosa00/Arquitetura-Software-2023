import IFormatterStrategy from "./IFormatterStrategy";

export default class FormatterTxt implements IFormatterStrategy{
    reportar(cidades) {
        let result = `Relatório de Nomes de Cidades
    =============================`;
    
        for (let i = 0; i < cidades.length; i++) {
          result += '* ' + cidades[i]['Nome'] + '\n';
        }
    
        return result;
      }
}