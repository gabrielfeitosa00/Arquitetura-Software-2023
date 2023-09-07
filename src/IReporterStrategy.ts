export default interface IReportStrategy{
    ler(caminho:string):void
    parse():void
    reportar():any
}