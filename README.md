# Elias Technology

### Digital Experiences & Technology

**Presença digital que trabalha pelo seu negócio.**

<p align="center">
  <a href="https://eliastechnology.vercel.app/">
    <img src="https://img.shields.io/badge/Website-Elias%20Technology-black?style=for-the-badge" alt="Website">
  </a>
  <img src="https://img.shields.io/badge/Next.js-16.3.0-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.7.3-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
</p>

---

## Sobre o projeto

A **Elias Technology** é uma plataforma institucional desenvolvida para apresentar serviços, projetos e soluções digitais, conectando empresas e profissionais a oportunidades de desenvolvimento e modernização digital.

Além da experiência institucional, o projeto possui um painel administrativo próprio, com recursos de gerenciamento de conteúdo, acompanhamento de oportunidades comerciais, administração de mídias, análise de eventos e auditoria de atividades.

A aplicação foi desenvolvida com uma arquitetura moderna, utilizando tecnologias do ecossistema React e Next.js, com integração a banco de dados PostgreSQL e serviços de infraestrutura.

**Desenvolvimento:** Rodrigo Elias.

## Objetivos

- Fortalecer a presença digital da Elias Technology.
- Apresentar serviços e soluções de desenvolvimento web.
- Exibir projetos e experiências desenvolvidas.
- Facilitar o contato entre potenciais clientes e a empresa.
- Centralizar o gerenciamento do conteúdo institucional.
- Organizar e acompanhar oportunidades comerciais.
- Disponibilizar ferramentas administrativas para gestão da plataforma.

## Funcionalidades

### 1. Site institucional

- Apresentação da empresa e do fundador.
- Seção de serviços e soluções digitais.
- Portfólio de projetos.
- Apresentação de diferenciais competitivos.
- Metodologia de trabalho.
- Etapas do atendimento.
- Perguntas frequentes.
- Formulário de contato.
- Integração com WhatsApp.
- Alternância entre português, inglês e espanhol.
- Política de privacidade.
- Estrutura de SEO, sitemap e robots.

### 2. Painel administrativo

- Sistema de autenticação.
- Controle de acesso para administradores autorizados.
- Dashboard administrativo.
- Gerenciamento de oportunidades comerciais.
- Atualização de status dos leads.
- Registro de anotações internas.
- Gerenciamento de conteúdo institucional.
- Biblioteca de mídia.
- Upload e gerenciamento de imagens.
- Visualização prévia de conteúdo.
- Histórico de versões.
- Auditoria de atividades.
- Painel de analytics.

### 3. CMS — Sistema de gerenciamento de conteúdo

O projeto possui um CMS próprio, desenvolvido para permitir a administração de diferentes seções do site sem a necessidade de editar diretamente os arquivos da aplicação.

Recursos implementados:

- Edição de conteúdo por seção.
- Gerenciamento de informações institucionais.
- Administração de textos em diferentes idiomas.
- Salvamento de rascunhos.
- Publicação de alterações.
- Descarte de alterações não publicadas.
- Restauração do conteúdo padrão.
- Recuperação de versões anteriores.
- Histórico de alterações e identificação do administrador responsável.

### 4. Gestão de leads

O sistema permite receber e organizar solicitações comerciais enviadas pelo formulário de contato.

Funcionalidades:

- Cadastro de potenciais clientes.
- Armazenamento de informações de contato.
- Registro do tipo de projeto solicitado.
- Registro de orçamento e descrição da necessidade.
- Organização por status comercial.
- Anotações internas.
- Histórico de alterações.
- Exportação de leads.

**Status disponíveis:**

| Status | Descrição |
|---|---|
| Novo | Oportunidade recém-recebida |
| Em contato | Cliente em processo de atendimento |
| Proposta | Proposta comercial em andamento |
| Ganho | Oportunidade convertida |
| Perdido | Oportunidade não convertida |

### 5. Biblioteca de mídia

- Upload de imagens.
- Armazenamento com Vercel Blob.
- Organização dos arquivos cadastrados.
- Atualização de textos alternativos (ALT).
- Exclusão de mídias.
- Controle de formatos e tamanho dos arquivos.

### 6. Analytics e auditoria

- Registro de eventos da aplicação.
- Identificação de páginas acessadas.
- Registro de informações de dispositivo.
- Identificação de idioma.
- Registro de atividades administrativas.
- Histórico de ações realizadas no sistema.

### 7. Segurança e validação

- Autenticação com Better Auth.
- Restrição de cadastro a e-mails administrativos autorizados.
- Verificação de sessão e permissões.
- Validação de dados com Zod.
- Verificação de consentimento no formulário.
- Campo honeypot para proteção contra envios automatizados.
- Limitação de frequência de envio de formulários.
- Registro de auditoria das operações administrativas.

---

## Tecnologias utilizadas

### Front-end

| Tecnologia | Finalidade |
|---|---|
| Next.js 16 | Framework principal |
| React 19 | Construção da interface |
| TypeScript 5.7 | Tipagem e desenvolvimento |
| Tailwind CSS 4 | Estilização |
| Base UI | Componentes de interface |
| Lucide React | Ícones |
| Class Variance Authority | Variantes de componentes |
| Tailwind Merge | Organização de classes CSS |

### Back-end e infraestrutura

| Tecnologia | Finalidade |
|---|---|
| Next.js Server Actions | Operações no servidor |
| Next.js Route Handlers | Endpoints da aplicação |
| Node.js | Ambiente de execução |
| PostgreSQL | Banco de dados |
| Drizzle ORM | Comunicação com o banco |
| Better Auth | Autenticação |
| Vercel Blob | Armazenamento de arquivos |
| Vercel Analytics | Análise de utilização |

### Validação e qualidade

- Zod
- ESLint 9
- TypeScript

### Gerenciamento de pacotes

- pnpm 12

---

## Arquitetura do projeto

```text
elias-technology/
│
├── app/
│   ├── admin/
│   │   ├── (dashboard)/
│   │   │   ├── analytics/
│   │   │   ├── auditoria/
│   │   │   ├── conteudo/
│   │   │   ├── leads/
│   │   │   └── midia/
│   │   ├── login/
│   │   └── preview/
│   │
│   ├── actions/
│   ├── api/
│   ├── privacidade/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── admin/
│   ├── site/
│   └── ui/
│
├── lib/
│   ├── cms/
│   ├── db/
│   ├── auth.ts
│   ├── auth-client.ts
│   ├── audit.ts
│   ├── i18n.ts
│   ├── locale.ts
│   ├── seo.ts
│   ├── site.ts
│   └── utils.ts
│
├── public/
│
├── scripts/
│   └── 001-cms-platform.sql
│
├── package.json
├── pnpm-lock.yaml
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
└── components.json
```

## Banco de dados

A aplicação utiliza PostgreSQL integrado ao Drizzle ORM.

Principais tabelas identificadas:

| Tabela | Responsabilidade |
|---|---|
| `leads` | Armazenamento de oportunidades comerciais |
| `lead_notes` | Anotações e histórico dos leads |
| `content_blocks` | Conteúdos administrados pelo CMS |
| `content_versions` | Histórico de versões do conteúdo |
| `media` | Biblioteca de arquivos e imagens |
| `analytics_events` | Registro de eventos da aplicação |
| `audit_logs` | Histórico de atividades administrativas |

---

## Instalação e execução local

### Pré-requisitos

- Node.js 24 ou compatível com as dependências do projeto.
- pnpm.
- PostgreSQL.
- Conta e configuração dos serviços externos utilizados pela aplicação.

### 1. Clonar o repositório

```bash
git clone https://github.com/RodrigoElias-Mello/Elias-Technology.git
```

### 2. Acessar a pasta

```bash
cd Elias-Technology
```

### 3. Instalar as dependências

```bash
pnpm install
```

### 4. Configurar as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto e configure as variáveis necessárias para conexão com o banco de dados, autenticação, administradores e armazenamento de arquivos.

Não compartilhe ou publique credenciais, tokens ou chaves privadas.

### 5. Executar em desenvolvimento

```bash
pnpm dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

### Outros comandos

**Gerar build de produção:**

```bash
pnpm build
```

**Executar em produção:**

```bash
pnpm start
```

**Verificar qualidade do código:**

```bash
pnpm lint
```

---

## Publicação

A aplicação está disponível online por meio da Vercel.

**Website oficial:**

https://eliastechnology.vercel.app/

---

## Desenvolvedor

**Rodrigo Elias**

Desenvolvedor Web | Front-End | Análise e Desenvolvimento de Sistemas

- **Portfólio:** https://portifolio-rodrigo-elias.vercel.app
- **LinkedIn:** https://www.linkedin.com/in/rodrigoelias1709/
- **E-mail:** rodrigo.elias.dev@gmail.com

---

<p align="center">
  <strong>Elias Technology</strong><br>
  Digital Experiences & Technology<br>
  <em>Presença digital que trabalha pelo seu negócio.</em>
</p>

<p align="center">
  Desenvolvido por Rodrigo Elias.
</p>
