const students = [
  {
    id: 1,
    firstname: "Inge",
    lastname: "Verplaetsen",
    dob: 896047200,
    courses: [
      { name: "Programming 1", teachers: ["Michael Vanderpoorten"] },
      { name: "Webdesign", teachers: ["Evelien Rutsaert"] },
    ],
  },
  {
    id: 2,
    firstname: "Dirk",
    lastname: "Bouckaert",
    dob: 19177200,
    courses: [
      { name: "Programming 2", teachers: ["Philippe De Pauw"] },
      {
        name: "@Work 1",
        teachers: ["Michael Vanderpoorten", "Mathieu Spillebeen"],
      },
    ],
  },
  {
    id: 3,
    firstname: "Piet",
    lastname: "Pieters",
    dob: 1031954400,
    courses: [
      {
        name: "Programming 3",
        teachers: ["Frederick Roegiers", "Tim De Paepe"],
      },
      {
        name: "IT Communciation",
        teachers: ["Claire Geeraerts", "Isabelle Volckaert"],
      },
    ],
  },
];

export default students;