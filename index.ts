import ReporterHTML from './src/FormatterHTML';
import ReporterTxt from './src/FormatterTxt';
import Reporter from './src/Reporter';

const [cmd, filename, format] = process.argv;
console.log(format);

if (format === 'html') {
  let reporter = new Reporter(new ReporterHTML());
 
  let html = reporter.executeReporter('./data/cidades-2.json');
  console.log(html);
} else if (format === 'txt') {
  let reporter = new Reporter(new ReporterTxt());
  let txt = reporter.executeReporter('./data/cidades-2.json');
  console.log(txt);
} else {
  console.log('Formato inválido!')
}