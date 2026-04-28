import request from "supertest";
import app from "../src/app";

describe("POST /api/validate-card", () => {
  it("should validate a correct card", async () => {
    const res = await request(app)
      .post("/api/validate-card")
      .send({ cardNumber: "4539578763621486" });

    expect(res.status).toBe(200);
    expect(res.body.valid).toBe(true);
    expect(res.body.cardType).toBe("Visa");
  });

  it("should reject invalid card", async () => {
    const res = await request(app)
      .post("/api/validate-card")
      .send({ cardNumber: "1234567890123456" });

    expect(res.body.valid).toBe(false);
  });

  it("should fail on bad input", async () => {
    const res = await request(app)
      .post("/api/validate-card")
      .send({ cardNumber: "abcd" });

    expect(res.status).toBe(400);
  });
});