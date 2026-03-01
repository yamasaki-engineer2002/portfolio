import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

// コーポレートサイト: ページ固有データ
const corporatePageData = {
  '/works/corporate/index.html': {
    title: 'BrightCode Inc. | 株式会社ブライトコード',
    description: '株式会社ブライトコード — テクノロジーで、ビジネスを次のステージへ。Web制作・Webアプリ開発・DXコンサルティングを提供します。',
    ogTitle: 'BrightCode Inc. | 株式会社ブライトコード — 制作実績',
    ogDescription: '株式会社ブライトコード — テクノロジーで、ビジネスを次のステージへ。Web制作・Webアプリ開発・DXコンサルティングを提供します。',
    ogUrl: 'https://yamasaki-engineer.tech/works/corporate/',
    twitterTitle: 'BrightCode Inc. | 株式会社ブライトコード — 制作実績',
    twitterDescription: '株式会社ブライトコード — テクノロジーで、ビジネスを次のステージへ。',
    headerModifier: 'transparent',
    ctaTitle: 'プロジェクトのご相談はお気軽に',
    ctaText: 'Webサイト制作からDX推進まで、お客様の課題に合わせた最適なソリューションをご提案します。',
  },
  '/works/corporate/service.html': {
    title: 'SERVICE | BrightCode Inc.',
    description: 'BrightCode Inc. のサービス一覧。Web制作・Webアプリ開発・DXコンサルティング・保守運用サポートの詳細をご紹介します。',
    ogTitle: 'SERVICE | BrightCode Inc. — 制作実績',
    ogDescription: 'BrightCode Inc. のサービス一覧。Web制作・Webアプリ開発・DXコンサルティング・保守運用サポートの詳細をご紹介します。',
    ogUrl: 'https://yamasaki-engineer.tech/works/corporate/service.html',
    twitterTitle: 'SERVICE | BrightCode Inc. — 制作実績',
    twitterDescription: 'BrightCode Inc. のサービス一覧。Web制作・Webアプリ開発・DXコンサルティングの詳細をご紹介します。',
    headerModifier: 'solid',
    ctaTitle: 'まずはお気軽にご相談ください',
    ctaText: 'ご予算やスケジュールに合わせた最適なプランをご提案いたします。',
  },
  '/works/corporate/works.html': {
    title: 'WORKS | BrightCode Inc.',
    description: 'BrightCode Inc. の制作実績。Web制作・Webアプリ開発・DXコンサルティングの事例をご紹介します。',
    ogTitle: 'WORKS | BrightCode Inc. — 制作実績',
    ogDescription: 'BrightCode Inc. の制作実績。Web制作・Webアプリ開発・DXコンサルティングの事例をご紹介します。',
    ogUrl: 'https://yamasaki-engineer.tech/works/corporate/works.html',
    twitterTitle: 'WORKS | BrightCode Inc. — 制作実績',
    twitterDescription: 'BrightCode Inc. の制作実績。Web制作・Webアプリ開発・DXコンサルティングの事例をご紹介します。',
    headerModifier: 'solid',
    ctaTitle: 'プロジェクトのご相談はお気軽に',
    ctaText: 'お客様の課題に合わせた最適なソリューションをご提案します。',
  },
  '/works/corporate/company.html': {
    title: 'COMPANY | BrightCode Inc.',
    description: '株式会社ブライトコードの企業情報。企業理念・会社概要・アクセスをご紹介します。',
    ogTitle: 'COMPANY | BrightCode Inc. — 制作実績',
    ogDescription: '株式会社ブライトコードの企業情報。企業理念・会社概要・アクセスをご紹介します。',
    ogUrl: 'https://yamasaki-engineer.tech/works/corporate/company.html',
    twitterTitle: 'COMPANY | BrightCode Inc. — 制作実績',
    twitterDescription: '株式会社ブライトコードの企業情報。企業理念・会社概要・アクセスをご紹介します。',
    headerModifier: 'solid',
    ctaTitle: 'お気軽にお問い合わせください',
    ctaText: 'プロジェクトのご相談・お見積りは無料です。',
  },
};

export default defineConfig({
  root: '.',
  base: './',
  plugins: [
    handlebars({
      partialDirectory: resolve(import.meta.dirname, 'works/corporate/partials'),
      context(pagePath) {
        return corporatePageData[pagePath];
      },
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        cafeLp: resolve(import.meta.dirname, 'works/cafe-lp/index.html'),
        corporateTop: resolve(import.meta.dirname, 'works/corporate/index.html'),
        corporateService: resolve(import.meta.dirname, 'works/corporate/service.html'),
        corporateWorks: resolve(import.meta.dirname, 'works/corporate/works.html'),
        corporateCompany: resolve(import.meta.dirname, 'works/corporate/company.html'),
      },
    },
  },
});
