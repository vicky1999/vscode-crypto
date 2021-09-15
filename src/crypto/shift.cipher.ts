
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
        for(let i=0;i<text.length;i++) {
            res+=String.fromCharCode(65+(text.charCodeAt(i) - 65 - amount)%26);
        }
        return res;
    };
}
