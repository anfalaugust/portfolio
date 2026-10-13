/*
  ============================================================
  YOUR PROJECTS
  To add a new project: copy one { ... } block, paste it below,
  and change the text. Put its images in the "assets" folder.
  ============================================================
*/
const PROJECTS = [
  {
    id: "saaf",
    title: "Sa'af",
    subtitle: "Date Palm Disease Classification with Explainable AI",
    fullTitle: "An Explainable Hybrid CNN-Transformer Model for Date Palm Disease Classification",
    course: "CSC 497 – Graduation Project",
    type: "Team project",
    role: "Team Leader",
    image: "assets/saaf-mockup.webp",
    summary: "An app that finds date palm leaf diseases from a photo and shows why the AI made its choice.",
    overview:
      "Sa'af is a mobile app that helps people check if their date palm is healthy. You take or upload a photo of a palm leaf, and our hybrid EfficientNetV2 + Swin Transformer model tells you the disease. It also shows a Grad-CAM++ heatmap, so you can see which part of the leaf the AI looked at.",
    results: [
      { value: "97.34%", label: "Accuracy" },
      { value: "94.41%", label: "Macro-F1" }
    ],
    tasks: [
      "Led the team and organized our tasks and deadlines",
      "Designed the project methodology",
      "Trained the hybrid model in PyTorch (timm) on Google Colab",
      "Analyzed the results and wrote them up",
      "Built the mobile app in Flutter/Dart using VS Code, with Firebase",
      "Helped write the project report"
    ],
    features: [
      "Scan a leaf with the camera or upload a photo",
      "Grad-CAM++ heatmap to explain the result",
      "Scan history",
      "AI chatbot for treatment tips",
      "User accounts"
    ],
    tech: ["PyTorch", "timm", "scikit-learn", "NumPy", "Pandas", "Matplotlib", "Google Colab", "Flutter", "Dart", "Firebase", "Figma", "Git/GitHub"],
    github: "https://github.com/anfalaugust/Graduation-Project/",
    demo: ""
  },
  {
    id: "airspire",
    title: "AirSpire",
    subtitle: "Goal Tracking App Prototype",
    course: "CSC 343 – Systems Analysis & Design",
    type: "Team project",
    role: "",
    image: "assets/airspire-mockup.webp",
    summary: "A Figma prototype for an app where you set goals and watch your progress on each one.",
    overview:
      "AirSpire is an interactive prototype we designed in Figma for a goal-setting app. Users can add their goals and follow the progress of each one. Every goal is shown as a bird flying along a path, and each finished step gets a check mark. Before designing the screens, we analyzed the system and wrote its requirements and diagrams.",
    results: [],
    tasks: [
      "Wrote the functional requirements",
      "Wrote the use cases",
      "Helped make the use case diagram",
      "Helped make the sequence diagrams",
      "Helped design the interfaces and the interactive prototype"
    ],
    featuresTitle: "Prototype features",
    features: [
      "Set personal goals",
      "Track the progress of each goal",
      "Each goal shown as a bird flying toward its target",
      "Check marks for finished steps"
    ],
    tech: ["Figma", "UML", "Use Case Diagrams", "Sequence Diagrams"],
    github: "",
    demo: "",
    prototype: "https://www.figma.com/design/ws6owS6s2SYw7t1cvob6Gu/Airspire?node-id=700-8633&t=ijCQ8q21vowxKkfj-1"
  },
  {
    id: "art-event",
    title: "Art Event Management System",
    subtitle: "Database + Java Desktop App",
    course: "CSC 380 – Fundamentals of Database Systems",
    type: "Team project",
    role: "",
    image: "assets/art-event-mockup.webp",
    summary: "A MySQL database connected to a Java app to manage a paintings selling event.",
    overview:
      "This system helps organize an art event where paintings are sold. We built a MySQL relational database and connected it to a Java desktop app. The database keeps track of the staff, events, sponsors, venues and tickets, and the app lets users view and manage this data.",
    results: [],
    tasks: [
      "Designed the ER diagram",
      "Turned the ER diagram into the relational schema"
    ],
    featuresTitle: "What the system covers",
    features: [
      "Staff",
      "Events",
      "Sponsors",
      "Venues",
      "Tickets"
    ],
    tech: ["MySQL", "SQL", "Java", "Java Swing", "Eclipse", "ER Diagram"],
    github: "https://github.com/anfalaugust/CSC380_Database/",
    demo: ""
  },
  {
    id: "ai-drug-regulation",
    title: "Regulation of AI in Drug Development",
    subtitle: "Research Paper",
    course: "CSC 304 – Ethical Issues in Computing & Research Methods",
    type: "Team project",
    role: "",
    image: "assets/ai-drug-paper.webp",
    summary: "A research paper about the rules and ethical issues of using AI to make new medicines.",
    overview:
      "AI is changing how new medicines are discovered and made, but it also brings questions about safety, trust and responsibility. In this paper, we looked at the rules and ethical issues around using AI in drug development. We reviewed past research and ran a survey with pharmacy students and medication users to understand their worries and what would make them trust AI-made medicines.",
    results: [],
    tasks: [
      "Worked equally with my teammate on all parts of the research"
    ],
    featuresTitle: "Key findings",
    features: [
      "65.9% want a human expert involved in every stage",
      "43.2% think the biggest risk is AI being misused to make harmful drugs",
      "64.6% think responsibility should be shared between AI developers and drug companies",
      "71.2% would trust AI-made medicines more if approved by trusted regulators"
    ],
    tech: ["Microsoft Office", "Google Scholar", "Literature Review", "Survey Analysis"],
    github: "",
    demo: "",
    paper: ""
  },
  {
    id: "cv-for-developers",
    title: "CV for Developers",
    subtitle: "Object Detection with YOLO11",
    course: "Computer Vision for Developers – SDAIA",
    courseShort: "SDAIA",
    type: "Solo project",
    role: "",
    image: "assets/cv-developers.webp",
    summary: "A full computer vision project with YOLO11, from detecting objects to training and exporting my own model.",
    overview:
      "This is a full computer vision project I built with Ultralytics YOLO11. I started with the main vision tasks like object detection and segmentation. Then I used a model on a real video analytics example, fine-tuned it on a custom dataset, checked how well it works, and exported it so it can be used in real apps.",
    results: [],
    tasks: [
      "Wrote all the code by myself",
      "Built the full pipeline from start to end",
      "Trained my own YOLO11 model on a custom dataset",
      "Tested the model on images and videos"
    ],
    featuresTitle: "Project pipeline",
    features: [
      "Detection and segmentation",
      "Video analytics",
      "Fine-tuning on custom data",
      "Model evaluation",
      "Export for deployment"
    ],
    tech: ["Python", "Ultralytics YOLO11", "OpenCV", "Google Colab"],
    github: "https://github.com/anfalaugust/CV_For_Developers",
    demo: ""
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe Move Prediction",
    subtitle: "Machine Learning Model Comparison",
    course: "CSC 462 – Machine Learning",
    type: "Team project",
    role: "",
    image: "assets/tictactoe.webp",
    summary: "Machine learning models that predict the best next move in Tic-Tac-Toe, without being told the game rules.",
    overview:
      "In this project, we trained models to predict the best next move in Tic-Tac-Toe from any board. The models were not given the game rules, so they had to learn them from the data. We compared Logistic Regression, Random Forest, XGBoost and an MLP, and added features like threats, forks and center control to help them. XGBoost did the best.",
    results: [
      { value: "86.28%", label: "Validation accuracy (XGBoost)" },
      { value: "4.01%", label: "Gap between training and validation" }
    ],
    tasks: [
      "Trained the Random Forest model",
      "Helped write the project report"
    ],
    featuresTitle: "What we did",
    features: [
      "Compared 4 models: Logistic Regression, Random Forest, XGBoost and MLP",
      "Added smart features: threats, forks and center control",
      "No game rules given to the models",
      "XGBoost gave the best result"
    ],
    tech: ["Python", "scikit-learn", "XGBoost", "Pandas", "NumPy", "Matplotlib", "Google Colab"],
    github: "https://github.com/anfalaugust/CSC462_MachineLearning",
    demo: ""
  },
  {
    id: "wijha",
    title: "Wijha",
    subtitle: "Tourism Booking Website",
    course: "CSC 457 – Internet Technologies",
    type: "Team project",
    role: "",
    image: "assets/wijha.webp",
    summary: "A tourism website inspired by Saudi Vision 2030 to book tours in different Saudi cities.",
    overview:
      "Wijha (\u0648\u062c\u0647\u0629, meaning \u201cdestination\u201d) is a tourism website inspired by Saudi Vision 2030. It helps visitors find and book tours in different Saudi cities, like Jeddah, Riyadh, Abha, AlUla and Tabuk. We built the website with HTML, CSS and JavaScript, and used PHP and MySQL to save the tours and bookings.",
    results: [],
    tasks: [
      "Built the home page with HTML, CSS and JavaScript",
      "Built the tours page with HTML, CSS and JavaScript",
      "Created part of the MySQL tables"
    ],
    featuresTitle: "Website features",
    features: [
      "Tours in Jeddah, Riyadh, Abha, AlUla and Tabuk",
      "Tour cards with the date, time and price",
      "Tour details page",
      "Booking tours online"
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/MahaBinDakhil/WIJHA",
    demo: ""
  },
  {
    id: "seam-carving",
    title: "Content-Aware Image Size Reduction",
    subtitle: "Seam Carving with 3 Algorithms",
    course: "CSC 311 – Design & Analysis of Algorithms",
    type: "Team project",
    role: "",
    image: "assets/seam-carving.webp",
    summary: "A Java program that makes images smaller without squishing the important parts, using 3 different algorithms.",
    overview:
      "This Java program makes an image smaller in a smart way, using a method called seam carving. Instead of squishing the whole image, it finds and removes the least important lines of pixels (called seams), so the main details stay clear. We solved the problem with three algorithms: Brute Force, Dynamic Programming and a Greedy approach, and compared them.",
    results: [],
    tasks: [
      "Built the Brute Force approach in Java"
    ],
    featuresTitle: "The 3 algorithms",
    features: [
      "Brute Force: checks every possible seam",
      "Dynamic Programming: finds the best seam faster",
      "Greedy: picks the best next pixel at each step",
      "The user chooses which algorithm to run"
    ],
    tech: ["Java", "Eclipse", "Algorithms", "Dynamic Programming"],
    github: "https://github.com/anfalaugust/CSC311_Algorithms",
    demo: ""
  }
];
