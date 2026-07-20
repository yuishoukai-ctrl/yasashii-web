const siteUrl = "https://yasashii-web-studio-jp.yuishoukai.chatgpt.site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: "静岡市清水区のホームページ制作｜初心者にもやさしく丁寧に",
      description:
        "静岡市清水区の中小事業者・個人店向けに、文章づくりから公開後まで支援するホームページ制作サービスです。",
      inLanguage: "ja-JP",
      mainEntity: { "@id": `${siteUrl}/#service` },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "静岡市清水区のホームページ制作",
      serviceType: "ホームページ制作・Webサイト制作",
      description:
        "初心者にも分かりやすい説明で、ページ構成、デザイン、スマートフォン対応、基本的なSEO対策、公開後サポートまでお手伝いします。",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "静岡県静岡市清水区",
      },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "中小事業者・個人事業主・店舗経営者",
      },
      offers: [
        {
          "@type": "Offer",
          name: "まずは1ページプラン",
          price: "44000",
          priceCurrency: "JPY",
          url: `${siteUrl}/#price`,
        },
        {
          "@type": "Offer",
          name: "基本のホームページプラン",
          price: "88000",
          priceCurrency: "JPY",
          url: `${siteUrl}/#price`,
        },
        {
          "@type": "Offer",
          name: "しっかり情報発信プラン",
          price: "132000",
          priceCurrency: "JPY",
          url: `${siteUrl}/#price`,
        },
      ],
    },
  ],
};

const worries = [
  "ホームページは欲しいけれど、何から始めればいいか分からない",
  "パソコンや専門用語が苦手で、相談するのが少し不安",
  "自分のお店や仕事の魅力を、うまく文章にできるか心配",
];

const approach = [
  {
    number: "01",
    title: "お話を聞くところから",
    text: "やりたいことが固まっていなくても大丈夫です。お仕事のこと、お客さまのことを、普段の言葉でゆっくり伺います。",
  },
  {
    number: "02",
    title: "むずかしい言葉は使いません",
    text: "専門用語をできるだけ避け、画面を一緒に見ながら進めます。分からないことは、何度でもご質問ください。",
  },
  {
    number: "03",
    title: "公開後も、身近な相談相手に",
    text: "ホームページは作って終わりではありません。更新やちょっとした変更も、必要なときにご相談いただけます。",
  },
];

const works = [
  {
    slug: "restaurant",
    name: "Cafe & Bar HANA",
    category: "飲食店向け",
    tone: "爽やかブルー系",
    href: "https://yuishoukai-ctrl.github.io/coconala-samples/restaurant/",
    image: "/portfolio/restaurant.webp",
    alt: "Cafe & Bar HANAのホームページ制作サンプル",
    aim: "爽やかな青を基調に、料理や店内の雰囲気が伝わり、初めての方も来店を思い描きやすい構成にまとめました。",
    scope: ["ページ構成", "デザイン", "ページの組み立て", "スマートフォン表示", "画面アニメーション", "メニュー・店舗情報の整理"],
    delivery: "約4〜6週間",
  },
  {
    slug: "nail",
    name: "Nail Salon Lien",
    category: "美容サロン向け",
    tone: "ローズゴールド系・上品",
    href: "https://yuishoukai-ctrl.github.io/coconala-samples/nail-salon/",
    image: "/portfolio/nail-salon.webp",
    alt: "Nail Salon Lienのホームページ制作サンプル",
    aim: "落ち着いたローズゴールドを基調に、施術写真とメニューを見やすく整理し、安心して予約できる雰囲気にまとめました。",
    scope: ["ページ構成", "デザイン", "ページの組み立て", "スマートフォン表示", "画面アニメーション", "メニュー・予約導線の整理"],
    delivery: "約4〜6週間",
  },
  {
    slug: "hair",
    name: "ATELIER LUCE",
    category: "美容室向け",
    tone: "ダーク系・高級感",
    href: "https://yuishoukai-ctrl.github.io/coconala-samples/hair-salon/",
    image: "/portfolio/hair-salon.webp",
    alt: "ATELIER LUCEのホームページ制作サンプル",
    aim: "写真が引き立つダークトーンを使い、上質さを保ちながら、メニューや店舗情報へ迷わず進める構成にしました。",
    scope: ["ページ構成", "デザイン", "ページの組み立て", "スマートフォン表示", "画面アニメーション", "スタイル・店舗情報の整理"],
    delivery: "約4〜6週間",
  },
  {
    slug: "seitai",
    name: "からだ整体院",
    category: "治療院向け",
    tone: "ナチュラルグリーン系・信頼感",
    href: "https://yuishoukai-ctrl.github.io/coconala-samples/seitai/",
    image: "/portfolio/seitai.webp",
    alt: "からだ整体院のホームページ制作サンプル",
    aim: "やさしい緑と余白を生かし、施術内容や院内の様子を順序よく伝えて、初めてでも相談しやすい印象に整えました。",
    scope: ["ページ構成", "デザイン", "ページの組み立て", "スマートフォン表示", "画面アニメーション", "施術内容・相談導線の整理"],
    delivery: "約4〜6週間",
  },
];

const plans = [
  {
    name: "まずは1ページプラン",
    pages: "1ページ",
    price: "44,000",
    note: "名刺代わりのページや、サービス紹介に",
  },
  {
    name: "基本のホームページプラン",
    pages: "5ページ",
    price: "88,000",
    note: "トップ・事業紹介・サービス・会社案内・お問い合わせ",
    recommended: true,
  },
  {
    name: "しっかり情報発信プラン",
    pages: "10ページ",
    price: "132,000",
    note: "商品やサービスを詳しく掲載したい方に",
  },
];

const included = [
  ["01", "スマートフォン対応", "スマホでも読みやすい画面に整えます"],
  ["02", "文章づくりのお手伝い", "お話をもとに、伝わる文章へまとめます"],
  ["03", "お問い合わせ導線", "電話やメールへ迷わず進めるよう設計します"],
  ["04", "基本的なSEO対策", "静岡市清水区などの地域名とサービス内容が伝わるよう設定します"],
  ["05", "公開までの設定", "サーバーやドメインの準備もご案内します"],
  ["06", "公開後1か月サポート", "小さな修正やご質問に対応します"],
];

const process = [
  ["01", "無料相談", "お電話またはオンラインで、ご希望やお困りごとを伺います。"],
  ["02", "内容の整理・お見積り", "必要なページと掲載内容を整理し、事前に費用をご案内します。"],
  ["03", "デザイン・制作", "途中の画面をご確認いただきながら、少しずつ形にしていきます。"],
  ["04", "公開・使い方のご案内", "完成後は更新方法をご説明。公開後1か月は無料でサポートします。"],
];

const faqs = [
  {
    q: "パソコンがほとんど使えなくても大丈夫ですか？",
    a: "はい、大丈夫です。メールが苦手な方には、お電話や対面でのやり取りもご案内します。専門用語を使わず、ひとつずつご説明します。",
  },
  {
    q: "文章や写真が用意できていません。",
    a: "ご安心ください。お話を伺いながら文章を一緒に整理します。写真についても、撮り方や必要な素材をご案内します。",
  },
  {
    q: "制作期間はどのくらいですか？",
    a: "5ページのホームページで、お打ち合わせから公開まで約4〜6週間が目安です。内容や資料の準備状況により前後します。",
  },
  {
    q: "表示されている料金以外に費用はかかりますか？",
    a: "ホームページの住所となるドメインと、データを置くサーバーの費用が別途必要です。必要な金額は、お申し込み前に分かりやすくご説明します。",
  },
  {
    q: "SEO対策も料金に含まれていますか？",
    a: "ページの題名や説明文、見出し、スマートフォン表示など、検索エンジンに内容を正しく伝えるための基本設定は料金に含まれます。検索順位を保証するものではありませんが、公開後の情報更新についてもご案内します。",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="○○ウェブ制作室 ホーム">
            <span className="brand-mark" aria-hidden="true">○</span>
            <span>
              <strong>○○ウェブ制作室</strong>
              <small>まちのホームページ相談所</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="主要メニュー">
            <a href="#about">私たちについて</a>
            <a href="#works">制作実績</a>
            <a href="#price">料金</a>
            <a href="#flow">制作の流れ</a>
            <a href="#faq">よくある質問</a>
          </nav>

          <a className="header-phone" href="tel:0000000000">
            <span>お電話でのご相談</span>
            00-0000-0000
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true" />静岡市清水区の50代・60代の事業者さまへ</p>
            <h1 id="hero-title">
              パソコンが苦手でも、<br />大丈夫。
              <span>清水区で、あなたの仕事をきちんと伝える<br className="wide-break" />ホームページを。</span>
            </h1>
            <p className="hero-lead">
              清水区の店舗・中小事業者の方へ。「何を載せたらいいの？」から、いっしょに考えます。<br />
              むずかしい言葉を使わず、公開後まで丁寧にお手伝いします。
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                まずは無料で相談する
                <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href="#price">料金を先に見る <span aria-hidden="true">↓</span></a>
            </div>
            <ul className="hero-notes" aria-label="ご相談について">
              <li>ご相談無料</li>
              <li>原稿づくりもお手伝い</li>
              <li>無理な営業はしません</li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="/consultation.webp"
                alt="相談者の話を聞きながらホームページの制作内容を説明する担当者"
                width="1400"
                height="933"
                fetchPriority="high"
              />
            </div>
            <div className="consultation-badge">
              <span className="status-dot" aria-hidden="true" />
              <span><strong>初心者の方も歓迎</strong>お電話・オンラインで対応</span>
            </div>
            <p className="image-caption">顔の見える、ていねいなホームページ制作</p>
          </div>
        </section>

        <section className="worries section-shell" aria-labelledby="worries-title">
          <div className="section-heading">
            <span className="section-number" aria-hidden="true">01</span>
            <div>
              <p className="section-kicker">こんなお悩み、ありませんか？</p>
              <h2 id="worries-title">ホームページのこと、<br />ひとりで悩まなくて大丈夫です。</h2>
            </div>
          </div>
          <div className="worry-list">
            {worries.map((worry, index) => (
              <div className="worry-row" key={worry}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{worry}</p>
              </div>
            ))}
          </div>
          <p className="worries-answer">うまく説明できなくても構いません。私たちが質問しながら、必要なことを一緒に整理します。</p>
        </section>

        <section className="approach" id="about" aria-labelledby="approach-title">
          <div className="approach-media">
            <img
              src="/responsive-device.webp"
              alt="パソコンとスマートフォンに表示された見やすいホームページ"
              width="1200"
              height="900"
              loading="lazy"
            />
            <p><strong>スマートフォンにも対応</strong>どの画面でも、文字を大きく見やすく。</p>
          </div>
          <div className="approach-content">
            <p className="section-kicker light">私たちが大切にしていること</p>
            <h2 id="approach-title">つくる時間も、<br />できあがった後も、<br />安心できること。</h2>
            <div className="approach-list">
              {approach.map((item) => (
                <article className="approach-row" key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="local-service" id="shimizu" aria-labelledby="shimizu-title">
          <div className="local-service-inner">
            <header className="local-service-heading">
              <p className="section-kicker">静岡市清水区の事業者さまへ</p>
              <h2 id="shimizu-title">清水区で、相談しやすい<br />ホームページ制作を。</h2>
            </header>
            <div className="local-service-copy">
              <p className="local-service-lead">
                静岡市清水区でホームページ制作・ホームページ作成をお考えの店舗、中小事業者、個人事業主の方へ。
                専門用語をできるだけ使わず、お仕事の内容や地域のお客さまに伝えたいことを一緒に整理します。
              </p>
              <p>
                地域名を入れるだけではなく、サービス内容・料金・制作事例・相談方法まで、
                検索する方が知りたい情報を分かりやすい見出しと文章で整えます。
              </p>
              <ul className="local-service-points" aria-label="清水区の事業者向けホームページ制作の特徴">
                <li><span aria-hidden="true">01</span><strong>お店や仕事の強みが伝わる文章づくり</strong></li>
                <li><span aria-hidden="true">02</span><strong>スマホ対応と基本的なSEO対策</strong></li>
                <li><span aria-hidden="true">03</span><strong>料金を確認してから始められる安心設計</strong></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="works" id="works" aria-labelledby="works-title">
          <div className="works-inner">
            <header className="works-heading">
              <div>
                <p className="section-kicker">制作実績</p>
                <h2 id="works-title">実際の制作イメージを<br />ご覧ください。</h2>
              </div>
              <p>すべてスマホ対応済み・<br />アニメーション付きです。</p>
            </header>

            <div className="works-grid">
              {works.map((work, index) => (
                <a
                  className={`work-card work-card--${work.slug}`}
                  href={work.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${work.name}の制作サンプルを新しいタブで見る`}
                  key={work.name}
                >
                  <figure>
                    <div className="work-card-visual">
                      <img
                        src={work.image}
                        alt={work.alt}
                        width="1200"
                        height="750"
                        loading="lazy"
                      />
                      <span className="work-card-number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <figcaption>
                      <p className="work-card-category">{work.category}</p>
                      <h3>{work.name}</h3>
                      <p className="work-card-tone">{work.tone}</p>
                      <ul className="work-card-features" aria-label={`${work.name}の対応内容`}>
                        <li>スマホ対応</li>
                        <li>アニメーション</li>
                      </ul>
                      <dl className="work-card-details">
                        <div className="work-card-detail">
                          <dt>制作の狙い</dt>
                          <dd>{work.aim}</dd>
                        </div>
                        <div className="work-card-detail">
                          <dt>担当範囲</dt>
                          <dd>
                            <ul className="work-card-scope">
                              {work.scope.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </dd>
                        </div>
                        <div className="work-card-detail">
                          <dt>納期目安</dt>
                          <dd><strong className="work-card-delivery">{work.delivery}</strong>（内容・素材の準備状況により前後します）</dd>
                        </div>
                      </dl>
                      <span className="work-card-link">
                        サイトを見る <span aria-hidden="true">↗</span>
                      </span>
                    </figcaption>
                  </figure>
                </a>
              ))}
            </div>
            <p className="works-note">掲載しているホームページは、業種別に制作したサンプルサイトです。</p>
          </div>
        </section>

        <section className="pricing section-shell" id="price" aria-labelledby="price-title">
          <div className="section-heading pricing-heading">
            <span className="section-number" aria-hidden="true">02</span>
            <div>
              <p className="section-kicker">料金のご案内</p>
              <h2 id="price-title">必要なものを、<br />分かりやすい料金で。</h2>
            </div>
            <p>追加費用が必要な場合は、制作を始める前に必ずご案内します。</p>
          </div>

          <div className="price-table" role="list" aria-label="ホームページ制作プラン">
            {plans.map((plan) => (
              <article className={`price-row${plan.recommended ? " is-featured" : ""}`} key={plan.name} role="listitem">
                <div className="plan-name">
                  {plan.recommended && <span>いちばん人気</span>}
                  <h3>{plan.name}</h3>
                  <p>{plan.note}</p>
                </div>
                <p className="page-count">{plan.pages}</p>
                <p className="plan-price"><strong>{plan.price}</strong><span>円</span><small>税込</small></p>
              </article>
            ))}
          </div>

          <div className="price-note">
            <p><strong>5ページの例</strong>トップページ／私たちについて／サービス紹介／会社・店舗案内／お問い合わせ</p>
            <p>※ ドメイン・サーバー代は別途必要です。内容によりお見積りが変わる場合があります。</p>
          </div>
        </section>

        <section className="included" aria-labelledby="included-title">
          <div className="included-intro">
            <p className="section-kicker light">どのプランにも含まれます</p>
            <h2 id="included-title">「分からない」を残さない、<br />基本のサポート。</h2>
            <p>ホームページに必要な準備から公開まで、まとめてお手伝いします。</p>
          </div>
          <div className="included-list">
            {included.map(([number, title, text]) => (
              <div className="included-row" key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="process section-shell" id="flow" aria-labelledby="flow-title">
          <div className="section-heading flow-heading">
            <span className="section-number" aria-hidden="true">03</span>
            <div>
              <p className="section-kicker">制作の流れ</p>
              <h2 id="flow-title">一歩ずつ、確認しながら<br />進めます。</h2>
            </div>
          </div>
          <ol className="process-list">
            {process.map(([number, title, text]) => (
              <li key={number}>
                <span className="process-number">STEP {number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="faq section-shell" id="faq" aria-labelledby="faq-title">
          <div className="section-heading faq-heading">
            <span className="section-number" aria-hidden="true">04</span>
            <div>
              <p className="section-kicker">よくあるご質問</p>
              <h2 id="faq-title">ご相談の前に、<br />気になること。</h2>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details key={item.q}>
                <summary><span>Q{String(index + 1).padStart(2, "0")}</span>{item.q}</summary>
                <div className="faq-answer"><span>A</span><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner">
            <div className="contact-copy">
              <p className="section-kicker light">初回相談は無料です</p>
              <h2 id="contact-title">まずは、お仕事のことを<br />聞かせてください。</h2>
              <p>ホームページを作るか決まっていなくても大丈夫です。<br />「こんなことはできますか？」というご質問だけでも、お気軽にどうぞ。</p>
            </div>
            <div className="contact-box">
              <p className="contact-label"><span className="status-dot" aria-hidden="true" />お電話でのご相談</p>
              <a href="tel:0000000000" className="contact-phone">00-0000-0000</a>
              <p>受付時間　平日 9:00〜18:00</p>
              <span className="contact-divider">または</span>
              <a className="button button-light" href="mailto:info@example.jp">メールで相談する <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true">○</span>
            <span><strong>○○ウェブ制作室</strong><small>まちのホームページ相談所</small></span>
          </a>
          <p>静岡市清水区を中心に、ホームページ制作のご相談を受け付けています。</p>
        </div>
        <p>© 2026 ○○ウェブ制作室</p>
      </footer>
    </>
  );
}
