var ayah = [
    {   arabic:"وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ وَأَنْتَ فِيهِمْ ۚ وَمَا كَانَ اللَّهُ مُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُونَ",
        reference: "[Quran 8:33]",
        translationEnglish:"\“And Allah would not punish them while they seek forgiveness\”"
    },
    {   arabic:"وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ ۚ",
        reference:"[Quran 7:156]",
        translationEnglish:"\“My mercy encompasses all things\”"
    },
    {   arabic:"الْحَقُّ مِنْ رَبِّكَ فَلَا تَكُنْ مِنَ الْمُمْتَرِينَ",
        reference:"[Quran 3:60]",
        translationEnglish:"\“The truth is from your Lord, so do not be among the doubters\”"
    },
    {   arabic:"رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ",
        reference:"[Quran 2:286]",
        translationEnglish:"\“Allah does not burden a soul beyond that it can bear\”"
    },
    {   arabic:"فَإِنَّ مَعَ الْعُسْرِ يُسْرًا-إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        reference:"[Quran 94:5-6]",
        translationEnglish:"\“So verily, with the hardship, there is relief. Verily, with the hardship, there is relief\”"
    },
    {   arabic:"وَأَحْسِنُوا ۛ إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ",
        reference:"[Quran 2:195]",
        translationEnglish:"\“And do good; indeed, Allah loves the doers of good.\”"
    },
    {   arabic:"وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا",
    reference:"[Quran 65:3]",
    translationEnglish:"\“And whoever relies upon Allah – then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent\”"
    },
    {   arabic:"خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ وَصَوَّرَكُمْ فَأَحْسَنَ صُوَرَكُمْ ۖ وَإِلَيْهِ الْمَصِيرُ",
    reference: "[Quran 64:3]",
    translationEnglish:"\“He created the heavens and earth in truth and formed you and perfected your forms; and to Him is the [final] destination\”"
    },

    {   arabic:"۞ وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا ۚ إِمَّا يَبْلُغَنَّ عِنْدَكَ الْكِبَرَ أَحَدُهُمَا أَوْ كِلَاهُمَا فَلَا تَقُلْ لَهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُلْ لَهُمَا قَوْلًا كَرِيمًا",
        reference:"[Quran 17:23]",
        translationEnglish:"Your Lord has decreed that you worship none but Him and that you be kind to parents. Whether one or both of them attain old age in your life, say not to them a word of contempt, nor repel them, but address them in terms of honor."
    },
    /*{   arabic:"",
        reference:"",
        translationEnglish:""
    },
    {   arabic:"",
        reference:"",
        translationEnglish:""
    },
  */
];

function newAyah(){
    var randomNumber = Math.floor(Math.random() * ayah.length);
    document.getElementById('ayahDisplayA').innerHTML = ayah[randomNumber].arabic;
    document.getElementById('ayahDisplayR').innerHTML = ayah[randomNumber].reference;
    document.getElementById('ayahDisplayE').innerHTML = ayah[randomNumber].translationEnglish;
}
