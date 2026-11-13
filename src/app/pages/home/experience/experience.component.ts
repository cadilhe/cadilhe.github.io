import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Job } from './job';

@Component({
  selector: 'web-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      headerColor: '#41516C',
      companyName: 'Trading Plan Club',
      companyUrl: 'https://www.tradingplan.com.br',
      period: '2024 – Atual',
      position: 'Founder & AI Product Engineer',
      techStack: 'TypeScript, React, Next.js, Node.js, PostgreSQL, OpenAI, Anthropic, Docker',
      details: [
        'Arquitetura e desenvolvimento de ecossistema SaaS com IA.',
        'Ciclo completo: arquitetura de software e IA, desenvolvimento Full Stack, banco de dados, infraestrutura.',
        'Integração com múltiplos modelos de IA e documentação técnica.',
        'Produtos: MyTrading.Life, MyTrading Tools, KDG Labs Cockpit, Wikipreta.'
      ]
    },
    {
      headerColor: '#2E86AB',
      companyName: 'Azimuth Náutica',
      companyUrl: 'https://www.azimuthnautica.com.br/',
      period: '2019 – Atual',
      position: 'Webmaster / DevOps',
      techStack: 'IA, Moodle, WordPress, Landing Pages, Dashboards, Meta Ads, Google Ads, SEO, E-mail Marketing',
      details: [
        'Infraestrutura tecnológica da escola náutica: sites, plataforma EAD (Moodle) e soluções com IA.',
        'Produção de conteúdo educacional: roteiros, narração e geração de imagens.',
        'Estratégia de marketing digital: Instagram, Meta Ads, calendário editorial.',
        'Escola com autorização IYT e reconhecimento MCA-UK.'
      ]
    },
    {
      headerColor: '#F18F01',
      companyName: 'R4You',
      companyUrl: undefined,
      period: '2021 – 2022',
      position: 'Software Engineer',
      techStack: 'Angular, C#.Net, Entity Framework, Azure DevOps, PostgreSQL',
      details: [
        'Atuação em equipe ágil de Engenharia de Software.',
        'Desenvolvimento Full Stack e integração de APIs.',
        'Manutenção evolutiva e melhoria de qualidade de código.',
        'Suporte ao desenvolvimento de novas funcionalidades.'
      ]
    },
    {
      headerColor: '#C73E1D',
      companyName: 'Instituto Ilhabela Sustentável',
      companyUrl: undefined,
      period: '2012 – 2023',
      position: 'Software Engineer / Business Intelligence',
      techStack: 'C#.Net, SQL, Tableau, PostgreSQL, Automação',
      details: [
        'Sistemas de informação, plataformas digitais e Business Intelligence.',
        'Modelagem de banco de dados, dashboards Tableau e análise de indicadores.',
        'Automação de processos e relatórios gerenciais para tomada de decisão.'
      ]
    },
    {
      headerColor: '#6A4C93',
      companyName: 'Projetos Independentes',
      companyUrl: 'https://github.com/cadilhe',
      period: '2005 – Atual',
      position: 'Software Engineer',
      techStack: 'C#.Net, JavaScript, TypeScript, SQL, React, Next.js, Node.js',
      details: [
        'Sistemas corporativos, portais web, comércio eletrônico e integrações.',
        'APIs, automação e arquitetura de aplicações para diversos segmentos.',
        'Visão multidisciplinar que sustenta minha atuação em Engenharia de Produtos.'
      ]
    }
  ];
}
