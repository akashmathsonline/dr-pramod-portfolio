# Sanity Studio - Admin Dashboard for Dr. Pramod Kumar

यह Admin Studio Dr. Pramod Kumar जी के लिए तैयार किया गया है। यहाँ से वे:
1. **Gallery Photos** सीधे अपने फोन या लैपटॉप से अपलोड कर सकते हैं।
2. **Blog Articles** हिंदी और अंग्रेजी में टाइप करके पब्लिश कर सकते हैं।

## Studio को लाइव कैसे करें (2 मिनट का प्रोसेस):

### विकल्प 1: Sanity Free Cloud पर Deploy करना (Recommended for Sir)
Sir को एक सीधा लिंक मिल जाएगा: `https://drpramod.sanity.studio`

टर्मिनल में रन करें:
```bash
npx sanity deploy
```
* यह आपसे स्टूडियो का नाम पूछेगा (उदा. `drpramod` या `dr-pramod-admin`).
* डिप्लॉय होने के बाद, सर को `https://drpramod.sanity.studio` का लिंक दे दीजिए।
* सर अपने Google Account से लॉगिन करेंगे।

### सर को एडमिन एक्सेस (Invite) कैसे दें:
1. https://sanity.io/manage पर जाएं।
2. अपने प्रोजेक्ट (`uhka7oz2`) पर क्लिक करें।
3. **Members** टैब पर जाएं -> **Invite Member** पर क्लिक करें।
4. Dr. Pramod Kumar जी का ईमेल (`dkpramodkumar@gmail.com`) डालें और Role में `Administrator` या `Editor` चुन लें।
5. सर के ईमेल पर एक इनवाइट लिंक जाएगा, जिस पर क्लिक करके वे सीधे लॉगिन हो जाएंगे!

### लोकल में टेस्ट करने के लिए:
```bash
npx sanity dev
```
यह `http://localhost:3333` पर डैशबोर्ड खोल देगा।
