var qrc = require('./qrc');



const test = async () => {
  qrc.Connect('192.168.42.148')
  .then(async function() {
    console.log('Connected!');
    qrc.Logon("QSC","5678");
    console.log(await qrc.Component.GetComponents());
  });
};

test();



