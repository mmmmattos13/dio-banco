
import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from './class/SpecialAccount';

const peopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(peopleAccount);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);

const companyAccount = new CompanyAccount('DIO', 20);
companyAccount.deposit(200);
companyAccount.getLoan(500);
console.log(companyAccount);

const specialAccount = new SpecialAccount('Special', 30);
specialAccount.deposit(100);
specialAccount.getBalance();
console.log(specialAccount);