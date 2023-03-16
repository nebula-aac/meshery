import { getPath } from "lib/path";
import { atom } from "recoil";

export const pageAtom = atom({
    key: 'pageAtom',
    default: {
        path: getPath(),
        title: "",
        isBeta: false,
    }
})