import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PartnerAccount } from './class/PartnerAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log('conta pf antes do deposito', peopleAccount.getBalance())
peopleAccount.deposit(100)
console.log('conta pf após o depósito', peopleAccount.getBalance())
peopleAccount.withdraw(35)
console.log('conta pf após o saque MENOR QUE O SALDO', peopleAccount.getBalance())
peopleAccount.withdraw(135)
console.log('conta pf após o saque MAIOR QUE O SALDO', peopleAccount.getBalance())


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log('Saldo conta PJ antes do depósito', companyAccount.getBalance())
companyAccount.deposit(100)
console.log('Saldo conta PJ após o depósito', companyAccount.getBalance())
companyAccount.withdraw(120)
console.log('Saldo conta PJ após o saque MAIOR QUE O SALDO', companyAccount.getBalance())
companyAccount.withdraw(10)
console.log('Saldo conta PJ após o saque MENOR QUE O SAlDO', companyAccount.getBalance())
companyAccount.getLoan(3000)
console.log('Saldo conta PJ após o empréstimo', companyAccount.getBalance())

companyAccount.withdraw(90);
console.log('Saldo conta PJ após o saque', companyAccount.getBalance())


companyAccount.deposit(150);
companyAccount.deposit(150);
companyAccount.deposit(150);
console.log('Saldo conta PJ após o 3 depósitos de 150', companyAccount.getBalance())

companyAccount.getLoan(300)
console.log('Saldo conta PJ após tentar fazer o empréstimo acima da cota', companyAccount.getBalance())


companyAccount.getLoan(150)
console.log('Saldo conta PJ após tentar fazer o empréstimo dentro da cota', companyAccount.getBalance())

console.log(companyAccount.getLoan(50))
console.log('Saldo conta PJ após tentar fazer 2 empréstimos consecutivos', companyAccount.getBalance())



const partnerAccount = new PartnerAccount('Parceirão', 1234123);
console.log('Saldo conta Parceiro após a criação da conta',partnerAccount.getBalance())

console.log('Saldo conta Parceiro após depósito de 100R$',partnerAccount.bonusDeposit(100))

console.log('Saldo conta Parceiro após saque de 120R$',partnerAccount.withdraw(120), 'SALDO ATUAL=',partnerAccount.getBalance());

console.log('Saldo conta Parceiro após saque de 110R$',partnerAccount.withdraw(110), ' SALDO ATUAL =',partnerAccount.getBalance());