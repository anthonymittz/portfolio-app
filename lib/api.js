import axios from 'axios';
import https from 'https';

const api = axios.create({ httpsAgent: new https.Agent({ rejectUnauthorized: false }) });

export async function loadComments() {
  try {
    const res = await api.get('https://localhost:5000/api/comments');
    return res.data.comments;
  } catch (error) {
    console.error(`[API] Error in loadComments: ${error.message}`);
  };
};

export async function loadComment(id) {
  try {
    const res = await api.get(`https://localhost:5000/api/comments/${id}`);
    return res.data.comment;
  } catch (error) {
    console.log(error.toJSON());
    console.log(`[Client.API] Error in loadComment: ${error.status} ${error.message}`);
  };
};

export async function testApi() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Resolved");
    } else {
      reject("Rejected");
    }
  });
}