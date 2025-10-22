# 森の日々 福井店 - デプロイガイド

このガイドでは、プロジェクトをGitHubにアップロードし、Vercelにデプロイする手順を説明します。

---

## 📋 現在のプロジェクト状態

✅ すべての必要なファイルが揃っています：

### 設定ファイル
- ✅ `package.json` - 依存関係とスクリプト
- ✅ `vite.config.ts` - Viteビルド設定
- ✅ `tsconfig.json` / `tsconfig.node.json` - TypeScript設定
- ✅ `.gitignore` - Git除外ファイル
- ✅ `index.html` - HTMLエントリーポイント
- ✅ `main.tsx` - Reactエントリーポイント

### アプリケーションファイル
- ✅ `App.tsx` - メインランディングページ
- ✅ `styles/globals.css` - Tailwind V4スタイル
- ✅ `components/ui/` - Shadcn UIコンポーネント（40+）
- ✅ `components/figma/ImageWithFallback.tsx` - 画像コンポーネント

### その他
- ✅ `README.md` - プロジェクトドキュメント
- ✅ `public/favicon.svg` - ファビコン

---

## 🚀 GitHubへのアップロード手順

### ステップ1: プロジェクトフォルダ全体をダウンロード

Figma Makeから、プロジェクト全体をZIPファイルとしてダウンロードするか、すべてのファイルをローカル環境にコピーしてください。

### ステップ2: ローカルでGitリポジトリを初期化

ターミナル（またはコマンドプロンプト）を開き、プロジェクトフォルダに移動します：

```bash
cd /path/to/mori-no-hibi-fukui
```

Gitリポジトリを初期化：

```bash
git init
```

### ステップ3: すべてのファイルをステージング

```bash
git add .
```

### ステップ4: 最初のコミット

```bash
git commit -m "Initial commit: 森の日々 福井店 ランディングページ"
```

### ステップ5: GitHubにリポジトリを作成

1. [GitHub](https://github.com)にログイン
2. 右上の「+」ボタン → 「New repository」をクリック
3. リポジトリ名を入力（例: `mori-no-hibi-fukui`）
4. Publicまたは Privateを選択
5. 「Create repository」をクリック

**重要**: 「Initialize this repository with」のオプションは**すべてチェックを外す**（README、.gitignore、licenseを追加しない）

### ステップ6: ローカルリポジトリとGitHubを接続

GitHubに表示されるコマンドをコピーして実行：

```bash
git remote add origin https://github.com/YOUR_USERNAME/mori-no-hibi-fukui.git
git branch -M main
git push -u origin main
```

**YOUR_USERNAME** を実際のGitHubユーザー名に置き換えてください。

---

## 🌐 Vercelへのデプロイ手順

### 方法1: GitHubリポジトリから自動デプロイ（推奨）

1. [Vercel](https://vercel.com)にアクセス
2. 「Sign Up」または「Log In」
   - GitHubアカウントでログインすることをおすすめします
3. ダッシュボードで「Add New」→「Project」をクリック
4. 「Import Git Repository」でGitHubを選択
5. GitHubアカウントを接続（初回のみ）
6. 作成した`mori-no-hibi-fukui`リポジトリを選択
7. プロジェクト設定を確認：
   - **Framework Preset**: Vite（自動検出されます）
   - **Root Directory**: `./`（そのまま）
   - **Build Command**: `vite build`（自動設定）
   - **Output Directory**: `dist`（自動設定）
8. 「Deploy」をクリック

数分でデプロイが完了し、ライブURLが発行されます！

### 方法2: Vercel CLI でデプロイ

```bash
# Vercel CLIをインストール（初回のみ）
npm install -g vercel

# プロジェクトフォルダでデプロイ
vercel

# プロダクションデプロイ
vercel --prod
```

---

## 🔄 更新・再デプロイ方法

GitHubにプッシュすると、Vercelが自動的に再デプロイします：

```bash
# ファイルを編集した後
git add .
git commit -m "更新内容の説明"
git push
```

Vercelが自動的に検出して、数分以内に変更が反映されます。

---

## ✅ デプロイ後の確認事項

### 動作確認
- [ ] すべてのセクションが正しく表示される
- [ ] 画像が読み込まれる（Unsplash画像）
- [ ] フォントが正しく適用される（Noto Sans JP、Playfair Display）
- [ ] Accordionコンポーネント（Q&A）が動作する
- [ ] AIメニュー診断リンクが機能する
- [ ] レスポンシブデザインが機能する（モバイル/タブレット/デスクトップ）
- [ ] ページ全体がスムーズにスクロールする

### パフォーマンス確認
- [ ] ページの読み込み速度
- [ ] Lighthouseスコアの確認

### SEO確認
- [ ] ページタイトルが正しく表示される
- [ ] meta descriptionが設定されている
- [ ] OGP画像が設定されている（オプション）

---

## 🎯 カスタムドメインの設定（オプション）

独自ドメインを使用したい場合：

1. Vercelダッシュボードでプロジェクトを開く
2. 「Settings」→「Domains」に移動
3. 「Add Domain」をクリック
4. ドメイン名を入力（例: `mori-no-hibi-fukui.com`）
5. 表示されるDNSレコードを、ドメイン管理サービスに設定
6. DNSが伝播するまで待つ（数分〜24時間）

---

## 🛠️ トラブルシューティング

### ビルドエラーが発生する場合

**エラー**: `Cannot find module 'react'`
```bash
# ローカルで依存関係をインストール
npm install
```

**エラー**: TypeScriptの型エラー
- `tsconfig.json`が正しく配置されているか確認
- `npm install typescript --save-dev`を実行

### 画像が表示されない場合

- Unsplash URLが正しいか確認
- ブラウザのコンソールでエラーを確認
- `ImageWithFallback`コンポーネントが正しくインポートされているか確認

### フォントが表示されない場合

- `App.tsx`の最後にGoogle Fontsのリンクが含まれているか確認（既に含まれています）
- ネットワーク環境を確認

### Vercelでデプロイできない場合

1. Vercelダッシュボードの「Deployments」でエラーログを確認
2. `package.json`の`scripts`セクションが正しいか確認
3. `vite.config.ts`が正しく配置されているか確認

---

## 📞 サポート

### 公式ドキュメント
- [Vercel公式ドキュメント](https://vercel.com/docs)
- [Vite公式ドキュメント](https://vitejs.dev/)
- [React公式ドキュメント](https://react.dev/)

### GitHub Issues
問題が発生した場合は、GitHubリポジトリでIssueを作成してください。

---

## 📝 チェックリスト

デプロイ前の最終確認：

- [ ] すべてのファイルがGitHubにプッシュされている
- [ ] `.gitignore`が正しく設定されている
- [ ] `node_modules`がGitにコミットされていない
- [ ] `package.json`が正しく設定されている
- [ ] ローカルで`npm install && npm run build`が成功する
- [ ] ローカルで`npm run dev`で動作確認済み

デプロイ後の確認：

- [ ] ライブURLでページが表示される
- [ ] すべての機能が動作する
- [ ] モバイルで表示確認
- [ ] SEO設定が反映されている

---

**おめでとうございます！** 🎉

プロジェクトが正常にデプロイされました。

ライブURL: `https://your-project-name.vercel.app`

今後の更新は、GitHubにプッシュするだけで自動的にVercelに反映されます。

---

© 2025 森の日々 福井店
