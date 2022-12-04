class Client {
    private name: string;
    private quant: number;

    public constructor(name: string, quant: number){
        this.name = name;
        this.quant = quant;
    }

    public getName(): string{
        return this.name
    }

    public setName(name: string): void{
        this.name = name
    }

    public getQuant(): number{
        return this.quant;
    }

    public setQuant(quant: number): void{
        this.quant = quant
    }
  }

  export default Client