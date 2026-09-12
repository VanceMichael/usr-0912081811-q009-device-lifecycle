import Fastify from "fastify";

const app = Fastify({ logger: true });
app.get("/health", async () => ({ status: "ok" }));

app.listen({ host: "0.0.0.0", port: 8080 }).catch((error) => {
  app.log.error(error);
  process.exit(1);
});
