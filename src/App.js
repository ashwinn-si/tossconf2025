import About from './Components/About/About';
import Hero from './Components/Hero/Hero';
import InvolvedOrganizations from './Components/InvolvedOrganizations/InvolvedOrganizations';
import NavBar from "./Components/NavBar/NavBar"
import ContactContainer from './Components/Contact/ContactContainer';
import Footer from "./Components/Footer/Footer"

export default function App() {
    return (
        <div>
            <NavBar />
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="involvedOrganizations">
                <InvolvedOrganizations />
            </section>
            <section id="contact">
                <ContactContainer />
            </section>
            <section>
                <Footer />
            </section>
        </div>
    )
}