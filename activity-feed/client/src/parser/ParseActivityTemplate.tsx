import {
  ParsingToken,
  LinkToken,
  TextToken
} from "../interfaces/TemplateTokens";

export function parseActivityTemplate(template: string) {
  let tokens = [] as ParsingToken[];

  renderTemplate(template);
  function renderTemplate(template: string) {
    const pattern = /([^{]+)?{ (\w+):(\d+) }([^{]+)?/g;
    let matches;
    while ((matches = pattern.exec(template)) !== null) {

      if (matches[1]) {
        generateText(matches[1]);
      }

      generateLink(matches[2], matches[3]);

      if (matches[4]) {
        generateText(matches[4]);
      }
    }
  }

  function generateLink(type: string, id: string) {
    const linkToken: LinkToken = {
      kind: "link",
      type,
      id: parseInt(id)
    };
    tokens.push(linkToken);
  }

  function generateText(str: string) {
    const textToken: TextToken = {
      kind: "text",
      content: str
    };
    tokens.push(textToken);
  }
  return tokens;
}

export default parseActivityTemplate;
