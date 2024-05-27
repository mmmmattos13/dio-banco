export abstract class DioAccount {
    private name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;
  
    constructor(name: string, accountNumber: number) {
      this.name = name;
      this.accountNumber = accountNumber;
    }
  
    getName = (): string => {
      return this.name;
    }
  
    getAccountNumber = (): number => {
      return this.accountNumber;
    }
  
    deposit = (amount: number): void => {
      if (this.validateStatus()) {
        this.balance += amount;
        console.log(`Você depositou ${amount}. Saldo atual: ${this.balance}`);
      }
    }
  
    withdraw = (amount: number): void => {
      if (this.validateStatus() && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Você sacou ${amount}. Saldo atual: ${this.balance}`);
      } else {
        console.log('Saque não permitido. Saldo insuficiente ou conta inválida.');
      }
    }
  
    getBalance = (): void => {
      console.log(this.balance);
    }
  
    validateStatus = (): boolean => {
      if (this.status) {
        return true;
      }
      throw new Error('Conta inválida');
    }
  }