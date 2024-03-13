export class LoginModel {
    public codigo: Number;
    public nome: String;
    public email: String;
    public senha : String ;
    public documento: Number;
    public telefone: String;

    public constructor(){
        this.codigo =0;
        this.nome="";
        this.email="";
        this.senha="";
        this.documento=0;
        this.telefone="";    
    }
}
