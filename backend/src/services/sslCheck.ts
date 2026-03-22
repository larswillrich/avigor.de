import https from "https";

export function checkSSL(hostname: string): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      const url = new URL(hostname.startsWith("http") ? hostname : `https://${hostname}`);
      const req = https.request(
        { hostname: url.hostname, port: 443, method: "HEAD", timeout: 10000 },
        (res) => {
          // If we get a response on HTTPS, SSL is valid
          resolve(true);
          res.destroy();
        }
      );
      req.on("error", () => resolve(false));
      req.on("timeout", () => {
        req.destroy();
        resolve(false);
      });
      req.end();
    } catch {
      resolve(false);
    }
  });
}
