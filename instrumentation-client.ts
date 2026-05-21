// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

if (process.env.NODE_ENV === "production") {
  try {
    Sentry.init({
      dsn: "https://ed200b704603525dbc8c2981e4fe9c82@o4507972885086208.ingest.de.sentry.io/4511428296900688",

      // Sample only 10% of transactions to reduce performance overhead on mobile
      tracesSampleRate: 0.1,
      // Enable logs to be sent to Sentry
      enableLogs: true,

      // Enable sending user PII (Personally Identifiable Information)
      // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
      sendDefaultPii: true,

      // Ignore network errors from blocked requests (e.g. Brave Shields)
      ignoreErrors: [
        "NetworkError",
        "Failed to fetch",
        "Load failed",
      ],
    });
  } catch (e) {
    // Silently ignore Sentry init failures (e.g. blocked by ad blockers / Brave Shields)
    console.warn("Sentry failed to initialize:", e);
  }
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
