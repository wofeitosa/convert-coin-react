# Convert Coin - React + TypeScript

Este é um conversor de moedas desenvolvido em React.js com TypeScript.

## 🚀 Tecnologias Utilizadas

- **React.js** - Biblioteca para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e servidor de desenvolvimento
- **CSS3** - Estilização com tema escuro
- **pnpm** - Gerenciador de pacotes

## 📋 Funcionalidades

- ✅ Interface responsiva com tema escuro
- ✅ Formulário para inserção de valor e seleção de moeda
- ✅ Validação de entrada (apenas números)
- ✅ Suporte a 10 moedas diferentes:
  - Dólar Americano (USD)
  - Dólar Australiano (AUD)
  - Dólar Canadense (CAD)
  - Euro (EUR)
  - Franco Suíço (CHF)
  - Iene (JPY)
  - Libra Esterlina (GBP)
  - Lira Turca (TRY)
  - Renminbi/Yuan (CNY)
  - Peso Argentino (ARS)
- ✅ Conversão para Real Brasileiro (BRL)
- ✅ Exibição de cotação e resultado formatado

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm (ou npm/yarn)

### Instalação

1. Clone ou baixe o projeto
2. Navegue até o diretório do projeto:
   ```bash
   cd convert-coin-react
   ```

3. Instale as dependências:
   ```bash
   pnpm install
   ```

### Executando o Projeto

#### Modo de Desenvolvimento
```bash
pnpm run dev
```
Acesse: http://localhost:5173

#### Build de Produção
```bash
pnpm run build
```

#### Preview da Build
```bash
pnpm run preview
```
Acesse: http://localhost:4173

## 📁 Estrutura do Projeto

```
convert-coin-react/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos
│   │   └── img/
│   ├── components/        # Componentes React
│   │   └── CurrencyConverter.tsx
│   ├── types/            # Definições de tipos TypeScript
│   │   └── currency.ts
│   ├── utils/            # Utilitários e funções auxiliares
│   │   └── currencyUtils.ts
│   ├── App.tsx           # Componente principal
│   ├── App.css           # Estilos principais
│   ├── main.tsx          # Ponto de entrada
│   └── index.css         # Estilos globais
├── package.json          # Dependências e scripts
├── tsconfig.json         # Configuração TypeScript
├── vite.config.js        # Configuração Vite
└── README.md            # Este arquivo
```

## 🎨 Características do Design

- **Tema Escuro**: Interface moderna com cores escuras
- **Responsivo**: Adaptável a diferentes tamanhos de tela
- **Tipografia**: Fontes Inter e IBM Plex Mono
- **Animações**: Transições suaves nos elementos interativos

## 🔧 Tecnologias e Padrões

- **Componentes Funcionais**: Uso de React Hooks
- **TypeScript**: Tipagem forte para maior segurança
- **CSS Modules**: Estilos organizados e modulares
- **Validação**: Entrada de dados validada
- **Formatação**: Valores monetários formatados em padrão brasileiro

## 📝 Scripts Disponíveis

- `pnpm run dev` - Inicia servidor de desenvolvimento
- `pnpm run build` - Gera build de produção
- `pnpm run preview` - Visualiza build de produção
- `pnpm run lint` - Executa linting do código

## 🌟 Melhorias Futuras

- Integração com API de cotações em tempo real
- Histórico de conversões
- Mais moedas suportadas
- Gráficos de variação cambial
- Modo claro/escuro alternável
- Testes unitários

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de demonstração.

---

Desenvolvido com ❤️ por wofeitosa usando React + TypeScript

