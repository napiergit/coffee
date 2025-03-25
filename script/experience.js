const education = [
  {
    name: 'University of Stellenbosch',
    link: 'https://www.sun.ac.za',
    image: 'https://blogs.sun.ac.za/ccmd/files/2023/07/SU-Logo.png',
    title: 'Bachelor of Engineering',
    dates: '2010 - 2014',
    accomplishments: 'Electrical and Electronic',
    order: 1,
  },
]

const experiences = [
  {
    name: 'Jembi',
    link: 'https://www.jembi.org',
    image: 'img/jhs.svg',
    title: 'Junior Software Developer',
    dates: '12/2015 - 10/2017',
    // dates: '[2016 - 2018)',
    accomplishments: 'Full stack',
    order: 1,
  },
  {
    name: 'Luno',
    link: 'https://www.luno.com',
    image: 'https://altcoinsbox.com/wp-content/uploads/2023/04/full-luno-logo.png',
    title: 'Full Stack Technical Lead',
    dates: '10/2017 - 02/2021',
    // dates: '[2018 - 2021)',
    accomplishments: 'Cross-functional teamwork',
    order: 2,
  },
  {
    name: 'Paystack',
    link: 'https://paystack.com',
    image: 'img/paystack.svg',
    title: 'Senior Software Engineer',
    dates: '02/2021 - 01/2022',
    // dates: '[2021 - 2022)',
    accomplishments: 'Migrations and Integrations',
    order: 3,
  },
  {
    name: 'Merge',
    link: 'https://www.merge.money',
    image: 'https://cdn.prod.website-files.com/64ae94d714672f239e520a55/64ae9bf3d769aedd08270d58_Merge-logo-white.svg',
    title: 'Head of Engineering',
    dates: '01/2022 - 03/2023',
    // dates: '[2022 - 2023)',
    accomplishments: 'Zero to One',
    order: 4,
  },
  {
    name: 'IQVIA',
    link: 'https://www.iqvia.com',
    image: 'https://iqvia.com/-/media/iqvia/iqvia_lg_hrz_rgb.svg',
    title: 'Lead Cloud Engineer',
    dates: '07/2023 - 12/2024',
    // dates: '[2024 - 2025)',
    accomplishments: 'Maintenance',
    order: 5,
  },
]

const genHtml = (items) => {
  let html = '';

  const blah = items.sort((a, b) => b.order - a.order);

  blah.forEach((item) => {
    html += `
      <div class="experience-container"
           style="cursor: pointer;"
           onclick="openInNewTab('${item.link}')">
        <div class="experience-image">
          <img src="${item.image}"/>
        </div>
        <div class="experience-description">
          <div class="experience-title">${item.title}</div>
          <div class="experience-accomplishments">${item.accomplishments}</div>
          <div class="experience-dates">${item.dates}</div>
        </div>
      </div>
      `;
  });
  return html
}

const eduHtml = genHtml(education)
const expHtml = genHtml(experiences)

document.addEventListener("DOMContentLoaded", function() {
  const exp = document.getElementById('experiences-container');
  const edu = document.getElementById('education-container');
  exp.innerHTML = expHtml;
  edu.innerHTML = eduHtml;
})

