import axios from 'axios';

class Cooladata {
  sendEvent(events){
    let jsonRec = JSON.stringify(events);
    const API_KEY = 'syyd0dfyl3ueczcgoosugsex7excgexs';
    const PROJECT_ID = '121109';
    axios({
      method:'post',
      url: `https://api.cooladata.com/v3/${PROJECT_ID}/track`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Token ${API_KEY}`//,
        //'crossDomain': true
      },
      data: {
        "events": [jsonRec]
        //[
        //   {"event_name":"page_load","user_id":"1001","event_timestamp_epoch":1436798955476,"first_name":"john","last_name":"doe"}//,
        //   // {"event_name":"login","user_id":"1005","event_timestamp_epoch":1436798956879,"first_name":"johanna","last_name":"jones"}
        //]
      }
    })
    // .then(function (response) {
    //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    // });
  }
}
let coolaData = new Cooladata();
export default coolaData;