import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

/**
 * Keystatic admin API. Disabled in production: both GET and POST return an
 * empty 404 response, matching Next.js framework conventions rather than
 * emitting a JSON body from a route that should not exist at all.
 */
const disabled = {
  GET: () => new Response(null, { status: 404 }),
  POST: () => new Response(null, { status: 404 }),
};

const handler =
  process.env.NODE_ENV === "production" ? disabled : makeRouteHandler({ config });

export const { GET, POST } = handler;
