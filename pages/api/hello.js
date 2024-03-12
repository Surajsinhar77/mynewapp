// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("this is the backend api here ");
  res.status(200).json({ name: 'John Doe' })
}
