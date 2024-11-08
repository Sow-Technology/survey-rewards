import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Survey({ question, onNext, progress }) {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
    setAnswer("");
  };

  const renderQuestionInput = () => {
    switch (question.type) {
      case "short":
        return (
          <Input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Your answer"
            required
          />
        );
      case "long":
        return (
          <Textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Your answer"
            required
          />
        );
      case "mcq":
        return (
          <RadioGroup onValueChange={setAnswer} required>
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
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
        {question.question}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {renderQuestionInput()}
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
