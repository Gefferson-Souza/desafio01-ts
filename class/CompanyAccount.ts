import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (valorDoEmprestimo: number): number | Error => {
    if (this.getStatus()) {
      const depositHistory: number[] = this.getDepositHistory();
      if (depositHistory.length <= 3) {
        const loanValue = depositHistory.reduce((sum, deposit) => sum + deposit, 0)
        if(loanValue >= valorDoEmprestimo){
          this.deposit(valorDoEmprestimo);
          return valorDoEmprestimo
        }else{
          return new Error('Empréstimo não foi liberado, tentar valor menor')
        }
      }
    }
    return new Error('Conta inválida')
  }
}
