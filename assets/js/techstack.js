AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  // === CLOUD & DEVOPS ===
  {
    langImage: "assets/images/techstack-page/aws.png",
    langName: "Amazon Web Services",
    langDesc: "<li>⭐⭐⭐⭐⭐ – Prod experience across EC2, RDS, Lambda, S3, SQS 🚀</li>",
  },
  {
    langImage: "assets/images/techstack-page/newrelic.png",
    langName: "New Relic",
    langDesc: "<li>⭐⭐⭐ – Used for application monitoring, metrics, and RCA insights 📈</li>",
  },  
  {
    langImage: "assets/images/techstack-page/docker.png",
    langName: "Docker",
    langDesc: "<li>⭐⭐⭐⭐ – Used for containerizing microservices in multiple projects 🐳</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>⭐⭐⭐⭐⭐ – Version control wizard 🧙, essential for SRE & DevOps</li>",
  },
  {
    langImage: "assets/images/techstack-page/linux.png",
    langName: "Linux",
    langDesc: "<li>⭐⭐⭐⭐ – Daily driver for infra mgmt, automation & terminal work 🖥️</li>",
  },
  {
    langImage: "assets/images/techstack-page/cicd.png", // make sure you have this image
    langName: "CI/CD Pipelines",
    langDesc: "<li>⭐⭐⭐ – Basic CI/CD knowledge, integrated in SRE pipelines ⚙️</li>",
  },

  // === MONITORING & OBSERVABILITY ===
  {
    langImage: "assets/images/techstack-page/grafana.png",
    langName: "Grafana",
    langDesc: "<li>⭐⭐⭐⭐ – Real-time monitoring dashboards for infra 📊</li>",
  },
  {
    langImage: "assets/images/techstack-page/aws.png",
    langName: "AWS CloudWatch",
    langDesc: "<li>⭐⭐⭐⭐ – Infra alerts, logs & metrics for AWS services ⏱️</li>",
  },
  {
    langImage: "assets/images/techstack-page/pagerduty.png",
    langName: "PagerDuty",
    langDesc: "<li>⭐⭐⭐ – On-call schedules, incident response & escalation 🚨</li>",
  },

  // === BACKEND & AUTOMATION ===
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>⭐⭐⭐⭐ – Main language for scripting, automation & backend 🐍</li>",
  },
  {
    langImage: "assets/images/techstack-page/nodejs.png",
    langName: "Node.js",
    langDesc: "<li>⭐⭐⭐ – Used in GPT-Locker, Chrome extension backend 🔌</li>",
  },
  {
    langImage: "assets/images/techstack-page/mysql.png",
    langName: "MySQL",
    langDesc: "<li>⭐⭐⭐ – RDBMS used in multiple projects 📚</li>",
  },
  {
    langImage: "assets/images/techstack-page/mongodb.png",
    langName: "MongoDB",
    langDesc: "<li>⭐⭐⭐ – Document DB used in projects like TechNexus 📄</li>",
  },

  // === FRONTEND & UI ===
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>⭐⭐⭐⭐ – Used to build scalable UIs (TechNexus, open-source) ⚛️</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>⭐⭐⭐ – Core scripting for frontend, browser extensions 💻</li>",
  },
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HTML5",
    langDesc: "<li>⭐⭐⭐ – Markup backbone for UIs 🧱</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "CSS3",
    langDesc: "<li>⭐⭐⭐ – Styling projects with modern layouts 🎨</li>",
  },
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    langName: "Bootstrap",
    langDesc: "<li>⭐⭐ – Used in small-scale frontend projects 👞</li>",
  },

  // === EXTRA / MISC ===
  {
    langImage: "assets/images/techstack-page/bash.png",
    langName: "Bash",
    langDesc: "<li>⭐⭐⭐ – Infra scripts & CLI utilities for automation 💻</li>",
  },
  {
    langImage: "assets/images/techstack-page/java.png",
    langName: "Java",
    langDesc: "<li>⭐⭐ – Academic use, not currently in primary stack ☕</li>",
  },
];


const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
