import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log('conta pf antes do deposito', peopleAccount.getBalance())
peopleAccount.deposit(100)
console.log('conta pf após o depósito', peopleAccount.getBalance())
peopleAccount.withdraw(35)
console.log('conta pf após o saque MENOR QUE O SALDO', peopleAccount.getBalance())
peopleAccount.withdraw(135)
console.log('conta pf após o saque MAIOR QUE O SALDO', peopleAccount.getBalance())


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log('Conta PJ antes do depósito', companyAccount.getBalance())
companyAccount.deposit(100)
console.log('Conta PJ após o depósito', companyAccount.getBalance())
companyAccount.withdraw(120)
console.log('Conta PJ após o saque MAIOR QUE O SALDO', companyAccount.getBalance())
companyAccount.withdraw(10)
console.log('Conta PJ após o saque MENOR QUE O SAlDO', companyAccount.getBalance())
companyAccount.getLoan(150)
console.log('Conta PJ após o empréstimo', companyAccount.getBalance())