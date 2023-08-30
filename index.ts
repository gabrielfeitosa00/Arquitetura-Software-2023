import ReporterHTML from './src/ReporterHTML';
import ReporterTxt from './src/ReporterTxt';

const [cmd, filename, format] = process.argv;
console.log(format);

if (format === 'html') {
  let reporter = new ReporterHTML();
  reporter.ler('./data/cidades-2.json');
  reporter.parse();
  let html = reporter.reportar();
  console.log(html);
}
if (format === 'txt') {
  let reporter = new ReporterTxt();
  reporter.ler('./data/cidades-2.json');
  reporter.parse();
  let html = reporter.reportar();
  console.log(html);
}