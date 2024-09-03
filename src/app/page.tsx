import { Body, H1 } from "./design-system/formatting";
import Qa from "./faq/page";

type QAprops = {
  initialIndex: number;
};

const dataQA = [
  {
    question: "What is the difference between a 'for' loop and a 'while' loop?",
    answer:
      "A 'for' loop is typically used when you know the number of iterations ahead of time. A 'while' loop is better when the number of iterations is unknown and depends on a condition.",
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that remembers its lexical scope even when the function is executed outside that scope.",
  },
  {
    question: "What is the use of the 'useState' hook in React?",
    answer:
      "'useState' is a hook in React that allows you to add state to functional components.",
  },
  {
    question: "What is the difference between a 'for' loop and a 'while' loop?",
    answer:
      "A 'for' loop is typically used when you know the number of iterations ahead of time. A 'while' loop is better when the number of iterations is unknown and depends on a condition.",
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that remembers its lexical scope even when the function is executed outside that scope.",
  },
];

export default function FAQ ({ initialIndex }: Readonly<QAprops>) {
  return (
    <Body>
      <H1>FAQ</H1>
      {dataQA.map((data, i) => (
        <div key={initialIndex + i}>
          <Qa question={data.question} answer={data.answer} />
        </div>
      ))}
    </Body>
  );
}
