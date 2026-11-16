export default function ContactSection() {
  return (
    <section id="contact" className="scene contact" data-theme="navy" data-stage="innovate" aria-labelledby="contact-title">
      <div className="scene__bg" />
      <div className="campus" data-scene="campus" dir="ltr" aria-hidden="true" />
      <div className="wrap contact__wrap">
        <h2 id="contact-title" className="contact__title">
          <span className="ln"><span data-i18n="contact.l1">Let's Build</span></span>
          <span className="ln"><span data-i18n="contact.l2">What's Next.</span></span>
        </h2>
        <div className="contact__grid">
          <form className="form" id="inquiry" noValidate>
            <p className="lead" data-i18n="contact.p">Tell us about your project or the learning path you're interested in.</p>
            <label><span data-i18n="f.name">Name</span><input name="name" type="text" autoComplete="name" required /></label>
            <label><span data-i18n="f.email">Email</span><input name="email" type="email" autoComplete="email" required /></label>
            <label><span data-i18n="f.topic">I'm interested in</span>
              <select name="topic" id="topic">
                <option value="project" data-i18n="f.o.project">A software project</option>
                <option value="automation" data-i18n="f.o.automation">Automation and AI</option>
                <option value="teen" data-i18n="f.o.teen">Academy: ages 12–17</option>
                <option value="uni" data-i18n="f.o.uni">Academy: university students</option>
                <option value="pro" data-i18n="f.o.pro">Academy: engineers and professionals</option>
                <option value="other" data-i18n="f.o.other">Something else</option>
              </select>
            </label>
            <label><span data-i18n="f.msg">Message</span><textarea name="message" rows={4} required /></label>
            <button className="btn btn--primary" type="submit" data-i18n="f.send">Send inquiry</button>
            <p className="form__status" id="formStatus" role="status" aria-live="polite" />
          </form>
          <div className="contact__info">
            <dl>
              <div><dt data-i18n="c.email">Email</dt><dd><a id="cEmail" href="#">hello@northstar.example</a></dd></div>
              <div><dt data-i18n="c.phone">Phone</dt><dd><a id="cPhone" href="#">+000 000 000 000</a></dd></div>
              <div><dt data-i18n="c.addr">Address</dt><dd id="cAddr">Your address here</dd></div>
            </dl>
            <ul className="social" id="social">
              <li><a data-social="linkedin" href="#">LinkedIn</a></li>
              <li><a data-social="instagram" href="#">Instagram</a></li>
              <li><a data-social="x" href="#">X</a></li>
              <li><a data-social="youtube" href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        <footer className="foot"><span><span data-i18n="foot.c">©</span> <span id="year">2026</span> Northstar</span><a href="#top" data-i18n="foot.top">Back to top</a></footer>
      </div>
    </section>
  );
}
