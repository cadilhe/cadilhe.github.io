Portfolio - Carlos Cadilhe
============
Site pessoal e portfólio de Carlos Cadilhe — AI Product Engineer. O site apresenta minha experiência, projetos e formas de contato.

## Demo
https://cadilhe.github.io/

## Seções
- **Experiência**: timeline com minha trajetória profissional.
- **Projetos**: cards com meus principais projetos (SaaS, apps mobile, ferramentas de trading).
- **Sobre**: um resumo de quem sou e no que atuo.
- **Contato**: email, LinkedIn, GitHub e outros canais.

O site é **responsivo** e se adapta a diferentes tamanhos de tela.

## Tech Stack
- [Angular 17](https://angular.io/) com TypeScript
- CSS puro (sem frameworks de UI)
- GitHub Pages para deploy

## Uso local
```bash
git clone https://github.com/cadilhe/cadilhe.github.io.git
cd cadilhe.github.io
npm install
npm start
```

## Deploy
O build gera os arquivos em `dist/cadilhe.github.io/`. Para publicar:

```bash
npm run build
```
Copie o conteúdo de `dist/cadilhe.github.io/browser/` para `docs/` e faça push. O GitHub Pages está configurado para servir da pasta `/docs` na branch `main`.

## Inspiração
Design inspirado no trabalho de [Sajid](https://www.iamsajid.com/). Template original: [angular-template-my-website](https://github.com/diprefranco/angular-template-my-website).

## Licença
MIT — veja [LICENSE](LICENSE).