import { CSSProperties } from "react";
declare type CSSSuggestionType = CSSProperties;
declare type _st = (CSSSuggestionType | {
    [key: string]: CSSSuggestionType;
}) | {
    [key: string]: _st;
};
declare const EfStyleSheet: {
    create: <T extends Record<string, _st>>(s: T) => T;
};
export default EfStyleSheet;
