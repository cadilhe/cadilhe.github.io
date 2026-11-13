const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'dist', 'cadilhe.github.io', 'browser');
const destDir = path.join(__dirname, '..', 'docs');

if (!fs.existsSync(srcDir)) {
  console.error(`❌ Erro: Diretório de build não encontrado em: ${srcDir}`);
  process.exit(1);
}

console.log('📦 Limpando e preparando a pasta docs/...');
fs.rmSync(destDir, { recursive: true, force: true });
fs.mkdirSync(destDir, { recursive: true });

console.log('📁 Copiando arquivos compilados de dist/ para docs/...');
fs.cpSync(srcDir, destDir, { recursive: true });

// Cria .nojekyll para evitar que o Jekyll ignore pastas/arquivos no GitHub Pages
fs.writeFileSync(path.join(destDir, '.nojekyll'), '');

console.log('\n✅ Pronto! A pasta docs/ foi atualizada com sucesso.');
console.log('👉 Próximos passos para publicar:');
console.log('   git add docs');
console.log('   git commit -m "Deploy no GitHub Pages"');
console.log('   git push\n');

