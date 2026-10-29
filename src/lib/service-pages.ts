// Content for the SEO service pages at /{locale}/{slug}.
// One entry per service; the page template lives in app/[locale]/[service]/page.tsx.

export type ServiceIcon =
  | "camera"
  | "video"
  | "drone"
  | "images"
  | "users"
  | "sparkles"
  | "building"
  | "music"
  | "eye"
  | "gift"
  | "briefcase"
  | "package";

export type ServiceCopy = {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  serviceName: string;
  included: Array<{ icon: ServiceIcon; title: string; copy: string }>;
  faqs: Array<{ q: string; a: string }>;
  ctaTitle: string;
  ctaCopy: string;
  navLabel: string;
};

export type ServicePage = {
  slug: string;
  // Homepage service-card keys that should link to this page.
  cardKeys: string[];
  // Matches portfolio category key or label to pick photos for the page.
  photoMatch: RegExp;
  related: string[];
  bg: ServiceCopy;
  en: ServiceCopy;
};

const travelFaqBg = {
  q: "Работите ли извън София?",
  a: "Да. Работим в цяла България, а пътните разходи се уточняват според локацията.",
};
const travelFaqEn = {
  q: "Do you work outside Sofia?",
  a: "Yes. We work across Bulgaria; travel costs depend on the location.",
};
const deliveryFaqBg = {
  q: "Колко бързо получаваме материалите?",
  a: "Срокът зависи от обема на заснемането и се потвърждава в офертата, преди да запазите датата.",
};
const deliveryFaqEn = {
  q: "How fast do we receive the files?",
  a: "It depends on the size of the shoot and is confirmed in the quote before you book.",
};

export const servicePages: ServicePage[] = [
  {
    slug: "wedding-photography-sofia",
    cardKeys: ["weddings"],
    photoMatch: /сватб|wedding|svatb/i,
    related: ["baptism-photography-sofia", "drone-photography-sofia", "family-photography-sofia", "iris-photography-sofia"],
    bg: {
      seoTitle: "Сватбена фотография и видео в София | Parkov Visuals",
      seoDescription:
        "Сватбен фотограф и видеооператор в София: снимки, видео и дрон от един екип. Второ поколение фотограф, Studio Parkov от 1996. Отговор до 24 ч.",
      eyebrow: "Сватби · София и цяла България",
      title: "Сватбена фотография и видео в София",
      intro:
        "Снимки, видео и дрон от един екип и с един план за деня. Спокойно присъствие, внимание към детайла и кадри, които ще гледате след 20 години.",
      serviceName: "Сватбена фотография и видео",
      navLabel: "Сватби",
      included: [
        { icon: "camera", title: "Сватбена фотография", copy: "Подготовка, церемония, портрети на двойката, гости и парти. Селектирани и обработени кадри." },
        { icon: "video", title: "Сватбено видео", copy: "Кинематографичен трейлър и филм от деня с музика, slow motion и истинска емоция." },
        { icon: "drone", title: "Дрон кадри", copy: "Мястото, церемонията и двойката отвисоко — мащаб, който земната камера не дава." },
        { icon: "images", title: "Онлайн галерия", copy: "Снимки, готови за споделяне, които изпращате на близките с един линк." },
      ],
      faqs: [
        travelFaqBg,
        { q: "Може ли само снимки или само видео?", a: "Да. Изберете само фотография, само видео или двете с дрон — офертата се прави според деня ви." },
        deliveryFaqBg,
        { q: "Как се запазва дата?", a: "Датата се запазва с капаро. Точните условия се уточняват предварително." },
        { q: "Получаваме ли RAW файлове?", a: "Получавате селектирани и обработени финални изображения. RAW файловете не са част от стандартната доставка." },
      ],
      ctaTitle: "Свободна ли е вашата дата?",
      ctaCopy: "Изпратете дата, място и брой гости. Ще получите отговор с възможности и оферта до 24 часа.",
    },
    en: {
      seoTitle: "Wedding Photographer & Videographer in Sofia | Parkov Visuals",
      seoDescription:
        "Wedding photography, video and drone in Sofia from one team. Second-generation photographer, Studio Parkov since 1996. Replies within 24 hours.",
      eyebrow: "Weddings · Sofia and all of Bulgaria",
      title: "Wedding photography and video in Sofia",
      intro:
        "Photos, video and drone from one team with one plan for the day. A calm presence, attention to detail, and images you will still watch in 20 years.",
      serviceName: "Wedding photography and video",
      navLabel: "Weddings",
      included: [
        { icon: "camera", title: "Wedding photography", copy: "Getting ready, ceremony, couple portraits, guests and party. Selected, edited images." },
        { icon: "video", title: "Wedding video", copy: "A cinematic trailer and film of the day with music, slow motion and real emotion." },
        { icon: "drone", title: "Drone footage", copy: "Venue, ceremony and couple from above, adding scale no ground camera can." },
        { icon: "images", title: "Online gallery", copy: "Share-ready photos you send to family with a single link." },
      ],
      faqs: [
        travelFaqEn,
        { q: "Can we book only photos or only video?", a: "Yes. Choose photography, video, or both with drone. The quote is built around your day." },
        deliveryFaqEn,
        { q: "How do we reserve the date?", a: "The date is reserved with a deposit. Exact terms are agreed in advance." },
        { q: "Do we get RAW files?", a: "You receive selected, edited final images. RAW files are not part of the standard delivery." },
      ],
      ctaTitle: "Is your date available?",
      ctaCopy: "Send the date, venue and number of guests. You will get availability and a quote within 24 hours.",
    },
  },
  {
    slug: "baptism-photography-sofia",
    cardKeys: [],
    photoMatch: /кръщ|baptis|krasht|krusht/i,
    related: ["family-photography-sofia", "birthday-photography-sofia", "wedding-photography-sofia", "events-photography-sofia"],
    bg: {
      seoTitle: "Фотограф за кръщене в София | Снимки и видео | Parkov Visuals",
      seoDescription:
        "Фотограф и видеооператор за кръщене в София. Дискретно заснемане на церемонията, детайлите и празника. Отговор до 24 ч.",
      eyebrow: "Кръщенета · София",
      title: "Фотограф за кръщене в София",
      intro:
        "На кръщенето вие сте заети с детето, гостите и свещеника. Ние улавяме всичко останало — малките ръце, водата, свещите и погледите на близките.",
      serviceName: "Фотография и видео за кръщене",
      navLabel: "Кръщене",
      included: [
        { icon: "camera", title: "Церемонията в църквата", copy: "Дискретно заснемане, без светкавица в най-важните мигове и без да пречим на свещеника." },
        { icon: "users", title: "Семейни портрети", copy: "Снимки с кръстниците, бабите и дядовците — кадрите, които после всички искат." },
        { icon: "gift", title: "Празникът след това", copy: "Тортата, гостите и атмосферата в ресторанта или у дома." },
        { icon: "video", title: "Видео по желание", copy: "Кратък филм от деня, който да пазите за детето, когато порасне." },
      ],
      faqs: [
        { q: "Снимате ли в църквата?", a: "Да. Съобразяваме се с правилата на храма и снимаме дискретно, без да прекъсваме ритуала." },
        { q: "Може ли само църквата, без празника?", a: "Да. Заснемането се съобразява с вашата програма — само църква или целия ден." },
        deliveryFaqBg,
        travelFaqBg,
      ],
      ctaTitle: "Планирате кръщене?",
      ctaCopy: "Изпратете датата, църквата и мястото на празника. Ще получите оферта до 24 часа.",
    },
    en: {
      seoTitle: "Baptism Photographer in Sofia | Photo & Video | Parkov Visuals",
      seoDescription:
        "Baptism photographer and videographer in Sofia. Discreet coverage of the ceremony, the details and the celebration. Replies within 24 hours.",
      eyebrow: "Baptisms · Sofia",
      title: "Baptism photographer in Sofia",
      intro:
        "At a baptism you are busy with the child, the guests and the priest. We capture everything else: tiny hands, the water, the candles and the faces of family.",
      serviceName: "Baptism photography and video",
      navLabel: "Baptism",
      included: [
        { icon: "camera", title: "The church ceremony", copy: "Discreet coverage without flash at key moments and without disturbing the priest." },
        { icon: "users", title: "Family portraits", copy: "Photos with godparents and grandparents — the images everyone asks for later." },
        { icon: "gift", title: "The celebration", copy: "The cake, the guests and the atmosphere at the restaurant or at home." },
        { icon: "video", title: "Optional video", copy: "A short film of the day to keep for your child when they grow up." },
      ],
      faqs: [
        { q: "Do you shoot inside the church?", a: "Yes. We follow the church's rules and shoot discreetly without interrupting the ritual." },
        { q: "Can we book only the church?", a: "Yes. Coverage follows your schedule — church only or the whole day." },
        deliveryFaqEn,
        travelFaqEn,
      ],
      ctaTitle: "Planning a baptism?",
      ctaCopy: "Send the date, the church and the celebration venue. You will get a quote within 24 hours.",
    },
  },
  {
    slug: "birthday-photography-sofia",
    cardKeys: [],
    photoMatch: /рожден|юбил|birthday|jubilee|ubiley/i,
    related: ["baptism-photography-sofia", "family-photography-sofia", "events-photography-sofia", "corporate-events-sofia"],
    bg: {
      seoTitle: "Фотограф за рожден ден и юбилей в София | Parkov Visuals",
      seoDescription:
        "Фотограф и видеооператор за рождени дни, юбилеи и семейни празненства в София. Естествени кадри от празника. Отговор до 24 ч.",
      eyebrow: "Рождени дни и юбилеи · София",
      title: "Фотограф за рожден ден и юбилей в София",
      intro:
        "Детски рожден ден, 50-ти юбилей или голямо семейно празненство — снимаме празника естествено, без да го превръщаме във фотосесия.",
      serviceName: "Фотография за рождени дни и юбилеи",
      navLabel: "Рождени дни",
      included: [
        { icon: "gift", title: "Ключовите моменти", copy: "Посрещането, тортата, свещите, тостовете и подаръците." },
        { icon: "users", title: "Гостите", copy: "Групови снимки и естествени кадри с всички, които са дошли." },
        { icon: "camera", title: "Детайлите", copy: "Украсата, масите и всичко, в което сте вложили време." },
        { icon: "video", title: "Видео по желание", copy: "Кратък клип от празника за споделяне или за спомен." },
      ],
      faqs: [
        { q: "Снимате ли детски рождени дни?", a: "Да — у дома, в ресторант или в детски център. Работим спокойно и не плашим децата." },
        { q: "Колко часа е заснемането?", a: "Според програмата на празника. Обикновено покриваме най-важните 2–4 часа, а точното време се уточнява в офертата." },
        deliveryFaqBg,
        travelFaqBg,
      ],
      ctaTitle: "Предстои празник?",
      ctaCopy: "Изпратете датата, мястото и приблизителния брой гости. Отговаряме до 24 часа.",
    },
    en: {
      seoTitle: "Birthday & Jubilee Photographer in Sofia | Parkov Visuals",
      seoDescription:
        "Photographer and videographer for birthdays, jubilees and family celebrations in Sofia. Natural photos of the party. Replies within 24 hours.",
      eyebrow: "Birthdays and jubilees · Sofia",
      title: "Birthday and jubilee photographer in Sofia",
      intro:
        "A kid's birthday, a 50th jubilee or a big family celebration — we photograph the party naturally without turning it into a photo shoot.",
      serviceName: "Birthday and jubilee photography",
      navLabel: "Birthdays",
      included: [
        { icon: "gift", title: "Key moments", copy: "Arrivals, the cake, the candles, the toasts and the gifts." },
        { icon: "users", title: "The guests", copy: "Group photos and candid shots with everyone who came." },
        { icon: "camera", title: "The details", copy: "Decorations, tables and everything you put time into." },
        { icon: "video", title: "Optional video", copy: "A short clip of the party to share or keep." },
      ],
      faqs: [
        { q: "Do you photograph kids' birthdays?", a: "Yes — at home, in a restaurant or a play centre. We work calmly and don't scare the kids." },
        { q: "How long is the coverage?", a: "It follows the party schedule. Usually the key 2–4 hours; the exact time is set in the quote." },
        deliveryFaqEn,
        travelFaqEn,
      ],
      ctaTitle: "Celebration coming up?",
      ctaCopy: "Send the date, venue and approximate number of guests. We reply within 24 hours.",
    },
  },
  {
    slug: "prom-photography-sofia",
    cardKeys: [],
    photoMatch: /абитур|prom|balove|bal/i,
    related: ["portrait-photography-sofia", "events-photography-sofia", "drone-photography-sofia", "family-photography-sofia"],
    bg: {
      seoTitle: "Фотограф за абитуриентски бал в София | Parkov Visuals",
      seoDescription:
        "Абитуриентски фотосесии и заснемане на бал в София — портрети, приятели, семейство и видео. Записване за сезон 2027. Отговор до 24 ч.",
      eyebrow: "Абитуриентски балове · София",
      title: "Фотограф за абитуриентски бал в София",
      intro:
        "Абитуриентският бал е веднъж. Правим портрети, снимки с приятели и семейството и видео от вечерта — за абитуриенти, класове и цели училища.",
      serviceName: "Фотография за абитуриентски бал",
      navLabel: "Абитуриентски балове",
      included: [
        { icon: "camera", title: "Абитуриентска фотосесия", copy: "Портрети на открито или на избрана локация преди бала." },
        { icon: "users", title: "Приятели и семейство", copy: "Снимки с родителите, класа и най-близките приятели." },
        { icon: "video", title: "Видео от вечерта", copy: "Кратък клип от тръгването, ресторанта и партито." },
        { icon: "drone", title: "Дрон кадри", copy: "Целият клас или колоната от коли отвисоко — кадър, който никой друг няма." },
      ],
      faqs: [
        { q: "Кога да запазим дата?", a: "Колкото по-рано, толкова по-добре — датите през май и юни се запълват първи." },
        { q: "Снимате ли цели класове?", a: "Да. За класове и групи правим обща оферта според броя абитуриенти." },
        deliveryFaqBg,
        travelFaqBg,
      ],
      ctaTitle: "Записване за бал 2027",
      ctaCopy: "Изпратете датата на бала, училището и дали сте един абитуриент или група. Отговаряме до 24 часа.",
    },
    en: {
      seoTitle: "Prom Photographer in Sofia | Parkov Visuals",
      seoDescription:
        "Prom photo sessions and prom night coverage in Sofia — portraits, friends, family and video. Booking for 2027. Replies within 24 hours.",
      eyebrow: "Proms · Sofia",
      title: "Prom photographer in Sofia",
      intro:
        "Prom happens once. We shoot portraits, photos with friends and family and video of the night — for single graduates, classes and whole schools.",
      serviceName: "Prom photography",
      navLabel: "Proms",
      included: [
        { icon: "camera", title: "Prom photo session", copy: "Portraits outdoors or at a chosen location before the prom." },
        { icon: "users", title: "Friends and family", copy: "Photos with parents, the class and closest friends." },
        { icon: "video", title: "Video of the night", copy: "A short clip of the departure, the restaurant and the party." },
        { icon: "drone", title: "Drone footage", copy: "The whole class or the car convoy from above — a shot nobody else has." },
      ],
      faqs: [
        { q: "When should we book?", a: "The earlier the better — May and June dates fill up first." },
        { q: "Do you shoot whole classes?", a: "Yes. For classes and groups we make one quote based on the number of graduates." },
        deliveryFaqEn,
        travelFaqEn,
      ],
      ctaTitle: "Booking for prom 2027",
      ctaCopy: "Send the prom date, the school and whether you are one graduate or a group. We reply within 24 hours.",
    },
  },
  {
    slug: "corporate-events-sofia",
    cardKeys: [],
    photoMatch: /корпорат|corporate|firmen|фирм/i,
    related: ["business-portraits-sofia", "advertising-video-sofia", "concert-photography-sofia", "events-photography-sofia"],
    bg: {
      seoTitle: "Фотограф за корпоративни събития в София | Parkov Visuals",
      seoDescription:
        "Фотография и видео за конференции, фирмени партита и коледни тиймбилдинги в София. Бързо предаване за PR и социални мрежи. Отговор до 24 ч.",
      eyebrow: "Корпоративни събития · София",
      title: "Фотограф за корпоративни събития в София",
      intro:
        "Конференции, фирмени партита, коледни тържества и тиймбилдинги. Снимки и видео за вътрешна комуникация, PR и социалните ви мрежи.",
      serviceName: "Фотография и видео за корпоративни събития",
      navLabel: "Корпоративни събития",
      included: [
        { icon: "briefcase", title: "Конференции и семинари", copy: "Лектори, публика, сцена и нетуъркинг паузите." },
        { icon: "sparkles", title: "Фирмени партита", copy: "Коледни партита и годишни тържества с естествени, не скучни кадри." },
        { icon: "video", title: "Видео обобщение", copy: "Кратък клип от събитието за LinkedIn, Instagram и вътрешни канали." },
        { icon: "users", title: "Екипни снимки", copy: "Групова снимка на екипа, която няма да изглежда като паспортна." },
      ],
      faqs: [
        { q: "Издавате ли фактура?", a: "Да. Работим с фирми и предоставяме документи за плащането." },
        { q: "Може ли бързо предаване за PR?", a: "Да. Подбрани снимки за прессъобщение или социални мрежи могат да се уговорят за същия или следващия ден." },
        { q: "Снимате ли и извън София?", a: "Да — за конференции и тиймбилдинги в цяла България." },
        deliveryFaqBg,
      ],
      ctaTitle: "Коледни партита: оставащи дати",
      ctaCopy: "Изпратете датата, мястото и формата на събитието. Ще получите оферта до 24 часа.",
    },
    en: {
      seoTitle: "Corporate Event Photographer in Sofia | Parkov Visuals",
      seoDescription:
        "Photo and video for conferences, company parties and Christmas team events in Sofia. Fast delivery for PR and social media. Replies within 24 hours.",
      eyebrow: "Corporate events · Sofia",
      title: "Corporate event photographer in Sofia",
      intro:
        "Conferences, company parties, Christmas celebrations and team buildings. Photo and video for internal communication, PR and your social channels.",
      serviceName: "Corporate event photography and video",
      navLabel: "Corporate events",
      included: [
        { icon: "briefcase", title: "Conferences and seminars", copy: "Speakers, audience, stage and networking breaks." },
        { icon: "sparkles", title: "Company parties", copy: "Christmas parties and annual celebrations with natural, not boring, photos." },
        { icon: "video", title: "Event recap video", copy: "A short clip for LinkedIn, Instagram and internal channels." },
        { icon: "users", title: "Team photos", copy: "A team photo that won't look like a passport picture." },
      ],
      faqs: [
        { q: "Do you issue invoices?", a: "Yes. We work with companies and provide payment documents." },
        { q: "Can we get photos fast for PR?", a: "Yes. A selection for a press release or social media can be arranged for the same or next day." },
        { q: "Do you cover events outside Sofia?", a: "Yes — conferences and team buildings across Bulgaria." },
        deliveryFaqEn,
      ],
      ctaTitle: "Christmas parties: remaining dates",
      ctaCopy: "Send the date, venue and format of the event. You will get a quote within 24 hours.",
    },
  },
  {
    slug: "concert-photography-sofia",
    cardKeys: [],
    photoMatch: /концерт|concert|koncert|festival/i,
    related: ["corporate-events-sofia", "advertising-video-sofia", "drone-photography-sofia", "events-photography-sofia"],
    bg: {
      seoTitle: "Фотограф за концерти и фестивали в София | Parkov Visuals",
      seoDescription:
        "Фотография и видео за концерти, фестивали и публични събития в София — сцена, публика и атмосфера. Отговор до 24 ч.",
      eyebrow: "Концерти и фестивали · София",
      title: "Фотограф за концерти и фестивали в София",
      intro:
        "Сцена, светлини и публика в движение. Снимаме концерти, фестивали и публични събития за организатори, изпълнители и медии.",
      serviceName: "Фотография за концерти и фестивали",
      navLabel: "Концерти",
      included: [
        { icon: "music", title: "Сцената", copy: "Изпълнителите в най-силните моменти, при всякакво сценично осветление." },
        { icon: "users", title: "Публиката", copy: "Енергията на хората — кадрите, които продават следващото събитие." },
        { icon: "video", title: "Видео и клипове", copy: "Кратки клипове за промоция и социални мрежи." },
        { icon: "drone", title: "Дрон", copy: "Мащабът на фестивала отвисоко, където е разрешено." },
      ],
      faqs: [
        { q: "Работите ли с организатори и изпълнители?", a: "Да. Снимаме както за организатора на събитието, така и директно за изпълнител или група." },
        { q: "Може ли бързо предаване?", a: "Да. Подбор от снимки за социалните мрежи може да се уговори за същата нощ или следващия ден." },
        deliveryFaqBg,
        travelFaqBg,
      ],
      ctaTitle: "Организирате събитие?",
      ctaCopy: "Изпратете датата, мястото и какво ви е нужно. Отговаряме до 24 часа.",
    },
    en: {
      seoTitle: "Concert & Festival Photographer in Sofia | Parkov Visuals",
      seoDescription:
        "Photo and video for concerts, festivals and public events in Sofia — stage, crowd and atmosphere. Replies within 24 hours.",
      eyebrow: "Concerts and festivals · Sofia",
      title: "Concert and festival photographer in Sofia",
      intro:
        "Stage, lights and a moving crowd. We photograph concerts, festivals and public events for organisers, artists and media.",
      serviceName: "Concert and festival photography",
      navLabel: "Concerts",
      included: [
        { icon: "music", title: "The stage", copy: "Artists at their strongest moments, under any stage lighting." },
        { icon: "users", title: "The crowd", copy: "The energy of the audience — the shots that sell the next event." },
        { icon: "video", title: "Video and clips", copy: "Short clips for promotion and social media." },
        { icon: "drone", title: "Drone", copy: "The scale of the festival from above, where permitted." },
      ],
      faqs: [
        { q: "Do you work with organisers and artists?", a: "Yes. We shoot for event organisers as well as directly for artists or bands." },
        { q: "Can we get photos fast?", a: "Yes. A selection for social media can be arranged for the same night or next day." },
        deliveryFaqEn,
        travelFaqEn,
      ],
      ctaTitle: "Organising an event?",
      ctaCopy: "Send the date, venue and what you need. We reply within 24 hours.",
    },
  },
  {
    slug: "events-photography-sofia",
    cardKeys: ["events"],
    photoMatch: /корпорат|абитур|концерт|corporate|prom|concert|event|събит/i,
    related: ["baptism-photography-sofia", "birthday-photography-sofia", "prom-photography-sofia", "corporate-events-sofia", "concert-photography-sofia"],
    bg: {
      seoTitle: "Фотограф за събития в София | Снимки и видео | Parkov Visuals",
      seoDescription:
        "Фотограф и видеооператор за събития в София: кръщенета, рождени дни, балове, корпоративни събития и концерти. Отговор до 24 ч.",
      eyebrow: "Събития · София",
      title: "Фотограф за събития в София",
      intro:
        "От кръщене до фирмена конференция — снимки и видео за всеки повод, със същото внимание към хората и атмосферата.",
      serviceName: "Фотография и видео за събития",
      navLabel: "Събития",
      included: [
        { icon: "gift", title: "Лични празници", copy: "Кръщенета, рождени дни, юбилеи и семейни празненства." },
        { icon: "sparkles", title: "Абитуриентски балове", copy: "Фотосесии, балът и видео от вечерта." },
        { icon: "briefcase", title: "Корпоративни събития", copy: "Конференции, фирмени партита и тиймбилдинги." },
        { icon: "music", title: "Концерти и фестивали", copy: "Сцена, публика и промо клипове." },
      ],
      faqs: [travelFaqBg, deliveryFaqBg, { q: "Предлагате ли и видео?", a: "Да. За всяко събитие можем да добавим видео или кратък клип за социалните мрежи." }],
      ctaTitle: "Разкажете ни за събитието",
      ctaCopy: "Изпратете вид, дата и място. Ще получите оферта до 24 часа.",
    },
    en: {
      seoTitle: "Event Photographer in Sofia | Photo & Video | Parkov Visuals",
      seoDescription:
        "Event photographer and videographer in Sofia: baptisms, birthdays, proms, corporate events and concerts. Replies within 24 hours.",
      eyebrow: "Events · Sofia",
      title: "Event photographer in Sofia",
      intro:
        "From a baptism to a company conference — photo and video for every occasion, with the same attention to people and atmosphere.",
      serviceName: "Event photography and video",
      navLabel: "Events",
      included: [
        { icon: "gift", title: "Personal celebrations", copy: "Baptisms, birthdays, jubilees and family parties." },
        { icon: "sparkles", title: "Proms", copy: "Photo sessions, the prom and video of the night." },
        { icon: "briefcase", title: "Corporate events", copy: "Conferences, company parties and team buildings." },
        { icon: "music", title: "Concerts and festivals", copy: "Stage, crowd and promo clips." },
      ],
      faqs: [travelFaqEn, deliveryFaqEn, { q: "Do you also offer video?", a: "Yes. Any event can include video or a short clip for social media." }],
      ctaTitle: "Tell us about your event",
      ctaCopy: "Send the type, date and venue. You will get a quote within 24 hours.",
    },
  },
  {
    slug: "family-photography-sofia",
    cardKeys: ["family"],
    photoMatch: /семей|бремен|домашн|family|matern|pet|bremen/i,
    related: ["baptism-photography-sofia", "portrait-photography-sofia", "iris-photography-sofia", "birthday-photography-sofia"],
    bg: {
      seoTitle: "Семейна и детска фотосесия в София | Parkov Visuals",
      seoDescription:
        "Семейни, детски и фотосесии за бременни в София — у дома, навън или в студио. Коледни семейни сесии. Отговор до 24 ч.",
      eyebrow: "Семейни сесии · София",
      title: "Семейна и детска фотосесия в София",
      intro:
        "Спокойни кадри у дома, навън или в студио, с естествено усещане. Семейни, детски сесии, бременност и снимки с домашни любимци.",
      serviceName: "Семейна и детска фотография",
      navLabel: "Семейни сесии",
      included: [
        { icon: "users", title: "Семейни сесии", copy: "Цялото семейство заедно — без сковани пози и изкуствени усмивки." },
        { icon: "sparkles", title: "Детски фотосесии", copy: "Игра, смях и търпение — снимаме в темпото на детето." },
        { icon: "camera", title: "Фотосесия за бременни", copy: "Нежни портрети на открито или в студио." },
        { icon: "gift", title: "Коледни сесии", copy: "Семейни кадри навреме за картички и подаръци." },
      ],
      faqs: [
        { q: "Къде се провежда сесията?", a: "У дома, в парк в София или в студио — избираме заедно според сезона и идеята." },
        { q: "Може ли с домашния любимец?", a: "Разбира се. Снимаме и фотосесии само на домашни любимци." },
        deliveryFaqBg,
        travelFaqBg,
      ],
      ctaTitle: "Запазете семейна сесия",
      ctaCopy: "Изпратете предпочитана дата и идея. Отговаряме до 24 часа.",
    },
    en: {
      seoTitle: "Family & Kids Photo Session in Sofia | Parkov Visuals",
      seoDescription:
        "Family, kids and maternity photo sessions in Sofia — at home, outdoors or in studio. Christmas family sessions. Replies within 24 hours.",
      eyebrow: "Family sessions · Sofia",
      title: "Family and kids photo session in Sofia",
      intro:
        "Relaxed photos at home, outdoors or in studio with a natural feel. Family and kids sessions, maternity and photos with pets.",
      serviceName: "Family and kids photography",
      navLabel: "Family sessions",
      included: [
        { icon: "users", title: "Family sessions", copy: "The whole family together — no stiff poses or forced smiles." },
        { icon: "sparkles", title: "Kids sessions", copy: "Play, laughter and patience — we work at the child's pace." },
        { icon: "camera", title: "Maternity sessions", copy: "Gentle portraits outdoors or in studio." },
        { icon: "gift", title: "Christmas sessions", copy: "Family photos in time for cards and gifts." },
      ],
      faqs: [
        { q: "Where does the session take place?", a: "At home, in a Sofia park or in studio — we choose together based on season and idea." },
        { q: "Can our pet join?", a: "Of course. We also shoot pet-only sessions." },
        deliveryFaqEn,
        travelFaqEn,
      ],
      ctaTitle: "Book a family session",
      ctaCopy: "Send a preferred date and idea. We reply within 24 hours.",
    },
  },
  {
    slug: "portrait-photography-sofia",
    cardKeys: ["portraits"],
    photoMatch: /портрет|portrait/i,
    related: ["business-portraits-sofia", "family-photography-sofia", "prom-photography-sofia", "iris-photography-sofia"],
    bg: {
      seoTitle: "Портретна фотосесия в София | Parkov Visuals",
      seoDescription:
        "Лични, артистични и професионални портретни фотосесии в София — на открито или в студио, със спокойни насоки. Отговор до 24 ч.",
      eyebrow: "Портрети · София",
      title: "Портретна фотосесия в София",
      intro:
        "Лични, артистични и професионални портрети за профил, портфолио или кампания. Насочваме спокойно, за да изглеждате като себе си.",
      serviceName: "Портретна фотография",
      navLabel: "Портрети",
      included: [
        { icon: "camera", title: "Лични портрети", copy: "За вас, за подарък или за профил в социалните мрежи." },
        { icon: "sparkles", title: "Артистични портрети", copy: "Светлина, настроение и концепция, която разработваме заедно." },
        { icon: "briefcase", title: "Професионални портрети", copy: "За сайт, портфолио, медии или кампания." },
        { icon: "images", title: "Обработени кадри", copy: "Внимателна ретуш, която запазва естествения вид." },
      ],
      faqs: [
        { q: "Не съм фотогеничен — ще стане ли?", a: "Да. Повечето хора казват същото. Насоките по време на сесията са точно за това." },
        { q: "Къде се снима?", a: "В студио или на открито в София — според идеята и светлината." },
        deliveryFaqBg,
      ],
      ctaTitle: "Запазете портретна сесия",
      ctaCopy: "Изпратете идея и предпочитана дата. Отговаряме до 24 часа.",
    },
    en: {
      seoTitle: "Portrait Photo Session in Sofia | Parkov Visuals",
      seoDescription:
        "Personal, artistic and professional portrait sessions in Sofia — outdoors or in studio, with calm direction. Replies within 24 hours.",
      eyebrow: "Portraits · Sofia",
      title: "Portrait photo session in Sofia",
      intro:
        "Personal, artistic and professional portraits for a profile, portfolio or campaign. Calm direction so you look like yourself.",
      serviceName: "Portrait photography",
      navLabel: "Portraits",
      included: [
        { icon: "camera", title: "Personal portraits", copy: "For yourself, as a gift or for your social profiles." },
        { icon: "sparkles", title: "Artistic portraits", copy: "Light, mood and a concept we develop together." },
        { icon: "briefcase", title: "Professional portraits", copy: "For a website, portfolio, media or campaign." },
        { icon: "images", title: "Edited images", copy: "Careful retouching that keeps a natural look." },
      ],
      faqs: [
        { q: "I'm not photogenic — will it work?", a: "Yes. Most people say that. Direction during the session is exactly for this." },
        { q: "Where do we shoot?", a: "In studio or outdoors in Sofia, depending on the idea and the light." },
        deliveryFaqEn,
      ],
      ctaTitle: "Book a portrait session",
      ctaCopy: "Send an idea and preferred date. We reply within 24 hours.",
    },
  },
  {
    slug: "business-portraits-sofia",
    cardKeys: ["business"],
    photoMatch: /корпорат|бизнес|business|corporate/i,
    related: ["corporate-events-sofia", "portrait-photography-sofia", "advertising-video-sofia", "product-photography-sofia"],
    bg: {
      seoTitle: "Бизнес портрети и LinkedIn снимки в София | Parkov Visuals",
      seoDescription:
        "Бизнес портрети, LinkedIn снимки и екипни фотосесии в София — в офиса ви или на локация. Отговор до 24 ч.",
      eyebrow: "Бизнес портрети · София",
      title: "Бизнес портрети и LinkedIn снимки в София",
      intro:
        "Профилната ви снимка се вижда, преди да сте казали дума. Правим бизнес портрети за хора и цели екипи — в офиса ви или навън в София.",
      serviceName: "Бизнес портретна фотография",
      navLabel: "Бизнес портрети",
      included: [
        { icon: "briefcase", title: "LinkedIn портрети", copy: "Професионални, но живи портрети за профил и сайт." },
        { icon: "users", title: "Екипни снимки", copy: "Цялият екип в единен стил — за сайта и „За нас“." },
        { icon: "building", title: "Офис атмосфера", copy: "Работното пространство и хората в него за employer branding." },
        { icon: "camera", title: "Мобилно студио", copy: "Идваме в офиса ви, без да спираме работния ден за дълго." },
      ],
      faqs: [
        { q: "Идвате ли в офиса?", a: "Да. Носим осветление и правим сесиите на място, за да не губи екипът време." },
        { q: "Може ли еднакъв стил за целия екип?", a: "Да — същият фон, светлина и обработка за всички, включително за нови колеги по-късно." },
        { q: "Издавате ли фактура?", a: "Да. Работим с фирми и предоставяме документи за плащането." },
        deliveryFaqBg,
      ],
      ctaTitle: "Обновете профилите на екипа",
      ctaCopy: "Изпратете броя хора и предпочитана дата. Ще получите оферта до 24 часа.",
    },
    en: {
      seoTitle: "Business Portraits & LinkedIn Photos in Sofia | Parkov Visuals",
      seoDescription:
        "Business portraits, LinkedIn headshots and team photo sessions in Sofia — at your office or on location. Replies within 24 hours.",
      eyebrow: "Business portraits · Sofia",
      title: "Business portraits and LinkedIn photos in Sofia",
      intro:
        "Your profile photo is seen before you say a word. We shoot business portraits for individuals and whole teams — at your office or outdoors in Sofia.",
      serviceName: "Business portrait photography",
      navLabel: "Business portraits",
      included: [
        { icon: "briefcase", title: "LinkedIn headshots", copy: "Professional yet lively portraits for profiles and websites." },
        { icon: "users", title: "Team photos", copy: "The whole team in one consistent style for your website." },
        { icon: "building", title: "Office atmosphere", copy: "Your workspace and people for employer branding." },
        { icon: "camera", title: "Mobile studio", copy: "We come to your office without stopping the workday for long." },
      ],
      faqs: [
        { q: "Do you come to the office?", a: "Yes. We bring lighting and shoot on site so the team loses little time." },
        { q: "Can the whole team have one style?", a: "Yes — same background, light and editing for everyone, including new hires later." },
        { q: "Do you issue invoices?", a: "Yes. We work with companies and provide payment documents." },
        deliveryFaqEn,
      ],
      ctaTitle: "Refresh your team's profiles",
      ctaCopy: "Send the number of people and a preferred date. You will get a quote within 24 hours.",
    },
  },
  {
    slug: "product-photography-sofia",
    cardKeys: ["products"],
    photoMatch: /продукт|product/i,
    related: ["advertising-video-sofia", "business-portraits-sofia", "real-estate-photography-sofia", "corporate-events-sofia"],
    bg: {
      seoTitle: "Продуктова фотография в София | Parkov Visuals",
      seoDescription:
        "Продуктова фотография за онлайн магазини, менюта и реклама в София — бял фон, лайфстайл и детайли. Отговор до 24 ч.",
      eyebrow: "Продуктова фотография · София",
      title: "Продуктова фотография в София",
      intro:
        "Чисти продуктови кадри, които продават — за онлайн магазини, ресторанти, менюта и рекламни материали.",
      serviceName: "Продуктова фотография",
      navLabel: "Продуктова фотография",
      included: [
        { icon: "package", title: "Бял фон", copy: "Еднакви, чисти снимки за онлайн магазин и маркетплейси." },
        { icon: "sparkles", title: "Лайфстайл кадри", copy: "Продуктът в употреба и в подходяща обстановка." },
        { icon: "camera", title: "Храна и напитки", copy: "Менюта, ресторанти и доставки — кадри, които отварят апетит." },
        { icon: "video", title: "Кратки продуктови видеа", copy: "Клипове за Instagram, TikTok и реклами." },
      ],
      faqs: [
        { q: "Снимате ли големи серии продукти?", a: "Да. За каталози и онлайн магазини правим оферта според броя продукти." },
        { q: "Издавате ли фактура?", a: "Да. Работим с фирми и предоставяме документи за плащането." },
        deliveryFaqBg,
      ],
      ctaTitle: "Нужни са ви продуктови снимки?",
      ctaCopy: "Изпратете вид и брой продукти и за какво ще се използват снимките. Отговаряме до 24 часа.",
    },
    en: {
      seoTitle: "Product Photography in Sofia | Parkov Visuals",
      seoDescription:
        "Product photography for online shops, menus and advertising in Sofia — white background, lifestyle and details. Replies within 24 hours.",
      eyebrow: "Product photography · Sofia",
      title: "Product photography in Sofia",
      intro:
        "Clean product photos that sell — for online shops, restaurants, menus and advertising materials.",
      serviceName: "Product photography",
      navLabel: "Product photography",
      included: [
        { icon: "package", title: "White background", copy: "Consistent, clean photos for online shops and marketplaces." },
        { icon: "sparkles", title: "Lifestyle shots", copy: "The product in use and in the right setting." },
        { icon: "camera", title: "Food and drinks", copy: "Menus, restaurants and delivery — photos that make people hungry." },
        { icon: "video", title: "Short product videos", copy: "Clips for Instagram, TikTok and ads." },
      ],
      faqs: [
        { q: "Do you shoot large product ranges?", a: "Yes. For catalogues and online shops we quote by number of products." },
        { q: "Do you issue invoices?", a: "Yes. We work with companies and provide payment documents." },
        deliveryFaqEn,
      ],
      ctaTitle: "Need product photos?",
      ctaCopy: "Send the type and number of products and where the photos will be used. We reply within 24 hours.",
    },
  },
  {
    slug: "advertising-video-sofia",
    cardKeys: ["creative"],
    photoMatch: /реклам|advert|commercial/i,
    related: ["product-photography-sofia", "drone-photography-sofia", "corporate-events-sofia", "business-portraits-sofia"],
    bg: {
      seoTitle: "Рекламно видео и съдържание за социални мрежи в София | Parkov Visuals",
      seoDescription:
        "Рекламни видеа, Reels и съдържание за социални мрежи в София — заснемане, монтаж и дрон. Месечно съдържание за бизнеси. Отговор до 24 ч.",
      eyebrow: "Реклама и съдържание · София",
      title: "Рекламно видео и съдържание за социални мрежи",
      intro:
        "Видео и снимки, които спират скролването — за ресторанти, хотели, магазини и марки. Заснемаме, монтираме и предаваме готово за публикуване.",
      serviceName: "Рекламно видео и съдържание",
      navLabel: "Рекламно видео",
      included: [
        { icon: "video", title: "Рекламни клипове", copy: "Кратки видеа за реклами във Facebook, Instagram и YouTube." },
        { icon: "sparkles", title: "Reels и TikTok", copy: "Вертикално съдържание в ритъма на социалните мрежи." },
        { icon: "camera", title: "Рекламна фотография", copy: "Кампании, мода и визуална концепция за марката." },
        { icon: "drone", title: "Дрон", copy: "Хотел, ресторант или обект отвисоко — силно начало на всяко видео." },
      ],
      faqs: [
        { q: "Правите ли месечно съдържание?", a: "Да. За бизнеси планираме редовни заснемания и предаваме съдържание за целия месец." },
        { q: "Монтажът включен ли е?", a: "Да. Предаваме готови за публикуване видеа във формати за всяка мрежа." },
        { q: "Издавате ли фактура?", a: "Да. Работим с фирми и предоставяме документи за плащането." },
      ],
      ctaTitle: "Нужно ви е съдържание?",
      ctaCopy: "Разкажете ни за бизнеса и целта. Ще получите идея и оферта до 24 часа.",
    },
    en: {
      seoTitle: "Advertising Video & Social Media Content in Sofia | Parkov Visuals",
      seoDescription:
        "Advertising videos, Reels and social media content in Sofia — filming, editing and drone. Monthly content for businesses. Replies within 24 hours.",
      eyebrow: "Advertising and content · Sofia",
      title: "Advertising video and social media content",
      intro:
        "Video and photos that stop the scroll — for restaurants, hotels, shops and brands. We film, edit and deliver ready to publish.",
      serviceName: "Advertising video and content",
      navLabel: "Advertising video",
      included: [
        { icon: "video", title: "Ad clips", copy: "Short videos for Facebook, Instagram and YouTube ads." },
        { icon: "sparkles", title: "Reels and TikTok", copy: "Vertical content in the rhythm of social media." },
        { icon: "camera", title: "Advertising photography", copy: "Campaigns, fashion and visual concept for the brand." },
        { icon: "drone", title: "Drone", copy: "A hotel, restaurant or site from above — a strong start to any video." },
      ],
      faqs: [
        { q: "Do you produce monthly content?", a: "Yes. For businesses we plan regular shoots and deliver content for the whole month." },
        { q: "Is editing included?", a: "Yes. We deliver publish-ready videos in formats for each network." },
        { q: "Do you issue invoices?", a: "Yes. We work with companies and provide payment documents." },
      ],
      ctaTitle: "Need content?",
      ctaCopy: "Tell us about the business and the goal. You will get an idea and a quote within 24 hours.",
    },
  },
  {
    slug: "drone-photography-sofia",
    cardKeys: [],
    photoMatch: /дрон|drone|dron/i,
    related: ["wedding-photography-sofia", "real-estate-photography-sofia", "advertising-video-sofia", "concert-photography-sofia"],
    bg: {
      seoTitle: "Дрон фотография и видео в София | Parkov Visuals",
      seoDescription:
        "Дрон заснемане в София и България — сватби, имоти, хотели, събития и реклама. Снимки и видео отвисоко. Отговор до 24 ч.",
      eyebrow: "Дрон заснемане · София и България",
      title: "Дрон фотография и видео в София",
      intro:
        "Кадри отвисоко, които показват мащаба — на сватба, имот, хотел, събитие или рекламна кампания.",
      serviceName: "Дрон фотография и видео",
      navLabel: "Дрон",
      included: [
        { icon: "drone", title: "Сватби и събития", copy: "Мястото, гостите и двойката отвисоко." },
        { icon: "building", title: "Имоти и хотели", copy: "Сградата, околността и гледките, които продават." },
        { icon: "video", title: "Рекламно видео", copy: "Въздушни кадри за силно начало на всеки клип." },
        { icon: "camera", title: "Фото отвисоко", copy: "Снимки с висока резолюция за сайт, реклама и печат." },
      ],
      faqs: [
        { q: "Може ли навсякъде да се лети?", a: "Не. Летим само където е разрешено и при подходящо време. Проверяваме локацията предварително." },
        { q: "Какво става при лошо време?", a: "При силен вятър или дъжд не летим. Уговаряме резервен вариант или нова дата." },
        travelFaqBg,
      ],
      ctaTitle: "Искате кадри отвисоко?",
      ctaCopy: "Изпратете локация, дата и за какво ще са кадрите. Отговаряме до 24 часа.",
    },
    en: {
      seoTitle: "Drone Photography & Video in Sofia | Parkov Visuals",
      seoDescription:
        "Drone filming in Sofia and Bulgaria — weddings, real estate, hotels, events and advertising. Aerial photo and video. Replies within 24 hours.",
      eyebrow: "Drone filming · Sofia and Bulgaria",
      title: "Drone photography and video in Sofia",
      intro:
        "Aerial shots that show scale — at a wedding, property, hotel, event or ad campaign.",
      serviceName: "Drone photography and video",
      navLabel: "Drone",
      included: [
        { icon: "drone", title: "Weddings and events", copy: "The venue, guests and couple from above." },
        { icon: "building", title: "Real estate and hotels", copy: "The building, surroundings and views that sell." },
        { icon: "video", title: "Advertising video", copy: "Aerial footage for a strong start to any clip." },
        { icon: "camera", title: "Aerial photos", copy: "High-resolution images for web, ads and print." },
      ],
      faqs: [
        { q: "Can you fly anywhere?", a: "No. We fly only where permitted and in suitable weather, and check the location in advance." },
        { q: "What if the weather is bad?", a: "We don't fly in strong wind or rain. We agree a backup plan or a new date." },
        travelFaqEn,
      ],
      ctaTitle: "Want aerial shots?",
      ctaCopy: "Send the location, date and what the footage is for. We reply within 24 hours.",
    },
  },
  {
    slug: "iris-photography-sofia",
    cardKeys: [],
    photoMatch: /ирис|iris/i,
    related: ["family-photography-sofia", "portrait-photography-sofia", "wedding-photography-sofia", "baptism-photography-sofia"],
    bg: {
      seoTitle: "Ирисова фотография в София | Снимка на окото | Parkov Visuals",
      seoDescription:
        "Ирисова фотография в София — макро снимка на окото ви като уникална картина. Подарък за двойки и семейства. Отговор до 24 ч.",
      eyebrow: "Ирисова фотография · София",
      title: "Ирисова фотография в София",
      intro:
        "Вашето око, снимано отблизо, прилича на планета. Няма две еднакви — затова ирисовата снимка е най-личният подарък.",
      serviceName: "Ирисова фотография",
      navLabel: "Ирисова фотография",
      included: [
        { icon: "eye", title: "Единичен ирис", copy: "Вашето око в детайл, който никога не сте виждали." },
        { icon: "users", title: "Двойки и семейства", copy: "Две или повече очи, събрани в една картина." },
        { icon: "sparkles", title: "Ефекти по избор", copy: "Различни художествени варианти на фона и композицията." },
        { icon: "gift", title: "Готово за печат", copy: "Файл в голяма резолюция, готов за отпечатване по ваш избор." },
      ],
      faqs: [
        { q: "Колко продължава заснемането?", a: "Кратко — няколко минути на човек. Не е неприятно за окото." },
        { q: "Подходящо ли е за подарък?", a: "Да. Особено за годишнини, Свети Валентин и Коледа — може и като ваучер." },
        deliveryFaqBg,
      ],
      ctaTitle: "Подарък, който не се повтаря",
      ctaCopy: "Пишете ни колко души ще се снимат и предпочитана дата. Отговаряме до 24 часа.",
    },
    en: {
      seoTitle: "Iris Photography in Sofia | Eye Photo Art | Parkov Visuals",
      seoDescription:
        "Iris photography in Sofia — a macro photo of your eye turned into unique art. A gift for couples and families. Replies within 24 hours.",
      eyebrow: "Iris photography · Sofia",
      title: "Iris photography in Sofia",
      intro:
        "Your eye, photographed up close, looks like a planet. No two are alike — which makes an iris photo the most personal gift.",
      serviceName: "Iris photography",
      navLabel: "Iris photography",
      included: [
        { icon: "eye", title: "Single iris", copy: "Your eye in a detail you have never seen." },
        { icon: "users", title: "Couples and families", copy: "Two or more eyes combined in one artwork." },
        { icon: "sparkles", title: "Optional effects", copy: "Different artistic versions of background and composition." },
        { icon: "gift", title: "Print-ready", copy: "A high-resolution file ready to print however you like." },
      ],
      faqs: [
        { q: "How long does it take?", a: "Short — a few minutes per person. It is not unpleasant for the eye." },
        { q: "Is it a good gift?", a: "Yes. Especially for anniversaries, Valentine's Day and Christmas — also as a voucher." },
        deliveryFaqEn,
      ],
      ctaTitle: "A gift that is never repeated",
      ctaCopy: "Tell us how many people and a preferred date. We reply within 24 hours.",
    },
  },
  {
    slug: "real-estate-photography-sofia",
    cardKeys: ["realEstate"],
    photoMatch: /имот|real.?estate|interior|интериор/i,
    related: ["drone-photography-sofia", "product-photography-sofia", "advertising-video-sofia", "business-portraits-sofia"],
    bg: {
      seoTitle: "Фотография на имоти и интериори в София | Parkov Visuals",
      seoDescription:
        "Фотография и видео на имоти, хотели и интериори в София — за брокери, хотели и Airbnb. С дрон по желание. Отговор до 24 ч.",
      eyebrow: "Имоти и пространства · София",
      title: "Фотография на имоти и интериори в София",
      intro:
        "Добрите снимки продават и отдават имота по-бързо. Снимаме апартаменти, къщи, хотели и офиси — отвътре, отвън и отвисоко.",
      serviceName: "Фотография на имоти",
      navLabel: "Имоти",
      included: [
        { icon: "building", title: "Интериор", copy: "Светли, прави и чисти кадри на всяко помещение." },
        { icon: "camera", title: "Екстериор", copy: "Сградата и околността в най-добрата светлина." },
        { icon: "drone", title: "Дрон", copy: "Парцел, гледка и локация отвисоко." },
        { icon: "video", title: "Видео обиколка", copy: "Кратко видео на имота за обяви и социални мрежи." },
      ],
      faqs: [
        { q: "Работите ли с брокери и агенции?", a: "Да. Предлагаме редовно заснемане и единен стил за всички обяви." },
        { q: "Издавате ли фактура?", a: "Да. Работим с фирми и предоставяме документи за плащането." },
        deliveryFaqBg,
      ],
      ctaTitle: "Имате имот за снимане?",
      ctaCopy: "Изпратете вид, квадратура и локация. Отговаряме до 24 часа.",
    },
    en: {
      seoTitle: "Real Estate & Interior Photography in Sofia | Parkov Visuals",
      seoDescription:
        "Photo and video of properties, hotels and interiors in Sofia — for agents, hotels and Airbnb. Optional drone. Replies within 24 hours.",
      eyebrow: "Real estate and spaces · Sofia",
      title: "Real estate and interior photography in Sofia",
      intro:
        "Good photos sell and rent a property faster. We shoot apartments, houses, hotels and offices — inside, outside and from above.",
      serviceName: "Real estate photography",
      navLabel: "Real estate",
      included: [
        { icon: "building", title: "Interiors", copy: "Bright, straight, clean photos of every room." },
        { icon: "camera", title: "Exteriors", copy: "The building and surroundings in the best light." },
        { icon: "drone", title: "Drone", copy: "Plot, view and location from above." },
        { icon: "video", title: "Video tour", copy: "A short property video for listings and social media." },
      ],
      faqs: [
        { q: "Do you work with agents and agencies?", a: "Yes. We offer regular shoots and one consistent style for all listings." },
        { q: "Do you issue invoices?", a: "Yes. We work with companies and provide payment documents." },
        deliveryFaqEn,
      ],
      ctaTitle: "Have a property to shoot?",
      ctaCopy: "Send the type, size and location. We reply within 24 hours.",
    },
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug) ?? null;
}

// Homepage service cards come from the database; match by key first, then by title.
export function getServicePageForCard(cardKey: string, title = "") {
  const byKey = servicePages.find((page) => page.cardKeys.includes(cardKey));
  if (byKey) return byKey;
  if (!title) return null;
  return (
    servicePages.find(
      (page) => page.cardKeys.length > 0 && page.photoMatch.test(title),
    ) ?? null
  );
}
