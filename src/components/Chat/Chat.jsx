import './App.css';
import ChatBot from 'react-simple-chatbot'

function App() {
  return (
    <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hello! Welcome to the interactive chatbot. What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you! What are your hobbies?',
            trigger: '4',
          },
          {
            id: '4',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'That sounds interesting! Do you have any favorite hobbies or activities?',
            trigger: '6',
          },
          {
            id: '6',
            user: true,
            trigger: '7',
          },
          {
            id: '7',
            message: 'Great! Now, let\'s talk about your studies. What subjects do you enjoy the most?',
            trigger: '8',
          },
          {
            id: '8',
            user: true,
            trigger: '9',
          },
          {
            id: '9',
            message: 'Interesting choice! Are there any specific topics within that subject that you find fascinating?',
            trigger: '10',
          },
          {
            id: '10',
            user: true,
            trigger: '11',
          },
          {
            id: '11',
            message: 'Thank you for sharing! Is there anything else youd like to discuss?',
            trigger: '12',
          },
          {
            id: '12',
            user: true,
            trigger: '13',
          },
          {
            id: '13',
            message: 'Feel free to ask me any questions or share more about yourself!',
            end: true,
          },
        ]}
        floating={true}
      />
  );
}

export default App;
