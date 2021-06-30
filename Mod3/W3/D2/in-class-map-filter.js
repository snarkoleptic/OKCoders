const nodemailer = require('nodemailer')

const standupData = [
    {
        developer: 'bsalsieder',
        tasks:[
            {taskName:'fix bug', status:'active'},
            {taskName:'new feature', status:'stuck'},
            {taskName: 'curl in a ball and weep', status:'completed'}
        ]
    },
    {
        developer: 'snark0leptic',
        tasks:[
            {taskName:'fix big bug', status:'active'},
            {taskName:'new feature', status:'complete'},
            {taskName: 'curl in a ball and weep', status:'stuck'}
        ]
    }
]


// Learning the map array method, creates an array or same length as input with mutations to original data
const devNames = standupData.map((elem) => elem.developer)
// console.log(devNames)

const firstTask = standupData.map((elem)=> elem.tasks[0].taskName)
// console.log(firstTask)

const allStatuses = standupData.map((elem)=>elem.tasks.map((tasks)=>tasks.status))
// console.log(allStatuses)

// Learning the filter array method, creates an array filtered down to a new length from source array, but the data is not mutated.
const firstDev = standupData[0]
const firstDevActiveTask = firstDev.tasks.filter(task => task.status === 'active')
// console.log(firstDevActiveTask)

// Template strings
const emailBody = `
    Hello ${devNames}, your statuses are as follows:
    ${allStatuses}
`
console.log(emailBody)