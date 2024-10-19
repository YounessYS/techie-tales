import Thumbnail1 from "../images/blog10.jpg";
import Thumbnail2 from "../images/blog20.jpg";
import Thumbnail3 from "../images/blog39.jpg";
import Thumbnail4 from "../images/blog47.jpg";
import Avatar1 from "../images/avatar1.jpg";
import Avatar2 from "../images/avatar2.jpg";
import Avatar3 from "../images/avatar3.jpg";
import Avatar4 from "../images/avatar4.jpg";
import Avatar5 from "../images/avatar5.jpg";

export const MOCK_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "How to maximise your learning by following the Pomodoro Technique",
    desc: "The Pomodoro Technique is a powerful method to improve learning and productivity. By working in focused 25-minute intervals, followed by short 5-minute breaks, you keep your brain fresh and focused. These breaks help prevent mental fatigue and improve retention of information. After four intervals, you take a longer break, allowing your mind to relax and reset.",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "Interesting findings in Physics you probably never knew",
    desc: "Physics is full of fascinating discoveries that often go unnoticed. For instance, did you know time slows down the faster you move? This is known as time dilation, a key aspect of Einstein’s theory of relativity. Another mind-blowing fact is that particles can exist in two places at once, thanks to quantum superposition.",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "Robotics",
    title: "How the British rainy Robotics may actually be good for you",
    desc: "The rainy British Robotics might seem dreary, but it has unexpected benefits. Rain naturally cleanses the air, reducing pollution and improving overall air quality, which can benefit respiratory health. Moisture in the air also keeps skin hydrated, preventing dryness and promoting healthier skin. Cooler, rainy days can lead to better sleep, as the body tends to rest more comfortably in cooler environments.",
    authorID: 13,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "farming",
    title: "Why I grow my own potatoes",
    desc: "Growing my own potatoes is both rewarding and practical. I know exactly what goes into them, avoiding pesticides and chemicals. Homegrown potatoes taste better, and I enjoy the process of caring for my garden. Potatoes are versatile, and growing them saves money and reduces my environmental footprint.",
    authorID: 11,
  },
];

export const MOCK_AUTHORS = [
  { id: 1, avatar: Avatar1, name: "Sherry Robertson", posts: 3 },
  { id: 2, avatar: Avatar2, name: "Samantha Harris", posts: 5 },
  { id: 3, avatar: Avatar3, name: "Rudy Patrudi", posts: 0 },
  { id: 4, avatar: Avatar4, name: "Sophia Blue", posts: 2 },
  { id: 5, avatar: Avatar5, name: "Daniel Hill", posts: 1 },
];

export const POST_CATEGORIES = [
  "Tech",
  "Business",
  "Education",
  "Entertainment",
  "AI",
  "Investment",
  "Uncategorized",
  "Robotics",
];

// prettier-ignore
export const modules = {
    toolbar: [
      [{ "header": [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': ['ordered', 'bullet'] }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  }

// prettier-ignore
export const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
