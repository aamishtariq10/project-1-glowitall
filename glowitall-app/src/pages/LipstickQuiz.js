import React, { useState, useEffect } from "react";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const foundationQuestions = [
  {
    question: "What kind of Coverage do you crave?",
    options: [
      {
        label: "Light coverage",
        image: "https://example.com/age-24.jpg",
      },
      {
        label: "Medium coverage",
        image: "https://example.com/age-25-32.jpg",
      },
      {
        label: "Full coverage",
        image: "https://example.com/age-45-54.jpg",
      },
      {
        label: "Any",
        image: "https://example.com/age-55.jpg",
      },
    ],
  },

  {
    question: "What formula do you have in mind?",
    options: [
      {
        label: "Liquid",
        image: "Images/hyperpigmentation.jpg",
      },
      {
        label: "Bullet",
        image:
          "https://img.freepik.com/free-photo/selfcare-cosmetology-beauty-concept-sensual-attractive-relaxed-naked-redhead-young-woman-freckled-cheeks-closed-eyes-gently-touching-cheek-enjoying-clean-pure-skin-condition-applying-daily-creme_176420-34646.jpg?size=626&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais",
      },
      {
        label: "Everything",
        image:
          "https://static.toiimg.com/thumb/msid-67074139,imgsize-127575,width-800,height-600,resizemode-75/67074139.jpg",
      },
    ],
  },
  {
    question: "What is your preferred finish?",
    options: [
      {
        label: "Matte",
        image:
          "https://img.freepik.com/free-icon/fog_318-468040.jpg?size=338&ext=jpg&ga=GA1.2.1708761850.1679736585&semt=ais",
      },
      {
        label: "Gloss",
        image:
          "https://img.freepik.com/free-icon/makeup_318-741375.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais",
      },
      {
        label: "Sheer",
        image:
          "https://img.freepik.com/free-icon/makeup_318-741375.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais",
      },
      {
        label: "Everthing",
        image:
          "https://img.freepik.com/free-icon/makeup_318-741375.jpg?size=338&ext=jpg&ga=GA1.1.1708761850.1679736585&semt=ais",
      },
    ],
  },
  {
    question: "Choose your color family!",
    options: [
      {
        label: "Power Nude",
        image: "https://example.com/moisturizer.jpg",
      },
      {
        label: "Pop of Pink",
        image: "https://example.com/cleanser.jpg",
      },
      {
        label: "Rich Red",
        image: "https://example.com/cleanser.jpg",
      },
      {
        label: "Cool Coral",
        image: "https://example.com/cleanser.jpg",
      },
      {
        label: "Bold Berry",
        image: "https://example.com/cleanser.jpg",
      },
    ],
  },
  {
    question: "Choose your Makeup Brand!",
    options: [
      {
        label: "Maybelline",
        image: "https://example.com/moisturizer.jpg",
      },
      {
        label: "M Misbah",
        image: "https://example.com/cleanser.jpg",
      },
      {
        label: "Rivaj",
        image: "https://example.com/cleanser.jpg",
      },
      {
        label: "Huda Beauty",
        image: "https://example.com/cleanser.jpg",
      },
      {
        label: "Choose Any",
        image: "https://example.com/cleanser.jpg",
      },
    ],
  },
  {
    question: "What is the price range you require for the products?",
    options: [
      {
        label: "Cost-Effective",
        image: "https://example.com/price-cost-effective.jpg",
      },
      {
        label: "High-End",
        image: "https://example.com/price-highend.jpg",
      },
    ],
  },
];

const LipstickQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setSelectedOptions((prevSelectedOptions) => [
      ...prevSelectedOptions,
      option,
    ]);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  useEffect(() => {
    if (currentQuestion >= foundationQuestions.length) {
      const selected = selectedOptions.map((option) => option.label);
      const all_data = {
        selected: selected,
        category: "lips makeup",
        porductType: "lipstick",
      };
      navigate("/SC-Result", { state: { data: all_data } });
    }
  }, [currentQuestion]);

  const currentQuestionData = foundationQuestions[currentQuestion];
  const nextQuestionData = foundationQuestions[currentQuestion + 1];

  return (
    <>
      <div className="content py-4">
        <div className="text-content" style={textContentStyle}>
          <h4 className="Start-content py-2">
            {currentQuestionData?.question}
          </h4>
          <div className="options-container" style={optionsContainerStyle}>
            {currentQuestionData?.options.map((option, index) => (
              <div className="option" key={index}>
                {option.image && (
                  <div>
                    <img
                      src={option.image}
                      alt={option.label}
                      style={optionImageStyle}
                    />
                    <br />
                  </div>
                )}
                <button
                  className="rec-button"
                  onClick={() => handleOptionSelect(option)}
                  style={optionButtonStyle}
                >
                  <span className="option-label" style={optionLabelStyle}>
                    {option.label}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LipstickQuiz;

const textContentStyle = {
  flex: 3,
  padding: "1rem",
};

const optionImageStyle = {
  display: "block",
  margin: "0 auto",
  marginBottom: "1rem",
  width: "100px",
  height: "100px",
};
const optionButtonStyle = {
  display: "inline-block",
  margin: "0 0.5rem",
  padding: "0.5rem 1rem",
  borderRadius: "0.25rem",
  backgroundColor: "#ccc",
  border: "none",
  cursor: "pointer",
  maxWidth: "200px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  transition: "max-width 0.3s",
};

const optionLabelStyle = {
  fontSize: "1rem",
};

const optionsContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
};
