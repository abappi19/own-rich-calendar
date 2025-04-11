
import { CSSProperties } from "react";

type CSSSuggestionType = CSSProperties;
    
    
    
    
    
    
    

/* TODO:
    don't forget to follow me on:

    github: https://github.com/hbappi
    github: https://github.com/efortshub

    facebook: https://facebook.com/h.bappi.hp
    facebook: https://facebook.com/efortshub

    linkedIn: https://www.linkedin.com/in/hbappi
    LinkedIn: https://www.linkedin.com/company/efortshub
    
    instagram: https://www.instagram.com/efortshub
    youtube: https://www.youtube.com/channel/@eFortsHub

*/
type _st =
  | (
      | CSSSuggestionType
      | {
          [key: string]: CSSSuggestionType;
        }
    )
  | {
      [key: string]: _st;
    };
const createStyles = <T extends Record<string, _st>>(s: T): T => s;

const EfStyleSheet = {
  create: createStyles,
};

export default EfStyleSheet;
    
    
    
    
    
    
    /* TODO:
    don't forget to follow me on:

    github: https://github.com/hbappi
    github: https://github.com/efortshub

    facebook: https://facebook.com/h.bappi.hp
    facebook: https://facebook.com/efortshub

    linkedIn: https://www.linkedin.com/in/hbappi
    LinkedIn: https://www.linkedin.com/company/efortshub
    
    instagram: https://www.instagram.com/efortshub
    youtube: https://www.youtube.com/channel/@eFortsHub

*/