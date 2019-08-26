function findChatID() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ui = SpreadsheetApp.getUi();
  var sheet = ss.getSheets()[2];
  var cell = sheet.getRange(2, 4)
  var cellFirstName = sheet.getRange(3, 4)
  var cellLastName = sheet.getRange(4, 4)

  var ipTokken = "492559927:AAG4ql6_sE9xt0OSE-HCQJNTfKc2VUfBfKQ"
  var url = "https://api.telegram.org/bot" + ipTokken + "/getUpdates"
  var openUrl = UrlFetchApp.fetch(url).getContentText();

  var data = JSON.parse(openUrl);
  var length = data.result.length;

  Logger.log(data.result)

  if (length == 0) {
    ui.alert('Сначала создайте чат в телеграмме');
  } else {
    var chatId = data.result[length - 1].message.chat.id;
    var firstName = data.result[length - 1].message.from.first_name;
    var lastName = data.result[length - 1].message.from.last_name;

    cell.setValue(chatId)
    cellFirstName.setValue(firstName)
    cellLastName.setValue(lastName)
  }
}