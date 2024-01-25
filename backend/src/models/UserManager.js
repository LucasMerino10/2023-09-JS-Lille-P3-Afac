const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select id, lastname, firstname, email, src from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT id, lastname, firstname, email, src 
      FROM ${this.table}`
    );

    return rows;
  }

  async findByMail(email) {
    const [data] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return data[0];
  }
}

module.exports = UserManager;
