export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true
  private depositHistory: number[] = [];

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
    if (this.validateStatus()) {
      this.balance += value;
      this.setDepositHistory(value);
      return this.balance
    }
  }

  setDepositHistory = (value: number): void => {
    this.depositHistory.push(value);
    if (this.depositHistory.length > 3) {
      this.depositHistory.shift();
    }
  }

  getDepositHistory = (): number[] => this.depositHistory;



  withdraw = (valor: number): number | void => {
    if (this.validateStatus()) {
      if (this.getBalance() >= valor) {
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
