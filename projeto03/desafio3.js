class heroi{
	constructor(nome, idade, tipo){
    	this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        
  console.log(`Heroi criado: \nNome: ${this.nome}\nIdade: ${this.idade}\nTipo: ${this.tipo}`)
    }
    
    atacar(){
    	let ataque;
        
        switch(this.tipo){
        	case "mago":
            ataque = "magia";
            break
            
            case "guerreiro":
            ataque = "espada"
            break
            
            case "monge":
            ataque = "artes marciais"
            break
            
            case "ninja":
            ataque = "shuriken"
            break
            
            default:
            ataque = "atacou"
        }
        
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`)
        console.log("\n")
    }
}


let heroi1 = new heroi("Aragorn",31,"guerreiro")
heroi1.atacar()

let heroi2 = new heroi("Gandalf",59,"mago")
heroi2.atacar()

let heroi3 = new heroi("Saitama",25,"monge")
heroi3.atacar()

let heroi4 = new heroi("Naruto",16,"ninja")
heroi4.atacar()

let heroi5 = new heroi("Robin Hood",26,"arqueiro")
heroi5.atacar()


