const ctx = document.getElementById('myChart')

const skills = {
  // Backend
  Golang: 4.5,
  NodeJS: 3,
  Python: 1,

  // Frontend
  Angular: 3.5,
  React: 0.5,

  // IaC
  Terraform: 2,

  // DBs
  MySQL: 4.5,
  Postgres: 3,
  MongoDB: 3,

  // Infra
  AWS: 2,
  Azure: 1,
  'API Gateway': 2,
  WAF: 1,

  // Devops
  'Github Actions': 1,
  'Azure DevOps': 1,
  CircleCI: 2,

  // O11y
  DataDog: 1,
  ELK: 2,
  Prometheus: 1,
  Grafana: 1,
  'RDS Insights': 1,

  // Containers
  Docker: '8.5',
  Kubernetes: '1'
}

function sortObjectByValues(obj) {
  const entries = Object.entries(obj)
  entries.sort(([, a], [, b]) => b - a)
  const sortedKeys = entries.map(([key]) => key)
  const sortedValues = entries.map(([, value]) => value)

  return {k: sortedKeys, v: sortedValues}
}

const bleh = sortObjectByValues(skills)
const labels = bleh.k
const data = bleh.v
console.log(data, labels)

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Years of Hands On Professional Experience',
        data: data,
        borderWidth: 1
      }
    ]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    // datasets: {
    //   bar: {
    //     barThickness: 20, // Adjust as needed
    //     categoryPercentage: 0.8 // Adjust as needed
    //   }
    // },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          autoSkip: false
        }
      }
    }
  }
})
