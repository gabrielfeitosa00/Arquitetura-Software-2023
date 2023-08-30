import Reporter from "./Reporter";

export default class ReporterTxt extends Reporter{
    reportar() {
        let result = `Relatório de Nomes de Cidades
    =============================`;
    
        for (let i = 0; i < this.cidades.length; i++) {
          result += '* ' + this.cidades[i]['Nome'] + '\n';
        }
    
        return result;
      }
}