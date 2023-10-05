const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        console.log(success);
    }, 500);
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error(`error: delayed exception`);
        } catch (e) {
            let error = { 'error': e.message };
            console.error(error);
        }
    }, 500);
}

delayedSuccess();
delayedException();


const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = { 'message': 'delayed success!' };
            resolve(success);
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error(`error: delayed exception`);
            } catch (e) {
                let error = { 'error': e.message };
                reject(error);
            }
        }, 500);
    });
}

resolvedPromise()
    .then((result) => {
        console.log('Resolved:', result);
    })
    .catch((error) => {
        console.error('Rejected:', error);
    });

rejectedPromise()
    .then((result) => {
        console.log('Resolved:', result);
    })
    .catch((error) => {
        console.error('Rejected:', error);
    });
