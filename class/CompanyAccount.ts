import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (valorDoEmprestimo: number): number | Error => {
    if (this.getStatus()) {
      const depositHistory: number[] = this.getDepositHistory();
      if (depositHistory.length <= 3) {
        let sumHistory: number = depositHistory.reduce((sum, deposit) => sum + deposit, 0)
        let loanValue:number = sumHistory / depositHistory.length ;
        if (loanValue >= valorDoEmprestimo) {
          this.deposit(valorDoEmprestimo);
          this.clearDepositHistory();
          return valorDoEmprestimo
        } else {
          return new Error('Empréstimo não foi liberado, faça depósitos maiores ou tente um saldo menor')
        }
      }
    }
    return new Error('Conta inválida')
  }
}
