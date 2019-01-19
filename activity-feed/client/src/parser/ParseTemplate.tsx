import {
    ParsingToken,
    LinkToken,
    TextToken,
} from '../interfaces/TemplateTokens';

export function parseTemplate(template : string) {
    let tokens = [] as ParsingToken[];

        renderTemplate(template);


    function renderTemplate(template: string) {
        const pattern = /{ (\w+):(\d+) }([^{]+)?/g;
        let matches;
        while((matches = pattern.exec(template)) !== null) {
            generateLink(matches[1], matches[2]);
            if (matches[3]) { generateText(matches[3]); }
        }
    }

    function generateLink(type:string, id: string) {
      const linkToken : LinkToken = {
          kind: 'link',
          type,
          id: parseInt(id)
      }
      tokens.push(linkToken);
    }

    function generateText(str:string) {
        const textToken : TextToken = {
            kind: 'text',
            content: str
        };
        tokens.push(textToken);
    }

    return tokens;
}

export default parseTemplate;

