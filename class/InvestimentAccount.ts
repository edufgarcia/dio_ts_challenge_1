import { DioAccount } from "./DioAccount"

export class InvestimentAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  depositPlus = (value: number): void => {
    
    if(this.getStatus()) {
      console.log('Deposito plus realizado')
      this.deposit(value + 10)
    }
  }
}
