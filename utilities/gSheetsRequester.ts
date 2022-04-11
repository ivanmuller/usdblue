const SHEET_ID = '1ZUwivoBYBgd_pQuAvRDDR5QOm8d4Dk2rRG9-GrKVGPM'
const ACCESS_TOKEN = 'ya29.A0ARrdaM-07SGaYqNnzJdpnZi760ewxW-tPg2nnl7pxXvHbkbu3uOm5s-Dbf82coXB5coIB_rmlEs7mJYe3I0cvf4n2hxziBBge8WC_PdIdl3QUxJi051hhdYdLHVnffRQKrLtkpmiGDk73gQw07Of5FpiZhfx';

const gSheetsRequester = async (range) => {
  const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?valueRenderOption=UNFORMATTED_VALUE`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });
  const data = await request.json();
  return data
}

export default gSheetsRequester