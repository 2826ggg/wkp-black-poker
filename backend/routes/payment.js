const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// 模拟报名数据（和 signup.js 共享）
let signups = require('./signup').signups || [];

// 查询支付状态
router.get('/payment/status/:orderId', async (req, res) => {
  const { orderId } = req.params;
  const order = signups.find(s => s.orderId === orderId);

  if (!order) {
    return res.status(404).json({ error: '订单不存在' });
  }

  // 查询 TronScan API（实际项目替换为真实接口）
  try {
    // 这里是逻辑，实际要调用 TronScan API 检查地址交易
    // const response = await fetch(`https://api.tronscan.org/api/transaction?address=TC7TFRfTrhEk85dXeyfghM5hqFq9HRXabU`);
    // const data = await response.json();
    // const isPaid = data.data.some(tx => tx.amount >= order.amount * 1e6 && tx.toAddress === 'TC7TFRfTrhEk85dXeyfghM5hqFq9HRXabU');

    // ：随机返回支付状态（真实）
    const isPaid = Math.random() > 0.7;
    if (isPaid) order.paid = true;

    res.json({
      orderId,
      amount: order.amount,
      paid: order.paid,
      message: order.paid ? '支付成功' : '等待支付'
    });
  } catch (error) {
    res.status(500).json({ error: '查询失败，请稍后重试' });
  }
});

module.exports = router;