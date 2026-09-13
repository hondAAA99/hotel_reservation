import { compareSync, hashSync } from 'bcrypt';
export function Globalhash({ plainText }) {
    return hashSync(plainText, 8);
}
export function GlobalCompare({ plainText, hashText, }) {
    return compareSync(plainText, hashText);
}
//# sourceMappingURL=hash.js.map