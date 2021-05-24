import bcrypt from "bcryptjs";

export const mockUsers = [
  {
    ID: "1",
    name: "Soumava Banerjee",
    email: "soumava.rivu@gmail.com",
    phone: "8777724254",
    password: bcrypt.hashSync("frost1234", 10),
    profileImage: "/upload/profile.png",
  },
];
