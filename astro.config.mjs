import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

/**
 * Astro configuration for the zawataku.com rearchitecture.
 *
 * @remarks
 * Why `srcDir` / `outDir` are overridden away from the Astro defaults
 * (`./src`, `./dist`):
 * この移行は既存の Vite + React SPA (`src/`, ビルド先 `dist/`) と並走させながら
 * 1機能ずつ段階的に置き換えるため、Astro 側は一時的に別ディレクトリ
 * (`astro-src/`, `dist-astro/`) に隔離している。
 * Astro は `@astrojs/react` を有効にすると `<srcDir>/pages` 配下の `.jsx`/`.tsx`
 * もページとして自動認識してしまうため、`srcDir` を分けないと既存の
 * `src/pages/*.tsx` (react-router 用のページコンポーネント) と衝突し、
 * ルーターコンテキスト外でのレンダリングによりビルドが壊れる。
 * 旧アプリ (Vite/Express) の廃止が完了した最終ステップで、
 * `astro-src` → `src`、`dist-astro` → `dist` にリネームし、この差分は解消する予定。
 *
 * @remarks
 * Why `output: 'static'` (Astro のデフォルト) を維持しているか:
 * ポートフォリオの大半 (Top / Works など) は静的生成 (SSG) で十分なパフォーマンスが
 * 出せる。一方で 404 / 418 のような「実際の HTTP ステータスコードを返す」ページは
 * 静的ファイルとして書き出すとステータスを制御できないため、該当ページ側で個別に
 * `export const prerender = false;` を指定してオンデマンドレンダリング (SSR) に
 * 切り替える方針 (hybrid rendering)。この対応自体は別タスクで行う。
 *
 * @remarks
 * Why `adapter.prerenderEnvironment: 'node'`:
 * `@astrojs/cloudflare` はデフォルトでビルド時のプリレンダリングも
 * workerd (Miniflare) サンドボックス内で実行する。しかし現状の環境では
 * Vite/Rolldown が生成する内部ランタイムが `node:module` を解決できず
 * (`nodejs_compat` 互換フラグ未設定) ビルドが失敗する。
 * 互換フラグは `wrangler.json` 側できちんと設計したいため、
 * Cloudflare Pages デプロイ設定タスクで対応するまでの暫定措置として、
 * プリレンダリングだけは Astro 標準の Node 環境で行うようにしている。
 * (本番のオンデマンドレンダリング/デプロイ自体は引き続き workerd 上で動く)
 */
export default defineConfig({
  srcDir: './astro-src',
  outDir: './dist-astro',
  output: 'static',
  integrations: [react()],
  adapter: cloudflare({
    prerenderEnvironment: 'node',
  }),
});
