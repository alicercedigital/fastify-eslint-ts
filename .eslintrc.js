module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },

  rules: {
    // Força informar explicitamente quando um import é apenas uma tipagem
    // ex: import type { IAlgumaCoisa } from 'algumLugar'
    "@typescript-eslint/consistent-type-imports": "error",

    // Obriga que a ordem dos imports seja alfabética além de agrupada por tipo
    "import/order": ["error", { alphabetize: { order: "asc" } }],

    // Força quebrar a linha e usar o "return" em todas as arrow functions
    // Esta regra é ajuda muito na refatoração, pois basta descer a linha
    // para adicionar novas funções antes do return
    "arrow-body-style": ["error", "always"],

    // Esta regra foi desativada pois mesmo setando o valor padrão na função
    // a regra pede para definir defaultProps, o que não é necessário
    "react/require-default-props": "off",

    // Esta regra é para poder alterar os nomes dos components do Material UI
    // Assim possibilita importar todos os components do MaterialUI com um prefixo MUI
    "import/no-named-default": "off",

    // Coisas que o standard me incomoda
    "@typescript-eslint/strict-boolean-expressions": "off",
  },
};
