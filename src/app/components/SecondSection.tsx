 


import CommunitySection from "./CommunitySection";
import ContentWrapper from "./ContentWrapper";
import PlateformText from "./PlateformText";
import VisitorAdmin from "./VisitorAdmin";



export default function secondSection(){

  return(
   <main className="bg-blue-50 ">
    <ContentWrapper>
        <div className="space-y-8">
          <PlateformText />
          <CommunitySection />
          <VisitorAdmin/>
      </div>
      
    </ContentWrapper>
   </main>

  )
}