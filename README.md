# ordering-service
**ordering-service** manages order creation, retrieval, and cancellation.  ## Endpoints - `GET /health` — service status - `POST /order/create` — create an order (sample) - `GET /order/:orderId` — get order details (sample) - `POST /order/cancel` — cancel an order (sample)  ## Tracing This service reports telemetry to the tracing-service using 
