import React from 'react'
import './Resume.css'
import {useState} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Resume({UserFirstName,
                                UserLastName,
                                 UserWorkPost,
                                  UserSkills,
                                  UserProjects,
                                  UserEducation,
                                  UserAchievement,
                                  UserDomain,
                                  UserObjectives,
                                  UserMobile,
                                  UserMail,
                                  UserLinkedIn,
                                  UserGitHub,
                                  UserLocation,
                                  UserInternships,
                                  UserInterests,
                                  UserLanguages,
                                  FormDisplay,
                                  selectedImage 

                              
                              },props) {


                                const [loader, setLoader] = useState(false);

                                const downloadPDF = () =>{
                                  const capture = document.querySelector('.resumeWholeBack');
                                  setLoader(true);
                                  html2canvas(capture).then((canvas)=>{
                                    const imgData = canvas.toDataURL('img/png');
                                    const doc = new jsPDF('p', 'mm', 'a4');
                                    const componentWidth = doc.internal.pageSize.getWidth();
                                    const componentHeight = doc.internal.pageSize.getHeight();
                                    doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
                                    setLoader(false);
                                    doc.save('Resume-from-workfolios-by-soumen-bhunia.pdf');
                                  })
                                }

  return (
    
    <>



    <div className="ResumeWhole-body">

      <div className="resumeWholeBack">
      <div className="ResumeHead">

            <div className="imageleft">
                  {selectedImage && (
                      <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
                  )}

                  <div className="Name-post">
                      <h1> {UserFirstName}  </h1>
                      <h1> {UserLastName}</h1>
                  </div>
                  <h4>{UserWorkPost}</h4>
             </div>

        </div>
      <div className="ResumeDetails">
        <div className="rightWhiteDiv">



        
                                  {UserSkills}<br/>
                                  {UserProjects}<br/>
                                  {UserEducation}<br/>
                                  {UserAchievement}<br/>
                                  {UserDomain}<br/>
                                  {UserObjectives}<br/>
                                  {UserMobile}<br/>
                                  {UserMail}<br/>
                                  {UserLinkedIn}<br/>
                                  {UserGitHub}<br/>
                                  {UserLocation}<br/>
                                  {UserInternships}<br/>
                                  {UserInterests}<br/>
                                  {UserLanguages}<br/>

        </div>
        
      </div>
        
                                   
                                  
        
      
     
                                 
     </div>

      <div className="receipt-actions-div">
            <div className="actions-right">
              <button
                className="receipt-modal-download-button"
                onClick={downloadPDF}
                disabled={!(loader===false)}
              >
                {loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download</span>
                )}

              </button> 
            </div>
          </div>

    
    </div>
    
    
    </>
  )
}
