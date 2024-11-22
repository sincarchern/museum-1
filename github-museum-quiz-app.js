const questions = [
    {
        question: '故宮博物院最著名的翠玉白菜是由什麼材料製成？',
        options: ['翡翠', '和闐玉', '水晶', '瑪瑙'],
        correct: 1
    },
    {
        question: '以下哪個不是台北故宮的國寶級文物？',
        options: ['清明上河圖', '毛公鼎', '翠玉白菜', '蘭亭序'],
        correct: 0
    },
    {
        question: '肉形石的材質是什麼？',
        options: ['大理石', '玉石', '瑪瑙', '水晶'],
        correct: 2
    },
    {
        question: '故宮博物院起源於哪個朝代的宮廷收藏？',
        options: ['唐朝', '宋朝', '明朝', '清朝'],
        correct: 2
    },
    {
        question: '下列何者不是博物館的主要功能？',
        options: ['收藏', '研究', '展示', '販賣'],
        correct: 3
    }
];

const App = () => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [showScore, setShowScore] = React.useState(false);
    const [selectedAnswer, setSelectedAnswer] = React.useState(null);
    const [isAnswered, setIsAnswered] = React.useState(false);

    const handleAnswerClick = (answerIndex) => {
        if (isAnswered) return;
        
        setSelectedAnswer(answerIndex);
        setIsAnswered(true);
        
        if (answerIndex === questions[currentQuestion].correct) {
            setScore(score + 1);
        }
        
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
                setIsAnswered(false);
            } else {
                setShowScore(true);
            }
        }, 1000);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer(null);
        setIsAnswered(false);
    };

    const getButtonClass = (index) => {
        let baseClass = "quiz-button w-full text-left px-4 py-3 rounded-lg mb-2 border ";
        if (!isAnswered) {
            return baseClass + "bg-white hover:bg-gray-100";
        }
        if (index === questions[currentQuestion].correct) {
            return baseClass + "bg-green-500 text-white";
        }
        if (index === selectedAnswer) {
            return baseClass + "bg-red-500 text-white";
        }
        return baseClass + "bg-white";
    };

    return (
        <div className="min-h-screen p-4 flex items-center justify-center">
            <div className="quiz-container w-full max-w-md bg-white rounded-xl shadow-lg p-6">
                {!showScore ? (
                    <div>
                        <div className="text-right text-sm text-gray-500 mb-4">
                            {currentQuestion + 1} / {questions.length}
                        </div>
                        <h2 className="text-xl font-bold mb-6">
                            {questions[currentQuestion].question}
                        </h2>
                        <div>
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    className={getButtonClass(index)}
                                    onClick={() => handleAnswerClick(index)}
                                    disabled={isAnswered}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center score-animation">
                        <div className="trophy-animation text-6xl mb-6">🏆</div>
                        <h2 className="text-2xl font-bold mb-4">測驗完成！</h2>
                        <p className="text-xl mb-6">
                            你的得分：{score} / {questions.length}
                        </p>
                        <button 
                            onClick={resetQuiz}
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            重新開始
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));