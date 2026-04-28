Card Number Validation API
📌 Overview

This project is a backend API that validates card numbers and identifies their type.
It exposes a single endpoint that determines whether a given card number is valid using the Luhn Algorithm, and if valid, returns the card type (e.g., Visa, MasterCard).

1. Tech Stack
Node.js
Express.js
TypeScript (strict: true)
Zod (schema validation)
Jest + Supertest (testing)

2. Project Structure
src/
  controllers/     # Handles HTTP request/response logic
  services/        # Business logic (validation + card type detection)
  routes/          # API route definitions
  middlewares/     # Reusable middleware (validation)
  validators/      # Zod schemas
  app.ts           # Express app configuration
  server.ts        # Application entry point

tests/             # Automated tests

3. Installation & Setup
i. Clone the repository
git clone https://github.com/EnergyFuseTech24/card-validator.git
cd card-validator
ii. Install dependencies
npm install
iii. Run development server
npm run dev

Server runs on:

http://localhost:5000
  
4. API Endpoint
POST /api/validate-card
Request Body
{
  "cardNumber": "4539578763621486"
}
✅ Success Response
{
  "valid": true,
  "cardType": "Visa"
}
❌ Invalid Card Response
{
  "valid": false,
  "cardType": "Unknown"
}
⚠️ Error Response (Bad Request)
{
  "error": ["Card number must contain only digits"]
}

5. Validation Logic
Card validation is implemented using the Luhn Algorithm, a widely accepted standard for verifying card numbers.

Steps:
Starting from the right, double every second digit
If the result is greater than 9, subtract 9
Sum all digits
If the total is divisible by 10, the card is valid

6. Card Type Detection
Card type is determined using known industry prefixes:
Visa → Starts with 4
MasterCard → Starts with 51–55
American Express → Starts with 34 or 37
Discover → Starts with 6011 or 65

If no pattern matches, the type is returned as "Unknown".

7. Request Validation
Request validation is handled using Zod schema and a custom middleware.
Why Zod?
Ensures request data is validated before reaching business logic
Provides clear and structured error messages
Keeps validation declarative and reusable
Validation Rules:
Must be a string
Must contain only digits
Length must be between 12 and 19 characters

8. Middleware Design
A reusable validation middleware is implemented to:
Validate incoming requests against a schema
Return consistent error responses
Keep controllers clean and focused

9. Testing

Run tests:

npm test

Tests are written using Jest and Supertest and cover:

Valid card numbers
Invalid card numbers
Input validation errors
Error Handling

10. The API handles:

Missing input
Invalid data types
Non-numeric values
Schema validation failures

11. HTTP status codes:

200 → Request processed successfully
400 → Invalid input

Design Decisions
Why Express.js?
Express was chosen for its simplicity and flexibility, making it ideal for a focused API with minimal overhead.

Why TypeScript (strict mode)?
Strict mode improves code reliability by enforcing type safety and catching errors early during development.

Why Separate Controllers, Services, and Middleware?
To maintain separation of concerns:
Controllers → handle HTTP logic
Services → contain business logic
Middleware → handle cross-cutting concerns like validation

This structure improves readability, testability, and scalability.

Why Luhn Algorithm?
It is the industry-standard method for validating card numbers and ensures correctness.

Additional Notes
Input is automatically sanitized through schema validation
Only numeric card numbers are accepted
Card type is only returned when the number is valid
Code is structured for maintainability and clarity

👨‍💻 Author
Olaoye Matthew