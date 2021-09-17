
export class Rot13 {
    static encrypt(text: string) {
        let res = '';
        text = text.toUpperCase();
        for(let i=0;i<text.length;i++) {
            res+=String.fromCharCode(65 + (text.charCodeAt(i) - 65 + 13)%26);
        }
        return res;
    }

    static decrypt(text: string) {
        let res = this.encrypt(text);
        return res;
    }
}