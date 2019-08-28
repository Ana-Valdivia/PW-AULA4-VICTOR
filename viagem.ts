class Viagem{

    constructor(public tempogasto:number, public velomedia:number, public rendimento:number){}
    
    distancia():number{
            return (this.tempogasto * this.velomedia)

    }

    consumo():number{

        return (this.distancia() / this.rendimento)
    }

    }
