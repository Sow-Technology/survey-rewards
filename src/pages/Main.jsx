import { useState } from "react";
import { surveyQuestions, rewardOptions } from "@/lib/data";
import Survey from "../components/Survey";
import RewardSelection from "../components/RewardSelection";
import UserInfoForm from "../components/UserInfoForm";
import SuccessMessage from "../components/SuccessMessage";

export default function Main() {
  const [currentSet, setCurrentSet] = useState(0);
  const [showReward, setShowReward] = useState(true);
  const [selectedReward, setSelectedReward] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [answers, setAnswers] = useState({});

  const handleNextSet = (ans) => {
    setAnswers((prev) => ({ ...prev, ...ans }));
    if (currentSet < surveyQuestions.length - 1) {
      setCurrentSet(currentSet + 1);
    } else {
      setShowReward(true);
    }
  };

  const handleRewardSelection = (reward) => {
    setSelectedReward(reward);
    setShowUserForm(true);
  };
  console.log(answers);

  const handleUserInfoSubmit = async (userInfo) => {
    try {
      const response = await fetch("/api/submit-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answers,
          userInfo,
          reward: selectedReward,
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        throw new Error("Failed to submit survey");
      }
    } catch (error) {
      console.error("Error submitting survey:", error);
      alert("Failed to submit survey. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
        {!showReward && !showUserForm && !showSuccess && (
          <Survey
            questionSet={surveyQuestions[currentSet]}
            onNext={handleNextSet}
            progress={((currentSet + 1) / surveyQuestions.length) * 100}
          />
        )}
        {showReward && !showUserForm && !showSuccess && (
          <RewardSelection
            options={rewardOptions}
            onSelect={handleRewardSelection}
          />
        )}
        {showUserForm && !showSuccess && (
          <UserInfoForm
            onSubmit={handleUserInfoSubmit}
            reward={selectedReward}
          />
        )}
        {showSuccess && <SuccessMessage reward={selectedReward} />}
      </div>
    </div>
  );
}
