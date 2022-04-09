const SHEET_ID = '1ZUwivoBYBgd_pQuAvRDDR5QOm8d4Dk2rRG9-GrKVGPM'
const ACCESS_TOKEN = 'ya29.A0ARrdaM8sMA0pWxnVylFi00WiVmcXiHTHcP_yR2nci7ZVDHztLAJruQdirIVrvc7zzb-xwb-GrwQGCywiPVfkzRBZryMjdYY4tqakYTv2293jiC26UuLJBIKXufCwglNGq3YVnjUg7s5EwZAFwAszvgErncWl';

const sheetsUpdate = (rows) => {
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //update this token with yours. 
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({

      "requests": [{
        "updateCells": {
          "range": {
            "startColumnIndex": 0,
            "endColumnIndex": 4,
            "startRowIndex": 0,
            "endRowIndex": 4,
            "sheetId": 0
          },
          "rows": rows,
          fields: "*"
        }
      }]

    })
  }).then(res => true)
    .then(error => error)
}

export default sheetsUpdate;