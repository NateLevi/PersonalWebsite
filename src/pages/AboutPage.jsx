import AboutText from "../components/AboutText"

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-center">
        <img
          src="/fallme.jpg"
          alt="About"
          className="w-2xl h-auto rounded-lg shadow-lg"
        />
      </div>
      <AboutText />
    </div>
  )
}

export default AboutPage
