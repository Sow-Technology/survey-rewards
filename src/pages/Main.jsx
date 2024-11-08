"use client";
import { useState } from "react";
import { surveyQuestions, rewardOptions } from "@/lib/data";
import Survey from "../components/Survey";
import RewardSelection from "../components/RewardSelection";
import UserInfoForm from "../components/UserInfoForm";
import SuccessMessage from "../components/SuccessMessage";

export default function Main() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowReward(true);
    }
  };

  const handleRewardSelection = (reward) => {
    setSelectedReward(reward);
    setShowUserForm(true);
  };

  const handleUserInfoSubmit = () => {
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        {!showReward && !showUserForm && !showSuccess && (
          <Survey
            question={surveyQuestions[currentQuestion]}
            onNext={handleNextQuestion}
            progress={((currentQuestion + 1) / surveyQuestions.length) * 100}
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
