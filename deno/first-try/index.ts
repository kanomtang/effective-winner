import { serve } from "https://deno.land/std@0.127.0/http/server.ts";

console.log("http://localhost:8000/");
serve((req) => new Response("Hello from Denoooooo.js"), { port: 8000 });