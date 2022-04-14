const dev = process.env.NODE_ENV !== 'production';

export default {
  host: dev ? 'http://localhost:3000' : '',
  google_sheet_id: '1ZUwivoBYBgd_pQuAvRDDR5QOm8d4Dk2rRG9-GrKVGPM',
  google_access_token: 'ya29.A0ARrdaM-7pkaJFydnVyx6cBmOvyYt5ccGqCxhNx7rn58WExAdD3fNcnrhcnaGpOLm9B9leCNEjeiOTu9eag5DkQfDwG_j-rzFoDFuE_2qpchSmk72bxRPzroHHmRXQA4i1HrLCQWKj3wI2rRBG_eRKrV2x7v5',
  google_sheet_tabs: {
    'sources': 1194726499,
    'scrapped': 0,
    'averages': 193399632
  }
}