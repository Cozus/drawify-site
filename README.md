# drawify.cozus.net

Drawify davet sayfası (GitHub Pages, özel alan adı `drawify.cozus.net`).

- `j.html` + `join.js`: `https://drawify.cozus.net/j#ABCD-EFGH` → kodu gösterir, "Kodu kopyala", "Drawify'da aç"
  (`drawify://join?code=…`), "Drawify'ı indir" (Android'de Google Play; iPhone'da `APP_STORE_URL` dolunca App Store).
- Kod `#`'ten sonra durur: tarayıcıdan çıkmaz, barındırma kayıtlarına düşmez. Sayfa veri toplamaz (form / çerez / analitik yok),
  yalnızca kendi betiğini çalıştırır (CSP).
- Kök adres yasal sayfalara (`legal.cozus.net`) yönlenir.
