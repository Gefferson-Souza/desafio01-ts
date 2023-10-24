export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): string => {
    this.name = name
    return 'Nome alterado com sucesso!'
  }

  getName = (): string => {
    return this.name
  }

  getStatus = (): boolean => this.status;

  deposit = (value: number): number | void => {
    const historico:number[] = [];
    if (this.validateStatus()) {
      this.balance += value;
      const salvaHistorico = ():void => {
        if(historico.length < 3){
          historico.push(value);
        }else {
          historico.shift()
          historico.push(value);
        }
      }
      salvaHistorico();
      return this.balance
    }
  }

  withdraw = (valor:number): number | void => {
    if(this.validateStatus()){
      if(this.getBalance() >= valor){
        this.balance -= valor;
        return valor
      }
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  private validateStatus = (): boolean | Error => {
    if (this.getStatus()) {
      return this.status
    }

    return new Error('Conta inválida')
  }
}
