import ReporterContext from './src/ReporterContext';
import ReporterHTML from './src/ReporterHTML';
import ReporterTxt from './src/ReporterTxt';

const [cmd, filename, format] = process.argv;
console.log(format);

if (format === 'html') {
  let reporter = new ReporterContext(new ReporterHTML());
 
  let html = reporter.executeReporter('./data/cidades-2.json');
  console.log(html);
} else if (format === 'txt') {
  let reporter = new ReporterContext(new ReporterTxt());
  let txt = reporter.executeReporter('./data/cidades-2.json');
  console.log(txt);
} else {
  console.log('Formato inválido!')
}