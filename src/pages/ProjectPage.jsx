import ProjectCard from "../components/ProjectCard"

const ProjectPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ProjectCard 
        projectName="Project 1: Tropicuban Cafe" 
        description="A responsive React/Vite website styled with TailwindCSS and powered by Firebase, built as a ordering platform for a local Cuban cafe and deployed on Netlify to showcase my full‑stack web development skills." 
        image="project2.png"
        link = "https://github.com/NateLevi/TropicubanCafe"
      />
      <ProjectCard 
        projectName="Project 2: DailyGolazo" 
        description="A web platform aggregating daily match highlights from Europe's top 5 football leagues. Users can search and watch curated highlights from each league's latest matches." 
        image="project1.png"
        link = "https://github.com/NateLevi/DailyGolazo"
      />
      <ProjectCard 
        projectName="Project 3: Cs Manager System" 
        description= 'Cs Manager System is an application I developed while working as a sales representative for a Verizon retailer, Cellular Sales. We used a rotation system called "swings" to fairly distribute walk-in customers among reps, but tracking it manually caused confusion. Additionally, we lacked a modern inventory and supply ordering system. I built this app to solve both problems.'
        image="csswingproject.png"
        link = "https://github.com/NateLevi/CsSwingManager"
      />
      <ProjectCard 
        projectName="Project 4: Philosopher Api" 
        description="A RESTful API providing comprehensive data on historical philosophers, including their key works, philosophical concepts, famous quotes, biographical facts, and influence on modern thought. Access structured data for educational and research purposes." 
        image="project4.jpg"
        link = "https://github.com/NateLevi/philosopher-names-api"
      />
    </div>
  );
}

export default ProjectPage;
