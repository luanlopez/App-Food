const Sequelize = require('sequelize');
const { Model } = require('sequelize');
// const bcrypt = require('bcryptjs')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        nomeUsuario: Sequelize.STRING,
        senha: Sequelize.VIRTUAL,
        senhaHash: Sequelize.STRING,
        tipoUsuario: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    // this.addHook('beforeSave', async (user) => {
    //   if (user.senha) {
    //     user.senhaHash = await bcrypt.hash(user.senha, 8);
    //   }
    // });

    return this;
  }

  // checkPassword(senha) {
  //   return bcrypt.compare(senha, this.senhaHash);
  // }
}

module.exports = User;
