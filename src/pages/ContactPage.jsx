import ContactCards from "../components/ContactCards"

const ContactPage = () => {
    return (
      <>
      <div className="flex flex-col items-center justify-center h-screen pt-16">
        <h1 className="text-center text-5xl mt-[-300px]">Contact</h1>
        <ContactCards/>
      </div>
      </>
    )
  }
  export default ContactPage