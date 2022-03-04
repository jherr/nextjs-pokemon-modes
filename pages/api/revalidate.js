// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  for (const url of req.body) {
    await res.unstable_revalidate(url);
  }
  res.status(200).json({ revalidate: true });
}
