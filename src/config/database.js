module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'igorbarberpoint',
  operatorAliases: false,
  define: {
    // Created at and updated At
    timestamps: true,
    // add underline instead Case
    underscored: true,
    underscoredAll: true
  }
}
