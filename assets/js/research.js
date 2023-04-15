/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Recent Trends for Smart Environments With AI and IoT-Based Technologies",
    authors:
      "Atharva Deshmukh; Disha S. Patil; Pratap Pawar; Shabnam Kumari; Muthulakshmi P.",
    conferences:
      "Book: Handbook of Research on Quantum Computing for Smart Environments",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/Book-cover.png",
    citation: {
      vancouver:
        "Deshmukh, A., Patil, D. S., Pawar, P. D., Kumari, S., & P., M. (2023). Recent Trends for Smart Environments With AI and IoT-Based Technologies: A Comprehensive Review. In A. Tyagi (Ed.), Handbook of Research on Quantum Computing for Smart Environments (pp. 435-452). IGI Global. https://doi.org/10.4018/978-1-6684-6697-1.ch023",
    },
    abstract:
      "One of the most fascinating technological components of an ambient intelligence system is its potential to behave independently for the benefit of humans. We used to be able to pinpoint exactly where computers were and how they affected our lives. This has steadily blurred, and now various types of computing devices are all around us, implanted in numerous objects we interact with and thereby influencing our lives. There are signs that this tendency is unstoppable, and that computers and society will now interact in considerably deeper ways than before, to the point where computing will become invisible to people while remaining deeply linked in our daily lives. Looking back on 20 years of educational research, the authors retrieved more than 400 research articles based on the application of artificial intelligence (AI) and internet of things (IoT) techniques in teaching and learning.",
    absbox: "absPopup1",
  },


 
  

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
