// Drawify davet sayfası: #KOD (ya da ?c=KOD) → kodu gösterir, kopyalar, uygulamada açar (drawify://join?code=KOD).
// Metinler telefonun diline göre (uygulamanın 14 dili); bilinmeyen dil → İngilizce.
var T = {
  en: ['Join a dresser', 'Use this code in Drawify to join the dresser. The person who invited you will tell you the password.', 'Copy code', 'Copied ✓', 'Open in Drawify', 'Get Drawify', 'In Drawify: Dressers › Join a dresser.', 'This link has no code. Ask the owner to send it again.'],
  tr: ['Şifonyere katıl', 'Bu kodla Drawify’da şifonyere katılabilirsin. Şifreyi seni davet eden kişi söyleyecek.', 'Kodu kopyala', 'Kopyalandı ✓', 'Drawify’da aç', 'Drawify’ı indir', 'Drawify’da: Şifonyerler › Şifonyere katıl.', 'Bu bağlantıda kod yok. Sahibinden yeniden göndermesini iste.'],
  de: ['Einer Kommode beitreten', 'Mit diesem Code trittst du in Drawify der Kommode bei. Das Passwort sagt dir die Person, die dich eingeladen hat.', 'Code kopieren', 'Kopiert ✓', 'In Drawify öffnen', 'Drawify holen', 'In Drawify: Kommoden › Kommode beitreten.', 'Dieser Link enthält keinen Code. Bitte die Person, ihn erneut zu senden.'],
  es: ['Unirse a una cómoda', 'Usa este código en Drawify para unirte a la cómoda. Quien te invitó te dirá la contraseña.', 'Copiar código', 'Copiado ✓', 'Abrir en Drawify', 'Descargar Drawify', 'En Drawify: Cómodas › Unirse a una cómoda.', 'Este enlace no tiene código. Pide que te lo envíen de nuevo.'],
  fr: ['Rejoindre une commode', 'Utilise ce code dans Drawify pour rejoindre la commode. La personne qui t’a invité te donnera le mot de passe.', 'Copier le code', 'Copié ✓', 'Ouvrir dans Drawify', 'Obtenir Drawify', 'Dans Drawify : Commodes › Rejoindre une commode.', 'Ce lien ne contient pas de code. Demande à la personne de le renvoyer.'],
  it: ['Unisciti a una cassettiera', 'Usa questo codice in Drawify per unirti alla cassettiera. Chi ti ha invitato ti dirà la password.', 'Copia codice', 'Copiato ✓', 'Apri in Drawify', 'Scarica Drawify', 'In Drawify: Cassettiere › Unisciti a una cassettiera.', 'Questo link non contiene un codice. Chiedi di inviarlo di nuovo.'],
  pt: ['Entrar em uma cômoda', 'Use este código no Drawify para entrar na cômoda. Quem te convidou vai passar a senha.', 'Copiar código', 'Copiado ✓', 'Abrir no Drawify', 'Baixar o Drawify', 'No Drawify: Cômodas › Entrar em uma cômoda.', 'Este link não tem código. Peça para enviarem de novo.'],
  pl: ['Dołącz do komody', 'Użyj tego kodu w Drawify, aby dołączyć do komody. Hasło poda ci osoba, która cię zaprosiła.', 'Kopiuj kod', 'Skopiowano ✓', 'Otwórz w Drawify', 'Pobierz Drawify', 'W Drawify: Komody › Dołącz do komody.', 'W tym linku nie ma kodu. Poproś o ponowne wysłanie.'],
  ru: ['Присоединиться к комоду', 'Введите этот код в Drawify, чтобы присоединиться к комоду. Пароль скажет тот, кто вас пригласил.', 'Скопировать код', 'Скопировано ✓', 'Открыть в Drawify', 'Скачать Drawify', 'В Drawify: Комоды › Присоединиться к комоду.', 'В этой ссылке нет кода. Попросите отправить её снова.'],
  az: ['Komoda qoşul', 'Bu kodla Drawify-da komoda qoşula bilərsən. Şifrəni səni dəvət edən şəxs deyəcək.', 'Kodu kopyala', 'Kopyalandı ✓', 'Drawify-da aç', 'Drawify-ı yüklə', 'Drawify-da: Komodlar › Komoda qoşul.', 'Bu keçiddə kod yoxdur. Yenidən göndərməsini xahiş et.'],
  id: ['Gabung ke lemari', 'Gunakan kode ini di Drawify untuk bergabung ke lemari. Orang yang mengundangmu akan memberi tahu kata sandinya.', 'Salin kode', 'Disalin ✓', 'Buka di Drawify', 'Unduh Drawify', 'Di Drawify: Lemari › Gabung ke lemari.', 'Tautan ini tidak berisi kode. Minta dikirim ulang.'],
  ja: ['チェストに参加', 'Drawifyでこのコードを入力するとチェストに参加できます。パスワードは招待した人が教えてくれます。', 'コードをコピー', 'コピーしました ✓', 'Drawifyで開く', 'Drawifyを入手', 'Drawifyで：チェスト › チェストに参加。', 'このリンクにはコードがありません。もう一度送ってもらってください。'],
  ko: ['서랍장에 참여', 'Drawify에서 이 코드로 서랍장에 참여할 수 있어요. 비밀번호는 초대한 사람이 알려 줄 거예요.', '코드 복사', '복사했어요 ✓', 'Drawify에서 열기', 'Drawify 받기', 'Drawify에서: 서랍장 › 서랍장 참여.', '이 링크에는 코드가 없어요. 다시 보내 달라고 요청하세요.'],
  'zh-Hant': ['加入抽屜櫃', '在 Drawify 輸入這個代碼即可加入抽屜櫃。密碼會由邀請你的人告訴你。', '複製代碼', '已複製 ✓', '在 Drawify 開啟', '取得 Drawify', '在 Drawify：抽屜櫃 › 加入抽屜櫃。', '這個連結沒有代碼。請對方重新傳送。']
};
var nav = (navigator.language || 'en').toLowerCase();
var lang = nav.indexOf('zh') === 0 ? 'zh-Hant' : (T[nav.slice(0, 2)] ? nav.slice(0, 2) : 'en');
var L = T[lang];
document.documentElement.lang = lang;
// Kod #'ten sonra (drawify.cozus.net/j#ABCD-EFGH): tarayıcıdan çıkmaz, sunucu kayıtlarına düşmez; eski ?c= de okunur
var raw = (location.hash.slice(1) || new URLSearchParams(location.search).get('c') || '').replace(/[^A-Za-z0-9]/g, '').toUpperCase();
var code = raw.length === 8 ? raw : '';
document.title = 'Drawify · ' + L[0];
document.getElementById('title').textContent = L[0];
document.getElementById('lead').textContent = code ? L[1] : L[7];
document.getElementById('get').textContent = L[5];
// İndirme düğmesi cihazın kendi mağazasına: Android → Google Play; iPhone / iPad → App Store (kimlik gelince
// APP_STORE_URL doldurulur; o zamana kadar düğme gizli — Apple 2.3.10: başka platform anılmaz)
var APP_STORE_URL = '';
var isApple = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
if (isApple) {
  var getBtn = document.getElementById('get');
  if (APP_STORE_URL) getBtn.href = APP_STORE_URL;
  else getBtn.style.display = 'none';
}
document.getElementById('hint').textContent = L[6];
var copyBtn = document.getElementById('copy');
var openBtn = document.getElementById('open');
if (code) {
  document.getElementById('codeBox').textContent = code.slice(0, 4) + '-' + code.slice(4);
  copyBtn.textContent = L[2];
  openBtn.textContent = L[4];
  openBtn.href = 'drawify://join?code=' + code;
  copyBtn.onclick = function () {
    var done = function () { copyBtn.textContent = L[3]; setTimeout(function () { copyBtn.textContent = L[2]; }, 2000); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(done, fallback);
    else fallback();
    function fallback() {
      var t = document.createElement('textarea');
      t.value = code; document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); done(); } catch (e) {}
      document.body.removeChild(t);
    }
  };
} else {
  document.getElementById('codeBox').style.display = 'none';
  copyBtn.style.display = 'none';
  openBtn.style.display = 'none';
}
