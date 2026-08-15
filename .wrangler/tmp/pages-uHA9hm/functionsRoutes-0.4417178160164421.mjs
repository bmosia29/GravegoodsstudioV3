import { onRequestPost as __api_create_checkout_js_onRequestPost } from "C:\\Users\\bmosi\\OneDrive\\Desktop\\GraveGoodStudiosV3-Fresh\\functions\\api\\create-checkout.js"

export const routes = [
    {
      routePath: "/api/create-checkout",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_create_checkout_js_onRequestPost],
    },
  ]