import { ImageWithFallback } from './components/figma/ImageWithFallback';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F2EA' }}>
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center space-y-6 md:space-y-8">
          <h1 
            className="tracking-tight" 
            style={{ 
              fontFamily: "'Playfair Display', serif",
              color: '#2C3E50',
              fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
              lineHeight: '1.2'
            }}
          >
            森の日々 福井店
          </h1>
          <p 
            className="tracking-wide" 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: 'clamp(1rem, 3vw, 1.125rem)',
              letterSpacing: '0.05em'
            }}
          >
            髪質改善 ＆ ヘッドスパ専門店
          </p>
          <p 
            className="mt-6 md:mt-8 px-4" 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: 'clamp(1.05rem, 3vw, 1.25rem)',
              lineHeight: '1.8'
            }}
          >
            月に一度、からだと心をリセットする<br className="hidden sm:inline" />「根拠のある癒し」。
          </p>
          <div className="mt-12 max-w-2xl mx-auto">
            <p 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '1rem',
                lineHeight: '2',
                letterSpacing: '0.02em'
              }}
            >
              忙しさやストレス、眠りの浅さを感じる現代人へ。森の日々は、国内外の研究で示唆されているヘッドスパの効果をわかりやすく伝え、科学的な視点でリラクゼーションを設計しました。
            </p>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex justify-center my-16">
        <div className="w-24 h-24 rounded-full overflow-hidden opacity-60">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1718202125952-9f516926d854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxlYXZlcyUyMG5hdHVyYWx8ZW58MXx8fHwxNzYwNzE4NzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="装飾"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Section 2: 現代の課題 */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 
          className="mb-10 md:mb-12 text-center px-4" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#2C3E50',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            lineHeight: '1.4'
          }}
        >
          なぜ今「頭の休息」が必要なのか
        </h2>
        <div className="space-y-8">
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            スマホやPC、常時接続の仕事環境により脳は常に情報処理を続けています。交感神経の優位状態が続くと、睡眠の質低下、肩こり、肌荒れ、ホルモンバランスの乱れにつながります。
          </p>
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            近年では「スマホ脳疲労」という言葉も一般化し、脳が"ぼんやりする時間"を失いつつあります。ヘッドスパは、この現代的ストレスに対して「外側からのリラクゼーション」を提供する方法として注目されています。
          </p>
        </div>
      </section>

      {/* Section 3: 科学的根拠 */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 
          className="mb-10 md:mb-12 text-center px-4" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#2C3E50',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            lineHeight: '1.4'
          }}
        >
          研究でわかってきた3つの効果
        </h2>
        <div className="space-y-8 md:space-y-10">
          <div className="p-6 md:p-8 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <h3 
              className="mb-3 md:mb-4" 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#B8D8C4',
                fontSize: 'clamp(1rem, 3vw, 1.125rem)',
                letterSpacing: '0.05em'
              }}
            >
              1. ストレスの軽減
            </h3>
            <p 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '1rem',
                lineHeight: '2.2',
                letterSpacing: '0.02em'
              }}
            >
              頭皮マッサージ15〜25分でストレスホルモン（コルチゾール等）が減少した報告があります。日々の緊張から解放され、深いリラックス状態へと導かれます。
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <h3 
              className="mb-3 md:mb-4" 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#B8D8C4',
                fontSize: 'clamp(1rem, 3vw, 1.125rem)',
                letterSpacing: '0.05em'
              }}
            >
              2. 睡眠の主観的改善
            </h3>
            <p 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '1rem',
                lineHeight: '2.2',
                letterSpacing: '0.02em'
              }}
            >
              マッサージ介入により「寝つきが良くなった」「熟睡できた」と感������る人が増加しています。質の高い睡眠は、心身の回復に欠かせません。
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <h3 
              className="mb-3 md:mb-4" 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#B8D8C4',
                fontSize: 'clamp(1rem, 3vw, 1.125rem)',
                letterSpacing: '0.05em'
              }}
            >
              3. 血行促進と自律神経の安定
            </h3>
            <p 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '1rem',
                lineHeight: '2.2',
                letterSpacing: '0.02em'
              }}
            >
              炭酸や温熱刺激によって末梢血管が拡張し、冷えやコリの改善が期待されます。巡りが整うことで、体全体が軽くなる感覚を得られます。
            </p>
          </div>
        </div>
        <p 
          className="mt-10 text-center" 
          style={{ 
            fontFamily: "'Noto Sans JP', sans-serif",
            color: '#2C3E50',
            fontSize: '0.875rem',
            lineHeight: '1.8',
            letterSpacing: '0.02em',
            opacity: 0.7
          }}
        >
          ※いずれも医療行為ではなく、体調サポートを目的とした研究結果です。
        </p>
      </section>

      {/* Decorative Divider */}
      <div className="flex justify-center my-20">
        <div className="w-16 h-16 rounded-full overflow-hidden opacity-50">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758262488223-04c1ef28ee17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMGRyb3BsZXQlMjBvcmdhbmljfGVufDF8fHx8MTc2MDgwMjc4OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="装飾"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Section 4: メカニズム ① */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 
          className="mb-10 md:mb-12 text-center px-4" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#2C3E50',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            lineHeight: '1.5'
          }}
        >
          やさしい刺激が<br />
          脳を落ち着かせる
        </h2>
        <div className="space-y-8">
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            ヘッドスパで行う「一定のリズムの触圧刺激」は、脳のHPA軸（ストレス応答系）に働きかけ、副交感神経を優位に導くと考えられています。
          </p>
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            実際に女性事務職を対象とした研究では、15分間の頭皮マッサージ後にコルチゾール濃度が低下し、リラックス感が増したと報告されています。日々の緊張を抱える方にとって、頭部への優しいタッチは深い安心感をもたらします。
          </p>
        </div>
      </section>

      {/* Section 5: メカニズム ② */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 
          className="mb-10 md:mb-12 text-center px-4" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#2C3E50',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            lineHeight: '1.4'
          }}
        >
          「寝つきが良くなる」のはなぜ？
        </h2>
        <div className="space-y-8">
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            マッサージによるリラックス状態は、交感神経を抑制し、副交感神経を優位にします。その結果、体温がゆるやかに下がり、入眠の準備が整いやすくなります。
          </p>
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            研究でも、定期的なマッサージを受ける人は主観的な睡眠の質が高い傾向を示しています。森の日々では、照明・音・香りを整え、眠りに落ちる手前の"静かな時間"を演出します。
          </p>
        </div>
      </section>

      {/* Section 6: メカニズム ③ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 
          className="mb-10 md:mb-12 text-center px-4" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#2C3E50',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            lineHeight: '1.5'
          }}
        >
          炭酸と温熱がもたらす<br />
          「めぐり」
        </h2>
        <div className="space-y-8">
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            冷えやむくみは、自律神経の乱れによって血管の収縮が続くことが一因です。炭酸ヘッドスパでは、頭皮に微細な炭酸を含ませることで末梢血管がやわらぎ、血流が促進されることが実験的に示されています。
          </p>
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            温かい手のひら全体で包み込むようにケアすることで、
          </p>
        </div>
      </section>

      {/* Section 7: メカニズム ④ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 
          className="mb-10 md:mb-12 text-center px-4" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#2C3E50',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            lineHeight: '1.4'
          }}
        >
          「水素ケア」で酸化を防ぐという考え方
        </h2>
        <div className="space-y-8">
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            紫外線やストレス、カラーリングなどで発生する活性酸素は、髪や頭皮の老化を早めます。水素はこの酸化を抑える性質を持つことが知られ、アンチエイジング美容分野で注目されています。
          </p>
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            森の日々では、医療ではなく美容ケアの範囲で、水素を取り入れた髪質改善メニューを提供しています。内側から輝く、健やかな髪へ。
          </p>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex justify-center my-20">
        <div className="w-20 h-20 rounded-full overflow-hidden opacity-50">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1679685809539-52ff98163cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9uJTIwbWluaW1hbHxlbnwxfHx8fDE3NjA4MDI3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="装飾"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Section 8: ライフスタイル提案 */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 
          className="mb-10 md:mb-12 text-center px-4" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#2C3E50',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            lineHeight: '1.4'
          }}
        >
          「通う」ことで整うリズム
        </h2>
        <div className="space-y-8">
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            一度の施術よりも、月に1〜2回の習慣化が心身のバランスを安定させます。研究でも、短時間でも継続的なリラクゼーションがストレス指標の改善につながる傾向が示されています。
          </p>
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            仕事帰り、休日の朝、季節の変わり目など、自分のペースで通うことが重要です。忙しい日常の中に、静かな「自分だけの時間」を組み込んでみてください。
          </p>
        </div>
      </section>

      {/* Section 9: お客様の声 */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 
          className="mb-10 md:mb-12 text-center px-4" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#2C3E50',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            lineHeight: '1.4'
          }}
        >
          お客様の声
        </h2>
        <div className="space-y-8 md:space-y-10">
          <div className="p-6 md:p-8 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <p 
              className="mb-3" 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#B8D8C4',
                fontSize: '0.875rem',
                letterSpacing: '0.05em'
              }}
            >
              30代女性・会社員
            </p>
            <p 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '1rem',
                lineHeight: '2',
                letterSpacing: '0.02em'
              }}
            >
              施術を受けた夜は、驚くほど深く眠れました。朝起きた時の「頭が軽い」という感覚が忘れられません。デスクワークで凝り固まった首や肩も、施術後はほぐれてい��感じがして、視界まで明るくなったような気がします。
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <p 
              className="mb-3" 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#B8D8C4',
                fontSize: '0.875rem',
                letterSpacing: '0.05em'
              }}
            >
              40代女性・事務職
            </p>
            <p 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '1rem',
                lineHeight: '2',
                letterSpacing: '0.02em'
              }}
            >
              パソコン作業が多く、慢性的な肩こりに悩んでいました。ヘッドスパを受けてから、目の奥の疲れが取れて視界がクリアになりました。思っていた以上に頭と体はつながっているのだと実感しました。
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <p 
              className="mb-3" 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#B8D8C4',
                fontSize: '0.875rem',
                letterSpacing: '0.05em'
              }}
            >
              50代女性・主婦
            </p>
            <p 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '1rem',
                lineHeight: '2',
                letterSpacing: '0.02em'
              }}
            >
              家事や育児に追われる毎日で、自分の時間がほとんどありませんでした。森の日々で過ごす静かな時間は、私にとって心のオアシスです。施術中に眠ってしまうほどリラックスできて、心から癒されます。
            </p>
          </div>
        </div>
      </section>

      {/* Section 10: 技術と安全性 */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 
          className="mb-10 md:mb-12 text-center px-4" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#2C3E50',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            lineHeight: '1.5'
          }}
        >
          国家資格者による施術<br />
          安心設計
        </h2>
        <div className="space-y-8">
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            森の日々の代表は、国家資格である美容師免許を保有しています。長年培ってきた確かな技術と知識で、お客様一人ひとりの頭皮状態や体調を丁寧に見極め、最適な施術をご提供します。
          </p>
          <p 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '1rem',
              lineHeight: '2.2',
              letterSpacing: '0.02em'
            }}
          >
            温度・照明・音量などの環境要素も科学的根拠に基づき設計し、リスクを最小限にしています。妊娠中・更年期など体調に不安のある方も、姿勢や圧を調整して対応いたしますので、お気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* Section 11: メニュー & 料金 */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 
          className="mb-10 md:mb-12 text-center px-4" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#2C3E50',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            lineHeight: '1.4'
          }}
        >
          メニュー ＆ 料金
        </h2>
        <div className="space-y-6 md:space-y-8">
          <div className="p-6 md:p-8 rounded-lg border-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B8D8C4' }}>
            <h3 
              className="mb-3 md:mb-4" 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                letterSpacing: '0.03em'
              }}
            >
              森の深眠スパ（60分）
            </h3>
            <p 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '1rem',
                lineHeight: '2',
                letterSpacing: '0.02em'
              }}
            >
              触圧マッサージとアロマの香りで、日々のストレスをやさしく解きほぐします。初めての方におすすめの基本コースです。
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-lg border-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B8D8C4' }}>
            <h3 
              className="mb-3 md:mb-4" 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                letterSpacing: '0.03em'
              }}
            >
              森の炭酸（60分）
            </h3>
            <p 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '1rem',
                lineHeight: '2',
                letterSpacing: '0.02em'
              }}
            >
              炭酸の微細な泡で頭皮をディープクレンジング。血行を促進し、めぐりをサポートします。頭皮環境を整えたい方に。
            </p>
          </div>
          <div className="p-6 md:p-8 rounded-lg border-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B8D8C4' }}>
            <h3 
              className="mb-3 md:mb-4" 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: 'clamp(1.1rem, 3vw, 1.25rem)',
                letterSpacing: '0.03em'
              }}
            >
              水素髪質改善（90分）
            </h3>
            <p 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '1rem',
                lineHeight: '2',
                letterSpacing: '0.02em'
              }}
            >
          水素の力で酸化ストレスをケアし、髪の内側から補修。艶やかで健やかな髪質へと導きます。髪のダメージが気になる方に。
            </p>
          </div>
        </div>
        <p 
          className="mt-10 text-center" 
          style={{ 
            fontFamily: "'Noto Sans JP', sans-serif",
            color: '#2C3E50',
            fontSize: '0.875rem',
            lineHeight: '1.8',
            letterSpacing: '0.02em',
            opacity: 0.7
          }}
        >
          ※美容・リラクゼーション目的であり、効果の感じ方には個人差があります。
        </p>
      </section>

      {/* Section 12: Q&A */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 
          className="mb-10 md:mb-12 text-center px-4" 
          style={{ 
            fontFamily: "'Playfair Display', serif",
            color: '#2C3E50',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            lineHeight: '1.4'
          }}
        >
          よくあるご質問
        </h2>
        <div className="rounded-lg p-3 md:p-4" style={{ backgroundColor: '#FFFFFF' }}>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger 
                className="text-left"
                style={{ 
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: '#2C3E50',
                  fontSize: 'clamp(0.95rem, 2.5vw, 1rem)',
                  letterSpacing: '0.02em'
                }}
              >
                どのくらいの頻度で通うのがおすすめですか？
              </AccordionTrigger>
              <AccordionContent 
                style={{ 
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: '#2C3E50',
                  fontSize: '0.95rem',
                  lineHeight: '2',
                  letterSpacing: '0.02em'
                }}
              >
                月に1〜2回のご利用をおすすめしています。研究でも、短時間でも継続的なリラクゼーションがストレス軽減につながることが示されています。ご自身のペースで、無理なく続けていただくことが大切です。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger 
                className="text-left"
                style={{ 
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: '#2C3E50',
                  fontSize: 'clamp(0.95rem, 2.5vw, 1rem)',
                  letterSpacing: '0.02em'
                }}
              >
                睡眠への効果は本当にありますか？
              </AccordionTrigger>
              <AccordionContent 
                style={{ 
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: '#2C3E50',
                  fontSize: '0.95rem',
                  lineHeight: '2',
                  letterSpacing: '0.02em'
                }}
              >
                マッサージによるリラックス作用で、副交感神経が優位になり、寝つきが良くなる方が多くいらっしゃいます。研究でも主観的な睡眠の質向上が報告されています。ただし、感じ方には個人差がありますので、ご了承ください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger 
                className="text-left"
                style={{ 
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: '#2C3E50',
                  fontSize: 'clamp(0.95rem, 2.5vw, 1rem)',
                  letterSpacing: '0.02em'
                }}
              >
                炭酸や水素って安全ですか？
              </AccordionTrigger>
              <AccordionContent 
                style={{ 
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: '#2C3E50',
                  fontSize: '0.95rem',
                  lineHeight: '2',
                  letterSpacing: '0.02em'
                }}
              >
                いずれも美容用途で安全性が確認されている成分です。炭酸は血行促進、水素は酸化ケアに役立つとされています。肌や頭皮に刺激を感じる場合は、すぐにお知らせください。
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger 
                className="text-left"
                style={{ 
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: '#2C3E50',
                  fontSize: 'clamp(0.95rem, 2.5vw, 1rem)',
                  letterSpacing: '0.02em'
                }}
              >
                妊娠中でも受けられますか？
              </AccordionTrigger>
              <AccordionContent 
                style={{ 
                  fontFamily: "'Noto Sans JP', sans-serif",
                  color: '#2C3E50',
                  fontSize: '0.95rem',
                  lineHeight: '2',
                  letterSpacing: '0.02em'
                }}
              >
                妊娠中の方も、体調や週数に応じて施術が可能です。姿勢や圧を調整し、無理のない範囲で対応いたします。事前にご相談いただけますと安心です。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Section 13: CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center p-8 md:p-12 rounded-lg" style={{ backgroundColor: '#B8D8C4' }}>
          <h2 
            className="mb-6 md:mb-8" 
            style={{ 
              fontFamily: "'Playfair Display', serif",
              color: '#2C3E50',
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              lineHeight: '1.5',
              letterSpacing: '0.02em'
            }}
          >
            ご予約・お問い合わせ
          </h2>
          <p 
            className="mb-8 md:mb-10 max-w-md mx-auto" 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: 'clamp(0.95rem, 2.5vw, 1rem)',
              lineHeight: '1.9',
              letterSpacing: '0.03em'
            }}
          >
            ご自身のリズムに合わせたケアを。<br className="sm:hidden" />
            まずは体験からどうぞ。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <a 
              href="https://udify.app/workflow/nLzuibIgxeVKbUub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg transition-all hover:opacity-80 text-center inline-block" 
              style={{ 
                backgroundColor: '#FFFFFF',
                color: '#2C3E50',
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                border: '2px solid #2C3E50',
                textDecoration: 'none'
              }}
            >
              AIでメニューを診断
            </a>
            <button 
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg transition-all hover:opacity-80 text-center" 
              style={{ 
                backgroundColor: '#2C3E50',
                color: '#FFFFFF',
                fontFamily: "'Noto Sans JP', sans-serif",
                fontSize: '0.9rem',
                letterSpacing: '0.05em'
              }}
            >
              予約する
            </button>
          </div>
          <p 
            className="mt-6 md:mt-8" 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '0.875rem',
              lineHeight: '1.8',
              letterSpacing: '0.05em',
              opacity: 0.75
            }}
          >
            24時間予約受付
          </p>
        </div>
      </section>

      {/* Section 14: 参考情報 */}
      <section className="max-w-3xl mx-auto px-6 py-16 mb-20">
        <div className="p-6 md:p-8 rounded-lg" style={{ backgroundColor: 'rgba(44, 62, 80, 0.05)' }}>
          <h3 
            className="mb-6 text-center px-4" 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: 'clamp(0.95rem, 2.5vw, 1rem)',
              letterSpacing: '0.05em'
            }}
          >
            参考情報
          </h3>
          <ul className="space-y-3">
            <li 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '0.875rem',
                lineHeight: '1.8',
                letterSpacing: '0.02em'
              }}
            >
              ・2016年：頭皮マッサージによるストレスホルモン低下の研究（国内）
            </li>
            <li 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '0.875rem',
                lineHeight: '1.8',
                letterSpacing: '0.02em'
              }}
            >
              ・2023年：マッサージが睡眠の質を改善した報告（海外レビュー）
            </li>
            <li 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '0.875rem',
                lineHeight: '1.8',
                letterSpacing: '0.02em'
              }}
            >
          • 2018年：炭酸浴による血流促進の実験（国内大学）
            </li>
            <li 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '0.875rem',
                lineHeight: '1.8',
                letterSpacing: '0.02em'
              }}
            >
              ・2009年：髪と酸化ストレスに関する総説
            </li>
            <li 
              style={{ 
                fontFamily: "'Noto Sans JP', sans-serif",
                color: '#2C3E50',
                fontSize: '0.875rem',
                lineHeight: '1.8',
                letterSpacing: '0.02em'
              }}
            >
              ・2023年：精油の香りとストレス緩和に関する報告
            </li>
          </ul>
          <p 
            className="mt-8 text-center" 
            style={{ 
              fontFamily: "'Noto Sans JP', sans-serif",
              color: '#2C3E50',
              fontSize: '0.8rem',
              lineHeight: '1.8',
              letterSpacing: '0.02em',
              opacity: 0.7
            }}
          >
            ※本ページの内容は学術情報を一般向けにやさしく要約したものであり、治療効果を保証するものではありません。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12" style={{ backgroundColor: '#2C3E50' }}>
        <p 
          style={{ 
            fontFamily: "'Noto Sans JP', sans-serif",
            color: '#FFFFFF',
            fontSize: '0.875rem',
            letterSpacing: '0.05em',
            opacity: 0.8
          }}
        >
          森の日々 福井店
        </p>
        <p 
          className="mt-2" 
          style={{ 
            fontFamily: "'Noto Sans JP', sans-serif",
            color: '#FFFFFF',
            fontSize: '0.75rem',
            letterSpacing: '0.02em',
            opacity: 0.6
          }}
        >
          © 2025 Mori no Hibi Fukui
        </p>
      </footer>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Playfair+Display:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
    </div>
  );
}
