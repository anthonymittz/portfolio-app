import axios from 'axios';
import https from 'https';

const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

export async function loadComments() {
  try {
    const res = await api.get('https://localhost:5000/api/comments');
    return res.data.comments;
  } catch (error) {
    console.error(`[API] Error in loadComments: ${error.message}`);
  };
}

export async function loadComment(id) {
  try {
    const res = await api.get(`https://localhost:5000/api/comments/${id}`);
    return res.data.text;
  } catch (error) {
    console.error(`[API] Error in loadComments: ${error.message}`);
  }
}