import settings from 'settings'

const gSheetsUpdater = (requests) => {
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${settings.google_sheet_id}:batchUpdate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${settings.google_access_token}`,
    },
    body: JSON.stringify({
      "requests": requests
    })
  }).then(res => true)
    .catch(error => error)
}

export default gSheetsUpdater;