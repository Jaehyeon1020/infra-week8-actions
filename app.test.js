import * as chai from "chai";
import { default as chaiHttp, request } from "chai-http";
import { app, server } from "./app.js";

chai.use(chaiHttp);

describe("Express 테스트", () => {
  after(() => {
    server.close();
  });

  it("should return 'hello world' for GET /", (done) => {
    request
      .execute(app)
      .get("/")
      .end((err, res) => {
        chai.expect(res.text).to.be.string("hello world");
        done();
      });
  });

  it("should return 'test!!' for GET /test", (done) => {
    request
      .execute(app)
      .get("/test")
      .end((err, res) => {
        chai.expect(res.text).to.be.string("test!!");
        done();
      });
  });

  it("should return 'api 1' for GET /api/1", (done) => {
    request
      .execute(app)
      .get("/api/1")
      .end((err, res) => {
        chai.expect(res.text).to.be.string("api 1");
        done();
      });
  });

  it("should return 'api 2' for GET /api/2", (done) => {
    request
      .execute(app)
      .get("/api/2")
      .end((err, res) => {
        chai.expect(res.text).to.be.string("api 2");
        done();
      });
  });
});
