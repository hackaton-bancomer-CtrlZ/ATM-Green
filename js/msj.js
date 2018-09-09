const accountSid = 'AC007a6122fe849ef5bcb94e0eb70c3bf5'; 
const authToken = '3a203c551580b27ba5b224b938f4f1a0'; 
const client = require('twilio')(accountSid, authToken); 

const sendMessage = () => {
  client.messages 
      .create({ 
         body: 'hlamike desde nodeo', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+525559650719' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
}

sendMessage();