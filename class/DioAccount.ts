export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getStatus = (): Boolean => {
    return this.validateStatus()
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log('Um depósito de '+ value +' foi realizado')
    }
  }

  withdraw = (value: number): void => {
    if(this.validateBalance(value) && this.validateStatus()) {

      console.log('Voce sacou ' + value)
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  private validateBalance = (value: number): boolean => {
    if (this.balance >= value) {
      return true
    }

    throw new Error('Conta sem saldo')
  }
}
