import React from 'react';

function EducationSection() {
  return (
    <div className="educationSection">
      <div className='educationDiv'>
          <button className='education-year-btn'>2015</button>
          <div className='education-detail-box'>
            <h3>10th</h3>
            <p>Madhya Pradesh Board </p>
            <h5>Ideal H. S. School, Indore, M. P. </h5>
          </div>
      </div>
      <div className='educationDiv'>
          <button className='education-year-btn'>2017</button>
          <div className='education-detail-box'>
            <h3>12th</h3>
            <p>Madhya Pradesh Board </p>
            <h5>Shri Barfani Convent H. S. School, Indore, M. P.</h5>
          </div>
      </div>
      <div className='educationDiv'>
          <button className='education-year-btn'>2020</button>
          <div className='education-detail-box'>
            <h3 >Under Graduation</h3>
            <p >Bachelor of Computer Applications(BCA)</p>
            <h5 >Dr. APJ Abdul Kalam University, Indore, M. P.</h5>
          </div>
      </div>
      <div className='educationDiv'>
          <button className='education-year-btn'>2024</button>
          <div className='education-detail-box'>
            <h3 >Post Graduation</h3>
            <p >Master of Computer Applications(MCA)</p>
            <h5 >National Institute Of Technology, Tiruchirappalli</h5>
          </div>
      </div>
    </div>
  );
}

export default EducationSection;
