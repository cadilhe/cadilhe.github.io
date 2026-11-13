import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgComponent } from '../../../shared/img/img.component';
import { Project } from './project';

@Component({
  selector: 'web-projects',
  standalone: true,
  imports: [CommonModule, ImgComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'MyTrading.Life',
      description: 'Ecossistema SaaS para traders: gestão integral de carreira, análise comportamental com IA e muitas ferramentas para traders sérios.',
      imgSrc: 'assets/screens/My-Trading-Plan.png',
      demoUrl: 'https://mytrading.life',
      tags: ['SaaS', 'IA', 'Trading']
    },
    {
      title: 'MyQuant Trader',
      description: 'Inteligência quantitativa de mercado — GEX, opções, fluxo institucional e correlações macro para Ouro, Hang Seng, S&P 500 e Nasdaq-100.',
      imgSrc: 'assets/screens/my-quant-pro.png',
      demoUrl: 'https://myquant.pro',
      tags: ['SaaS', 'IA', 'Quant', 'Mercados']
    },
    {
      title: 'Oráculo Aurora',
      description: 'Plataforma de autoconhecimento e orientação baseada em IA, combinando arquétipos e inteligência artificial generativa.',
      imgSrc: 'assets/screens/oraculo-home.png',
      demoUrl: 'https://oraculoaurora.net',
      tags: ['SaaS', 'IA', 'Lifestyle']
    },
    {
      title: 'KDG Labs Cockpit',
      description: 'Workspace inteligente para gestão de projetos, documentação, biblioteca de prompts e produtividade baseada em IA.',
      imgSrc: 'assets/screens/kdg-labs-cpckpit.png',
      demoUrl: 'https://kdg-cockpit.vercel.app/',
      tags: ['SaaS', 'IA', 'Produtividade']
    },
    {
      title: 'Wikipreta',
      description: 'Plataforma colaborativa de conhecimento com IA Generativa e curadoria humana — foco em democratização do conhecimento.',
      imgSrc: 'assets/screens/wikipreta.png',
      demoUrl: 'https://wikipreta.org',
      tags: ['SaaS', 'IA', 'Conhecimento']
    },

    {
      title: 'Guia de Futuros dos EUA',
      description: 'O guia definitivo para traders que querem operar commodities, moedas e índices no mercado mais líquido do mundo.',
      imgSrc: 'assets/screens/guia-de-futuros.png',
      demoUrl: 'https://tradingplan.com.br/pv/guia/',
      tags: ['Ebook', 'Trading', 'Conhecimento']
    },
    {
      title: 'Price Action Master',
      description: 'App educacional para traders focado em análise de price action — 1.000+ instalações no Google Play.',
      imgSrc: 'assets/screens/PAM.png',
      demoUrl: 'https://play.google.com/store/apps/details?id=br.com.tradingplan.priceactionmaster',
      tags: ['Android', 'Educação', 'Trading']
    },
    {
      title: 'Trading Mindset & Discipline',
      description: 'Ferramenta de disciplina operacional para traders: controle emocional, proteção de capital e execução de plano.',
      imgSrc: 'assets/screens/Trading-Discipline.png',
      demoUrl: 'https://play.google.com/store/apps/details?id=br.com.tradingplan.tradingmindset',
      tags: ['Android', 'Produtividade', 'Trading']
    },
    {
      title: 'Oraculo Aurora',
      description: 'Aplicativo de autoconhecimento baseado em arquétipos e orientação personalizada.',
      imgSrc: 'assets/screens/aurora-app.png',
      demoUrl: 'https://play.google.com/store/apps/details?id=online.oraculoaurora.app',
      tags: ['Android', 'Lifestyle']
    },
    {
      title: 'Dicionario Maritimo Lite',
      description: 'Guia completo de termos náuticos, 100% offline, desenvolvido para a Azimuth Náutica — 100+ instalações.',
      imgSrc: 'assets/screens/dicionario-maritimo.png',
      demoUrl: 'https://play.google.com/store/apps/details?id=br.com.sailearn.dicionariomaritimolite',
      tags: ['Android', 'Educação', 'Náutica']
    }
  ];
}
