import ContactCards from "../components/ContactCards"

const ContactPage = () => {
    return (
      <>
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center text-5xl mb-4">Contact</h1>
      <ContactCards/>
      </div>
      </>
    )
  }
  export default ContactPage