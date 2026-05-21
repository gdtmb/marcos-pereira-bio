# Guia simples de manutenção

## Atualizar texto ou link

1. Abra o GitHub.
2. Entre no repositório da landing page.
3. Acesse `src/content.js`.
4. Clique no ícone de lápis.
5. Edite o texto ou link.
6. Clique em `Commit changes`.
7. Aguarde a Cloudflare publicar automaticamente.

## Adicionar material

No arquivo `src/content.js`, localize `resources`.

Copie um bloco parecido com este:

```js
{
  tag: "Material técnico",
  title: "Nome do material",
  text: "Descrição curta do material.",
  icon: FileText,
  href: "https://link-do-arquivo.com",
},
```

Troque o título, descrição e link.

## Ocultar aviso de construção

No arquivo `src/content.js`, localize:

```js
export const constructionNotice = {
  enabled: true,
```

Troque para:

```js
enabled: false,
```
