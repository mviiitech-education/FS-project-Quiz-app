const EMPTY_DATA = {
  title:"",
  subtitle:"",
  description:"",
  startTime:"",
  questions: []
}
const DATA = {
  title: "General Knowledge Quiz",
  subtitle: "Test your general knowledge",
  description: "This quiz will test your general knowledge on various topics.",
  startTime: "Wed Feb 12 2025 13:30:00 GMT+0530 (India Standard Time",
  questions: [
      {
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          correctOption: "Paris"
      },
      {
          question: "Who wrote 'To Kill a Mockingbird'?",
          options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
          correctOption: "Harper Lee"
      },
      {
          question: "What is the largest planet in our solar system?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correctOption: "Jupiter"
      },
      {
          question: "What is the chemical symbol for gold?",
          options: ["Au", "Ag", "Pb", "Fe"],
          correctOption: "Au"
      },
      {
          question: "Who painted the Mona Lisa?",
          options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
          correctOption: "Leonardo da Vinci"
      },
      {
          question: "What is the smallest country in the world?",
          options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
          correctOption: "Vatican City"
      },
      {
          question: "What is the hardest natural substance on Earth?",
          options: ["Diamond", "Gold", "Iron", "Platinum"],
          correctOption: "Diamond"
      },
      {
          question: "Who developed the theory of relativity?",
          options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
          correctOption: "Albert Einstein"
      },
      {
          question: "What is the longest river in the world?",
          options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
          correctOption: "Nile"
      },
      {
          question: "What is the capital of Japan?",
          options: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
          correctOption: "Tokyo"
      }
  ]
};

export default null;
export {DATA,EMPTY_DATA};