const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('../config/client_keys.json');
const { promisify } = require('util');

const students = [];

const connectGoggleSheets = async (obj, action) => {
  try {
    const document = await new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_URI);
    await promisify(document.useServiceAccountAuth)(credentials);

    const data = await promisify(document.getInfo)();

    const sheet = await data.worksheets[1];

    const rows = await promisify(sheet.getRows)({
      offset: 1
    });

    if (action === 'show') {
      rows.forEach(row => {
        let student = {
          id: row.id,
          studentname: row.studentname,
          gender: row.gender,
          classlevel: row.classlevel,
          homestate: row.homestate,
          major: row.major,
          extracurricularactivity: row.extracurricularactivity
        };
        students.push(student);
        student = {};
      });
      return students;
    }
    if (action === 'create') {
      students.push(obj);
      await sheet.addRow(obj, error => {
        return `Something went wrong: ${error}.`;
      });
    }

    if (action === 'update') {
      await rows.forEach(row => {
        if (row.id === obj.id) {
          row.studentname = obj.studentname;
          row.gender = obj.gender;
          row.classlevel = obj.classlevel;
          row.homestate = obj.homestate;
          row.major = obj.major;
          row.extracurricularactivity = obj.extracurricularactivity;

          row.save(error => {
            return `${error}`;
          });
        }
      });
    }

    if (action === 'delete') {
      await rows.forEach(row => {
        if (row.id === obj.id) {
          row.del(error => `${error}`);
        }
      });
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectGoggleSheets({}, 'show');

module.exports = { students, connectGoggleSheets };
