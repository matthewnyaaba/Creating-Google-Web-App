function doPost(e) {
  try {
    var SHEET_ID = "1oCewDy7996czqyv8DxNWuXn9591GlWHnZO2w2NWBWbo";
    var sheet = SpreadsheetApp.openById(SHEET_ID);
    var activeSheet = sheet.getActiveSheet();
    
    if (activeSheet.getLastRow() === 0) {
      var headers = [
        "Timestamp",
        "Name", 
        "Email",
        "Country",
        "Session Attended",
        "Overall Rating",
        "Content Rating", 
        "Facilitator Rating",
        "Most Valuable Aspects",
        "Learning Objectives Met",
        "Confidence Level",
        "What You Liked Most",
        "Suggestions for Improvement", 
        "Would Recommend",
        "Future Topics",
        "Additional Comments"
      ];
      
      var headerRange = activeSheet.getRange(1, 1, 1, headers.length);
      headerRange.setValues([headers]);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4285f4");
      headerRange.setFontColor("white");
    }
    
    var data = JSON.parse(e.parameter.data);
    
    var rowData = [
      new Date(),
      data.name || "",
      data.email || "",
      data.country || "",
      data.session || "",
      data.overall_rating || "",
      data.content_rating || "",
      data.facilitator_rating || "",
      Array.isArray(data.valuable) ? data.valuable.join(", ") : (data.valuable || ""),
      data.learning_objectives || "",
      data.apply_learning || "",
      data.liked_most || "",
      data.improvements || "",
      data.recommend || "",
      data.future_topics || "",
      data.additional_comments || ""
    ];
    
    activeSheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        "result": "success",
        "message": "Feedback saved successfully!"
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        "result": "error",
        "message": error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput("Webinar Feedback Form Handler is active!")
    .setMimeType(ContentService.MimeType.TEXT);
}
