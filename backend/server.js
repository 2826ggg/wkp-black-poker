const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// 中间件
app.use(cors()); // 允许跨域（前端访问）
app.use(express.json()); // 解析 JSON 请求体

// 路由
app.use('/api', require('./routes/signup'));
app.use('/api', require('./routes/payment'));

// 测试接口
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'WKP Poker Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});