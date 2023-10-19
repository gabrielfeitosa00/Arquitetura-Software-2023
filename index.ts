 
import FileReader from './src/FilReader';
import ReporterDirector from './src/builder/ReporterDirector';
import ReporterHTML1Builder from './src/builder/ReporterHTMLBuilder';
import ReporterTxtBuilder from './src/builder/ReporterTxtBuilder';
import BaseParser from './src/decorators/BaseParser';

const [out, input, format,filename] = process.argv;
console.log('here!!!!',filename);
// Classe de Leitor de arquivo
// Pode ser usado por qualquer  Builder

const fileReader = new FileReader()
const data = fileReader.readFile('./data/cidades-2.json')
 
// Parser base, apenas printa o resultado do Buffer
// Usado apenas para inicial o encadeamento de Decorators
const baseParser = new BaseParser(data)
 
// Builder para realizar o output no formato Txt
//Cada Builder recebe 3 parametros:
// * FileReader: Clase para realizar a leitura de arquivos
// * Parser: Se passa o parser base para inicial o endadeamento de decorators
// * Strategies: Um array de objetos com duas propriedades
//   path, o local do arquivo, e fileType, a extensão do arquivo.
//   Esse array é usuado para o Builder saber o local do arquivo
//   e qual decorator de parser encadear.

const reporterTxtBuilder = new ReporterTxtBuilder(fileReader
    ,baseParser,
    [{path:'./data/cidades-2.json',fileType:'JSON'},
   ])

// Builder para realizar o output no formato Html
const reporterHTMLBuilder = new ReporterHTML1Builder(fileReader
    ,baseParser,  [ 
    {path:'./data/cidades.html',fileType:'HTML'},])

// Classe diretor, recebe o builder e executa seus métodos
// de leitura e output
const reporterDirector = new ReporterDirector(reporterHTMLBuilder)

// Método para executar o builder e imprimir o output
reporterDirector.makeReporter()

// Mudança do builder para o formato Txt
reporterDirector.setBuilder(reporterTxtBuilder)
reporterDirector.makeReporter()

 
 