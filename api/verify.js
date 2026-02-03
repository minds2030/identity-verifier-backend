module.exports = (req, res) => {
  if (req.method === 'POST') {
    const { status, deviceId } = req.body;
    // هنا مستقبلاً هنضيف فحص التوقيع الرقمي
    return res.status(200).json({
      message: "تم استلام طلب التحقق بنجاح",
      verified: true,
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
