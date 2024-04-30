import { v4 as uuidv4 } from "uuid";

const dummyData = [
  {
    id: uuidv4(),
    title: "今日やること",
    tasks: [
      {
        id: uuidv4(),
        title: "英会話",
      },
      {
        id: uuidv4(),
        title: "ジム",
      },
      {
        id: uuidv4(),
        title: "プログラミング",
      },
      {
        id: uuidv4(),
        title: "カフェ巡り",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "明日やること",
    tasks: [
      {
        id: uuidv4(),
        title: "買い物",
      },
      {
        id: uuidv4(),
        title: "転職活動",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "完了",
    tasks: [
      {
        id: uuidv4(),
        title: "仕事",
      },
      {
        id: uuidv4(),
        title: "勉強",
      },
    ],
  },
];

export default dummyData;