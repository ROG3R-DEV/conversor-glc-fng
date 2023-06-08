import { log } from 'console';

type Rule = {
  head: string;
  body: string[];
};

function convertToChomsky(glc: Rule[]): Rule[] {
  const fnc: Rule[] = [];
  let newVariableIndex = 1;

  for (const rule of glc) {
    if (rule.body.length === 1) {
      fnc.push(rule);
    } else if (rule.body.length === 2) {
      fnc.push({
        head: rule.head,
        body: rule.body,
      });
    } else {
      let currentHead = rule.head;

      for (let i = 0; i < rule.body.length - 2; i++) {
        const newVar = `N${newVariableIndex++}`;
        fnc.push({
          head: currentHead,
          body: [rule.body[i], newVar],
        });
        currentHead = newVar;
      }

      fnc.push({
        head: currentHead,
        body: rule.body.slice(-2),
      });
    }
  }

  return fnc;
}

const glc: Rule[] = [
  { head: 'S', body: ['A', 'B', 'a'] },
  { head: 'S', body: ['A', 'b', 'A'] },
  { head: 'A', body: ['A', 'a'] },
  { head: 'A', body: ['λ'] },
  { head: 'B', body: ['B', 'b'] },
  { head: 'B', body: ['B', 'C'] },
  { head: 'C', body: ['C', 'B'] },
  { head: 'C', body: ['C', 'A'] },
  { head: 'C', body: ['b', 'B'] },
];

log(convertToChomsky(glc));
