module.exports.userValidator = (must = true) => ({
  name: {
    presence: must,
    type: "string",
  },
  age: {
    presence: must,
    type: "number",
  },
  email: {
    presence: must,
    type: "string",
    email: true,
  },
  phone: {
    presence: must,
    type: "string",
    length: {
      minimum: 10,
    },
  },
  address: {
    presence: false,
    type: "string",
  },
});
