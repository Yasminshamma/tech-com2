/* Northstar — English / Arabic switching.
   English lives in the rendered markup (so it works without JS and is what search engines read).
   This file holds the Arabic strings and swaps text by data-i18n key. */
(function () {
  'use strict';
  const AR = {
    'meta.title': 'نورثستار | حلول برمجية وأكاديمية تقنية',
    'meta.desc': 'نورثستار تبني تطبيقات الويب والجوّال والبرمجيات المخصّصة، وتؤتمت العمليات بالذكاء الاصطناعي، وتعلّم البرمجة للمراهقين والطلاب والمحترفين.',
    'nav.skip': 'تخطَّ إلى المحتوى', 'nav.build': 'البرمجيات', 'nav.automate': 'الأتمتة', 'nav.learn': 'الأكاديمية', 'nav.create': 'المشاريع', 'nav.about': 'من نحن', 'nav.cta': 'ابدأ مشروعك', 'nav.menu': 'القائمة',
    'rail.idea': 'فكرة', 'rail.code': 'برمجة', 'rail.build': 'بناء', 'rail.automate': 'أتمتة', 'rail.learn': 'تعلّم', 'rail.innovate': 'ابتكار',
    'hero.tag': 'تخيّل ما هو قادم', 'hero.l1': 'تقنية', 'hero.l2': 'من أجل غدٍ', 'hero.l3': 'أذكى',
    'hero.sub': 'نبني حلولًا رقمية ونمكّن الجيل القادم من صنّاع التقنية.',
    'hero.cta1': 'استكشف خدماتنا', 'hero.cta2': 'اكتشف أكاديميتنا', 'hero.scroll': 'مرّر',
    'word.build': 'ابنِ', 'word.automate': 'أتمت', 'word.learn': 'تعلّم', 'word.create': 'أبدع',
    'build.h2': 'حلول برمجية مبنية لتدوم.',
    'build.p': 'من أول رسم تخطيطي حتى الإطلاق، نصمّم وننفّذ منتجات رقمية تناسب طريقة عمل فريقك وعملائك فعلًا.',
    'stack.ui': 'الواجهة', 'stack.code': 'الشيفرة', 'stack.logic': 'المنطق', 'stack.qa': 'الجودة',
    'svc.web.n': 'تطوير الويب', 'svc.web.d': 'مواقع وتطبيقات ويب سريعة وسهلة الوصول، من المواقع التعريفية إلى المنصات المعقّدة.', 'svc.web.t1': 'أنظمة التصميم', 'svc.web.t2': 'تطبيقات الويب', 'svc.web.t3': 'الأداء',
    'svc.mob.n': 'تطبيقات الجوّال', 'svc.mob.d': 'تطبيقات iOS وAndroid بتجربة أصيلة ومبنية للاستخدام الفعلي.', 'svc.mob.t1': 'iOS', 'svc.mob.t2': 'Android', 'svc.mob.t3': 'متعدد المنصات',
    'svc.cus.n': 'برمجيات مخصّصة', 'svc.cus.d': 'أدوات داخلية وبوابات ومنصات تُصمَّم حول طريقة عملك، لا العكس.', 'svc.cus.t1': 'البوابات', 'svc.cus.t2': 'التكاملات', 'svc.cus.t3': 'واجهات البرمجة',
    'svc.aut.n': 'الأتمتة والذكاء الاصطناعي', 'svc.aut.d': 'مسارات عمل ومساعدات ذكية تُزيح المهام المتكررة عن كاهل فريقك.', 'svc.aut.t1': 'مسارات العمل', 'svc.aut.t2': 'مساعدات الذكاء الاصطناعي', 'svc.aut.t3': 'خطوط البيانات',
    'svc.qa.n': 'ضمان الجودة والاستشارات التقنية', 'svc.qa.d': 'اختبارات ومراجعة شيفرة ومشورة معمارية لتقليل المخاطر في ما تطلقه.', 'svc.qa.t1': 'استراتيجية الاختبار', 'svc.qa.t2': 'مراجعة الشيفرة', 'svc.qa.t3': 'البنية المعمارية',
    'auto.h2': 'حوّل العمل اليدوي إلى أنظمة ذكية.',
    'auto.p': 'تعتمد معظم الشركات على تسليمات متفرقة: جداول بيانات ورسائل بريد ونسخ ولصق. نربط هذه الخطوات ببرمجيات، ونضيف الأتمتة والذكاء الاصطناعي حيث يفيد، ونعيد لفريقك وقته للعمل الذي يحتاج إلى بشر.',
    'auto.s1.t': 'ارسم', 'auto.s1.d': 'نتابع العمل كما يجري فعليًا ونحدّد أين يضيع الوقت.',
    'auto.s2.t': 'اربط', 'auto.s2.d': 'نربط أدواتك وبياناتك لتنتقل المعلومات من تلقاء نفسها.',
    'auto.s3.t': 'أتمت', 'auto.s3.d': 'تعمل الخطوات المتكررة وحدها، ويوافق الأشخاص على ما يهم.',
    'auto.s4.t': 'حسّن', 'auto.s4.d': 'نراقب أداء النظام ونواصل تحسينه.',
    'auto.cta': 'تحدّث معنا عن الأتمتة',
    'auto.cap': 'مخطط توضيحي. مرّر لترى الخطوات المتناثرة تصبح نظامًا.',
    'learn.h2': 'أكاديمية تقنية لكل مرحلة مهنية.',
    'learn.p': 'تعلّم أكاديمية نورثستار البرمجة عبر المشاريع، بأدوات حقيقية وملاحظات صريحة.',
    'path.teen.t': 'من 12 إلى 17 عامًا', 'path.teen.d': 'أساسيات البرمجة، ومشاريع إبداعية، والتفكير الحاسوبي.',
    'path.teen.b1': 'ابدأ بأساسيات الشيفرة', 'path.teen.b2': 'اصنع مشاريع إبداعية يمكنك مشاركتها', 'path.teen.b3': 'تدرّب على تفكيك المشكلات إلى خطوات',
    'path.uni.t': 'طلاب الجامعات', 'path.uni.d': 'مهارات عملية، ومشاريع لملف أعمالك، وتحضير للمسار المهني.',
    'path.uni.b1': 'ابنِ مشاريع تصلح لملف أعمالك', 'path.uni.b2': 'تعلّم الأدوات التي تستخدمها الفرق في السوق', 'path.uni.b3': 'استعد للمقابلات والوظائف الأولى',
    'path.pro.t': 'المهندسون والمحترفون', 'path.pro.d': 'برمجة متقدمة، وذكاء اصطناعي، وأتمتة، وتطوير مهني.',
    'path.pro.b1': 'تعمّق في البرمجة والبنية المعمارية', 'path.pro.b2': 'طبّق الذكاء الاصطناعي والأتمتة في عملك', 'path.pro.b3': 'حافظ على مهاراتك محدَّثة مع تطور المجال',
    'path.cta': 'اسأل عن هذا المسار',
    'path.teen.s': '\u202A12–17\u202C', 'path.uni.s': 'الجامعة', 'path.pro.s': 'المحترفون', 'path.aria': 'مسارات التعلّم', 'path.teen.w': 'الأساسيات', 'path.uni.w': 'التطبيق العملي', 'path.pro.w': 'التعمّق',
    'path.out': 'ستنتهي بـ', 'path.teen.o': 'لعبة أو موقع صغير من صنعك', 'path.uni.o': 'مشروع في ملف أعمالك تعرضه على أصحاب العمل', 'path.pro.o': 'أداة ذكاء اصطناعي أو أتمتة تعمل على مهمة حقيقية لديك',
    'flow.1t': 'افهم الفكرة', 'flow.1d': 'شرح قصير وواضح بلا مصطلحات معقّدة.', 'flow.2t': 'ابنِها بنفسك', 'flow.2d': 'اكتب شيفرة حقيقية لحل مشكلة حقيقية.',
    'flow.3t': 'تلقَّ ملاحظات صريحة', 'flow.3d': 'ملاحظات محددة عمّا يمكن تحسينه.', 'flow.4t': 'اعرض عملك', 'flow.4d': 'اختم بشيء يمكنك تقديمه.',
    'learn.help': 'لست متأكدًا أي مسار يناسبك؟', 'learn.helpcta': 'أخبرنا بمستواك وأهدافك',
    'create.h2': 'أفكار تتحول إلى منتجات.',
    'create.p': 'ثلاثة مفاهيم لمنتجات يمكنك تجربتها هنا مباشرة. اختر موعدًا، حرّك طلبًا، شغّل درسًا.',
    'create.badge': 'عرض تفاعلي',
    'proj.1.t': 'تطبيق حجز عيادة', 'proj.1.d': 'مفهوم لتطبيق جوّال لحجز المواعيد وتلقي التذكيرات.',
    'proj.2.t': 'لوحة متابعة العمليات', 'proj.2.d': 'مفهوم لموقع ويب يتابع الطلبات وحمل العمل على الفريق في مكان واحد.',
    'proj.3.t': 'منصة تعلّم', 'proj.3.d': 'مفهوم لجهاز لوحي للدروس والتمارين وتتبّع التقدّم.',
    'about.w1': 'ابتكار.', 'about.w2': 'تعليم.', 'about.w3': 'أثر عملي.',
    'about.p1': 'تجمع نورثستار بين هندسة البرمجيات والتعليم التقني. بناء منتجات حقيقية يُبقي تدريسنا حديثًا، والتدريس يُبقي عملنا الهندسي واضحًا وجيد الشرح.',
    'about.c1.t': 'الابتكار', 'about.c1.d': 'نستكشف أدوات وأفكارًا جديدة، ثم نحتفظ بما ينجح.',
    'about.c2.t': 'التعليم', 'about.c2.d': 'ندرّس عبر مشاريع حقيقية، في كل مرحلة من المسار المهني.',
    'about.c3.t': 'الأثر العملي', 'about.c3.d': 'كل ما نصنعه أو ندرّسه يجب أن يكون مفيدًا صباح يوم الاثنين.',
    'loop.a.t': 'الاستوديو', 'loop.a.d': 'مشكلات المنتجات الحقيقية تصبح مادة تعليمية.',
    'loop.b.t': 'الأكاديمية', 'loop.b.d': 'أسئلة الصف تصقل طريقة توثيقنا وشرحنا لعملنا.',
    'contact.l1': 'لنبنِ', 'contact.l2': 'ما هو قادم.',
    'contact.p': 'أخبرنا عن مشروعك أو المسار التعليمي الذي يهمّك.',
    'f.name': 'الاسم', 'f.email': 'البريد الإلكتروني', 'f.topic': 'يهمّني', 'f.msg': 'الرسالة', 'f.send': 'أرسل الاستفسار',
    'f.o.project': 'مشروع برمجي', 'f.o.automation': 'الأتمتة والذكاء الاصطناعي', 'f.o.teen': 'الأكاديمية: من 12 إلى 17 عامًا', 'f.o.uni': 'الأكاديمية: طلاب الجامعات', 'f.o.pro': 'الأكاديمية: المهندسون والمحترفون', 'f.o.other': 'شيء آخر',
    'c.email': 'البريد الإلكتروني', 'c.phone': 'الهاتف', 'c.addr': 'العنوان',
    'foot.c': '©', 'foot.top': 'العودة إلى الأعلى',
    'status.ok': 'نفتح تطبيق البريد برسالتك…', 'status.err': 'يُرجى إدخال اسمك وبريد إلكتروني صحيح ورسالة.', 'status.sent': 'تم الإرسال. سنردّ عليك قريبًا.', 'status.fail': 'تعذّر الإرسال. حاول مرة أخرى أو راسلنا بالبريد.'
  };
  const EN = {
    'status.ok': 'Opening your email app with your message…', 'status.err': 'Please enter your name, a valid email and a message.', 'status.sent': 'Sent. We will get back to you soon.', 'status.fail': 'Could not send. Try again or email us directly.'
  };
  let lang = 'en';

  function apply(next) {
    lang = next === 'ar' ? 'ar' : 'en';
    const root = document.documentElement;
    root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const k = el.getAttribute('data-i18n');
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      if (lang === 'ar' && AR[k] !== undefined) el.textContent = AR[k]; else el.innerHTML = el.dataset.en;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        const a = pair.split(':'), attr = a[0], k = a[1];
        if (!el.hasAttribute('data-en-' + attr)) el.setAttribute('data-en-' + attr, el.getAttribute(attr) || '');
        el.setAttribute(attr, lang === 'ar' && AR[k] ? AR[k] : el.getAttribute('data-en-' + attr));
      });
    });
    const t = document.querySelector('title'), m = document.querySelector('meta[name=description]');
    if (t.dataset.en === undefined) { t.dataset.en = t.textContent; m.dataset.en = m.getAttribute('content'); }
    t.textContent = lang === 'ar' ? AR['meta.title'] : t.dataset.en;
    m.setAttribute('content', lang === 'ar' ? AR['meta.desc'] : m.dataset.en);
  }
  function t(key) { return lang === 'ar' ? (AR[key] || EN[key]) : EN[key]; }

  window.Northstar = window.Northstar || {};
  window.Northstar.i18n = { apply: apply, t: t, get lang() { return lang; } };
})();
