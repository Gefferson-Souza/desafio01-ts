import { DioAccount } from './DioAccount';

export class PartnerAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }
    
    bonusDeposit = (value:number):number => {
        let bonus:number = 10;
        value += bonus;
        this.deposit(value);
        return value;
    }
}