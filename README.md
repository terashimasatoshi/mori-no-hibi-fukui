# 森の日々 福井店

科学的根拠に基づくヘッドスパ＆髪質改善専門店のランディングページ

## 🌿 コンセプト

「科学 × 癒し × オーガニック」をテーマに、現代人のストレス・睡眠・髪質の悩みに寄り添う、根拠のあるリラクゼーションを提供します。

## 🎨 デザイン

- **配色**: 白・ベージュ・パステルグリーン・濃グレー
- **フォント**: Noto Sans JP（本文）、Playfair Display（見出し）
- **雰囲気**: 落ち着き、信頼感、科学的でありながら温かみのある表現

## 📱 特徴

- 完全レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- 14セクション構成の長文記事形式
- 科学的根拠に基づく効果説明
- AIメニュー診断機能（外部リンク）
- Accordion形式のQ&Aセクション

## 🚀 セットアップ

### 前提条件

- Node.js 18.x 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd mori-no-hibi-fukui

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開きます。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` フォルダに生成されます。

### プレビュー

```bash
npm run preview
```

## 📦 技術スタック

- **フレームワーク**: React 18
- **ビルドツール**: Vite 6
- **スタイリング**: Tailwind CSS v4
- **UIコンポーネント**: Shadcn/UI
- **アイコン**: Lucide React
- **TypeScript**: 完全型付け

## 🌐 デプロイ

### Vercelへのデプロイ

1. GitHubにリポジトリをプッシュ
2. [Vercel](https://vercel.com)にログイン
3. 「New Project」からリポジトリを選択
4. 自動検出された設定を確認してデプロイ

または、Vercel CLIを使用：

```bash
npm install -g vercel
vercel
```

## 📂 プロジェクト構成

```
├── App.tsx                 # メインコンポーネント
├── main.tsx               # エントリーポイント
├── index.html             # HTMLテンプレート
├── components/            # Reactコンポーネント
│   ├── ui/               # Shadcn UIコンポーネント
│   └── figma/            # 画像フォールバックコンポーネント
├── styles/
│   └── globals.css       # Tailwind V4グローバルスタイル
├── vite.config.ts        # Vite設定
├── tsconfig.json         # TypeScript設定
└── package.json          # 依存関係
```

## 🔧 カスタマイズ

### 色の変更

`styles/globals.css` で CSS変数を編集：

```css
:root {
  --background: #F5F2EA;
  --foreground: #2C3E50;
  /* ... */
}
```

### フォントの変更

`App.tsx` の Google Fonts リンクを編集し、`fontFamily` スタイルを更新します。

## 📝 ライセンス

© 2025 森の日々 福井店. All rights reserved.

## 💬 お問い合わせ

ご質問やご要望がございましたら、お気軽にお問い合わせください。

---

**Made with ♥ using React, Tailwind CSS, and Vite**
