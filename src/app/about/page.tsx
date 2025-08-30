import { FaCode, FaLaptopCode } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <div className="container py-20 mx-auto max-w-7xl">
      <h1 className="mb-8 text-4xl font-bold text-center">About Me</h1>
      
      <section className="mb-16">
        <p className="max-w-3xl mx-auto text-lg text-center text-secondary">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
          I am a passionate developer currently focused on learning and building projects with
              modern web technologies. My journey in development has led me to explore and practice
              React.js, TypeScript, Next.js, Tailwind CSS, and Framer Motion. With every project, I
              aim to strengthen my problem-solving skills and improve my ability to create clean,
              scalable, and user-friendly applications. I enjoy turning ideas into functional web
              solutions while experimenting with new tools and techniques. My current focus is on
              building interactive and responsive interfaces that deliver great user experiences. I
              believe in continuous learning and love pushing myself to stay updated with the latest
              trends in frontend development. Each step I take brings me closer to becoming a more
              versatile and confident developer.
        </p>
      </section>

      <div className="flex justify-center gap-8 mb-8">
        <Image
          src="/projects/imran.jpg"
          alt="portfolio"
          width={300}
          height={300}
          className="object-cover rounded-full w-80 h-80 ring-2 ring-primary"
        />
        <Image
          src="/projects/saki2.png"
          alt="portfolio"
          width={300}
          height={300}
          className="object-cover rounded-full w-80 h-80 ring-2 ring-primary"
        />
      </div>

      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-dark/50">
            <FaCode className="w-8 h-8 mb-4 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Front end</h3>
            <ul className="space-y-2 text-secondary">
              <li>React / Next.js</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
              <li>Html, CSS3</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-dark/50">
            <FaLaptopCode className="w-8 h-8 mb-4 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Back end</h3>
            <ul className="space-y-2 text-secondary">
              <li>My Sql</li>
              <li>Mongodb</li>
              <li>Intermediate at Postgresql</li>
              <li>Django</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-dark/50">
            <h3 className="mb-2 text-xl font-semibold text-primary">EDUCATION</h3>
            <p className="text-lg leading-relaxed text-justify text-gray-700 dark:text-gray-300">
        I completed my schooling from 1st to 8th class at 
        <span className="font-semibold"> R.N Memorial High School</span>, and continued my 
        9th and 10th at <span className="font-semibold"> Turning Point High School</span>, 
        where I secured <span className="font-semibold"> 9.5 GPA</span> in my SSC during 2019–2020.  
        Later, I pursued my Intermediate at <span className="font-semibold"> Sri Medhavi Junior College</span> 
        from 2020–2022, achieving <span className="font-semibold"> 64.3%</span>.  
        Currently, I am pursuing my <span className="font-semibold"> B.E in Computer Engineering</span> 
        at <span className="font-semibold"> Matrusri Engineering College</span>, and I am in my 3rd year.
      </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
