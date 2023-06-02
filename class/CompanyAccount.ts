import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    
    if(this.getStatus()) {
      console.log('Emprestimo aprovado')
      this.deposit(value)
    }
  }
}
