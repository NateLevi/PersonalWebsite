import ProjectCard from "../components/ProjectCard"

const ProjectPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ProjectCard 
        projectName="Project 1:" 
        description="A web platform aggregating daily match highlights from Europe's top 5 football leagues. Users can search and watch curated highlights from each league's latest matches." 
        image="pic01.png"
        link = "https://github.com/NateLevi/DailyGoals"
      />
      <ProjectCard 
        projectName="Project 2:" 
        description="A RESTful API providing comprehensive data on historical philosophers, including their key works, philosophical concepts, famous quotes, biographical facts, and influence on modern thought. Access structured data for educational and research purposes." 
        image="philosopherApiPic.jpg"
        link = "https://github.com/NateLevi/philosopher-names-api"
      />
    </div>
  );
}

export default ProjectPage;
