import React from "react";
import '../index.css';
//import Img from '../images/pic1.jpeg';
import Img2 from '../images/pic2.jpg';
import Img3 from '../images/pic3.jpg';
import Img4 from '../images/pic4.jpg';
import Img5 from '../images/pic5.jpg';

function AboutUs()
{
    return(
        <>
          <div className="bgpic">

          
        <div className="para1">
 <br>
 </br>
 <div className="divv">
    <p>
        ABOUT US
    </p>
    
 </div>

 <p>
<br></br>
        RAPT is an interactive website made for the students so that they can be updated about their college's daily activities such
                as Hackathons, Events, Culturals, Industrial Visits,Announcements and so on. It is an online community for students from Sri 
                Krishna College of Technology. 
                     <br>
                     </br>
                     <br>
                     </br>
<br></br>
                  We are providing a platform for learning, sharing experiences and leveraging their knowledge
        to create their own ideas and provide social impact solutions along with spreading EVENTS awareness in an inclusive way.
        
                </p>
        </div>
        <br>
        </br>
        <br>
        </br>
        
<div className="img2">
        <img src={Img2} width="600px" height="400px"></img>
        
</div>
<div className="text2">
    <p>The founders, creators and innovators of "RAPT" are:</p>
    <ul><b>Kaaviyaharidharini S</b></ul>
    <ul><b>Mohamed Haaris MA</b></ul>
    <ul><b>Mohan Giresh</b></ul>
    <ul><b>Monisha M</b></ul>
    <ul><b>Mridini S</b></ul>
    <ul><b>Muthumari</b></ul>
    <ul><b>Priyadharshini SS</b></ul>
</div>
<div className="img3">
        <img src={Img3}width="600px" height="400px"></img>
</div>
<div className="text3"><i>
"In every class, we make sure at least once to interact in pairs or in small groups.<br></br> These interactions begin with a reminder that every person in the room is a source of knowledge and end with a prompt for students to thank each other for sharing their insights."</i>
<br></br><br></br>
- Ashley Hope Perez, Assistant Professor, Department of Comparative Studies,Ohio University
</div>
<div className="img4">
        <img src={Img4}width="600px" height="400px"></img>

        </div>
        <div className="text4">
            <h1><i>Why Us?</i></h1>
            <br></br>
        We put a lot of effort into developing relationships between students so we can provide meaningful advice. We get to know them as individuals, we learn about their needs, we understand their area of interest, we get to know what they are comfortable with so we can deliver it.

</div>
        <div className="footer">

        <div>
          <p className="text-footer">
            Follow us on our Social Handle<br>
            </br>
            Instagram Id: @rapt
            <br></br>
            Twitter: @raptonline
          </p>
        </div>
        <div>
          <p className="text-footer">
          Email:raptforu@gmail.com<br></br>
            Contact Us:0091-9894567876<br></br>
            Location: Coimbaore
          </p>
        </div>
        <div>
          <p className="text-footer">
            Quote of the Month:<br>
            </br>
            "Motivate Yourself"<br>
            </br>
            By SKCT Students
          </p>
        </div>
			</div>
      </div>
        
        </>
    )
}
export default AboutUs;