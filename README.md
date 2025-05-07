# 🚀 bs58

> 🔐 Codifique e decodifique dados com **Base58** de forma simples e moderna usando **Node.js**

![Node.js](https://img.shields.io/badge/Node.js-20%2B-green?logo=node.js)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 🎯 Objetivo

Este repositório tem como objetivo estudar e demonstrar, na prática, o funcionamento da **codificação Base58**, usada amplamente em:

- Blockchain (endereços Bitcoin, IPFS, etc.)
- Representação segura de dados
- Compactação sem caracteres ambíguos

---

## 🧠 O que é Base58?

> Base58 é uma codificação baseada no alfabeto [A-Za-z0-9], excluindo caracteres ambíguos como `0`, `O`, `l` e `I`.

### ⚖️ Comparação rápida

| Formato  | Caracteres Usados         | Seguro para URLs | Mais curto? |
|----------|----------------------------|------------------|-------------|
| Base64   | A–Z, a–z, 0–9, +, /        | ❌ Não            | 🔸          |
| **Base58** | A–Z, a–z, 1–9 (sem 0, O, l) | ✅ Sim           | ✅ Sim      |

---

## 🛠️ Instalação

```bash
git clone https://github.com/seu-usuario/bs58-playground.git
cd bs58-playground
npm install
```

## ▶️ Como usar

```bash
node index.js
```

Você verá algo como:

```bash
Original: Hello, Base58!
Codificado (Base58): 2NEpo7TZRRrLZSi2U
Decodificado: Hello, Base58!
```


🧪 Exemplo de uso com ES Modules

```bash
import bs58 from 'bs58';

const data = 'Hello, Base58!';
const encoded = bs58.encode(Buffer.from(data));
const decoded = bs58.decode(encoded).toString();

console.log('Original:', data);
console.log('Codificado (Base58):', encoded);
console.log('Decodificado:', decoded);
```

## 🧬 Estrutura do projeto

```bash
bs58-playground/
├── examples/
│   └── example1.js        # Exemplo alternativo
├── index.js               # Exemplo principal
├── package.json
└── README.md
```

## 🧭 Fluxo de Codificação

```bash
[ Texto Original ]
       ↓
[ Buffer Binário ]
       ↓
[ Codificação Base58 ]
       ↓
[ Texto Base58 Seguro ]
```

## 🤝 Contribuições

Sinta-se à vontade para abrir issues, enviar pull requests ou sugerir melhorias!

## 📝 Licença

Distribuído sob a licença MIT. Veja LICENSE para mais informações.
