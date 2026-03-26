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
    name: 'Jembi Health Systems',
    link: 'https://www.jembi.org',
    image: 'img/jhs.svg',
    title: 'Junior Software Developer',
    dates: '12/2015 - 10/2017',
    // dates: '[2016 - 2018)',
    accomplishments: 'Full stack',
    responsibilities: [
      "Contributed to in-house open source repositories",
      "Developed new features, fixed bugs, and improved documentation",
      "Focused on reliability, compliance and data quality",
      // "Deployed and maintained public health implementations of company-owned open source software",
      "Deployed and maintained public health software implementations",
    ],
    stack: [
      "Node",
      "Mongo",
      "Angular",
      "Digital Ocean",
      "Ansible",
      "Github",
    ],
    order: 1,
  },
  {
    name: 'Luno',
    link: 'https://www.luno.com',
    image: 'https://altcoinsbox.com/wp-content/uploads/2023/04/full-luno-logo.png',
    // title: 'Full Stack Software Developer',
    title: 'Full Stack Engineer',
    dates: '10/2017 - 02/2021',
    // dates: '[2018 - 2021)',
    accomplishments: 'Cross-functional teamwork',
    responsibilities: [
      "Backend role on cross functional team",
      "Responsible for the sign up to buy funnel",
      // "Used data and experiments to determine effectiveness of new features on key metrics",
      "Data driven feature impact on key metrics",
      // "Worked as a team to design, implement and monitor success of features: buy with credit card, repeat buy, GDPR compliance, GTM (WIP) and promotions",
      "Buy with credit card",
      "Recurring purchases",
      "GDPR compliance",
      "Google Tag Manager and marketing promotions",
    ],
    stack: [
      "Go",
      "MySQL",
      "Angular",
      "K8s",
      "AWS",
      "Terraform",
      "Grafana",
      "ELK",
    ],
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
    responsibilities: [
      "Data migrations for security and operations teams",
      "Card provider integrations for the payments team",
    ],
    stack: [
      "Node",
      "MySQL",
      "Mongo",
      "K8s",
      "AWS",
      "Github",
      "Terraform",
      "Datadog",
      // "Angular",
      // "Loggly",
    ],
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
    responsibilities: [
      "Designed and implemented a payment gateway",
      "Built a ledger",
      "Integrated with payments providers",
      "Banking security and compliance",
    ],
    stack: [
      "Python",
      "Postgres",
      "React",
      "AWS",
      "Github",
      "Terraform",
      "ELK",
    ],
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
    responsibilities: [
      "Developed and maintained the in-house OAuth system",
      "Built on top of Azure B2C for healthcare provider SSO",
    ],
    stack: [
      "Go",
      "Postgres",
      "React",
      "K8s",
      "Azure",
      "Terraform",
      "ELK",
    ],
    order: 5,
  },
  {
    name: 'Scrums.com',
    hideFromHistory: true,
    link: 'https://prosus.com',
    secondaryLink: 'https://scrums.com',
    image: 'https://www.prosus.com/~/media/Images/P/prosus-corp-v2/logo/logo.png',
    secondaryImage: 'https://cdn.prod.website-files.com/6489c69e685986b7b33c53e8/68303d4e66d5bc192fb6b473_logo_text.svg',
    role: 'Independent Contractor',
    contractedTo: 'Prosus',
    title: 'Principal Software Engineer',
    secondaryTitle: 'Independent Contractor',
    dates: '01/2025 - Present',
    accomplishments: 'AI Integration',
    responsibilities: [
      "Built MCPs to give AI agents agency",
      "Designed and implemented multi tenant authn and authz for MCPs",
    ],
    stack: [
      "AWS",
      "Claude",
    ],
    order: 6,
  },
]

const genHtml = (items) => {
  let html = '';

  const blah = items.sort((a, b) => b.order - a.order);

  blah.forEach((item) => {
    if (item.hideFromHistory) return;
    if (item.secondaryImage) {
      html += `
        <div class="experience-container"
             style="width: 360px; max-width: 100%;">
          <div style="display: flex; flex-direction: row; width: 100%; justify-content: space-evenly; gap: 10px;">
            <div style="display: flex; flex-direction: column; flex: 1; align-items: center; cursor: pointer;" onclick="openInNewTab('${item.link}')">
              <div class="experience-image">
                <img src="${item.image}"/>
              </div>
              <div class="experience-description">
                <div class="experience-title">${item.title}</div>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; flex: 1; align-items: center; cursor: pointer;" onclick="openInNewTab('${item.secondaryLink || item.link}')">
              <div class="experience-image">
                <img src="${item.secondaryImage}"/>
              </div>
              <div class="experience-description">
                <div class="experience-title">${item.secondaryTitle}</div>
              </div>
            </div>
          </div>
          <div class="experience-description" style="width: 100%; margin-top: 5px;">
            <div class="experience-accomplishments">${item.accomplishments}</div>
            <div class="experience-dates">${item.dates}</div>
          </div>
        </div>
      `;
    } else {
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
    }
  });
  return html
}


const genRolesHtml = (items) => {
  let html = '<h3>Roles</h3>';

  const blah = items.sort((a, b) => b.order - a.order);

  blah.forEach((item) => {
    // let resHtml = '<pre>';
    let resHtml = '';
    let stackHtml = '';

    // item.responsibilities.forEach((r) => {
    //   resHtml += `
    //     <li>${r}</li>
    //   `
    // })
    // resHtml += '<br>';

    item.responsibilities.forEach((r, i) => {
      resHtml += `\n\t${i + 1}. ${r}`
    })
    // resHtml += '</pre>';

    let counter = 0;
    item.stack.forEach((s) => {
      stackHtml += `${s}`
      if (++counter < item.stack.length) { stackHtml += ', ' };
    })

    let roleStr = item.role ? `\n  Role: ${item.role}` : '';
    let projStr = item.contractedTo ? `\n  Contracted To: ${item.contractedTo}` : item.project ? `\n  Project: ${item.project}` : '';

    html += `
      <div class="roles-container">
        <pre>
  Company: ${item.name}${roleStr}${projStr}
  Title: ${item.title}
  Stack: ${stackHtml}
  Responsibilities: ${resHtml}
        </pre>
      </div>
      `;

    // html += `
    //   <div class="roles-container">
    //     <pre>
    //       <pre class="role-company">Company: ${item.name}</pre>
    //       <pre class="role-title">Title: ${item.title}</pre>
    //       <pre class="role-stack">Stack: ${stackHtml}</pre>
    //       <pre class="role-description">Responsibilities: <ol>${resHtml}</ol></pre>
    //     </pre>
    //   </div>
    //   `;
  });
  return html
}

const eduHtml = genHtml(education)
const expHtml = genHtml(experiences)

const rolesHtml = genRolesHtml(experiences)

document.addEventListener("DOMContentLoaded", function () {
  const exp = document.getElementById('experiences-container');
  const edu = document.getElementById('education-container');
  const rol = document.getElementById('roles-container');

  exp.innerHTML = expHtml;
  edu.innerHTML = eduHtml;
  rol.innerHTML = rolesHtml;
})

