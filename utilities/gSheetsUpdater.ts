const SHEET_ID = '1ZUwivoBYBgd_pQuAvRDDR5QOm8d4Dk2rRG9-GrKVGPM'
const ACCESS_TOKEN = 'ya29.A0ARrdaM-07SGaYqNnzJdpnZi760ewxW-tPg2nnl7pxXvHbkbu3uOm5s-Dbf82coXB5coIB_rmlEs7mJYe3I0cvf4n2hxziBBge8WC_PdIdl3QUxJi051hhdYdLHVnffRQKrLtkpmiGDk73gQw07Of5FpiZhfx';

const gSheetsUpdater = (requests) => {
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      "requests": requests
    })
  }).then(res => true)
    .catch(error => error)
}

export default gSheetsUpdater;