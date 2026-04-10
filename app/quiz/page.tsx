import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import QuizForm from "@/components/quiz/QuizForm";

export const metadata: Metadata = {
  title: "Skin Profile Quiz — Glowra",
  description:
    "Answer 5 quick questions about your skin and get personalised makeup look recommendations.",
};

export default function QuizPage() {
  return (
    <>
      <Header />
      <QuizForm />
    </>
  );
}
