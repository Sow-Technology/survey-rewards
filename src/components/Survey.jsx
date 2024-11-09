import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Survey({ questionSet, onNext, progress }) {
  const [answers, setAnswers] = useState({});
  console.log(answers);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(answers);
    setAnswers({});
  };

  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const renderQuestionInput = (question) => {
    switch (question.type) {
      case "short":
        return (
          <Input
            type="text"
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            placeholder="Your answer"
            required
          />
        );
      case "long":
        return (
          <Textarea
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            placeholder="Your answer"
            required
          />
        );
      case "mcq":
        return (
          <RadioGroup
            onValueChange={(value) => handleAnswerChange(question.id, value)}
            required
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option}
                  id={`q${question.id}-option-${index}`}
                />
                <Label htmlFor={`q${question.id}-option-${index}`}>
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">
        Survey Questions
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-5">
          {questionSet.map((question) => (
            <Card key={question.id}>
              <CardHeader>
                <CardTitle>{question.question}</CardTitle>
              </CardHeader>
              <CardContent>{renderQuestionInput(question)}</CardContent>
            </Card>
          ))}
        </div>
        <Button type="submit">Next</Button>
      </form>
      <div className="mt-4 bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
