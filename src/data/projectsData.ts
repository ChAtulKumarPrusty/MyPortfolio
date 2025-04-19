import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Gesture-Controlled Game Hub',
    description: 'Developed an innovative web-based platform that allows users to interact with multiple games through hand and face gestures. The platform features a variety of gesture-controlled games, including car racing, flight simulation, arcade racing, endless runner, hill climb , and many more....',
    image: 'https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'C' , 'OpenCV', 'Mediapipe', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Pygame'],
    year: '2025',
    category: 'machine-learning',
    githubUrl: null ,
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 2,
    title: 'Online Shopping Portal',
    description: 'This is a PHP-based Online Shopping Portal that allows users to browse products, add items to their cart, place orders, and manage user profiles. Its a simple yet effective e-commerce system for small businesses or personal learning purposes.',
    image: 'https://www.jain.software/wp-content/uploads/2016/05/Online-Shopping-website-development.jpg',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    year: '2025',
    category: 'web-dev',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/Online-Shopping-Portal',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 3,
    title: 'NLP Text Similarity & Visualization Web App',
    description: 'This project is a powerful Flask-based web application that evaluates the similarity between two texts (or images containing text), leveraging various NLP techniques. It supports multiple similarity metrics, visual analytics, and word-level frequency insights. Ideal for research, academic comparisons, and document analysis.',
    image: 'https://cdn.prod.website-files.com/5ef788f07804fb7d78a4127a/6539fb3bdbc72981d34ba5d9_Sentence%20similarity%20is%20a%20tough%20NLP%20problem.webp',
    technologies: ['Python', 'Flask', 'NLTK', 'spaCy', 'Matplotlib', 'Seaborn', 'JavaScript', 'HTML', 'CSS'],
    year: '2024',
    category: 'visualization',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/NLP-Text-Similarity-Visualization-WebApp',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 4,
    title: 'Smart Classroom Student Monitoring System',
    description: 'This project is a Real-Time AI-Powered Classroom Monitoring System that tracks and evaluates student behaviors such as hand-raising, head position, emotion, and body posture using computer vision and deep learning techniques. It aims to provide automated attendance and attention analysis during online or physical classroom sessions.',
    image: 'https://www.peoplelinkvc.com/wp-content/uploads/2021/09/Smart-Classroom-Equipment-1110x550.webp',
    technologies: ['Python', 'OpenCV', 'Mediapipe', 'Flask', 'TensorFlow', 'HTML', 'CSS', 'JavaScript'],
    year: '2024',
    category: 'visualization',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/Smart-Classroom-Student-Monitoring-System',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 5,
    title: 'Plant Disease Detection Web App',
    description: 'This project is a Flask-based web application for detecting plant diseases using a pre-trained Convolutional Neural Network (CNN) model built with TensorFlow/Keras. Users can upload plant leaf images to receive predictions of potential diseases.',
    image: 'https://cdn.dribbble.com/userupload/15215337/file/original-7c2982657f72fc171fe0116c138d7003.jpg?resize=400x0',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Flask', 'OpenCV', 'HTML', 'CSS', 'JavaScript'],
    year: '2024',
    category: 'machine-learning',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/Plant-Disease-Detection-WebApp',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 6,
    title: 'Calorie Estimation with Object Detection',
    description: 'This project uses a custom-trained YOLOv4 object detection model to detect various fruits and vegetables in real-time from a webcam feed, estimate their weight based on bounding box area, and calculate their approximate calorie content.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVCRlw5Z_6KwD7VPIdfUXrS55tOXyvea2Iw&s',
    technologies: ['Python', 'TensorFlow', 'YOLOv4', 'OpenCV', 'Flask', 'Pandas', 'NumPy', 'HTML', 'CSS', 'JavaScript'],
    year: '2024',
    category: 'data-analysis',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/Calorie-Estimation-with-Object-Detection',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 7,
    title: 'Hand Gesture Controlled Presentation Tool',
    description: 'This project allows you to control PowerPoint presentations using hand gestures in real time, using your webcam and OpenCV. The presentation slides are converted into images, and you can navigate them, draw annotations, and undo drawings using intuitive hand gestures.',
    image: 'https://images.pexels.com/photos/6150524/pexels-photo-6150524.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python', 'OpenCV', 'Mediapipe', 'cvzone', 'PyAutoGUI'],
    year: '2023',
    category: 'machine-learning',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/Hand-Gesture-Controlled-Presentation-Tool',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 8,
    title: 'Lumos - AI Voice Assistant with Video Feedback',
    description: 'Lumos is a smart, interactive desktop voice assistant that listens to your commands and responds with voice and animated video feedback. It can open applications, tell jokes, give weather updates, set timers or alarms, and more — all triggered by your voice. The project uses Python, speech recognition, text-to-speech, and OpenCV to deliver a fun, responsive assistant experience.',
    image: 'https://www.surveycto.com/wp-content/uploads/2024/06/SurveyCTO-Assistant-featured-1440-x-800.jpg',
    technologies: ['Python', 'SpeechRecognition', 'Pyttsx3', 'OpenCV', 'Mediapipe', 'Transformers', 'Flask'],
    year: '2023',
    category: 'machine-learning',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/AI-Voice-Assistant',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 9,
    title: 'Multi-Modal Product Recommendation System',
    description: 'This project is a Flask-based web application that provides a product recommendation system using both text and image inputs. It leverages NLP and Computer Vision models to deliver smart suggestions from a fashion dataset.',
    image: 'https://soloway.tech/wp-content/uploads/2023/08/What-is-a-recommendation-system_.png',
    technologies: ['Python', 'TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'NumPy', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    year: '2023',
    category: 'web-dev',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/Product-Recommendation-System',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 10,
    title: 'Ping Pong Game',
    description: 'A fun and interactive ping pong game controlled entirely using your hands, built with OpenCV, cvzone, and MediaPipe. Play against yourself or a friend — no keyboard or mouse needed!',
    image: 'https://play-lh.googleusercontent.com/MaRcDPrb0mh9pbS0gxsbMFfZQQu-yE12E6NvFVzaGmbBRHRvgk25oCUh5ijSqHw9Og=w526-h296-rw',
    technologies: ['Python', 'OpenCV', 'Mediapipe', 'Pygame'],
    year: '2023',
    category: 'machine-learning',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/Ping-Pong-Game',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 11,
    title: 'Voice Translator App',
    description: 'A simple and interactive voice translation tool built using Python. Speak any phrase, translate it to a desired language, and hear the translated phrase spoken back to you!',
    image: 'https://play-lh.googleusercontent.com/LNgM8XhdQS6u1ZL15PtpEtYV_Wx-pvwoCMqv_ZxrAOfZDdQLHOnUIB8Nk7kKe_DRPg=w526-h296-rw',
    technologies: ['Python', 'SpeechRecognition', 'gTTS', 'googletrans', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    year: '2022',
    category: 'machine-learning',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/VoiceTranslator',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 12,
    title: 'Rock Paper Scissors with Hand Gestures',
    description: 'An interactive Rock-Paper-Scissors game where you play against an AI using just your hand gestures! Built with Python, OpenCV, and the cvzone.HandTrackingModule.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-Is3fTWKu4wrhzrkXXPRVudZqXJVNljS5A&s',
    technologies: ['Python', 'OpenCV', 'Mediapipe', 'cvzone'],
    year: '2022',
    category: 'machine-learning',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/Rock-Paper-Scissor-Game',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 13,
    title: 'Real-Time Object Detection Web App',
    description: 'This project is a real-time object detection system built with Flask, OpenCV, and YOLOv3. The application streams video from your webcam, detects objects using the YOLOv3 model, and displays the detections in the browser. It also provides a dynamic slider to adjust the confidence threshold for object detection.',
    image: 'https://i.ytimg.com/vi/TmC89R6LHPE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAXRo-EmAdsQCuDAPY2dpVxQeTB5w',
    technologies: ['Python', 'YOLOv5', 'OpenCV', 'Flask', 'Torch', 'HTML', 'CSS', 'JavaScript'],
    year: '2022',
    category: 'machine-learning',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/Real-Time-Object-Detection-WebApp',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  },
  {
    id: 14,
    title: 'Virtual Mouse',
    description: 'This project allows you to control your computer\'s mouse using hand gestures detected via your webcam, using MediaPipe and OpenCV. When the index finger moves, the cursor moves accordingly. A mouse click is triggered when the thumb and index finger come close together.',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*-tnivhX3TbYkAJ8ac1HZ8Q.png',
    technologies: ['Python', 'OpenCV', 'Mediapipe', 'PyAutoGUI'],
    year: '2022',
    category: 'machine-learning',
    githubUrl: 'https://github.com/ChAtulKumarPrusty/Hand-Gesture-Controlled-Virtual-Mouse',
    liveUrl: 'https://www.linkedin.com/in/chatulkumarprusty/details/projects/'
  }
];
