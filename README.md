# 循环租用设备生命周期账本

该服务记录设备归还、检测、维修、出租和报废事件，并向维护队列发布后续动作。`lifecycle-events.json` 是合作方事件示例，运行环境包含 PostgreSQL、Redis 与 RabbitMQ。

```bash
npm install
npm test
docker compose up --build -d
curl http://localhost:8080/health
docker compose down -v
```

数据库是设备状态的事实来源，缓存和消息代理不能替代持久化账本。
