AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Site Reliability Engineer Intern",
    cardImage: "assets/images/experience-page/Leadsquared.png",
    place: "LeadSquared",
    time: "(Dec 2024 - Present)",
    desp: "<li>Managed production incidents (P0–P3) and ensured real-time infrastructure monitoring across AWS services including EC2, RDS, OSS, SQS, and more.</li> <li>Led alert investigation, incident resolution, infrastructure tuning, and cost optimization in high-availability environments.</li> <li>Developed internal tools like PagerDuty Schedule Manager and Anomaly Detection system to automate overhead tasks and aid Root Cause Analysis.</li> <li>Enhanced system reliability by implementing proactive monitoring and observability using Grafana, CloudWatch, Site24x7, New Relic, and Loggly.</li>"
  },
  {
    title: "Software Engineering Intern",
    cardImage: "assets/images/experience-page/mojaloop.jpg",
    place: "Mojaloop Foundation",
    time: "(Jun 2024 - Sep 2024)",
    desp: "<li>Developed a service demo of Mojaloop’s Payment Initiation Service Provider, potentially reducing onboarding time by 30%.</li> <li>Collaborated with mentors of DMP 2024 on Mojaloop's PISP system, gaining skills in Microservices, Docker, and APIs.</li> <li>Contributed to scalable financial inclusion for underserved communities globally, simplifying adoption of Mojaloop's system.</li>",
  },

  {
    title: "Full Stack Developer Intern",
    cardImage: "assets/images/experience-page/clipsi.jpg",
    place: "Clipsi.co",
    time: "(Mar 2024 - May 2024)",
    desp: "<li>Integrated Clipsi.co's Gen AI tech, employing MERN and OpenAI, boosting core functionality speed by 50%.</li> <li>Delivered a high-quality, production-ready AI product within a 6-week timeline, meeting stringent quality benchmarks.</li> <li>Demonstrated skills in integrating advanced AI models, enhancing overall product functionality up to 90%.</li>",
  },

  {
    title: "Game Developer Intern",
    cardImage: "assets/images/experience-page/Akiyam.png",
    place: "Akiyam Solutions Private Limited",
    time: "(Feb 2023 - Oct 2023)",
    desp: "<li>Developed intricate game maps and devised engaging player interaction strategies using Unreal Engine 5.1.</li> <li>Delivered two refined game maps after extensive learning and practice, showcasing competence in utilizing Unreal Engine 5.1 for immersive gaming experiences.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Dev Code",
    cardImage: "assets/images/experience-page/3.png",
    description:
      "dev community dedicated to empowering aspiring devs by fostering meaningful connections, providing hands-on opportunities. (Community Builder)",
  },
  {
    title: "FOSSASIA",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Open Technologies developed in Asia and Around the Globe (Organization Team member)",
  },
  {
    title: "Mojaloop Foundation",
    cardImage: "assets/images/experience-page/Mojaloop(2).jpg",
    description:
      "Mojaloop Foundation is a non-profit organization that promotes financial inclusion through open-source payment solutions. Contributed as an open-source developer and intern under DMP 2024, working on Mojaloop’s PISP system to enhance financial inclusion through scalable, open-source digital payment solutions.",
  },
  {
    title: "DEVs Dungeon",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Open Learning Community connecting Students, Mentors, Job Seekers and Recruiters from across the world! (Community Manager)",
  },
 


];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
 
  {
    title: "ATMECS Global - GEN AI Hackathon",
    subtitle: "🤖 National Finalist",
    image: "assets/images/experience-page/atmecs.png",
    desp: "Top 12 of 4900+ Teams (2024)",
    href: "https://www.hackerearth.com/challenges/hackathon/atmecs-hackathon-2024/",
    target: "_blank"
  },
  {
    title: "Rakuten - Rakathon 2024",
    subtitle: "🚀 Grand Finalist",
    image: "assets/images/experience-page/rakathon2024.png",
    desp: "Top 100 of 8900+ Teams (2024)",
    href: "https://corp.rakuten.co.in/rakathon-2024/",
    target: "_blank"
  },
  {
    title: "GE Healthcare - Precision Care Challenge",
    subtitle: "⚕️ National Finalist",
    image: "assets/images/experience-page/gehealthcare.png",
    desp: "Top 12 of 900+ Teams (2024)",
    href: "https://www.linkedin.com/posts/pratappawar_pcc-2024-grand-finale-ge-healthcare-activity-7216752817087123456-n4zt",
    target: "_blank"

  },
  {
    title: "Smart India Hackathon - AICTE",
    subtitle: "🏅 National Finalist",
    image: "assets/images/experience-page/sih.jpg",
    desp: "Top 6 of 500+ Teams (2023)",
    href: "https://www.sih.gov.in/sih2023s",
    target: "_blank"
  },
  {
    title: "Mojaloop Foundation X Samagra Governance",
    subtitle: "💫 C4GT DMP'24 Contributor",
    image: "assets/images/experience-page/c4gt.png",
    desp: "INR 1 Lakh Grant Secured (2024)",
    href: "https://codeforgovtech.in/completed-project/mojaloop/",
    target: "_blank"
  },
  {
    title: "Central Pollution Control Board",
    subtitle: "🌱 National Finalist",
    image: "assets/images/experience-page/cpcb-logo.jpeg",
    desp: "Top 5 Teams across nation - Trash to Treasure (2023)",
    href: "https://cpcb.nic.in/shortlisted-participants/",
    target: "_blank"
  },
  {
    title: "VIT UnPlugged Hackathon",
    subtitle: "⚡ Grand Finalist",
    image: "assets/images/experience-page/vitb.png",
    desp: "Top 11 of 110+ Teams (2023)",
    href: "#",
    target: "_blank"

  },
  {
    title: "Code Hack 2023",
    subtitle: "🎪 Event Organizer",
    image: "assets/images/experience-page/code-hack.jpg",
    desp: "1200+ Participants",
    href: "https://unstop.com/hackathons/code-hack-2023-dev-code-community-557528",
    target: "_blank"

  },
  {
    title: "L&T TECHgium 7.0",
    subtitle: "🛠️ Pre-Grand Finale",
    image: "assets/images/experience-page/techgium.png",
    desp: "Top 175 of 4400+ Teams (Dec 2023)",
    href: "https://ltts.techgium.com/",
    target: "_blank"
  },
  {
    title: "Google Crowdsource",
    subtitle: "🎯 Vocalize Campaign",
    image: "assets/images/experience-page/google-crowdsource.png",
    desp: "Top Contributor (2022)",
    href: "https://sowmiyeh.medium.com/vocalize-indian-languages-campaign-by-google-crowdsource-c0f753fb3984",
    target: "_blank"
  },

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
