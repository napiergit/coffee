
const prof = document.getElementById('proficiency');

const profHtml = `
        <h3>Proficiency</h3>
        <p class="indent">
          <span><pre>
  Frontend (Web, APIs)
   - Full Stack Software Engineer
          </pre></span>
        </p>
        <p class="indent">
          <span><pre>
  Backend (Microservices, APIs, Events, Fault Tolerance)
   - Senior Backend Engineer
   - Backend Architect
          </pre></span>
        </p>
        <p class="indent">
          <span><pre>
  Data (Operational, Analytics, Lake, ETL, Migration)
   - Data Engineer
          </pre></span>
        </p>
        <p class="indent">
          <span><pre>
  DevOps (CI/CD, Security, IaC, O11y)
   - Platform Engineer
          </pre></span>
        </p>
`

prof.innerHTML = profHtml;
