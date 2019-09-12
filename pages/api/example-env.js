export default (req, res) => {
  res.json({ env: process.env.EXAMPLE });
};
