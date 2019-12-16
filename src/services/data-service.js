import MyTeachers from "../pages/my-teachers";

const userInfo = {
  name: "Иванов Иван Иванович",
  location: "Уфа",
  university: "УГАТУ",
  email: "example@mail.ru",
  site: "vk.com/BestMotherFucker"
};

const studentsTabel = [
  {
    group: "ПРО-499",
    subjects: [
      {
        name: "ООП",
        students: [
          {
            id: 1,
            name: "Анатольев Анатолий Анатолиевич",
            labs: 2,
            test: 1,
            video: 7,
            lecture: 9
          },
          {
            id: 2,
            name: "Григорьев Григорий Григориевич",
            labs: 2,
            test: 1,
            video: 7,
            lecture: 9
          }
        ],
        allLabs: 6,
        allTest: 5,
        allVideo: 18,
        allLecture: 15
      }
    ]
  }
];

const subjects = [
  {
    name: "ООП"
  },
  {
    name: "ФЛП"
  }
];

const myCourses = [
  {
    id: 0,
    name: "Базы данных",
    teacher: "Иванов Иван Иванович",
    progress: 60
  },
  {
    id: 1,
    name: "Методы вычисления",
    teacher: "Петров Пётр петрович",
    progress: 0
  },

  {
    id: 2,
    name: "Инженерия знаний",
    teacher: "Алексеев Алексей Алексеевич",
    progress: 100
  }
];

const myTeacher = [
  {
    name: "Иван Иванов",
    location: "Уфа, Угату",
    description:
      "Заслуженный деятетль искусств республики Дагестан, трижды судим, депутат городского совета Верхнего Волочка",
    coursesCount: 2,
    image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
  },
  {
    name: "Ержан Ержанов",
    location: "Белебей",
    description: "Смог проснуться в 12 утра",
    coursesCount: 222,
    image: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
  }
];

const courseDetail = [
  {
    id: 0,
    name: "Базы данных",
    teacher: "Иванов Иван Иванович",
    progress: 60,
    topics: [
      {
        id: 0,
        name: "Иерархическая модель",
        text:
          "Иерархические базы данных могут быть представлены как дерево, состоящее из объектов различных уровней. Верхний уровень занимает один объект, второй — объекты второго уровня и т. д. Между объектами существуют связи, каждый объект может включать в себя несколько объектов более низкого уровня. Такие объекты находятся в отношении предка (объект более близкий к корню) к потомку (объект более низкого уровня), при этом возможна ситуация, когда объект-предок не имеет потомков или имеет их несколько, тогда как у объекта-потомка обязательно только один предок. Объекты, имеющие общего предка, называются близнецами.",
        progress: 40,
        tests: ["id1", "id2"]
      },
      {
        id: 1,
        name: "Нормальная форма",
        text:
          "Иерархические базы данных могут быть представлены как дерево, состоящее из объектов различных уровней. Верхний уровень занимает один объект, второй — объекты второго уровня и т. д. Между объектами существуют связи, каждый объект может включать в себя несколько объектов более низкого уровня. Такие объекты находятся в отношении предка (объект более близкий к корню) к потомку (объект более низкого уровня), при этом возможна ситуация, когда объект-предок не имеет потомков или имеет их несколько, тогда как у объекта-потомка обязательно только один предок. Объекты, имеющие общего предка, называются близнецами.",
        progress: 40,
        tests: ["id1", "id2"]
      }
    ]
  },
  {
    id: 1,
    name: "Методы вычисления",
    teacher: "Петров Пётр петрович",
    progress: 0
  },

  {
    id: 2,
    name: "Инженерия знаний",
    teacher: "Алексеев Алексей Алексеевич",
    progress: 100
  }
];

export class DataService {
  async getUserInfo() {
    return userInfo;
  }
  async getMyCourses() {
    return myCourses;
  }
  async getMyTeachers() {
    return myTeacher;
  }
  async getSubjects() {
    return subjects;
  }
  async getCourseById(id) {
    return courseDetail[0];
  }
  async getCourseTexById(id = 0, id2 = 0) {
    return courseDetail[id].topics[id2].text;
  }
}
