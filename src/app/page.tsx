import HeroPage from "./components/HeroPage";
import LoadScreen from "./components/LoadScreen";
import SecondSection from "./components/SecondSection";
import SectionDivider from "./components/SectionDivider";


export default function HomePage(){

  return(
    <main className="">
      <HeroPage />
      <SectionDivider/>
      <SecondSection/>
      <LoadScreen/>
    </main>
     
   
  
  


  )
}