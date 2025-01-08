const request = require("supertest");
const app = require("../app");

describe("Books API", () => {
  it("should fetch all books", async () => {
    const res = await request(app)
      .get("/api/books")
      .set("x-user-id", "123")
      .set("x-role", "User");
    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it("should allow admin to create a book", async () => {
    const res = await request(app)
      .post("/api/books")
      .set("x-user-id", "123")
      .set("x-role", "Admin")
      .send({ title: "New Book", author: "Author" });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("title", "New Book");
  });
});
