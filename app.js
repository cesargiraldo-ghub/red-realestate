// RED REAL ESTATE - JS COMPARTIDO
const RED_LINKS = {
  demo: 'https://api.red-realestate.com/widget/bookings/agendar_cita_red',
  login: 'https://membresias.red-realestate.com/',
  whatsapp: 'https://wa.link/uci9hf',
  crmRed: 'https://crmred.co/',
  redAcademy: 'https://redacademy.red-realestate.com/',
  redFincaraiz: 'https://redfincaraiz.com/',
  redProjects: 'https://redfincaraiz.com/propiedades/proyectos/',
  ayudaSocial: 'https://unhogardenuevo.red-realestate.com/',
  appStore: 'https://apps.apple.com/us/app/crm-red/id6802504715',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.anonymous.ReactNative_MLS',
  facebook: 'https://www.facebook.com/red.realestate2023',
  instagram: 'https://www.instagram.com/red_realestatedigital/',
  youtube: 'https://www.youtube.com/@RedRealEstateOficial',
  tiktok: 'https://www.tiktok.com/@redrealestate_',
  linkedin: 'https://www.linkedin.com/company/red-realestate-digital',
  logoOscuro: 'https://assets.cdn.filesafe.space/edHddtwNySAbsqZNRk0E/media/68b0e4531da5dd73e4490821.png',
  videoDemo: 'https://assets.cdn.filesafe.space/edHddtwNySAbsqZNRk0E/media/68c35136dee47c37674a761b.mp4'
};

function renderNav(activePage = '') {
  return `
    <nav>
      <a href="index.html" class="nav-logo-link">
        <img src="${RED_LINKS.logoOscuro}" alt="Red Real Estate" class="logo-img" loading="eager">
      </a>
      <ul class="nav-links">
        <li><a href="beneficios.html" class="${activePage === 'beneficios' ? 'active' : ''}">Beneficios</a></li>
        <li><a href="sobre-nosotros.html" class="${activePage === 'sobre-nosotros' ? 'active' : ''}">Sobre Nosotros</a></li>
        <li><a href="precios.html" class="${activePage === 'precios' ? 'active' : ''}">Precios</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="${RED_LINKS.login}" target="_blank" rel="noopener">Iniciar Sesión</a></li>
      </ul>
      <a href="${RED_LINKS.demo}" target="_blank" rel="noopener" class="nav-cta">Agendar Demostración →</a>
    </nav>
  `;
}

function renderFooter() {
  return `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${RED_LINKS.logoOscuro}" alt="Red Real Estate" class="logo-img" loading="lazy">
            <p>La comunidad de agentes y empresas inmobiliarias que está transformando el sector con tecnología, IA y educación.</p>
            <div class="social-links">
              <a href="${RED_LINKS.facebook}" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg></a>
              <a href="${RED_LINKS.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85 0-3.2.01-3.58.07-4.85.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-4.36.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg></a>
              <a href="${RED_LINKS.youtube}" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2c-.3-1-1-1.8-2-2C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.5.7c-1 .3-1.8 1-2 2C0 8.2 0 12 0 12s0 3.8.5 5.8c.3 1 1 1.8 2 2 2 .7 9.5.7 9.5.7s7.5 0 9.5-.7c1-.3 1.8-1 2-2 .5-2 .5-5.8.5-5.8s0-3.8-.5-5.8zM9.5 15.5v-7l6.5 3.5-6.5 3.5z"/></svg></a>
              <a href="${RED_LINKS.tiktok}" target="_blank" rel="noopener" aria-label="TikTok"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/></svg></a>
              <a href="${RED_LINKS.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.5h-3v-5.5c0-1.38-.03-3.15-1.92-3.15-1.92 0-2.22 1.5-2.22 3.05v5.6h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v6.46z"/></svg></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Plataforma</h4>
            <ul>
              <li><a href="${RED_LINKS.crmRed}" target="_blank" rel="noopener">CRM RED</a></li>
              <li><a href="${RED_LINKS.redAcademy}" target="_blank" rel="noopener">Red Academy</a></li>
              <li><a href="${RED_LINKS.redFincaraiz}" target="_blank" rel="noopener">Red Fincaraíz</a></li>
              <li><a href="${RED_LINKS.redProjects}" target="_blank" rel="noopener">Red Projects</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="beneficios.html">Beneficios</a></li>
              <li><a href="sobre-nosotros.html">Sobre Nosotros</a></li>
              <li><a href="precios.html">Precios</a></li>
              <li><a href="${RED_LINKS.demo}" target="_blank" rel="noopener">Agendar Demo</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="${RED_LINKS.whatsapp}" target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a href="/blog">Blog</a></li>
        <li><a href="${RED_LINKS.login}" target="_blank" rel="noopener">Iniciar Sesión</a></li>
              <li><a href="${RED_LINKS.ayudaSocial}" target="_blank" rel="noopener">Ayuda Social</a></li>
              <li><a href="${RED_LINKS.demo}" target="_blank" rel="noopener">Soporte</a></li>
            </ul>
          </div>
          <div class="footer-col footer-apps">
            <h4>Descarga la App</h4>
            <p style="font-size:14px; color:var(--text-dim); margin-bottom:16px;">Lleva CRM RED en tu celular. Inmuebles, clientes y agenda desde donde estés.</p>
            <div class="app-badges">
              <a href="${RED_LINKS.appStore}" target="_blank" rel="noopener" aria-label="Descargar en App Store"><img src="/img/app-store-badge.png" alt="Descargar en App Store" loading="lazy"></a>
              <a href="${RED_LINKS.googlePlay}" target="_blank" rel="noopener" aria-label="Disponible en Google Play"><img src="/img/google-play-badge.png" alt="Disponible en Google Play" loading="lazy"></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 Red Real Estate · Todos los derechos reservados</span>
          <span>Hecho con tecnología en Colombia 🇨🇴</span>
        </div>
      </div>
    </footer>
  `;
}

function renderVideoModal() {
  return `
    <div class="video-modal" id="videoModal" onclick="closeVideoModal(event)">
      <div class="video-modal-content" onclick="event.stopPropagation()">
        <button class="video-modal-close" onclick="closeVideoModal()" aria-label="Cerrar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <video id="demoVideo" controls preload="none" playsinline>
          <source src="${RED_LINKS.videoDemo}" type="video/mp4">
          Tu navegador no soporta video HTML5.
        </video>
      </div>
    </div>
  `;
}

function renderWhatsAppFloat() {
  return `
    <a href="${RED_LINKS.whatsapp}" target="_blank" rel="noopener" class="whatsapp-float" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  `;
}

function openVideoModal() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('demoVideo');
  if (modal && video) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    video.play().catch(() => {});
  }
}

function closeVideoModal(event) {
  if (event && event.target !== event.currentTarget && !event.target.closest('.video-modal-close')) return;
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('demoVideo');
  if (modal && video) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    video.pause();
    video.currentTime = 0;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = renderNav(document.body.dataset.page || '');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = renderFooter();
  document.body.insertAdjacentHTML('beforeend', renderVideoModal() + renderWhatsAppFloat());

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideoModal({ target: document.getElementById('videoModal'), currentTarget: document.getElementById('videoModal') });
  });
});
