import { atom } from "recoil";

export const pageAtom = atom({
    key: 'pageState',
    default: {
        path: "",
        title: "",
        isBeta: false,
    }
})