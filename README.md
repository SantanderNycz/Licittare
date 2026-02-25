# LicitaNow – Landing Page Angular Clone

Cópia fiel da landing page de [licitanow.com/home](https://licitanow.com/home) construída em **Angular 17** com HTML semântico e CSS com variáveis.

---

## 🚀 Como Correr

### Pré-requisitos
- Node.js 18+
- npm 9+
- Angular CLI 17

### Instalação

```bash
# 1. Instalar Angular CLI globalmente (se ainda não tiver)
npm install -g @angular/cli@17

# 2. Instalar dependências
npm install

# 3. Iniciar o servidor de desenvolvimento
ng serve

# 4. Abrir no browser
# http://localhost:4200
```

### Build de Produção

```bash
ng build
# Os ficheiros compilados ficam em dist/licitanow/
```

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── header/           # Navbar fixa com dropdowns e menu mobile
│   │   ├── hero/             # Secção principal com animações e card mockup
│   │   ├── stats/            # Contadores animados (concursos, utilizadores)
│   │   ├── categories/       # Grelha dos 4 tipos de concursos
│   │   ├── how-it-works/     # 4 passos do processo
│   │   ├── principles/       # Os princípios da plataforma
│   │   ├── about/            # Sobre a empresa + métricas
│   │   ├── cta/              # Call-to-action banner
│   │   ├── collaborators/    # Formulário de adesão ao programa
│   │   ├── footer/           # Rodapé com newsletter
│   │   └── cookie-banner/    # Aviso de cookies RGPD
│   ├── pages/
│   │   └── home/             # Página principal (assembleia dos componentes)
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── styles.css                # Variáveis CSS globais + reset + utilitários
└── index.html
```

---

## 🎨 Personalização de Cores

Edite as variáveis em `src/styles.css`:

```css
:root {
  --color-primary: #1a6bff;       /* Cor principal (azul) */
  --color-primary-dark: #0d4fd4;  /* Azul escuro (hover) */
  --color-primary-light: #4d8fff; /* Azul claro */
  --color-accent: #f5a623;        /* Cor de destaque (laranja) */
  --color-bg-dark: #0d1b2e;       /* Fundo escuro (header/footer) */
  /* ... */
}
```

---

## ♿ Acessibilidade

- Tags semânticas: `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`
- Atributos ARIA: `role`, `aria-label`, `aria-labelledby`, `aria-expanded`, `aria-live`, `aria-required`
- `alt` em todas as imagens/ícones (com `aria-hidden="true"` em decorativos)
- Labels explícitos em todos os campos de formulário
- `focus-visible` com outline visível
- Semântica de listas e navegação

---

## 📱 Responsividade

- Desktop (1200px+) – layout completo
- Tablet (900px) – menus colapsam, grids ajustam
- Mobile (600px) – layout de coluna única, hamburger menu

---

## ⚙️ Tecnologias

| Tech | Versão |
|------|--------|
| Angular | 17 |
| TypeScript | 5.2 |
| CSS Custom Properties | nativo |
| Google Fonts | Syne + Outfit |

---

> **Nota**: Esta é uma cópia front-end para fins de demonstração. Nenhum dado é enviado para um backend real.
