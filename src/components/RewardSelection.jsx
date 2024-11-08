import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RewardSelection({ options, onSelect }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">
        Choose Your Reward
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option) => (
          <Card
            key={option.id}
            className="cursor-pointer hover:shadow-md transition-shadow"
          >
            <CardHeader>
              <CardTitle>{option.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-600 font-bold">{option.value}</p>
              <Button className="mt-4" onClick={() => onSelect(option)}>
                Select
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
