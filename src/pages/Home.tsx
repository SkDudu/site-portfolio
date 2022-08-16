import Cards from "../components/cards";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import RecentWork from "../components/recentWork";

export default function Home(){
    return(
        <>
            <Hero />
            <Cards />
            <RecentWork />
            <Footer />
        </>
    )
}