import axios from 'axios'

function makeEmailTextForAllDevelopers(devData){
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

export async function emailBody(){
    const resp = await axios.get('http://localhost:3000/tasks')
    const emailBodyText = makeEmailTextForAllDevelopers(resp)
    return emailBodyText
}