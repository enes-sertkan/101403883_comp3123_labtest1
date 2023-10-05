const fs = require('fs');
const path = require('path');

// Function to remove log files
function removeLogFiles() {
    const logsDirectory = path.join(__dirname, 'Logs');

    if (fs.existsSync(logsDirectory)) {
        const filesToRemove = fs.readdirSync(logsDirectory);

        console.log('Files to delete:');
        filesToRemove.forEach((file) => {
            console.log(file);
            fs.unlinkSync(path.join(logsDirectory, file));
        });

        fs.rmdirSync(logsDirectory);
        console.log('Logs directory removed.');
    } else {
        console.log('Logs directory does not exist.');
    }
}

// Function to create log files
function createLogFiles() {
    const logsDirectory = path.join(__dirname, 'Logs');

    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
    }

    process.chdir(logsDirectory);

    console.log('Current working directory changed to Logs directory.');

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        const filePath = path.join(logsDirectory, fileName);
        const content = `This is log file ${i}.`;

        fs.writeFileSync(filePath, content);
        console.log(`Created ${fileName}`);
    }
}

// Uncomment and run the functions as needed
removeLogFiles(); // Uncomment to remove log files and directory
//createLogFiles(); // Uncomment to create log files