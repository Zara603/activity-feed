import parseActivityTemplate from "../ParseActivityTemplate";

describe("ParseActivityTemplate", () => {
  describe("Parse Templates", () => {
    it("If template is text only parses to empty token as it is invalid pattern", () => {
      const template = "posted a task";
      const token = parseActivityTemplate(template);
      expect(token).toEqual([]);
      expect(token).toHaveLength(0);
    });

    it("If template is link and text it seperates to a LinkToken and TextToken and two parts", () => {
      const template = "{ profiles:2663 } signed up";
      const token = parseActivityTemplate(template);
      expect(token).toEqual([
        { kind: "link", type: "profiles", id: 2663 },
        { kind: "text", content: " signed up" }
      ]);
      expect(token).toHaveLength(2);
    });

    it("If templates has two profile ids and some text and task it seperates to five parts", () => {
      const template =
        "{ profiles:37 } assigned { task:6333 } to { profiles:1501 }";
      const token = parseActivityTemplate(template);
      expect(token).toEqual([
        { kind: "link", type: "profiles", id: 37 },
        { kind: "text", content: " assigned " },
        { kind: "link", type: "task", id: 6333 },
        { kind: "text", content: " to " },
        { kind: "link", type: "profiles", id: 1501 }
      ]);
      expect(token).toHaveLength(5);
    });

    it("If templates has a profile, an event and a task it seprates to three parts", () => {
      const template = "{ profiles:1501 } bid on { task:6333 }";
      const token = parseActivityTemplate(template);
      expect(token).toEqual([
        { kind: "link", type: "profiles", id: 1501 },
        { kind: "text", content: " bid on " },
        { kind: "link", type: "task", id: 6333 }
      ]);
      expect(token).toHaveLength(3);
    });
  });
});
