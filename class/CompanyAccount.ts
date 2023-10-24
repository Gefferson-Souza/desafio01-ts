import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getDepositHistory = ():number[] => {
    this.deposit.historico
    return 
  }

  getLoan = (valorDoEmprestimo: number): number | Error => {
    if (this.getStatus()) {
      this.deposit(valorDoEmprestimo)
      return this.getBalance()
    } else {
      return Error('Conta inválida')
    }
  }
}
