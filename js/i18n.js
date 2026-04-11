// ============================================================
//  AKSEN — i18n.js
//  Bilingual: Bahasa Indonesia (ID) / English (EN)
//  Animated language switching with blur-fade + ripple effect
// ============================================================

(function () {
  'use strict';

  // ────────────────────────────────────────────────────────────
  //  TRANSLATIONS
  // ────────────────────────────────────────────────────────────
  const T = {

    // ══════════════════════════════════════════════════════════
    //  BAHASA INDONESIA
    // ══════════════════════════════════════════════════════════
    id: {

      /* ── Navigation ── */
      'nav.home':         'Beranda',
      'nav.profile':      'Profil',
      'nav.programs':     'Program',
      'nav.publications': 'Publikasi',
      'nav.contact':      'Kontak',
      'nav.cta':          'Hubungi Kami',
      'nav.aria':         'Navigasi utama',
      'lang.switch.aria': 'Beralih ke Bahasa Inggris',

      /* ── Home · Hero ── */
      'home.hero.tag':   'Lembaga Riset & Advokasi Sosial',
      'home.hero.title': 'Empowering the <em>Community</em>,<br>Enlightening the <em>Future</em>',
      'home.hero.text':  'Akademika Semesta Nusantara (AKSEN) adalah lembaga yang mewadahi ilmuwan, praktisi, dan aktivis sosial untuk membantu mencarikan solusi atas persoalan sosial kemasyarakatan, serta melakukan perencanaan sosial yang matang.',
      'home.hero.cta1':  'Tentang Kami',
      'home.hero.cta2':  'Lihat Program',
      'home.hero.scroll':'Gulir',

      /* ── Home · About ── */
      'home.about.label': 'Siapa Kami',
      'home.about.title': 'Mengenal AKSEN',
      'home.about.text1': 'AKSEN hadir memberikan layanan pendidikan, pengembangan komunitas sosial, dan penelitian. Lembaga ini hadir sebagai bentuk respon perubahan sosial, sembari memberikan antisipasi (mitigasi) dampak perubahan yang akan dialami oleh masyarakat.',
      'home.about.text2': 'AKSEN memiliki komitmen dalam mewujudkan <em>good governance</em> dengan memberikan pendidikan dan dampingan masyarakat, sehingga tercipta komunitas masyarakat yang sadar akan kewajiban dan hak sebagai bagian negara.',
      'home.about.cta':   'Pelajari Lebih Lanjut',

      /* ── Home · Pillars ── */
      'home.pillars.label':   'Program Utama',
      'home.pillars.title':   'Tiga Pilar Program',
      'home.pillars.sub':     'Diinisiasi oleh akademisi untuk kepentingan masyarakat luas, sebagai wujud tanggung jawab moral kaum intelektual.',
      'home.pillar1.title':   'Pendidikan',
      'home.pillar1.text':    'Memberikan layanan pendidikan dan pelatihan pada masyarakat sebagai upaya transformasi pengetahuan yang berkelanjutan.',
      'home.pillar1.link':    'Lihat Program',
      'home.pillar2.title':   'Pemberdayaan',
      'home.pillar2.text':    'Melakukan pemberdayaan, pendampingan, dan pengembangan komunitas agar masyarakat mampu berkembang secara mandiri dan berdaya.',
      'home.pillar2.link':    'Lihat Program',
      'home.pillar3.title':   'Penelitian',
      'home.pillar3.text':    'Melakukan penelitian ilmiah, publikasi, dan pelatihan academic writing terkait pengembangan pengetahuan sosial kemasyarakatan.',
      'home.pillar3.link':    'Lihat Program',

      /* ── Home · Sectors ── */
      'home.sectors.label':   'Sektor Program',
      'home.sectors.title':   'Bidang Kerja AKSEN',
      'home.sectors.sub':     'Tiga program utama diperluas ke dalam berbagai sektor yang relevan dengan kebutuhan nyata masyarakat.',
      'sector.keagamaan':     'Keagamaan',
      'sector.sosial':        'Sosial & Budaya',
      'sector.lingkungan':    'Lingkungan',
      'sector.umkm':          'UMKM',
      'sector.hukum':         'Hukum & Keluarga',
      'sector.gender':        'Gender & HAM',

      /* ── Home · Values ── */
      'home.values.label':    'Nilai Lembaga',
      'home.values.title':    'Nilai-Nilai yang Kami Pegang',
      'value.1': 'Kemanusiaan',
      'value.2': 'Kesamaan',
      'value.3': 'Kesemestaan',
      'value.4': 'Kenetralan',
      'value.5': 'Kemandirian',
      'value.6': 'Kesatuan',
      'value.7': 'Kesukarelaan',

      /* ── Home · Quote ── */
      'home.quote.text':   '"AKSEN kita bangun bersama untuk menjadi wadah konstruktif dalam melakukan transformasi masyarakat sipil dalam aspek keagamaan, kebangsaan dan kemanusiaan."',
      'home.quote.author': 'Dr. Wardah Nuroniyah, S.HI., M.SI.',
      'home.quote.role':   'Direktur Eksekutif, AKSEN',

      /* ── Home · CTA ── */
      'home.cta.label': 'Bergabung Bersama Kami',
      'home.cta.title': 'Bersama Kita Wujudkan Perubahan',
      'home.cta.text':  'Terbuka untuk kolaborasi penelitian, kemitraan program, dan pendampingan masyarakat. Jadikan ilmu sebagai jalan perubahan.',
      'home.cta.btn1':  'Hubungi Kami',
      'home.cta.btn2':  'Tentang AKSEN',

      /* ── Profile ── */
      'profile.hero.title':        'Tentang Akademika<br>Semesta Nusantara',
      'profile.hero.text':         'Lembaga yang menggerakkan kolaborasi akademisi, ilmuwan, praktisi, dan aktivis sosial.',
      'profile.about.label':       'Deskripsi Lembaga',
      'profile.about.title':       'Akademika Semesta Nusantara',
      'profile.about.text1':       'Akademika Semesta Nusantara (AKSEN) hadir memberikan layanan pendidikan, pengembangan komunitas sosial, dan penelitian. Lembaga ini hadir sebagai respon perubahan sosial, sembari memberikan antisipasi dampak perubahan yang akan dialami masyarakat.',
      'profile.about.text2':       'AKSEN berkomitmen mewujudkan <em>good governance</em> dengan memberikan pendidikan dan dampingan masyarakat, sehingga tercipta komunitas yang sadar kewajiban dan haknya sebagai bagian negara — <em>"empowering the community, enlightening the future"</em>.',
      'profile.vm.label':          'Prinsip Dasar',
      'profile.vm.title':          'Visi & Misi',
      'profile.vision.label':      'Visi',
      'profile.vision.text':       'Empowering the community, enlightening the future',
      'profile.mission.label':     'Misi',
      'profile.mission.item1':     'Melakukan transformasi pengetahuan untuk membangun kesadaran masyarakat',
      'profile.mission.item2':     'Memberikan dampingan untuk pengembangan masyarakat',
      'profile.mission.item3':     'Melakukan penelitian untuk pengembangan dan transformasi pengetahuan',
      'profile.structure.label':   'Kepengurusan',
      'profile.structure.title':   'Struktur Lembaga',
      'profile.legal.label':       'Legalitas',
      'profile.legal.title':       'Dokumen Legal AKSEN',
      'profile.legal.desc':        'AKSEN telah memiliki kelengkapan dokumen legalitas sebagai lembaga yang sah dan terpercaya.',

      /* ── Programs ── */
      'program.hero.title':              'Program AKSEN',
      'program.hero.text':               'Diinisiasi oleh akademisi untuk kepentingan masyarakat luas, sebagai bentuk tanggung jawab moral kaum intelektual.',
      'program.main.label':              'Program Unggulan',
      'program.main.title':              'Tiga Program Utama',
      'program.p1.title':                'Pendidikan',
      'program.p1.text':                 'Memberikan layanan pendidikan dan pelatihan pada masyarakat sebagai upaya transformasi pengetahuan yang berkelanjutan.',
      'program.p2.title':                'Pemberdayaan',
      'program.p2.text':                 'Melakukan pemberdayaan, pendampingan, dan pengembangan komunitas agar masyarakat mampu berkembang secara mandiri dan berdaya.',
      'program.p3.title':                'Penelitian',
      'program.p3.text':                 'Melakukan penelitian ilmiah, publikasi, dan pelatihan academic writing, khususnya terkait pengembangan pengetahuan sosial kemasyarakatan.',
      'program.sectors.label':           'Sektor Kerja',
      'program.sectors.title':           'Sektor Program',
      'program.sectors.sub':             'Ketiga program tersebut diperluas dalam berbagai bentuk sektor program:',
      'program.s.keagamaan':             'Keagamaan',
      'program.s.keagamaan.desc':        'Program berbasis nilai dan moderasi beragama',
      'program.s.sosial':                'Sosial & Budaya',
      'program.s.sosial.desc':           'Penguatan identitas dan harmoni sosial budaya masyarakat',
      'program.s.lingkungan':            'Lingkungan',
      'program.s.lingkungan.desc':       'Edukasi dan aksi nyata terhadap isu-isu lingkungan hidup',
      'program.s.umkm':                  'UMKM',
      'program.s.umkm.desc':             'Pendampingan dan pemberdayaan usaha mikro, kecil, dan menengah',
      'program.s.hukum':                 'Hukum & Keluarga',
      'program.s.hukum.desc':            'Advokasi, mediasi, dan edukasi hukum keluarga',
      'program.s.gender':                'Gender & HAM',
      'program.s.gender.desc':           'Advokasi kesetaraan gender dan hak asasi manusia',
      'program.closing.label':           'Komitmen Kami',
      'program.closing.title':           'AKSEN untuk Masyarakat',
      'program.closing.text':            'AKSEN selalu hadir sebagai layanan pendidikan dalam mentransformasi pengetahuan menjadi bentuk kesadaran masyarakat. Pengembangan dan pemberdayaan masyarakat didedikasikan untuk mengawal dan mendampingi masyarakat dalam mengantisipasi berbagai dampak perubahan sosial.',

      /* ── Publications ── */
      'pub.hero.title':    'Publikasi & Riset',
      'pub.hero.text':     'Karya ilmiah, artikel, dan laporan penelitian dari tim akademisi AKSEN untuk masyarakat luas.',
      'pub.filter.all':    'Semua',
      'pub.filter.art':    'Artikel Ilmiah',
      'pub.filter.lap':    'Laporan Penelitian',
      'pub.filter.buku':   'Buku & Modul',
      'pub.filter.opini':  'Opini & Esai',
      'pub.cta.title':     'Ingin Berkolaborasi dalam Penelitian?',
      'pub.cta.text':      'AKSEN terbuka untuk kerjasama penelitian, publikasi bersama, dan pelatihan academic writing.',
      'pub.cta.btn':       'Hubungi Kami',
      'pub.readmore':      'Baca Selengkapnya',
      'pub.download':      'Unduh PDF',
      'pub.empty':         'Publikasi segera hadir. Pantau terus halaman ini!',

      /* ── Contact ── */
      'contact.hero.title':             'Hubungi Kami',
      'contact.hero.text':              'Terbuka untuk kolaborasi, kemitraan, dan pertanyaan seputar program AKSEN.',
      'contact.info.title':             'Informasi Kontak',
      'contact.info.sub':               'Tim kami siap membantu Anda. Silakan hubungi kami melalui salah satu saluran berikut.',
      'contact.form.title':             'Kirim Pesan',
      'contact.form.name.label':        'Nama Lengkap',
      'contact.form.name.ph':           'Masukkan nama lengkap Anda',
      'contact.form.email.label':       'Email',
      'contact.form.email.ph':          'contoh@email.com',
      'contact.form.phone.label':       'Nomor Telepon',
      'contact.form.phone.ph':          '+62 8xx xxxx xxxx',
      'contact.form.purpose.label':     'Keperluan',
      'contact.form.purpose.opt0':      'Pilih keperluan...',
      'contact.form.purpose.opt1':      'Kerjasama Program',
      'contact.form.purpose.opt2':      'Penelitian',
      'contact.form.purpose.opt3':      'Pelatihan',
      'contact.form.purpose.opt4':      'Lainnya',
      'contact.form.message.label':     'Pesan',
      'contact.form.message.ph':        'Tulis pesan Anda di sini...',
      'contact.form.submit':            'Kirim Pesan',
      'contact.map.title':              'Lokasi Kami',

      /* contact info labels */
      'contact.phone.label':            'Telepon / WhatsApp',
      'contact.email.label':            'Email',
      'contact.web.label':              'Website',
      'contact.social.label':           'Instagram',
      'contact.address.label':          'Alamat',

      /* contact form shortcuts */
      'contact.form.name':              'Nama Lengkap',
      'contact.form.name.ph':           'Nama lengkap Anda',
      'contact.form.email':             'Email',
      'contact.form.email.ph':          'email@contoh.com',
      'contact.form.phone':             'Nomor Telepon',
      'contact.form.phone.ph':          '+62 8xx xxxx xxxx',
      'contact.form.purpose':           'Keperluan',
      'contact.form.purpose.ph':        'Pilih keperluan...',
      'contact.form.purpose.collab':    'Kerjasama / Kolaborasi',
      'contact.form.purpose.train':     'Pelatihan / Workshop',
      'contact.form.purpose.research':  'Penelitian Bersama',
      'contact.form.purpose.consult':   'Konsultasi',
      'contact.form.purpose.info':      'Pertanyaan Umum',
      'contact.form.purpose.other':     'Lainnya',
      'contact.form.message':           'Pesan',
      'contact.form.message.ph':        'Ceritakan keperluan atau pertanyaan Anda di sini...',
      'contact.form.text':              'Isi formulir di bawah ini dan tim kami akan menghubungi Anda secepatnya.',
      'contact.form.send':              'Kirim Pesan',
      'contact.form.success':           'Pesan Anda berhasil dikirim! Kami akan menghubungi Anda segera.',

      /* ── Footer ── */
      'footer.about.title':   'Tentang AKSEN',
      'footer.about.text':    'Akademika Semesta Nusantara (AKSEN) adalah lembaga yang mewadahi ilmuwan, praktisi, dan aktivis sosial dalam mencarikan solusi atas persoalan kemasyarakatan.',
      'footer.nav.title':     'Navigasi',
      'footer.contact.title': 'Kontak',
      'footer.social.title':  'Media Sosial',
      'footer.copyright':     '© 2024 Akademika Semesta Nusantara. All rights reserved.',

      /* ── Common ── */
      'common.readmore':  'Baca Selengkapnya',
      'common.viewall':   'Lihat Semua',
      'common.download':  'Unduh PDF',
      'common.home':      'Beranda',
      'common.contactus': 'Hubungi Kami',
      'common.learnmore': 'Pelajari Lebih Lanjut',
    },

    // ══════════════════════════════════════════════════════════
    //  ENGLISH
    // ══════════════════════════════════════════════════════════
    en: {

      /* ── Navigation ── */
      'nav.home':         'Home',
      'nav.profile':      'Profile',
      'nav.programs':     'Programs',
      'nav.publications': 'Publications',
      'nav.contact':      'Contact',
      'nav.cta':          'Contact Us',
      'nav.aria':         'Main navigation',
      'lang.switch.aria': 'Switch to Bahasa Indonesia',

      /* ── Home · Hero ── */
      'home.hero.tag':   'Social Research & Advocacy Institute',
      'home.hero.title': 'Empowering the <em>Community</em>,<br>Enlightening the <em>Future</em>',
      'home.hero.text':  'Akademika Semesta Nusantara (AKSEN) is an institution that unites scientists, practitioners, and social activists to help find solutions to social and community problems, as well as to carry out mature social planning.',
      'home.hero.cta1':  'About Us',
      'home.hero.cta2':  'View Programs',
      'home.hero.scroll':'Scroll',

      /* ── Home · About ── */
      'home.about.label': 'About Us',
      'home.about.title': 'Getting to Know AKSEN',
      'home.about.text1': 'AKSEN provides educational services, social community development, and research. The institution exists as a response to social change, while providing anticipation (mitigation) of the impact of changes that will be experienced by the community.',
      'home.about.text2': 'AKSEN is committed to realizing <em>good governance</em> by providing education and community assistance, so as to create a community that is aware of its obligations and rights as part of the state.',
      'home.about.cta':   'Learn More',

      /* ── Home · Pillars ── */
      'home.pillars.label':   'Main Programs',
      'home.pillars.title':   'Three Program Pillars',
      'home.pillars.sub':     'Initiated by academics for the benefit of the wider community, as a form of moral responsibility of intellectuals.',
      'home.pillar1.title':   'Education',
      'home.pillar1.text':    'Providing educational and training services to the community as an effort for sustainable knowledge transformation.',
      'home.pillar1.link':    'View Program',
      'home.pillar2.title':   'Empowerment',
      'home.pillar2.text':    'Conducting community empowerment, assistance, and development so that communities can grow independently and be empowered.',
      'home.pillar2.link':    'View Program',
      'home.pillar3.title':   'Research',
      'home.pillar3.text':    'Conducting scientific research, publications, and academic writing training related to social knowledge development.',
      'home.pillar3.link':    'View Program',

      /* ── Home · Sectors ── */
      'home.sectors.label':   'Program Sectors',
      'home.sectors.title':   "AKSEN's Areas of Work",
      'home.sectors.sub':     'Three main programs are expanded into various sectors relevant to real community needs.',
      'sector.keagamaan':     'Religious Affairs',
      'sector.sosial':        'Social & Culture',
      'sector.lingkungan':    'Environment',
      'sector.umkm':          'MSMEs',
      'sector.hukum':         'Law & Family',
      'sector.gender':        'Gender & Human Rights',

      /* ── Home · Values ── */
      'home.values.label':    'Our Values',
      'home.values.title':    'Values We Uphold',
      'value.1': 'Humanity',
      'value.2': 'Equality',
      'value.3': 'Universality',
      'value.4': 'Neutrality',
      'value.5': 'Independence',
      'value.6': 'Unity',
      'value.7': 'Volunteerism',

      /* ── Home · Quote ── */
      'home.quote.text':   '"We build AKSEN together to be a constructive forum in carrying out the transformation of civil society in religious, national, and humanitarian aspects."',
      'home.quote.author': 'Dr. Wardah Nuroniyah, S.HI., M.SI.',
      'home.quote.role':   'Executive Director, AKSEN',

      /* ── Home · CTA ── */
      'home.cta.label': 'Join Us',
      'home.cta.title': 'Together We Create Change',
      'home.cta.text':  'Open for research collaboration, program partnerships, and community assistance. Let knowledge be a path to change.',
      'home.cta.btn1':  'Contact Us',
      'home.cta.btn2':  'About AKSEN',

      /* ── Profile ── */
      'profile.hero.title':        'About Akademika<br>Semesta Nusantara',
      'profile.hero.text':         'An institution that drives collaboration among academics, scientists, practitioners, and social activists.',
      'profile.about.label':       'Organization Description',
      'profile.about.title':       'Akademika Semesta Nusantara',
      'profile.about.text1':       'Akademika Semesta Nusantara (AKSEN) provides educational services, social community development, and research. The institution exists as a response to social change, while providing anticipation of the impact of changes that will be experienced by the community.',
      'profile.about.text2':       'AKSEN is committed to realizing <em>good governance</em> by providing education and community assistance, so that a community aware of its obligations and rights as part of the state can be created — <em>"empowering the community, enlightening the future"</em>.',
      'profile.vm.label':          'Guiding Principles',
      'profile.vm.title':          'Vision & Mission',
      'profile.vision.label':      'Vision',
      'profile.vision.text':       'Empowering the community, enlightening the future',
      'profile.mission.label':     'Mission',
      'profile.mission.item1':     'Transform knowledge to build community awareness',
      'profile.mission.item2':     'Provide assistance for community development',
      'profile.mission.item3':     'Conduct research for knowledge development and transformation',
      'profile.structure.label':   'Governance',
      'profile.structure.title':   'Organizational Structure',
      'profile.legal.label':       'Legality',
      'profile.legal.title':       'AKSEN Legal Documents',
      'profile.legal.desc':        'AKSEN holds complete legal documents as a legitimate and trusted institution.',

      /* ── Programs ── */
      'program.hero.title':              'AKSEN Programs',
      'program.hero.text':               'Initiated by academics for the benefit of the wider community, as a form of moral responsibility of intellectuals.',
      'program.main.label':              'Flagship Programs',
      'program.main.title':              'Three Main Programs',
      'program.p1.title':                'Education',
      'program.p1.text':                 'Providing educational and training services to the community as an effort for sustainable knowledge transformation.',
      'program.p2.title':                'Empowerment',
      'program.p2.text':                 'Conducting community empowerment, assistance, and development so that communities can grow independently.',
      'program.p3.title':                'Research',
      'program.p3.text':                 'Conducting scientific research, publications, and academic writing training related to social knowledge development.',
      'program.sectors.label':           'Work Sectors',
      'program.sectors.title':           'Program Sectors',
      'program.sectors.sub':             'The three programs are expanded into various program sectors:',
      'program.s.keagamaan':             'Religious Affairs',
      'program.s.keagamaan.desc':        'Programs based on values and religious moderation',
      'program.s.sosial':                'Social & Culture',
      'program.s.sosial.desc':           'Strengthening community social and cultural identity and harmony',
      'program.s.lingkungan':            'Environment',
      'program.s.lingkungan.desc':       'Education and real action on environmental issues',
      'program.s.umkm':                  'MSMEs',
      'program.s.umkm.desc':             'Assistance and empowerment of micro, small, and medium enterprises',
      'program.s.hukum':                 'Law & Family',
      'program.s.hukum.desc':            'Advocacy, mediation, and family law education',
      'program.s.gender':                'Gender & Human Rights',
      'program.s.gender.desc':           'Advocacy for gender equality and human rights',
      'program.closing.label':           'Our Commitment',
      'program.closing.title':           'AKSEN for the Community',
      'program.closing.text':            'AKSEN is always present as an educational service in transforming knowledge into community awareness. Community development and empowerment are dedicated to guiding and accompanying the community in anticipating various impacts of social change.',

      /* ── Publications ── */
      'pub.hero.title':    'Publications & Research',
      'pub.hero.text':     'Scientific works, articles, and research reports from the AKSEN academic team for the wider community.',
      'pub.filter.all':    'All',
      'pub.filter.art':    'Scientific Articles',
      'pub.filter.lap':    'Research Reports',
      'pub.filter.buku':   'Books & Modules',
      'pub.filter.opini':  'Opinion & Essay',
      'pub.cta.title':     'Want to Collaborate in Research?',
      'pub.cta.text':      'AKSEN is open to research collaborations, joint publications, and academic writing training.',
      'pub.cta.btn':       'Contact Us',
      'pub.readmore':      'Read More',
      'pub.download':      'Download PDF',
      'pub.empty':         'Publications coming soon. Stay tuned!',

      /* ── Contact ── */
      'contact.hero.title':             'Contact Us',
      'contact.hero.text':              'Open for collaboration, partnerships, and inquiries about AKSEN programs.',
      'contact.info.title':             'Contact Information',
      'contact.info.sub':               'Our team is ready to assist you. Please reach us through any of the following channels.',
      'contact.form.title':             'Send a Message',
      'contact.form.name.label':        'Full Name',
      'contact.form.name.ph':           'Enter your full name',
      'contact.form.email.label':       'Email',
      'contact.form.email.ph':          'example@email.com',
      'contact.form.phone.label':       'Phone Number',
      'contact.form.phone.ph':          '+62 8xx xxxx xxxx',
      'contact.form.purpose.label':     'Purpose',
      'contact.form.purpose.opt0':      'Select purpose...',
      'contact.form.purpose.opt1':      'Program Collaboration',
      'contact.form.purpose.opt2':      'Research',
      'contact.form.purpose.opt3':      'Training',
      'contact.form.purpose.opt4':      'Other',
      'contact.form.message.label':     'Message',
      'contact.form.message.ph':        'Write your message here...',
      'contact.form.submit':            'Send Message',
      'contact.map.title':              'Our Location',

      /* contact info labels */
      'contact.phone.label':            'Phone / WhatsApp',
      'contact.email.label':            'Email',
      'contact.web.label':              'Website',
      'contact.social.label':           'Instagram',
      'contact.address.label':          'Address',

      /* contact form shortcuts */
      'contact.form.name':              'Full Name',
      'contact.form.name.ph':           'Your full name',
      'contact.form.email':             'Email',
      'contact.form.email.ph':          'email@example.com',
      'contact.form.phone':             'Phone Number',
      'contact.form.phone.ph':          '+62 8xx xxxx xxxx',
      'contact.form.purpose':           'Purpose',
      'contact.form.purpose.ph':        'Select purpose...',
      'contact.form.purpose.collab':    'Collaboration',
      'contact.form.purpose.train':     'Training / Workshop',
      'contact.form.purpose.research':  'Joint Research',
      'contact.form.purpose.consult':   'Consultation',
      'contact.form.purpose.info':      'General Inquiry',
      'contact.form.purpose.other':     'Other',
      'contact.form.message':           'Message',
      'contact.form.message.ph':        'Describe your inquiry or question here...',
      'contact.form.text':              'Fill in the form below and our team will get back to you shortly.',
      'contact.form.send':              'Send Message',
      'contact.form.success':           'Your message was sent successfully! We will contact you shortly.',

      /* ── Footer ── */
      'footer.about.title':   'About AKSEN',
      'footer.about.text':    'Akademika Semesta Nusantara (AKSEN) is an institution that unites scientists, practitioners, and social activists in finding solutions to community problems.',
      'footer.nav.title':     'Navigation',
      'footer.contact.title': 'Contact',
      'footer.social.title':  'Social Media',
      'footer.copyright':     '© 2024 Akademika Semesta Nusantara. All rights reserved.',

      /* ── Common ── */
      'common.readmore':  'Read More',
      'common.viewall':   'View All',
      'common.download':  'Download PDF',
      'common.home':      'Home',
      'common.contactus': 'Contact Us',
      'common.learnmore': 'Learn More',
    }
  };

  // ────────────────────────────────────────────────────────────
  //  STATE
  // ────────────────────────────────────────────────────────────
  const DEFAULT_LANG = 'id';
  let currentLang = localStorage.getItem('aksen-lang') || DEFAULT_LANG;

  // ────────────────────────────────────────────────────────────
  //  CORE: swap content (no animation)
  // ────────────────────────────────────────────────────────────
  function swapAllContent(lang) {
    const t = T[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (key && t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (key && t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });

    // Sync <select> option texts
    document.querySelectorAll('option[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && t[key] !== undefined) el.textContent = t[key];
    });
  }

  // ────────────────────────────────────────────────────────────
  //  RIPPLE from toggle button
  // ────────────────────────────────────────────────────────────
  function createRipple() {
    const toggle = document.querySelector('[data-lang-toggle]');
    if (!toggle) return;

    const rect = toggle.getBoundingClientRect();
    const x = rect.left + rect.width / 2 + window.scrollX;
    const y = rect.top + rect.height / 2 + window.scrollY;

    const ripple = document.createElement('div');
    ripple.className = 'lang-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top  = y + 'px';
    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 1000);
  }

  // ────────────────────────────────────────────────────────────
  //  APPLY TRANSLATIONS (with optional animation)
  // ────────────────────────────────────────────────────────────
  function applyTranslations(lang, animate) {
    if (!T[lang]) return;

    document.documentElement.lang = lang;

    // Sync all toggle buttons
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.setAttribute('data-active-lang', lang);
    });

    // Update aria-label on toggle
    const ariaKey = lang === 'id' ? 'lang.switch.aria' : 'lang.switch.aria';
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.setAttribute('aria-label', T[lang]['lang.switch.aria'] || 'Switch language');
    });

    if (!animate) {
      swapAllContent(lang);
      return;
    }

    // ── Animated sequence ──
    createRipple();

    // Phase 1: fade out
    document.body.classList.add('lang-out');
    document.body.classList.remove('lang-in');

    // Phase 2: swap content
    setTimeout(() => {
      swapAllContent(lang);
      document.body.classList.remove('lang-out');
      document.body.classList.add('lang-in');

      // Phase 3: clean up
      setTimeout(() => {
        document.body.classList.remove('lang-in');
      }, 700);
    }, 280);
  }

  // ────────────────────────────────────────────────────────────
  //  TOGGLE
  // ────────────────────────────────────────────────────────────
  function toggleLang() {
    const next = currentLang === 'id' ? 'en' : 'id';
    currentLang = next;
    localStorage.setItem('aksen-lang', next);
    applyTranslations(next, true);
  }

  // ────────────────────────────────────────────────────────────
  //  INIT
  // ────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    applyTranslations(currentLang, false);

    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.addEventListener('click', toggleLang);
    });
  });

  // ────────────────────────────────────────────────────────────
  //  PUBLIC API
  // ────────────────────────────────────────────────────────────
  window.AKSEN_LANG = {
    toggle:    toggleLang,
    get:       () => currentLang,
    set:       (lang) => { currentLang = lang; localStorage.setItem('aksen-lang', lang); applyTranslations(lang, true); },
    translate: (key) => (T[currentLang] && T[currentLang][key]) || key,
  };

})();
