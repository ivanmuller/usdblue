import settings from 'settings'

const gSheetsRequester = async (range) => {
  const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${settings.google_sheet_id}/values/${range}?valueRenderOption=UNFORMATTED_VALUE`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${settings.google_access_token}`
      }
    });
  const data = await request.json();
  return data
}

export default gSheetsRequester