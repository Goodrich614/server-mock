const { getPatients } = require('./server.js');
const { sanitize } = require('./sanitizeString.js');
const { notEmpty } = require('./emptyObj.js');

const data = getPatients();

for (let i = 0; i < data.length; i++) {

    if (notEmpty(data[i].name)) {
        data[i].name = sanitize(data[i].name);
        let lastVisit = data[i].visits.length - 1; 
        let lastVisitDate = data[i].visits[lastVisit].date;
        let name = data[i].name; 
        console.log(name, lastVisitDate);
    }
    
}
