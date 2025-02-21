const User = require("./user");

describe("User Class Tests", () => {
  test("Debe retornar el nombre completo correctamente", () => {
    const user = new User("Juan", "Pérez", 25);
    expect(user.getFullName()).toBe("Juan Pérez");
  });

  test("Debe verificar si el usuario es mayor de edad", () => {
    const user1 = new User("Carlos", "Gómez", 20);
    const user2 = new User("Ana", "Martínez", 16);

    expect(user1.isAdult()).toBe(true);
    expect(user2.isAdult()).toBe(false);
  });
});
