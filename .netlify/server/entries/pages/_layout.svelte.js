import { c as create_ssr_component } from "../../chunks/index.js";
const global = "";
const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/manifest.webmanifest">' } };
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webManifest;
  webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
  return `${$$result.head += `<!-- HEAD_svelte-hnr6zt_START --><!-- HTML_TAG_START -->${webManifest}<!-- HTML_TAG_END --><!-- HEAD_svelte-hnr6zt_END -->`, ""}

${``}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
