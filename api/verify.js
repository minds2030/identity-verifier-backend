export default function handler(req, res) {
  // السماح بطلبات الـ POST فقط
  if (req.method === 'POST') {
    return res.status(200).json({
      success: true,
      message: "Connected Successfully",
      timestamp: new Date().toISOString()
    });
  }
  
  // أي طلب آخر (مثل GET) يرد بـ 200 برضه للتأكد
  return res.status(200).json({ message: "Server is Alive" });
}
