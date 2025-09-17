export function registerRoutes(app) {
  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "ordering-service" });
  });

  // Ordering-specific endpoints
  app.post("/order/create", (req, res) => {
    const { userId, cartItems } = req.body;
    res.json({
      message: `Order created for user ${userId}`,
      orderId: `order-${Date.now()}`,
      items: cartItems
    });
  });

  app.get("/order/:orderId", (req, res) => {
    const { orderId } = req.params;
    res.json({
      orderId,
      status: "Processing",
      items: [
        { productId: 1, quantity: 2 },
        { productId: 2, quantity: 1 }
      ]
    });
  });

  app.post("/order/cancel", (req, res) => {
    const { orderId } = req.body;
    res.json({ message: `Order ${orderId} cancelled` });
  });
}
