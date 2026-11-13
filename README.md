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
Para compilar e preparar os arquivos para o GitHub Pages (pasta `/docs`):

```bash
npm run deploy
git add docs
git commit -m "Deploy no GitHub Pages"
git push
```

O comando `npm run deploy` compila o Angular (`ng build`) e copia automaticamente o conteúdo gerado para a pasta `/docs`, pronto para publicação.

## Inspiração
Design inspirado no trabalho de [Sajid](https://www.iamsajid.com/). Template original: [angular-template-my-website](https://github.com/diprefranco/angular-template-my-website).

## Licença
MIT — veja [LICENSE](LICENSE).