import Header from "../components/Header";
import Header_for_home from "../components/Header_for_home";
import SimpleSlider from "../components/Roundimg";
import Service from "../components/Service";
import Footer from "../components/Footer";

function Home() {
    return(
        <div>
            <Header_for_home classname="layoutHeader" />
            <Service/>
            <SimpleSlider/>
            <Footer/>
        </div>
    );
}

export default Home;