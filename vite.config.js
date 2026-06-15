import { defineConfig, loadEnv } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { renderAll, PAGES, STAGE } from "./scripts/render-ejs.js";
import { handler as calculateFareHandler } from "./netlify/functions/calculate-fare.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const googleMapsKey = env.GOOGLE_MAPS_API_KEY || "";

  return {
    root: STAGE,

    server: {
      watch: {
        ignored: [`${STAGE}/**/*.html`],
      },
    },

    build: {
      outDir: resolve(__dirname, "dist"),
      emptyOutDir: true,
      rollupOptions: {
        input: Object.fromEntries(
          PAGES.map((p) => [p, resolve(STAGE, `${p}.html`)]),
        ),
      },
    },

    plugins: [
      {
        name: "netlify-functions-dev",
        configureServer(server) {
          server.middlewares.use("/.netlify/functions/calculate-fare", async (req, res) => {
            if (req.method === "OPTIONS") {
              res.writeHead(204, {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
              });
              res.end();
              return;
            }
            const chunks = [];
            for await (const chunk of req) chunks.push(chunk);
            const event = {
              httpMethod: req.method,
              headers: req.headers,
              body: Buffer.concat(chunks).toString(),
            };
            const result = await calculateFareHandler(event);
            res.writeHead(result.statusCode, {
              ...result.headers,
              "Access-Control-Allow-Origin": "*",
            });
            res.end(result.body);
          });
        },
      },
      {
        name: "ejs-pre-render",

        async buildStart() {
          await renderAll({ googleMapsKey });
        },

        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const urlPath = (req.url ?? "/").split("?")[0];
            const page =
              urlPath
                .replace(/^\//, "")
                .replace(/\/$/, "")
                .replace(/\.html$/, "") || "index";
            if (PAGES.includes(page)) {
              await renderAll({ googleMapsKey });
            }
            next();
          });
        },
      },
    ],
  };
});
