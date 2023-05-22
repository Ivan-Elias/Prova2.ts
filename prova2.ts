abstract class Veiculo {
    protected _velocidade: number;
  
    constructor(velocidade: number) {
      this._velocidade = velocidade;
    }
  
    protected notificarInfracao(): void {
      console.log("Você cometeu uma infração de velocidade!");
    }
  
    public abstract verificarVelocidade(): void;
  
    public visualizarVelocidade(): void {
      console.log(`Velocidade atual: ${this._velocidade} km/h`);
    }
  
    public get velocidade(): number {
      return this._velocidade;
    }
  
    public set velocidade(velocidade: number) {
      this._velocidade = velocidade;
    }
  }
  
  class Carro extends Veiculo {
    public verificarVelocidade(): void {
      const limiteVelocidade = 100;
      const tolerancia = limiteVelocidade * 0.05;
  
      if (this.velocidade > limiteVelocidade + tolerancia) {
        this.notificarInfracao();
      } else {
        console.log("Velocidade dentro dos limites permitidos.");
      }
    }
  }
  
  class Moto extends Veiculo {
    public verificarVelocidade(): void {
      const limiteVelocidade = 100;
      const tolerancia = limiteVelocidade * 0.05;
  
      if (this.velocidade > limiteVelocidade + tolerancia) {
        this.notificarInfracao();
      } else {
        console.log("Velocidade dentro dos limites permitidos.");
      }
    }
  }
  
  class Caminhao extends Veiculo {
    public verificarVelocidade(): void {
      const limiteVelocidade = 80;
      const tolerancia = limiteVelocidade * 0.05;
  
      if (this.velocidade > limiteVelocidade + tolerancia) {
        this.notificarInfracao();
      } else {
        console.log("Velocidade dentro dos limites permitidos.");
      }
    }
  }
  
  const carro = new Carro(110);
  carro.visualizarVelocidade();
  carro.verificarVelocidade();
  
  const moto = new Moto(90);
  moto.visualizarVelocidade();
  moto.verificarVelocidade();
  
  const caminhao = new Caminhao(85);
  caminhao.visualizarVelocidade();
  caminhao.verificarVelocidade();
  
