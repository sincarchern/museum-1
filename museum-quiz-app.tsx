import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MuseumQuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    // 原有的5題
    {
      text: "世界上最大的博物館是？",
      options: [
        { id: 0, text: "大英博物館", isCorrect: false },
        { id: 1, text: "羅浮宮", isCorrect: true },
        { id: 2, text: "艾米塔吉博物館", isCorrect: false },
        { id: 3, text: "美國自然歷史博物館", isCorrect: false }
      ],
      explanation: "羅浮宮位於巴黎，展覽面積約72,735平方米，擁有超過38,000件展品。"
    },
    {
      text: "世界上最古老的公共博物館是？",
      options: [
        { id: 0, text: "大英博物館", isCorrect: false },
        { id: 1, text: "卡皮托利尼博物館", isCorrect: true },
        { id: 2, text: "埃及博物館", isCorrect: false },
        { id: 3, text: "俄羅斯國家艾米塔吉博物館", isCorrect: false }
      ],
      explanation: "卡皮托利尼博物館位於義大利羅馬，建立於1471年，被認為是世界上最早的公共博物館。"
    },
    {
      text: "全球最大的兒童博物館位於？",
      options: [
        { id: 0, text: "波士頓兒童博物館", isCorrect: false },
        { id: 1, text: "印第安納波利斯兒童博物館", isCorrect: true },
        { id: 2, text: "新加坡兒童發現中心", isCorrect: false },
        { id: 3, text: "倫敦發現兒童故事中心", isCorrect: false }
      ],
      explanation: "印第安納波利斯兒童博物館位於美國印第安納州，佔地超過47,000平方米。"
    },
    {
      text: "以建築設計最著名的博物館是？",
      options: [
        { id: 0, text: "羅浮宮", isCorrect: false },
        { id: 1, text: "蓬皮杜中心", isCorrect: true },
        { id: 2, text: "古根漢美術館", isCorrect: false },
        { id: 3, text: "東京TeamLab Borderless", isCorrect: false }
      ],
      explanation: "蓬皮杜中心位於巴黎，以其內外顛倒的結構設計著稱，展示現代與當代藝術。"
    },
    {
      text: "世界上最具科技互動性的兒童博物館是？",
      options: [
        { id: 0, text: "Exploratorium", isCorrect: false },
        { id: 1, text: "新加坡兒童發現中心", isCorrect: true },
        { id: 2, text: "柏林Labyrinth兒童博物館", isCorrect: false },
        { id: 3, text: "墨西哥兒童博物館", isCorrect: false }
      ],
      explanation: "新加坡兒童發現中心(KidsSTOP™)結合最新的VR和AR科技，提供互動學習環境。"
    },
    
    // 新增題目
    {
      text: "世界上最具沉浸感的博物館是？",
      options: [
        { id: 0, text: "大英博物館", isCorrect: false },
        { id: 1, text: "加拿大原住民博物館", isCorrect: true },
        { id: 2, text: "艾米塔吉博物館", isCorrect: false },
        { id: 3, text: "國家人類學博物館", isCorrect: false }
      ],
      explanation: "加拿大原住民博物館以其沉浸式影片和互動空間聞名，深入展示原住民文化。"
    },
    {
      text: "全球最前衛的數位博物館是？",
      options: [
        { id: 0, text: "蓬皮杜中心", isCorrect: false },
        { id: 1, text: "日本TeamLab Borderless", isCorrect: true },
        { id: 2, text: "新加坡ArtScience Museum", isCorrect: false },
        { id: 3, text: "舊金山探知館", isCorrect: false }
      ],
      explanation: "TeamLab Borderless位於東京，結合數位科技與互動藝術，打造無牆的展覽體驗。"
    },
    {
      text: "收藏最多藏品的博物館是？",
      options: [
        { id: 0, text: "羅浮宮", isCorrect: false },
        { id: 1, text: "俄羅斯國家艾米塔吉博物館", isCorrect: true },
        { id: 2, text: "大英博物館", isCorrect: false },
        { id: 3, text: "美國自然歷史博物館", isCorrect: false }
      ],
      explanation: "艾米塔吉博物館擁有約300萬件藏品，包括藝術品、書籍和歷史文物。"
    },
    {
      text: "世界上最早的兒童博物館是？",
      options: [
        { id: 0, text: "印第安納波利斯兒童博物館", isCorrect: false },
        { id: 1, text: "波士頓兒童博物館", isCorrect: true },
        { id: 2, text: "倫敦發現兒童故事中心", isCorrect: false },
        { id: 3, text: "墨西哥兒童博物館", isCorrect: false }
      ],
      explanation: "波士頓兒童博物館成立於1913年，是全球第一個專為兒童設計的博物館。"
    },
    {
      text: "最獨特的主題博物館是？",
      options: [
        { id: 0, text: "巧克力博物館", isCorrect: false },
        { id: 1, text: "冰島陰莖博物館", isCorrect: true },
        { id: 2, text: "可口可樂博物館", isCorrect: false },
        { id: 3, text: "國家鐵路博物館", isCorrect: false }
      ],
      explanation: "冰島陰莖博物館是世界上唯一展示各種哺乳動物陰莖標本的博物館，非常獨特。"
    }
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (option) => {
    setSelectedOption(option);
  };

  const confirmAnswer = () => {
    if (selectedOption.isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">全球博物館知識大挑戰</CardTitle>
        </CardHeader>
        <CardContent>
          {showScore ? (
            <div className="text-center">
              <h2 className="text-xl mb-4">
                您的得分: {score} / {questions.length}
              </h2>
              <p className="mb-4">
                {score === questions.length ? "完美！您是博物館大師！" : 
                 score >= 7 ? "非常棒！您對博物館瞭解頗深！" : 
                 score >= 5 ? "不錯的成績！繼續加油！" : 
                 "還有很多博物館知識值得探索！"}
              </p>
              <Button onClick={restartGame} className="w-full">
                重新開始
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <h2 className="text-lg font-bold mb-2">
                  問題 {currentQuestion + 1}/{questions.length}
                </h2>
                <p className="text-md">{questions[currentQuestion].text}</p>
              </div>
              <div className="space-y-2">
                {questions[currentQuestion].options.map((option) => (
                  <Button
                    key={option.id}
                    onClick={() => handleAnswerClick(option)}
                    className={`w-full ${
                      selectedOption?.id === option.id 
                      ? 'bg-blue-200' 
                      : 'bg-white'
                    }`}
                    variant="outline"
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
              {selectedOption && (
                <div className="mt-4 p-3 bg-gray-100 rounded">
                  <p className={`font-bold ${selectedOption.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedOption.isCorrect ? '答對了！' : '答錯了！'}
                  </p>
                  <p className="text-sm mt-2">
                    {questions[currentQuestion].explanation}
                  </p>
                </div>
              )}
              {selectedOption && (
                <Button 
                  onClick={confirmAnswer} 
                  className="w-full mt-4"
                >
                  下一題
                </Button>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MuseumQuizGame;