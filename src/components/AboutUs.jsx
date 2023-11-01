import React from "react";
import '../styles/about1.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
function  AboutUs() {
    let message = `This app is a clone of the linkedin and this project is built under following students in thier internship drive under the supervision of Alt Digital Technologies`;
    return (
        <>
      <section class="section-white">
 
    <div class="container">
 
        <div class="row">
       
                    <div class="col-md-12 text-center">

                          <h2 class="section-title">ABOUT US</h2>

                          <p class="section-subtitle">{message}</p>
                          
                    </div> 
             
            <div class="col-sm-6 col-md-3">

                  <div class="team-item">
                  
                      <img src="https://thumbs.dreamstime.com/z/businessman-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-business-leader-vector-illustration-businessman-276189054.jpg" class="team-img" alt="pic" />                   
                      <h3>NISHANT BHAT</h3>            
                      <div class="team-info"><p> INTERN </p></div>
                      <p>Nishant Bhat is a student in the department of Computer Science and Engineering at New Horizon College fo Engineering ,Bengaluru.
                        and pursuing internship at Alt Digital Technologies</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter"id="blk">
                            <i class="bi bi-twitter-x"></i>
                        </a></li>
                          
                          <li><a href="https://www.linkedin.com/in/nishant-bhat-ba792522a/" class="linkedin"id="blk">
                            <i class="bi bi-linkedin"></i>
                        </a></li>
                          
                          <li><a href="#" cclass="skype" id="blk"><i class="bi bi-skype"></i></a></li>
                          
                          <li><a href="https://github.com/Nishant-Bhat23" class="github"id="blk">
                            <i class="bi bi-github"></i>
                        </a></li>
                          
                      </ul>
                      
                  
                </div>
            </div> 
              
            <div class="col-sm-6 col-md-3">

                  <div class="team-item">
                  
                      <img src="https://thumbs.dreamstime.com/z/student-avatar-illustration-user-profile-icon-youth-avatar-student-avatar-illustration-simple-cartoon-user-portrait-user-profile-276205546.jpg" class="team-img" alt="pic" />
                     
                      <h3>SHARATH BHAT</h3>
                      
                      <div class="team-info"><p>INTERN</p></div>

                      <p>Sharath Bhat is a student in the department of Information Science and Engineering at Global Academy Of Technology RR Nagar,Bengaluru.
                        and pursuing internship at Alt Digital Technologies
                      </p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="https://twitter.com/sharathbhat2202" class="twitter" id="blk"><i class="bi bi-twitter-x"></i></a></li>
                          
                          <li><a href="https://www.linkedin.com/in/sharath-bhat-1503a428a" class="linkedin"id="blk"><i class="bi bi-linkedin"></i></a></li>
                          
                          <li><a href="#" class="skype" id="blk"><i class="bi bi-skype"></i></a></li>
                          
                          <li><a href="https://github.com/sharath2243" class="github"id="blk"><i class="bi bi-github"></i></a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
            <div class="col-sm-6 col-md-3">

                  <div class="team-item">
                  
                      <img src="https://thumbs.dreamstime.com/z/student-avatar-illustration-user-profile-icon-youth-avatar-student-avatar-illustration-simple-cartoon-user-portrait-user-profile-276205531.jpg" class="team-img" alt="pic" />
                     
                      <h3>SUJAY HEGDE</h3>
                      
                      <div class="team-info"><p>INTERN</p></div>

                      <p>Sujay Hegde is a student in the department of Information Science and Engineering at Global Academy Of Technology RR Nagar,Bengaluru.
                        and pursuing internship at Alt Digital Technologies.</p>
                  
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter"id="blk"><i class="bi bi-twitter-x"></i></a></li>
                          
                          <li><a href="https://www.linkedin.com/in/sujay-hegde-18aa86182" class="linkedin"id="blk"><i class="bi bi-linkedin"></i></a></li>
                          
                          <li><a href="#" class="skype" id="blk"><i class="bi bi-skype"></i></a></li>
                          
                          <li><a href="https://github.com/SuJaY04O1" class="github"id="blk">
                            <i class="bi bi-github"></i>
                        </a></li>
                          
                      </ul>
                      
                  </div>
            </div> 
            <div class="col-sm-6 col-md-3">

                  <div class="team-item">
                
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpLh7KmBDkTrbsS4kUqwwn2g1qDJIFHiMct2IiC1WfvuRuyw8oIjTi8kDL7Zz-Mp6ytX0&usqp=CAU " class="team-img" alt="pic" />
                     
                      <h3> SAGAR K C</h3>
                      
                      <div class="team-info"><p>INTERN</p></div>

                      <p>Sagar is a student in the department of Information Science and Engineering at Global Academy Of Technology RR Nagar,Bengaluru.
                        and pursuing internship at Alt Digital Technologies</p>
                      <ul class="team-icon">
                      
                          <li><a href="https://twitter.com/Sagarkc30" class="twitter" id="blk"><i class="bi bi-twitter-x"></i></a></li>
                          
                          <li><a href="http://linkedin.com/in/sagar-k-c-2193b0256" class="linkedin" id="blk"><i class="bi bi-linkedin"></i></a></li>
                          
                          <li><a href="https://join.skype.com/invite/x0QwYpQt9n4h" class="skype" id="blk"><i class="bi bi-skype"></i></a></li>
                          
                          <li><a href="https://github.com/Sagarkc30" class="github" id="blk">
                            <i class="bi bi-github"></i>
                        </a></li>
                          
                      </ul>
                      
                  </div>

            </div> 
        
        </div> 
    
    </div> 

    </section>
    </>
    );
}
export default AboutUs;