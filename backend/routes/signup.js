const express = require('express');
const router = express.Router();

// 报名数据存储
let signups = [];

// 报名接口
router.post('/signup', (req, res) => {
  const { name, phone, email, country, event } = req.body;
  
  // 简单校验
  if (!name || !phone || !email) {
    return res.status(400).json({ error: '姓名、手机号、邮箱为必填项' });
  }

  const orderId = `WKP-${Date.now()}`;
  const newSignup = {
    orderId,
    name,
    phone,
    email,
    country,
    event,
    amount: 50.00, // 固定报名费 50 USDT
    paid: false,
    createdAt: new Date().toLocaleString()
  };

  signups.push(newSignup);
  console.log('新报名:', newSignup);

  res.json({
    success: true,
    orderId,
    amount: newSignup.amount,
    message: '报名成功，请完成支付'
  });
});

module.exports = router;