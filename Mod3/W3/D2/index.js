const standupData = [
    {
        developer: 'bsalsieder',
        tasks:[
            {taskName:'fix bug', status:'active'},
            {taskName:'new feature', status:'active'},
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

// const firstDev = standupData[0]


function makeEmailTextForAllDevelopers(devData){
    // const developerTextx = devData.map((data) => makeEmailTextFromDeveloper(data))
    const developerTexts = devData.map(makeEmailTextFromDeveloper)
    return developerTexts.join('\n =======')
}

function makeEmailTextFromDeveloper(devData){
    const devName = devData.developer
    const activeTasksText = makeBulletedListOfTasksWithStatus(devData, "active")
    const completedTaskText = makeBulletedListOfTasksWithStatus(devData, "completed")
    return `
        Dev Name: ${devName}
        Active Tasks:
        ${activeTasksText}
        Completed Tasks:
        ${completedTaskText}
    `
}

function makeBulletedListOfTasksWithStatus(taskList, status){
    const tasks = taskList.tasks.filter(task => task.status === status)
    const tasksNames = tasks.map(task => task.taskName)
    const tasksNamesHyphens = tasksNames.map(name => '- ' + name)
    const tasksText = tasksNamesHyphens.join('\n')
    return tasksText
}

const emailBodyText = makeEmailTextForAllDevelopers(standupData)
console.log(emailBodyText)