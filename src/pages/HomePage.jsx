import CourseList from "../components/CourseList";

const listaDeCursos = [
  {
    id: 635,
    imageUrl: "/logo.png",
    name: "React Js",
    category: "front-end",
    description: "Curso sobre React Js",
    duration: 6,
  },
  {
    id: 873,
    imageUrl: "/logo.png",
    name: "React com TS",
    category: "front-end",
    description: "Curso sobre React com TS",
    duration: 6,
  },
  {
    id: 935,
    imageUrl: "/logo.png",
    name: "React Router",
    category: "front-end",
    description: "Curso sobre React com TS",
    duration: 6,
  },
  {
    id: 333,
    imageUrl: "/logo.png",
    name: "Context API",
    category: "front-end",
    description: "Curso sobre React com TS",
    duration: 6,
  },
];
function HomePage() {
  return (
    <div className="homePage">
       <CourseList list={listaDeCursos} />
    </div>
  );
}

export default HomePage;