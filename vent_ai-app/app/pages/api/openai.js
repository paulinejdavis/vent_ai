// pages/api/openai.js

// pages/api/openai.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Processing code here...
      res.status(200).json({ message: "This is a response from your API" });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('Method Not Allowed');
    }
  }
  
