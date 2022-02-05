export default function handler(req, res) {
  res.status(200).json({ name: 'Alfredo Pulido '+ process.env.AWSKEY })
}
