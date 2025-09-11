 


import CommunitySection from "./CommunitySection";
import ContentWrapper from "./ContentWrapper";
import FooterBox from "./FooterBox";
import PaymentSection from "./PaymentSection";
import PlateformText from "./PlateformText";
import ReadySecure from "./ReadySecure";
import RightplanSection from "./RightplanSection";
import VisitorAdmin from "./VisitorAdmin";



export default function secondSection(){

  return(
   <main className="bg-blue-50">
    <ContentWrapper>
       <div className="space-y-8">
          <PlateformText/>
          <CommunitySection/>
          <VisitorAdmin/>
          <PaymentSection/>
          <RightplanSection/>
          <ReadySecure/>
          <FooterBox/>

      </div>
      
    </ContentWrapper>
   </main>

  )
}