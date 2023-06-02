import { CompanyAccount } from './class/CompanyAccount'
import { InvestimentAccount } from './class/InvestimentAccount'
import { PeopleAccount } from './class/PeopleAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)

console.log('cliente:' + peopleAccount.getName())
peopleAccount.deposit(200)
peopleAccount.withdraw(10)
console.log('saldo atual:' + peopleAccount.getBalance() + '\n')

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

console.log('empresa:' + companyAccount.getName())
companyAccount.deposit(200)
companyAccount.withdraw(10)
console.log('saldo atual:' + companyAccount.getBalance() +'\n')

const investimentAccount: InvestimentAccount = new InvestimentAccount('DIO', 20)

console.log('cliente:' + investimentAccount.getName())
investimentAccount.depositPlus(100)
investimentAccount.withdraw(10)
investimentAccount.deposit(200)

let currentBalance = investimentAccount.getBalance()
console.log('saldo atual:' + currentBalance)