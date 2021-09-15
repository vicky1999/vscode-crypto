
export class ShiftCipher {
    static encrypt = (text: string, amount: number): string => {
        let res = '';
        text = text.toUpperCase();
        for(let i=0;i<text.length;i++) {
            res+=String.fromCharCode(65+(text.charCodeAt(i) - 65 + amount)%26);
        }

        return res;  
    };

    static decrypt = (text: string, amount: number) => {
        let res = '';
        text = text.toUpperCase();
        let charCode = 0;
        for(let i=0;i<text.length;i++) {
            charCode = (text.charCodeAt(i) - 65 - amount%26);
            if(charCode < 0) {
                charCode+=26;
            }
            res+=String.fromCharCode(65+charCode%26);
        }
        return res;
    };
}
