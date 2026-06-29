/* ==========================================================================
   SEXSAPIENS - LOGICA APPLICAZIONE (SPA & SIMULATORE)
   ========================================================================== */

// DATABASE DEI TERMINI (IL GLOSSARIO "SEXSAPIENS")
const glossaryData = {
    "non-binario": {
        id: "non-binario",
        title: "Non-binario (Non-binary)",
        category: "identity",
        categoryName: "Identità & Genere",
        definition: "Un termine ombrello per indicare qualsiasi identità di genere che non rientra esclusivamente nel binarismo tradizionale maschio/femmina. Una persona non-binaria può identificarsi come una combinazione di entrambi i generi, come nessuno dei due, o come un genere completamente diverso.",
        example: "Leo preferisce che le persone si riferiscano a lui con pronomi neutri o semplicemente usando il suo nome, in quanto si identifica come non-binario.",
        locked: true
    },
    "identità di genere": {
        id: "identità-di-genere",
        title: "Identità di Genere",
        category: "identity",
        categoryName: "Identità & Genere",
        definition: "Il senso profondo e soggettivo di appartenenza a un genere (maschile, femminile, non-binario, ecc.). Può corrispondere o meno al sesso assegnato alla nascita (anatomico e biologico).",
        example: "Mentre il sesso alla nascita è basato su caratteristiche biologiche, l'identità di genere riguarda come una persona si percepisce intimamente.",
        locked: true
    },
    "cisgender": {
        id: "cisgender",
        title: "Cisgender (Cis)",
        category: "identity",
        categoryName: "Identità & Genere",
        definition: "Una persona la cui identità di genere corrisponde esattamente al sesso biologico e anagrafico che le è stato assegnato alla nascita.",
        example: "Una persona a cui è stato assegnato il sesso femminile alla nascita e che cresce identificandosi e sentendosi a tutti gli effetti una donna.",
        locked: true
    },
    "asessuale": {
        id: "asessuale",
        title: "Asessualità",
        category: "orientation",
        categoryName: "Orientamento",
        definition: "Un orientamento sessuale caratterizzato dalla mancanza di attrazione sessuale verso qualsiasi genere, o da una bassissima attrazione. Le persone asessuali possono comunque provare attrazione romantica, emotiva o intellettuale.",
        example: "Luca fa parte dello spettro asessuale: sperimenta relazioni romantiche profonde e intime, ma non sente il desiderio di compiere atti sessuali.",
        locked: true
    },
    "pansessuale": {
        id: "pansessuale",
        title: "Pansessualità",
        category: "orientation",
        categoryName: "Orientamento",
        definition: "Attrazione estetica, romantica e/o sessuale verso una persona, indipendentemente dal suo genere o sesso biologico. Spesso riassunto con 'attrazione verso le persone al di là del genere'.",
        example: "Chi si identifica come pansessuale può provare attrazione verso uomini, donne, persone non-binarie o trans senza che il genere sia un fattore discriminante.",
        locked: true
    },
    "fantasia sessuale": {
        id: "fantasia-sessuale",
        title: "Fantasia Sessuale",
        category: "desire",
        categoryName: "Fantasie & Desideri",
        definition: "Qualsiasi immagine mentale, pensiero o scenario stimolante dal punto di vista sessuale. Sono del tutto naturali, sane e comuni. Avere una fantasia non significa necessariamente volerla mettere in atto nella realtà.",
        example: "Immaginare giochi di ruolo o scenari esotici durante la masturbazione o l'intimità, come pura stimolazione mentale.",
        locked: true
    },
    "bdsm": {
        id: "bdsm",
        title: "BDSM",
        category: "desire",
        categoryName: "Fantasie & Desideri",
        definition: "Sigla che racchiude una varietà di pratiche e desideri basati su: Bondage e Disciplina (BD), Dominazione e Sottomissione (DS), Sadismo e Masochismo (SM). Si fonda rigorosamente su consenso, consapevolezza e sicurezza.",
        example: "L'uso di bende per gli occhi o restrizioni leggere durante l'atto intimo, in modo consensuale ed eccitante per entrambi.",
        locked: true
    },
    "gioco di ruolo": {
        id: "gioco-di-ruolo",
        title: "Gioco di Ruolo (Roleplay)",
        category: "desire",
        categoryName: "Fantasie & Desideri",
        definition: "Una pratica in cui i partner interpretano ruoli o personaggi concordati (es. sconosciuti in un bar, dottore/paziente) per esplorare fantasie, dinamiche di potere o desideri in un ambiente sicuro e giocoso.",
        example: "Fingere di incontrarsi per la prima volta in un hotel durante un viaggio per rompere la routine di coppia.",
        locked: true
    },
    "consenso": {
        id: "consenso",
        title: "Consenso",
        category: "relation",
        categoryName: "Relazioni & Consenso",
        definition: "L'accordo libero, consapevole, entusiasta, specifico e reversibile tra le persone coinvolte in qualsiasi attività sessuale o fisica. Deve essere presente in ogni momento e può essere revocato in qualsiasi secondo.",
        example: "Chiedere 'Ti piace questo?' o 'Posso fare questo?' e proseguire solo se la risposta è un sì sincero e convinto.",
        locked: true
    },
    "poliamore": {
        id: "poliamore",
        title: "Poliamore",
        category: "relation",
        categoryName: "Relazioni & Consenso",
        definition: "La pratica o l'orientamento relazionale che consente di avere più relazioni intime, sentimentali e/o sessuali contemporaneamente, nel pieno consenso, trasparenza e rispetto di tutti i partner coinvolti.",
        example: "Una persona che ha due partner stabili, i quali sono a conoscenza della situazione e condividono le regole e i confini della relazione.",
        locked: true
    },
    "pronomi neutri": {
        id: "pronomi-neutri",
        title: "Pronomi Neutri",
        category: "identity",
        categoryName: "Identità & Genere",
        definition: "Pronomi utilizzati da persone (spesso non-binarie o genderqueer) che non si riconoscono nei pronomi binari maschili (lui) o femminili (lei). In italiano si usano forme collettive come 'loro', neopronomi (es. 've', 'xe') o si evita l'uso del genere nei participi passati.",
        example: "Dire 'Leo è andat* a casa' o riferirsi a Leo dicendo 'Loro sono una persona fantastica' per rispettare la sua identità.",
        locked: true
    },
    "sexting": {
        id: "sexting",
        title: "Sexting",
        category: "relation",
        categoryName: "Relazioni & Consenso",
        definition: "L'invio, la ricezione o la condivisione di messaggi, testi, foto o video sessualmente espliciti o allusivi tramite smartphone, social media o internet. Richiede sempre il consenso attivo e continuo di chi invia e riceve.",
        example: "Mandare un messaggio sensuale al partner durante la giornata per stuzzicare l'intimità, con la certezza che sia gradito.",
        locked: true
    },
    "non-monogamia consensuale": {
        id: "non-monogamia-consensuale",
        title: "Non-monogamia Consensuale (CNM)",
        category: "relation",
        categoryName: "Relazioni & Consenso",
        definition: "Un termine ombrello per descrivere relazioni intime e/o sessuali in cui tutti i partecipanti decidono di comune accordo di non seguire la monogamia. Include la relazione aperta, il poliamore e l'anarchia relazionale.",
        example: "Due coniugi che, d'accordo reciproco e con piena trasparenza, si concedono la libertà di avere rapporti intimi al di fuori del matrimonio.",
        locked: true
    },
    "aromanticismo": {
        id: "aromanticismo",
        title: "Aromanticismo",
        category: "orientation",
        categoryName: "Orientamento",
        definition: "Un orientamento romantico caratterizzato da scarsa o assente attrazione romantica verso gli altri. Le persone aromantiche possono provare forti legami di amicizia o attrazione sessuale, pur non desiderando relazioni di tipo romantico/amoroso.",
        example: "Una persona aromantica che vive relazioni basate sulla complicità sessuale e intellettuale, ma senza sentimenti di innamoramento romantico.",
        locked: true
    },
    "ist": {
        id: "ist",
        title: "Infezioni Sessualmente Trasmissibili (IST)",
        category: "health",
        categoryName: "Salute & Prevenzione",
        definition: "Infezioni causate da batteri, virus, funghi o parassiti che si trasmettono prevalentemente attraverso qualsiasi tipo di contatto sessuale (vaginale, anale, orale o contatto diretto cute-mucose genitale). Molte IST sono inizialmente asintomatiche, rendendo cruciali lo screening periodico e l'uso di barriere protettive.",
        example: "Sottoporsi a un test di screening per le IST prima di iniziare una nuova relazione intima, anche in assenza di sintomi visibili, è una pratica sana di responsabilità condivisa.",
        locked: true
    },
    "profilattico": {
        id: "profilattico",
        title: "Profilattico (Condom/Preservativo)",
        category: "health",
        categoryName: "Salute & Prevenzione",
        definition: "Un dispositivo barriera (in lattice o poliuretano) indossato sul pene in erezione prima di qualsiasi penetrazione o rapporto orale. È l'unico metodo contraccettivo che offre una doppia protezione: previene gravidanze indesiderate e protegge efficacemente dalla trasmissione della maggior parte delle IST.",
        example: "Utilizzare sempre il profilattico fin dall'inizio del rapporto per garantire una protezione sicura da gravidanze e infezioni.",
        locked: true
    },
    "contraccezione d'emergenza": {
        id: "contraccezione-d-emergenza",
        title: "Contraccezione d'Emergenza",
        category: "health",
        categoryName: "Salute & Prevenzione",
        definition: "Metodo contraccettivo da utilizzare tempestivamente dopo un rapporto non protetto o in caso di fallimento di un altro metodo (es. rottura del condom). Comunemente chiamata 'pillola del giorno dopo' (o dei 5 giorni dopo), agisce ritardando l'ovulazione e deve essere assunta prima possibile. Non è un farmaco abortivo.",
        example: "Sara assume la contraccezione d'emergenza in farmacia poche ore dopo un rapporto in cui il profilattico si è accidentalmente rotto.",
        locked: true
    },
    "transgender": {
        id: "transgender",
        title: "Transgender (Trans)",
        category: "identity",
        categoryName: "Identità & Genere",
        definition: "Una persona la cui identità di genere differisce dal sesso biologico ed anagrafico assegnato alla nascita. Essere trans non dipende dall'aver effettuato interventi chirurgici o terapie mediche.",
        example: "Marco ha intrapreso un percorso di affermazione di genere per allineare la sua vita sociale ed il suo corpo alla sua identità maschile.",
        locked: true
    },
    "intersessualità": {
        id: "intersessualità",
        title: "Intersessualità",
        category: "identity",
        categoryName: "Identità & Genere",
        definition: "Un termine ombrello per indicare variazioni congenite nelle caratteristiche biologiche del sesso (cromosomi, gonadi, ormoni o organi genitali) che non rientrano nelle tipiche definizioni mediche di maschio o femmina.",
        example: "Una persona nata con caratteristiche anatomiche e ormonali non strettamente catalogabili in modo binario può identificarsi come intersessuale.",
        locked: true
    },
    "genderqueer": {
        id: "genderqueer",
        title: "Genderqueer",
        category: "identity",
        categoryName: "Identità & Genere",
        definition: "Un'identità di genere che si colloca al di fuori del binarismo tradizionale maschio/femmina, sfidando e rifiutando le etichette sociali rigide. Spesso vissuta come identità fluida, neutra o sovrapposta.",
        example: "Alex si definisce genderqueer ed esprime la propria personalità alternando elementi considerati socialmente sia maschili che femminili.",
        locked: true
    },
    "agender": {
        id: "agender",
        title: "Agender",
        category: "identity",
        categoryName: "Identità & Genere",
        definition: "L'assenza di un'identità di genere o la percezione di essere completamente privi di genere o neutrali rispetto ad esso.",
        example: "Sam descrive il suo genere come agender, in quanto non sperimenta alcuna appartenenza interna al concetto di maschile o femminile.",
        locked: true
    },
    "disforia di genere": {
        id: "disforia-di-genere",
        title: "Disforia di Genere",
        category: "identity",
        categoryName: "Identità & Genere",
        definition: "Il disagio, l'ansia o la sofferenza psicologica che una persona può provare a causa dell'incongruenza tra il proprio genere percepito intimamente e il sesso biologico assegnato alla nascita.",
        example: "Il supporto psicologico, sociale e la terapia ormonale di affermazione di genere sono interventi chiave per alleviare la disforia di genere.",
        locked: true
    },
    "bisessuale": {
        id: "bisessuale",
        title: "Bisessualità",
        category: "orientation",
        categoryName: "Orientamento",
        definition: "Un orientamento sessuale caratterizzato dall'attrazione romantica, affettiva e/o sessuale verso più di un genere, non necessariamente nello stesso momento, modo o grado.",
        example: "Elena sperimenta attrazione sia per persone dello stesso genere che di generi diversi, identificandosi come bisessuale.",
        locked: true
    },
    "demisessuale": {
        id: "demisessuale",
        title: "Demisessualità",
        category: "orientation",
        categoryName: "Orientamento",
        definition: "Un orientamento nello spettro dell'asessualità in cui una persona prova attrazione sessuale solo dopo aver instaurato un legame emotivo, romantico o intellettuale profondo e significativo con l'altro.",
        example: "Chiara non prova attrazione sessuale spontanea verso estranei, ma solo dopo mesi di profonda amicizia e intesa intellettuale.",
        locked: true
    },
    "graysessuale": {
        id: "graysessuale",
        title: "Graysessualità (Gray-A)",
        category: "orientation",
        categoryName: "Orientamento",
        definition: "L'area grigia tra l'asessualità e l'alossualità (attrazione sessuale standard). Le persone graysessuali provano attrazione sessuale raramente, a bassa intensità o solo in circostanze specifiche.",
        example: "Matteo sperimenta l'attrazione fisica solo sporadicamente nel corso degli anni e si riconosce nella definizione di graysessuale.",
        locked: true
    },
    "omosessuale": {
        id: "omosessuale",
        title: "Omosessualità",
        category: "orientation",
        categoryName: "Orientamento",
        definition: "Orientamento sessuale caratterizzato dall'attrazione romantica, affettiva e/o sessuale verso persone del proprio stesso genere (comunemente gay per gli uomini, lesbiche per le donne).",
        example: "Un uomo gay sperimenta attrazione e legami sentimentali esclusivamente con altri uomini.",
        locked: true
    },
    "eterosessuale": {
        id: "eterosessuale",
        title: "Eterosessualità",
        category: "orientation",
        categoryName: "Orientamento",
        definition: "Orientamento sessuale caratterizzato dall'attrazione romantica, affettiva e/o sessuale verso persone di genere diverso dal proprio.",
        example: "Una donna eterosessuale sperimenta relazioni intime e affettive esclusivamente con uomini.",
        locked: true
    },
    "kink": {
        id: "kink",
        title: "Kink",
        category: "desire",
        categoryName: "Fantasie & Desideri",
        definition: "Termine ombrello per descrivere desideri, comportamenti, giochi di ruolo o preferenze sessuali non convenzionali ma del tutto sani e consensuali, che esulano dalle pratiche sessuali tradizionali.",
        example: "L'uso di piccoli accessori come bende per gli occhi o piume fa parte dell'esplorazione kink della coppia.",
        locked: true
    },
    "feticismo": {
        id: "feticismo",
        title: "Feticismo (Fetish)",
        category: "desire",
        categoryName: "Fantasie & Desideri",
        definition: "Attrazione sessuale intensa ed eccitazione focalizzata su oggetti inanimati (es. pelle, lattice, scarpe) o su parti del corpo non considerate tipicamente erogene (es. i piedi).",
        example: "Provare una forte stimolazione e desiderio intimo incentrati specificamente sull'aspetto o sul contatto con calze di seta.",
        locked: true
    },
    "masturbazione": {
        id: "masturbazione",
        title: "Masturbazione",
        category: "desire",
        categoryName: "Fantasie & Desideri",
        definition: "La stimolazione autonoma o autoerotica dei propri organi genitali per ottenere piacere intimo e/o orgasmo. È una prática sana, naturale e comune a tutte le età, fondamentale per comprendere le proprie risposte corporee.",
        example: "La masturbazione aiuta la persona a scoprire cosa le procura maggior piacere, migliorando anche l'intesa con il partner.",
        locked: true
    },
    "punto g": {
        id: "punto-g",
        title: "Punto G / Zona Prostatica",
        category: "desire",
        categoryName: "Fantasie & Desideri",
        definition: "Aree erogene interne altamente sensibili (sulla parete anteriore della vagina o a livello della prostata per via rettale) la cui stimolazione mirata può indurre intense sensazioni di piacere e orgasmi profondi.",
        example: "Molte coppie esplorano la stimolazione manuale o con giocattoli dedicati per raggiungere e stimolare il punto G.",
        locked: true
    },
    "sex toys": {
        id: "sex-toys",
        title: "Sex Toys (Giocattoli Sessuali)",
        category: "desire",
        categoryName: "Fantasie & Desideri",
        definition: "Dispositivi o accessori (vibratori, dildi, anelli fallici, stimolatori clitoridei, ecc.) progettati per stimolare le zone erogene e intensificare il piacere, utilizzabili da soli o in coppia.",
        example: "Introdurre un vibratore per stimolare il clitoride durante il rapporto di coppia può arricchire l'intimità e favorire il piacere.",
        locked: true
    },
    "confini personali": {
        id: "confini-personali",
        title: "Confini Personali (Boundaries)",
        category: "relation",
        categoryName: "Relazioni & Consenso",
        definition: "I limiti fisici, emotivi, psicologici o intimi che ogni individuo stabilisce all'interno di una relazione per preservare la propria integrità e il proprio benessere. Devono essere esplicitati chiaramente e rispettati.",
        example: "Dire 'oggi sono stanco, preferirei solo delle coccole' è una comunicazione chiara dei propri confini personali.",
        locked: true
    },
    "relazione aperta": {
        id: "relazione-aperta",
        title: "Relazione Aperta",
        category: "relation",
        categoryName: "Relazioni & Consenso",
        definition: "Una tipologia di non-monogamia consensuale in cui i partner stabili mantengono un legame affettivo ed emotivo esclusivo, ma concordano sulla libertà di avere rapporti intimi extra-coppia.",
        example: "Una coppia che, in piena trasparenza e accordo reciproco, decide di potersi concedere avventure sessuali occasionali.",
        locked: true
    },
    "love bombing": {
        id: "love-bombing",
        title: "Love Bombing",
        category: "relation",
        categoryName: "Relazioni & Consenso",
        definition: "Una dinamica manipolatoria e tossica (spesso iniziale) in cui un partner investe l'altro di attenzioni eccessive, complimenti sproporzionati e regali al solo scopo di legarlo a sé e creare dipendenza affettiva.",
        example: "Ricevere dichiarazioni d'amore eterno e pressioni per la convivenza dopo soli tre giorni di frequentazione.",
        locked: true
    },
    "anarchia relazionale": {
        id: "anarchia-relazionale",
        title: "Anarchia Relazionale",
        category: "relation",
        categoryName: "Relazioni & Consenso",
        definition: "Un approccio in cui le relazioni non seguono regole preconfezionate o gerarchie sociali (es. ritenere che l'amore romantico sia superiore all'amicizia). Ogni legame viene negoziato liberamente dai partecipanti.",
        example: "Costruire legami stabili e intimi rifiutando l'idea che la convivenza o l'esclusività siano tappe obbligatorie per definirsi 'seri'.",
        locked: true
    },
    "gaslighting": {
        id: "gaslighting",
        title: "Gaslighting",
        category: "relation",
        categoryName: "Relazioni & Consenso",
        definition: "Una forma di manipolazione psicologica subdola che spinge la vittima a dubitare della propria memoria, percezione o sanità mentale, attraverso costanti menzogne o negazioni dei fatti da parte del manipolatore.",
        example: "Rispondere 'Sei pazza, non ho mai detto questo!' di fronte ad una promessa non mantenuta, per indurre il partner a colpevolizzarsi.",
        locked: true
    },
    "prep": {
        id: "prep",
        title: "PrEP (Profilassi Pre-Esposizione)",
        category: "health",
        categoryName: "Salute & Prevenzione",
        definition: "Una strategia di prevenzione dell'HIV per persone sieronegative, consistente nell'assunzione di farmaci antiretrovirali prima di possibili contatti a rischio. Riduce la probabilità di contagio di oltre il 99%. Non protegge da altre IST.",
        example: "Assumere la PrEP regolarmente sotto stretto controllo medico periodico per fare prevenzione attiva dell'HIV.",
        locked: true
    },
    "lubrificante": {
        id: "lubrificante",
        title: "Lubrificante (Lube)",
        category: "health",
        categoryName: "Salute & Prevenzione",
        definition: "Gel (a base acquosa, siliconica o oleosa) usato per ridurre l'attrito durante i rapporti penetrativi o l'uso di sex toys. Protegge le mucose da microlesioni e riduce sensibilmente il rischio di rottura del profilattico.",
        example: "Applicare un lubrificante a base acquosa prima del rapporto vaginale o anale per renderlo confortevole e prevenire rotture del condom.",
        locked: true
    },
    "dental dam": {
        id: "dental-dam",
        title: "Dental Dam (Diga dentale)",
        category: "health",
        categoryName: "Salute & Prevenzione",
        definition: "Un sottile foglio di lattice o poliuretano posizionato sopra la vulva o la zona anale durante i rapporti orali (cunnilingus o anilingus) per creare una barriera protettiva contro la trasmissione di IST.",
        example: "Utilizzare una diga dentale aromatizzata durante il sesso orale sulla vulva per coniugare sicurezza e piacere.",
        locked: true
    },
    "pap test": {
        id: "pap-test",
        title: "Pap Test / HPV Test",
        category: "health",
        categoryName: "Salute & Prevenzione",
        definition: "Esami periodici di screening ginecologico che consentono di individuare tempestivamente lesioni precancerose o la presenza del Papillomavirus Umano (HPV), prevenendo il tumore del collo dell'utero.",
        example: "Sottoporsi regolarmente al Pap Test dai 25 anni in poi per monitorare lo stato di salute e prevenire patologie gravi.",
        locked: true
    },
    "consulenza sessuologica": {
        id: "consulenza-sessuologica",
        title: "Consulenza Sessuologica",
        category: "health",
        categoryName: "Salute & Prevenzione",
        definition: "Un percorso di supporto e consulenza condotto da uno specialista (sessuologo) per affrontare dubbi, ansie, disfunzioni corporee o blocchi relazionali legati alla sfera dell'affettività e della sessualità.",
        example: "Rivolgersi ad un sessuologo clinico per sciogliere i dubbi legati al calo del desiderio in un momento di forte stress.",
        locked: true
    },
    "zone erogene": {
        id: "zone-erogene",
        title: "Zone Erogene",
        category: "health",
        categoryName: "Salute & Prevenzione",
        definition: "Aree del corpo particolarmente sensibili alla stimolazione tattile, capaci di generare eccitazione o piacere sessuale. Variano da persona a persona e includono, oltre ai genitali, labbra, collo, orecchie, schiena, inner thigh. Esplorarle contribuisce all'auto-conoscenza corporea.",
        example: "Scoprire attraverso l'esplorazione del proprio corpo quali zone erogene personali rispondono con maggior piacere aiuta a comunicare i propri desideri al partner.",
        locked: true
    },
    "bondage": {
        id: "bondage",
        title: "Bondage",
        category: "desire",
        categoryName: "Fantasie & Desideri",
        definition: "La pratica consensuale di limitare i movimenti di una persona usando corde, bende, manette morbide o altri materiali, come parte dell'esplorazione erotica. Fa parte dell'ambito BDSM e richiede sempre una safe word concordata, comunicazione aperta e piena cura del benessere del partner.",
        example: "Una coppia che esplora il bondage stabilisce in anticipo una parola di sicurezza e segnali non verbali per garantire il comfort e la sicurezza di entrambi in ogni momento.",
        locked: true
    },
    "revenge porn": {
        id: "revenge-porn",
        title: "Revenge Porn (Pornovenganza)",
        category: "relation",
        categoryName: "Relazioni & Consenso",
        definition: "La diffusione non consensuale di immagini, video o contenuti intimi di una persona, spesso come atto vendicativo o coercitivo. In Italia è un reato perseguibile penalmente (art. 612-ter c.p.) ed è una grave violazione della privacy, della dignità e del consenso.",
        example: "Condividere o minacciare di condividere foto intime di un ex partner senza il suo consenso è revenge porn: un crimine punibile con la reclusione fino a 6 anni.",
        locked: true
    },
    "ghosting": {
        id: "ghosting",
        title: "Ghosting",
        category: "relation",
        categoryName: "Relazioni & Consenso",
        definition: "Il taglio improvviso e unilaterale di ogni forma di comunicazione con una persona (spesso un partner o una frequentazione) senza spiegazioni, avvertimenti o confronto diretto. Può causare confusione, senso di abbandono e sofferenza emotiva in chi lo subisce.",
        example: "Dopo settimane di appuntamenti regolari, smettere di rispondere a qualsiasi messaggio senza dare alcuna spiegazione è un esempio di ghosting.",
        locked: true
    }
};

// Alias per mappare le forme nominalizzate dei termini (es. asessualità -> asessuale)
glossaryData["asessualità"] = glossaryData["asessuale"];
glossaryData["demisessualità"] = glossaryData["demisessuale"];
glossaryData["bisessualità"] = glossaryData["bisessuale"];
glossaryData["pansessualità"] = glossaryData["pansessuale"];
glossaryData["graysessualità"] = glossaryData["graysessuale"];
glossaryData["omosessualità"] = glossaryData["omosessuale"];
glossaryData["eterosessualità"] = glossaryData["eterosessuale"];

// DATABASE DEGLI SCENARI (GIOCHI)
const scenariosData = {
    youth: [
        {
            id: "youth_leo",
            title: "La confessione di Leo",
            category: "Identità & Genere",
            description: "Il tuo amico Leo ti confida la sua identità non-binaria. Impara ad ascoltarlo e a rispettare i suoi pronomi neutri.",
            audience: "youth",
            startNode: "start",
            nodes: {
                start: {
                    text: "Ehi... meno male che ti ho trovato da solo. C'è una cosa importante di cui volevo parlarti. Ultimamente ho riflettuto tanto su chi sono... Penso di essere <span class='word-highlight' data-word='non-binario'>non-binario</span>. Vorrei chiederti di usare <span class='word-highlight' data-word='pronomi neutri'>pronomi neutri</span> con me quando siamo insieme.",
                    speaker: "Leo",
                    avatar: "🧑‍🦱",
                    status: "Un po' nervoso ma fiducioso",
                    options: [
                        {
                            text: "Ma sì, figurati, io sono apertissimo! Quindi adesso ti piacciono i ragazzi o le ragazze?",
                            nextNode: "explain_orientation_trap",
                            empathyChange: -5,
                            unlockedTerms: ["non-binario", "identità di genere"]
                        },
                        {
                            text: "Grazie per esserti fidato di me, Leo. Spiegami meglio: cosa significa esattamente per te non-binario?",
                            nextNode: "explain",
                            empathyChange: 20,
                            unlockedTerms: ["non-binario", "identità di genere", "pronomi neutri"]
                        },
                        {
                            text: "Ma... non-binario? Non ti sembra una moda di internet? Alla fine sei nato maschio, no?",
                            nextNode: "hurt",
                            empathyChange: -20,
                            unlockedTerms: ["non-binario", "identità di genere", "cisgender"]
                        },
                        {
                            text: "Ah, okay, nessun problema. Senti, ma hai visto ieri che gol incredibile ha fatto la Juve?",
                            nextNode: "dismiss",
                            empathyChange: -10,
                            unlockedTerms: ["non-binario"]
                        }
                    ]
                },
                explain_orientation_trap: {
                    text: "Guarda che l'orientamento sessuale (chi mi piace) non ha nulla a che fare con la mia <span class='word-highlight' data-word='identità di genere'>identità di genere</span> (chi sono). Essere non-binario riguarda solo come mi percepisco, non chi mi attrae. Mi spiace che si faccia ancora questa confusione...",
                    speaker: "Leo",
                    avatar: "🧑‍🦱",
                    status: "Un po' infastidito ma didattico",
                    options: [
                        {
                            text: "Hai totalmente ragione, scusami per l'errore. Voglio davvero capire: mi spieghi meglio cosa significa non-binario per te?",
                            nextNode: "explain",
                            empathyChange: 15,
                            unlockedTerms: ["non-binario", "identità di genere"]
                        },
                        {
                            text: "Vabbè, ho solo fatto una domanda. Adesso non si può più chiedere niente senza che vi offendiate.",
                            nextNode: "end_bad",
                            empathyChange: -15,
                            unlockedTerms: []
                        }
                    ]
                },
                explain: {
                    text: "Significa che non mi sento né un ragazzo né una ragazza. La mia <span class='word-highlight' data-word='identità di genere'>identità di genere</span> non rientra nel classico binario maschio/femmina. È una bella sensazione averlo capito, mi sento molto più a mio agio.",
                    speaker: "Leo",
                    avatar: "🧑‍🦱",
                    status: "Sollevato e sorridente",
                    options: [
                        {
                            text: "Quindi da oggi ti vestirai in modo diverso o cambierai nome per essere coerente?",
                            nextNode: "neutral_clothing",
                            empathyChange: 5,
                            unlockedTerms: ["identità di genere"]
                        },
                        {
                            text: "Capisco! Ti sostengo in pieno. Ci metterò un po' ad abituarmi ai nuovi pronomi, ma farò del mio meglio.",
                            nextNode: "end_good",
                            empathyChange: 20,
                            unlockedTerms: ["pronomi neutri"]
                        }
                    ]
                },
                hurt: {
                    text: "No, non è una moda... È come mi sento dentro da anni, solo che prima non avevo le parole per descriverlo. Pensavo che almeno tu potessi capire senza giudicarmi subito.",
                    speaker: "Leo",
                    avatar: "🧑‍🦱",
                    status: "Triste e ferito",
                    options: [
                        {
                            text: "Scusami Leo, ho risposto senza pensare. Sono stato insensibile. Raccontami di più, voglio davvero capire.",
                            nextNode: "explain",
                            empathyChange: 15,
                            unlockedTerms: ["non-binario", "identità di genere"]
                        },
                        {
                            text: "Va bene, ho solo espresso un parere realistico. Ognuno ha le sue idee.",
                            nextNode: "end_bad",
                            empathyChange: -20,
                            unlockedTerms: ["cisgender"]
                        }
                    ]
                },
                dismiss: {
                    text: "Veramente preferirei non parlare di calcio ora... Speravo potessimo soffermarci un secondo su questa cosa. Per me è un passo enorme parlarne con qualcuno.",
                    speaker: "Leo",
                    avatar: "🧑‍🦱",
                    status: "Molto deluso",
                    options: [
                        {
                            text: "Hai totalmente ragione, scusami. Ero distratto. Sono qui, ti ascolto con tutta l'attenzione.",
                            nextNode: "explain",
                            empathyChange: 15,
                            unlockedTerms: ["non-binario"]
                        },
                        {
                            text: "Sì, certo, ma non farne un dramma. Dai, andiamo in classe prima che arrivi il prof.",
                            nextNode: "end_bad",
                            empathyChange: -15,
                            unlockedTerms: []
                        }
                    ]
                },
                neutral_clothing: {
                    text: "Non per forza! L'espressione di genere (come mi vesto) non è la stessa cosa dell'identità (chi sono). Per ora voglio solo sentirmi a mio agio senza etichette rigide. Grazie per non fare pressioni.",
                    speaker: "Leo",
                    avatar: "🧑‍🦱",
                    status: "Tranquillo e riconoscente",
                    options: [
                        {
                            text: "Ora è molto più chiaro. Grazie per avermi spiegato la differenza. Conta su di me per qualsiasi cosa!",
                            nextNode: "end_good",
                            empathyChange: 15,
                            unlockedTerms: ["identità di genere"]
                        }
                    ]
                },
                end_good: {
                    text: "Grazie davvero. Avere un amico che mi ascolta, mi rispetta e si sforza di usare le parole giuste mi fa sentire al sicuro e accettato. Sei speciale!",
                    speaker: "Leo",
                    avatar: "🧑‍🦱",
                    status: "Felice e grato",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                },
                end_bad: {
                    text: "Forse ho fatto un errore a parlarne così presto. Penso che andrò a fare un giro da solo. Ci vediamo in giro.",
                    speaker: "Leo",
                    avatar: "🧑‍🦱",
                    status: "Freddo e distante",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                }
            }
        },
        {
            id: "youth_sofia",
            title: "Dire di no (Pressione e Consenso)",
            category: "Relazioni & Consenso",
            description: "Davide fa pressioni a Sofia per ricevere foto intime (nude). Aiuta Sofia a definire i suoi confini e a capire il consenso digitale.",
            audience: "youth",
            startNode: "start",
            nodes: {
                start: {
                    text: "Ehi... Davide mi sta chiedendo di mandargli una foto intima in chat. Dice che stiamo insieme da tre mesi, che tutti lo fanno oggi e che se mi fido dovrei farlo... Non mi sento a mio agio col <span class='word-highlight' data-word='sexting'>sexting</span>, ma ho paura che se dico di no mi lascerà. Cosa faccio?",
                    speaker: "Sofia",
                    avatar: "👧",
                    status: "In ansia e insicura",
                    highlights: ["sexting", "consenso"],
                    options: [
                        {
                            text: "Sofia, se non ti senti a tuo agio hai tutto il diritto di dire no. Il consenso deve essere libero ed entusiasta. Non farti ricattare.",
                            nextNode: "assertive_no",
                            empathyChange: 20,
                            unlockedTerms: ["consenso", "sexting"]
                        },
                        {
                            text: "Vabbè, se ti fidi mandagliela, alla fine si fa così oggi. Basta che si veda poco la faccia, così sei sicura.",
                            nextNode: "send_photo_trap",
                            empathyChange: -15,
                            unlockedTerms: ["sexting"]
                        },
                        {
                            text: "Davide è un pervertito! Lascialo subito e digli che lo denunci se te lo chiede di nuovo!",
                            nextNode: "aggressive_no",
                            empathyChange: -5,
                            unlockedTerms: ["consenso"]
                        }
                    ]
                },
                send_photo_trap: {
                    text: "Dici? Ma io non voglio che quella foto possa finire in giro... E se poi ci lasciamo? Mi sentirei morire. Non credo sia giusto farlo solo per non farlo arrabbiare.",
                    speaker: "Sofia",
                    avatar: "👧",
                    status: "Ancora più spaventata",
                    options: [
                        {
                            text: "Hai totalmente ragione, scusami. La tua sicurezza e il tuo comfort valgono molto più delle sue richieste. Non inviare nulla.",
                            nextNode: "assertive_no",
                            empathyChange: 15,
                            unlockedTerms: ["consenso", "sexting"]
                        },
                        {
                            text: "Se stiamo a guardare tutto non si fa nulla. Mandagliela per farlo contento e non parlarne più.",
                            nextNode: "end_bad",
                            empathyChange: -25,
                            unlockedTerms: []
                        }
                    ]
                },
                assertive_no: {
                    text: "Hai ragione. Ma come posso dirgli di no senza farlo arrabbiare? Ho paura della sua reazione e che si allontani...",
                    speaker: "Sofia",
                    avatar: "👧",
                    status: "Preoccupata",
                    options: [
                        {
                            text: "Digli chiaramente: 'Ti voglio bene ma non mi sento a mio agio con le foto intime. Rispetta la mia scelta'. Se si arrabbia, non ti merita.",
                            nextNode: "end_good",
                            empathyChange: 20,
                            unlockedTerms: ["consenso"]
                        },
                        {
                            text: "Digli una scusa, tipo che ti si è rotta la fotocamera o che tua madre ti controlla sempre il telefono, così eviti il problema.",
                            nextNode: "excuse_trap",
                            empathyChange: -10,
                            unlockedTerms: []
                        }
                    ]
                },
                excuse_trap: {
                    text: "Ma così rimando solo il problema! Prima o poi me lo chiederà di nuovo. Vorrei che capisse che è una questione di rispetto dei miei confini personali.",
                    speaker: "Sofia",
                    avatar: "👧",
                    status: "Delusa dalla risposta",
                    options: [
                        {
                            text: "Hai ragione, le scuse non servono a nulla. La comunicazione diretta è la via migliore per stabilire il consenso. Spiegagli come ti senti.",
                            nextNode: "end_good",
                            empathyChange: 20,
                            unlockedTerms: ["consenso"]
                        }
                    ]
                },
                aggressive_no: {
                    text: "Lo so che la richiesta mi fa soffrire, ma io gli voglio bene... Non voglio fargli la guerra o denunciarlo, volevo solo capire come fargli rispettare il mio disagio.",
                    speaker: "Sofia",
                    avatar: "👧",
                    status: "Triste e chiusa",
                    options: [
                        {
                            text: "Scusami, mi sono arrabbiata per proteggerti, non con te. Parla a Davide con calma, ma sii ferma sul tuo NO. Se ti ama, rispetterà il tuo confine.",
                            nextNode: "end_good",
                            empathyChange: 15,
                            unlockedTerms: ["consenso"]
                        }
                    ]
                },
                end_good: {
                    text: "Grazie di cuore. Mi dai la forza di essere sincera con lui. I miei confini sono importanti e merito un partner che li capisca e li rispetti.",
                    speaker: "Sofia",
                    avatar: "👧",
                    status: "Sollevata e determinata",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                },
                end_bad: {
                    text: "Penso che non ne parlerò più con nessuno. Mi sento sola in questa situazione e non so cosa deciderò di fare.",
                    speaker: "Sofia",
                    avatar: "👧",
                    status: "Fredda e isolata",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                }
            }
        },
        {
            id: "youth_elia",
            title: "La prima volta (Salute e Prevenzione)",
            category: "Salute & Prevenzione",
            description: "Elia vuole prepararsi per il suo primo rapporto sessuale e parlare col partner di protezione e salute in modo consapevole.",
            audience: "youth",
            startNode: "start",
            nodes: {
                start: {
                    text: "Senti... so che stiamo pensando di fare l'amore per la prima volta presto. Io sono super emozionato, ma voglio anche che siamo al sicuro. Volevo parlarti dell'uso del <span class='word-highlight' data-word='profilattico'>profilattico</span> per evitare gravidanze e proteggerci dalle <span class='word-highlight' data-word='ist'>IST</span>.",
                    speaker: "Elia",
                    avatar: "🧑",
                    status: "Emozionato ma un po' in ansia",
                    options: [
                        {
                            text: "Ma sì, facciamolo! Però pensavo... se prendo la pillola o stiamo bene entrambi, serve davvero il profilattico?",
                            nextNode: "prevention_trap",
                            empathyChange: -10,
                            unlockedTerms: ["profilattico", "ist"]
                        },
                        {
                            text: "Hai pienamente ragione, Elia. La salute di entrambi è al primo posto. Come possiamo organizzarci per l'acquisto e l'uso?",
                            nextNode: "prepare",
                            empathyChange: 20,
                            unlockedTerms: ["profilattico", "ist"]
                        },
                        {
                            text: "Ma dai, che ansia! Non possiamo semplicemente goderci il momento senza programmare tutto come un esame medico?",
                            nextNode: "dismissive",
                            empathyChange: -15,
                            unlockedTerms: ["profilattico"]
                        }
                    ]
                },
                prevention_trap: {
                    text: "Guarda che la pillola previene solo le gravidanze, ma non protegge affatto dalle <span class='word-highlight' data-word='ist'>IST</span> (Infezioni Sessualmente Trasmissibili). E molte infezioni possono essere asintomatiche, cioè non si vede o sente nulla ma si trasmettono comunque.",
                    speaker: "Elia",
                    avatar: "🧑",
                    status: "Serio e informato",
                    options: [
                        {
                            text: "Ah, scusami, non lo sapevo! Allora usiamo assolutamente il profilattico. Voglio proteggere entrambi.",
                            nextNode: "prepare",
                            empathyChange: 20,
                            unlockedTerms: ["profilattico", "ist"]
                        },
                        {
                            text: "Vabbè, ma se siamo i primi l'uno per l'altra, da dove dovremmo prenderle queste infezioni? Mi sembra esagerato.",
                            nextNode: "trust_trap",
                            empathyChange: -15,
                            unlockedTerms: ["ist"]
                        }
                    ]
                },
                trust_trap: {
                    text: "Anche se è la nostra prima volta insieme, alcune infezioni si trasmettono anche tramite sesso orale non protetto o contatti cutanei intimi, o magari da precedenti contatti superficiali. Non è una questione di fiducia, ma di cura reciproca.",
                    speaker: "Elia",
                    avatar: "🧑",
                    status: "Paziente ma fermo",
                    options: [
                        {
                            text: "Hai ragione, proteggersi è un atto di rispetto. Parliamo anche di come renderlo confortevole.",
                            nextNode: "lube_choice",
                            empathyChange: 20,
                            unlockedTerms: ["profilattico", "ist"]
                        },
                        {
                            text: "Se devi fare tutte queste storie, allora forse non siamo ancora pronti. Lasciamo stare.",
                            nextNode: "end_bad",
                            empathyChange: -20,
                            unlockedTerms: []
                        }
                    ]
                },
                dismissive: {
                    text: "Non voglio rovinare il momento, anzi! Parlarne prima ci permette di rilassarci e goderci tutto senza preoccupazioni dopo. Vorrei davvero che fossimo d'accordo su questo.",
                    speaker: "Elia",
                    avatar: "🧑",
                    status: "Un po' scoraggiato ma speranzoso",
                    options: [
                        {
                            text: "Scusami Elia, hai ragione. È maturo parlarne prima. Usiamo il profilattico. Cos'altro dovremmo sapere?",
                            nextNode: "prepare",
                            empathyChange: 15,
                            unlockedTerms: ["profilattico"]
                        },
                        {
                            text: "Sì, vabbè, ma parlarne così toglie tutta la magia. Cambiamo discorso.",
                            nextNode: "end_bad",
                            empathyChange: -15,
                            unlockedTerms: []
                        }
                    ]
                },
                prepare: {
                    text: "Meno male! Pensavo anche che dovremmo usare un <span class='word-highlight' data-word='lubrificante'>lubrificante</span> a base acquosa per evitare attrito, irritazioni e prevenire la rottura del profilattico. Avevo letto di usare olio per massaggi o vaselina, va bene lo stesso?",
                    speaker: "Elia",
                    avatar: "🧑",
                    status: "Incuriosito",
                    options: [
                        {
                            text: "No! Gli oli e la vaselina danneggiano il lattice del profilattico facendolo rompere. Dobbiamo usare solo lubrificanti a base acquosa o siliconica.",
                            nextNode: "lube_correct",
                            empathyChange: 20,
                            unlockedTerms: ["lubrificante", "profilattico"]
                        },
                        {
                            text: "Sì, penso che l'olio per massaggi vada benissimo, lubrifica molto di più e rende tutto più scorrevole.",
                            nextNode: "lube_oil_trap",
                            empathyChange: -15,
                            unlockedTerms: ["lubrificante"]
                        }
                    ]
                },
                lube_choice: {
                    text: "Sì, per rendere il rapporto più confortevole pensavo di usare del <span class='word-highlight' data-word='lubrificante'>lubrificante</span>. Ho letto che l'olio per bambini o la vaselina vanno benissimo con il profilattico, confermi?",
                    speaker: "Elia",
                    avatar: "🧑",
                    status: "Dubbioso",
                    options: [
                        {
                            text: "Assolutamente no. I prodotti a base oleosa indeboliscono il lattice del condom e lo fanno rompere. Serve un lubrificante a base acquosa.",
                            nextNode: "lube_correct",
                            empathyChange: 20,
                            unlockedTerms: ["lubrificante", "profilattico"]
                        },
                        {
                            text: "Sì, credo di sì, alla fine sono fatti apposta per la pelle, quindi vanno bene.",
                            nextNode: "lube_oil_trap",
                            empathyChange: -15,
                            unlockedTerms: ["lubrificante"]
                        }
                    ]
                },
                lube_oil_trap: {
                    text: "Aspetta! Ho controllato online ed è un grave errore: gli oli deteriorano il lattice in pochi minuti! Rischiamo che il profilattico si rompa. Dobbiamo usare solo lubrificanti a base acquosa.",
                    speaker: "Elia",
                    avatar: "🧑",
                    status: "Preoccupato",
                    options: [
                        {
                            text: "Meno male che hai verificato! Useremo solo quello a base acquosa. Grazie per la precisione.",
                            nextNode: "end_good",
                            empathyChange: 15,
                            unlockedTerms: ["lubrificante"]
                        },
                        {
                            text: "Uffa, quante regole. Mi sta passando la voglia.",
                            nextNode: "end_bad",
                            empathyChange: -15,
                            unlockedTerms: []
                        }
                    ]
                },
                lube_correct: {
                    text: "Ottima precisazione! Fortunatamente lo abbiamo scoperto prima. Allora prenderò un gel lubrificante a base acquosa specifico in farmacia o al supermercato insieme ai profilattici della taglia giusta.",
                    speaker: "Elia",
                    avatar: "🧑",
                    status: "Sollevato e fiducioso",
                    options: [
                        {
                            text: "Perfetto Elia. Affrontare questo passo insieme e con questa consapevolezza ci unisce ancora di più. Non vedo l'ora.",
                            nextNode: "end_good",
                            empathyChange: 20,
                            unlockedTerms: ["lubrificante", "profilattico"]
                        }
                    ]
                },
                end_good: {
                    text: "Anche io! Mi sento molto più tranquillo e felice ora che ne abbiamo parlato apertamente. Fare l'amore sarà bellissimo e sicuro per entrambi.",
                    speaker: "Elia",
                    avatar: "🧑",
                    status: "Molto felice e sereno",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                },
                end_bad: {
                    text: "Mi spiace che parlarne ti infastidisca... Penso sia meglio prenderci del tempo e non correre. Ci sentiamo nei prossimi giorni.",
                    speaker: "Elia",
                    avatar: "🧑",
                    status: "Triste e deluso",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                }
            }
        },
        {
            id: "youth_martina",
            title: "Oltre le aspettative (Orientamento)",
            category: "Orientamento",
            description: "Martina si sente confusa perché non prova attrazione fisica spontanea come i suoi amici. Aiutala a comprendere il suo orientamento.",
            audience: "youth",
            startNode: "start",
            nodes: {
                start: {
                    text: "Ehi, ti posso parlare? Ieri sera le mie amiche parlavano di ragazzi, di quanto trovino attraenti certi attori o compagni di scuola... Io mi sentivo un'aliena. Non provo quell'attrazione fisica immediata. Mi succede solo se conosco profondamente qualcuno ed è nato un forte legame emotivo. Ho qualcosa di sbagliato?",
                    speaker: "Martina",
                    avatar: "👧",
                    status: "Triste e insicura",
                    options: [
                        {
                            text: "Ma no, sei solo timida e vecchio stile! Vedrai che quando incontrerai la persona giusta cambierà tutto.",
                            nextNode: "invalidation_trap",
                            empathyChange: -15,
                            unlockedTerms: ["demisessualità"]
                        },
                        {
                            text: "Non c'è nulla di sbagliato in te, Martina. Quello che descrivi si chiama <span class='word-highlight' data-word='demisessualità'>demisessualità</span>, ed è un orientamento del tutto naturale dello spettro dell'<span class='word-highlight' data-word='asessualità'>asessualità</span>.",
                            nextNode: "explain_demi",
                            empathyChange: 20,
                            unlockedTerms: ["demisessualità", "asessualità"]
                        },
                        {
                            text: "Forse semplicemente non ti interessano le relazioni in generale e sei nello spettro dell'<span class='word-highlight' data-word='aromanticismo'>aromanticismo</span>?",
                            nextNode: "explain_aro",
                            empathyChange: 5,
                            unlockedTerms: ["aromanticismo"]
                        }
                    ]
                },
                invalidation_trap: {
                    text: "Ma non credo sia solo timidezza... Io vorrei davvero provare quell'attrazione spontanea che provano le altre, ma non ci riesco. Mi sento difettosa, come se mancasse un pezzo nel mio cervello.",
                    speaker: "Martina",
                    avatar: "👧",
                    status: "Ferita e sconfortata",
                    options: [
                        {
                            text: "Scusami Martina, non volevo minimizzare. In realtà la tua esperienza è condivisa da molte persone ed è definita demisessualità. Non sei affatto rotta.",
                            nextNode: "explain_demi",
                            empathyChange: 15,
                            unlockedTerms: ["demisessualità"]
                        },
                        {
                            text: "Dovresti sforzarti di uscire di più e fare esperienze, sennò rimarrai sempre bloccata in queste fisime.",
                            nextNode: "end_bad",
                            empathyChange: -25,
                            unlockedTerms: []
                        }
                    ]
                },
                explain_demi: {
                    text: "Davvero esiste un termine? <span class='word-highlight' data-word='demisessualità'>Demisessualità</span>... Suona strano, ma descrive esattamente come mi sento. Significa che non provo attrazione sessuale se prima non c'è una forte connessione emotiva o mentale. Quindi fa parte dell'asessualità?",
                    speaker: "Martina",
                    avatar: "👧",
                    status: "Sorpresa e incuriosita",
                    options: [
                        {
                            text: "Sì, l'<span class='word-highlight' data-word='asessualità'>asessualità</span> è uno spettro ampio. Alcuni non provano mai attrazione sessuale, altri la provano in modo condizionato come i demisessuali.",
                            nextNode: "spectrum_details",
                            empathyChange: 20,
                            unlockedTerms: ["asessualità", "demisessualità"]
                        },
                        {
                            text: "Sì, è come una scelta di castità o astinenza morale che decidi di praticare finché non trovi l'amore.",
                            nextNode: "abstinence_trap",
                            empathyChange: -10,
                            unlockedTerms: ["demisessualità"]
                        }
                    ]
                },
                abstinence_trap: {
                    text: "Ma io non ho fatto nessuna scelta morale o religiosa! Non è che mi 'impongo' di non farlo... È proprio che l'impulso fisico non si accende se non c'è prima quel legame profondo. Non è una regola, è come sono fatta.",
                    speaker: "Martina",
                    avatar: "👧",
                    status: "Infastidita e fraintesa",
                    options: [
                        {
                            text: "Hai perfettamente ragione, scusami. L'astinenza è un comportamento (una scelta), mentre la demisessualità è un orientamento (come si sperimenta l'attrazione). C'è una grande differenza.",
                            nextNode: "spectrum_details",
                            empathyChange: 20,
                            unlockedTerms: ["demisessualità"]
                        },
                        {
                            text: "Beh, alla fine l'effetto pratico è lo stesso, inutile perdersi in sottigliezze di parole.",
                            nextNode: "end_bad",
                            empathyChange: -15,
                            unlockedTerms: []
                        }
                    ]
                },
                explain_aro: {
                    text: "In realtà io provo attrazione romantica! Mi innamoro, desidero coccole, complicità e una relazione affettiva... Solo che l'attrazione fisica/sessuale non scatta subito.",
                    speaker: "Martina",
                    avatar: "👧",
                    status: "Pensosa",
                    options: [
                        {
                            text: "Capisco! Allora sperimenti attrazione romantica ma non quella sessuale immediata. Questo conferma che sei nello spettro demisessuale.",
                            nextNode: "explain_demi",
                            empathyChange: 15,
                            unlockedTerms: ["demisessualità", "aromanticismo"]
                        },
                        {
                            text: "Ah, allora sei solo complicata. O romantica o asessuale, le due cose insieme non hanno senso.",
                            nextNode: "end_bad",
                            empathyChange: -20,
                            unlockedTerms: []
                        }
                    ]
                },
                spectrum_details: {
                    text: "Questo mi toglie un peso enorme dal petto! Ho sempre pensato che ci fosse qualcosa che non andava in me rispetto alle mie amiche. Sapere che è una variante naturale mi fa sentire normale. Grazie di cuore per avermi ascoltata.",
                    speaker: "Martina",
                    avatar: "👧",
                    status: "Sollevata e felice",
                    options: [
                        {
                            text: "Di nulla, Martina. Ognuno ha i propri tempi e le proprie modalità per provare attrazione. Rispetta sempre te stessa e i tuoi confini.",
                            nextNode: "end_good",
                            empathyChange: 20,
                            unlockedTerms: ["asessualità", "demisessualità"]
                        }
                    ]
                },
                end_good: {
                    text: "Lo farò sicuramente. Ora mi sento molto più forte e pronta a vivere le mie relazioni alle mie condizioni, senza pressioni sociali.",
                    speaker: "Martina",
                    avatar: "👧",
                    status: "Fiduciosa e sorridente",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                },
                end_bad: {
                    text: "Pensavo che parlarne con te mi avrebbe aiutata, ma mi sento ancora più giudicata e incompresa. Meglio se vado a casa.",
                    speaker: "Martina",
                    avatar: "👧",
                    status: "Molto triste e chiusa",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                }
            }
        },
        {
            id: "youth_gio",
            title: "Identità e coming out (Orientamento)",
            category: "Orientamento",
            description: "Gio è confuso/a perché si rende conto di essere attratto/a sia da ragazzi che da ragazze, ma teme il giudizio dei compagni.",
            audience: "youth",
            startNode: "start",
            nodes: {
                start: {
                    text: "Ehi... posso chiederti un consiglio? Nell'ultimo periodo ho capito di provare attrazione sia per i ragazzi che per le ragazze. Ho cercato online e ho letto della <span class='word-highlight' data-word='bisessualità'>bisessualità</span>, ma a scuola sento spesso dire che è solo una moda, o che le persone bisessuali sono solo confuse o vogliono attenzioni... Mi fa molta paura dirlo in giro. Pensi che abbiano ragione loro?",
                    speaker: "Gio",
                    avatar: "🧑‍🦱",
                    status: "Preoccupato/a e ansioso/a",
                    options: [
                        {
                            text: "Forse dovresti aspettare a definirti, magari in questo periodo sei solo un po' in una fase di confusione passeggera.",
                            nextNode: "phase_trap",
                            empathyChange: -15,
                            unlockedTerms: ["bisessuale"]
                        },
                        {
                            text: "Assolutamente no, Gio. La <span class='word-highlight' data-word='bisessualità'>bisessualità</span> è un orientamento valido e reale, non una fase. Significa provare attrazione per più di un genere.",
                            nextNode: "explain_bi",
                            empathyChange: 20,
                            unlockedTerms: ["bisessuale"]
                        },
                        {
                            text: "Capisco la paura. Oggi ci sono anche identità più fluide come l'essere <span class='word-highlight' data-word='genderqueer'>genderqueer</span> o usare <span class='word-highlight' data-word='pronomi neutri'>pronomi neutri</span>, se ti senti a tuo agio ad esplorare.",
                            nextNode: "explain_genderqueer",
                            empathyChange: 10,
                            unlockedTerms: ["genderqueer", "pronomi neutri"]
                        }
                    ]
                },
                phase_trap: {
                    text: "Ma non mi sento in una fase... È da tanto che provo queste cose, solo che adesso ho trovato una parola. Sentirmi dire che è solo 'confusione' mi fa sentire ancora più invisibile e sbagliato/a...",
                    speaker: "Gio",
                    avatar: "🧑‍🦱",
                    status: "Triste e incompreso/a",
                    options: [
                        {
                            text: "Scusami Gio, non volevo minimizzare. Volevo solo dire di non avere fretta, ma la tua attrazione è assolutamente reale ed è bisessualità.",
                            nextNode: "explain_bi",
                            empathyChange: 15,
                            unlockedTerms: ["bisessuale"]
                        },
                        {
                            text: "Se ti offendi così facilmente allora forse non sei abbastanza maturo/a per parlarne.",
                            nextNode: "end_bad",
                            empathyChange: -20,
                            unlockedTerms: []
                        }
                    ]
                },
                explain_genderqueer: {
                    text: "Sì, ho letto anche di persone <span class='word-highlight' data-word='genderqueer'>genderqueer</span> o che usano <span class='word-highlight' data-word='pronomi neutri'>pronomi neutri</span>. Trovo bello che ci sia libertà, ma nel mio caso sento proprio che riguarda chi mi piace (l'attrazione) e non tanto come mi identifico io rispetto al genere. Anche se l'inclusività mi rasserena.",
                    speaker: "Gio",
                    avatar: "🧑‍🦱",
                    status: "Pensoso/a e attento/a",
                    options: [
                        {
                            text: "Hai ragione, sono due cose distinte: l'identità di genere riguarda chi sei tu, mentre l'orientamento riguarda chi ti attrae. Concentriamoci sulla tua bisessualità, che merita rispetto.",
                            nextNode: "explain_bi",
                            empathyChange: 15,
                            unlockedTerms: ["bisessuale"]
                        },
                        {
                            text: "Vabbè, ma ormai ci sono troppe etichette, si fa solo una gran confusione.",
                            nextNode: "end_bad",
                            empathyChange: -20,
                            unlockedTerms: []
                        }
                    ]
                },
                explain_bi: {
                    text: "Sì, esatto, mi sento proprio così. Ma come posso affrontare i commenti dei miei compagni si decido di dirlo? Ho paura delle battute o del fatto che pensino che io stia mentendo.",
                    speaker: "Gio",
                    avatar: "🧑‍🦱",
                    status: "Preoccupato/a ma sollevato/a",
                    options: [
                        {
                            text: "Non devi fare coming out per forza con tutti se non ti senti sicuro/a. Fai coming out solo con chi ti fidi davvero e rispetta i tuoi tempi. La tua identità è tua, non devi dimostrare nulla a nessuno.",
                            nextNode: "end_good",
                            empathyChange: 20,
                            unlockedTerms: ["bisessuale"]
                        },
                        {
                            text: "Dovresti dirlo a tutti a gran voce per far vedere che sei coraggioso/a, altrimenti ti nasconderai sempre.",
                            nextNode: "out_pressure_trap",
                            empathyChange: -10,
                            unlockedTerms: ["bisessuale"]
                        }
                    ]
                },
                out_pressure_trap: {
                    text: "Ma io non mi sento pronto/a a gridarlo a scuola! C'è gente molto aggressiva e mi sentirei in pericolo... Pensavo che parlarne con te mi avrebbe aiutato/a a trovare una via serena, non ad avere più ansia.",
                    speaker: "Gio",
                    avatar: "🧑‍🦱",
                    status: "Spaventato/a e agitato/a",
                    options: [
                        {
                            text: "Hai totalmente ragione. Scusami, ho corso troppo. La sicurezza e la tua serenità vengono prima di tutto. Parlane solo con chi ti fa sentire al sicuro.",
                            nextNode: "end_good",
                            empathyChange: 20,
                            unlockedTerms: ["bisessuale"]
                        },
                        {
                            text: "Se hai così tanta paura, allora forse non sei ancora sicuro/a di chi sei.",
                            nextNode: "end_bad",
                            empathyChange: -25,
                            unlockedTerms: []
                        }
                    ]
                },
                end_good: {
                    text: "Grazie di cuore. Parlare con te mi ha fatto capire che quello che provo è reale e che non devo giustificarmi. Inizierò parlandone solo con la mia amica del cuore, so che mi capirà.",
                    speaker: "Gio",
                    avatar: "🧑‍🦱",
                    status: "Fiducioso/a e sorridente",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                },
                end_bad: {
                    text: "Pensavo che questo fosse uno spazio sicuro, ma mi sento solo giudicato/a. Forse è meglio se tengo tutto per me e non ne parlo più.",
                    speaker: "Gio",
                    avatar: "🧑‍🦱",
                    status: "Chiuso/a e deluso/a",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                }
            }
        }
    ],
    adults: [
        {
            id: "adults_giulia",
            title: "Parliamo di desideri",
            category: "Fantasie & Consenso",
            description: "Giulia vuole condividere una sua fantasia intima legata al BDSM. Costruisci una conversazione sicura e priva di giudizi.",
            audience: "adults",
            startNode: "start",
            nodes: {
                start: {
                    text: "Senti... stavo leggendo degli articoli online sulle <span class='word-highlight' data-word='fantasia sessuale'>fantasie sessuali</span>, in particolare sul <span class='word-highlight' data-word='bdsm'>BDSM</span> e sui <span class='word-highlight' data-word='gioco di ruolo'>giochi di ruolo</span>... Mi piacerebbe tantissimo provare qualcosa con te, ma ho un po' paura che mi giudicherai strana o perversa...",
                    speaker: "Giulia",
                    avatar: "👩‍🦰",
                    status: "Un po' imbarazzata ma desiderosa",
                    options: [
                        {
                            text: "Ah, fantastico! Ho visto un sacco di video porno sul BDSM, so esattamente cosa fare. Sarà eccitante e selvaggio!",
                            nextNode: "porn_trap",
                            empathyChange: -15,
                            unlockedTerms: ["bdsm", "consenso"]
                        },
                        {
                            text: "Giulia, non c'è nulla di strano! Le fantasie sono naturali. Raccontami: cosa ti attira di più di queste pratiche?",
                            nextNode: "explain_fantasy",
                            empathyChange: 20,
                            unlockedTerms: ["fantasia sessuale", "bdsm", "gioco di ruolo"]
                        },
                        {
                            text: "Beh, se è quello che ti serve per divertirti un po', facciamolo pure. Però non pensavo avessi bisogno di queste 'stranezze' con me.",
                            nextNode: "dismiss_fantasy",
                            empathyChange: -10,
                            unlockedTerms: ["fantasia sessuale"]
                        },
                        {
                            text: "BDSM? Ma quelle sono cose violente, dolorose e malate che si vedono nei film! Stai bene?",
                            nextNode: "scared",
                            empathyChange: -20,
                            unlockedTerms: ["bdsm", "consenso"]
                        }
                    ]
                },
                porn_trap: {
                    text: "Ehi, rallenta... I video porno spesso mostrano una versione irrealistica ed esagerata del BDSM. Per me non si tratta di quella roba estrema, ma di fiducia, connessione e complicità profonda tra noi due. Così mi fai quasi passare la voglia...",
                    speaker: "Giulia",
                    avatar: "👩‍🦰",
                    status: "Preoccupata e bloccata",
                    options: [
                        {
                            text: "Scusami, ho detto una sciocchezza superficiale. Hai ragione, la nostra intimità is reale. Spiegami tu come lo immagini.",
                            nextNode: "explain_fantasy",
                            empathyChange: 20,
                            unlockedTerms: ["consenso", "bdsm"]
                        },
                        {
                            text: "Dai, si fa per scherzare! Se devi essere così rigida e fare la difficile, lasciamo stare allora.",
                            nextNode: "end_bad",
                            empathyChange: -20,
                            unlockedTerms: []
                        }
                    ]
                },
                explain_fantasy: {
                    text: "A dire il vero, mi piacerebbe l'idea di lasciar andare il controllo per una volta. Interpretare una situazione in cui sei tu a guidare il gioco, ma basandoci su un <span class='word-highlight' data-word='consenso'>consenso</span> chiarissimo prima di iniziare. Mi farebbe sentire protetta ed eccitata.",
                    speaker: "Giulia",
                    avatar: "👩‍🦰",
                    status: "Fiduciosa e intrigata",
                    options: [
                        {
                            text: "Wow, eccitante! Facciamolo subito stasera allora, vado a prendere delle corde!",
                            nextNode: "rushed",
                            empathyChange: 5,
                            unlockedTerms: ["consenso"]
                        },
                        {
                            text: "Mi incuriosisce molto! Stabiliamo insieme dei confini chiari e magari una parola d'ordine (safeword) per fermarci in qualunque momento. Ti va?",
                            nextNode: "end_good",
                            empathyChange: 25,
                            unlockedTerms: ["consenso", "bdsm"]
                        }
                    ]
                },
                scared: {
                    text: "No, non è affatto violenza... Nel BDSM sano tutto si basa sulla sicurezza, sulla fiducia e sull'accordo reciproco. Volevo solo aprirmi con te, ma adesso mi sento davvero umiliata.",
                    speaker: "Giulia",
                    avatar: "👩‍🦰",
                    status: "Triste e chiusa in se stessa",
                    options: [
                        {
                            text: "Scusami Giulia, ho risposto d'impulso senza sapere. Ho associato subito il BDSM al dolore fisico non consensuale. Vorrei che mi spiegassi meglio come lo vivi tu.",
                            nextNode: "explain_fantasy",
                            empathyChange: 15,
                            unlockedTerms: ["consenso", "bdsm"]
                        },
                        {
                            text: "Rimango dell'idea che non sia una cosa sana. Preferisco che non ne parliamo più.",
                            nextNode: "end_bad",
                            empathyChange: -20,
                            unlockedTerms: []
                        }
                    ]
                },
                dismiss_fantasy: {
                    text: "Se devi farlo solo per 'accontentarmi' o con fastidio, preferisco evitare. Per me aprirsi sui propri desideri intimi richiede fiducia, non volevo solo 'fare una prova' qualunque per noia.",
                    speaker: "Giulia",
                    avatar: "👩‍🦰",
                    status: "Delusa e fredda",
                    options: [
                        {
                            text: "Hai ragione, scusami. Ho sminuito una cosa importante per te. Voglio ascoltarti davvero, senza pregiudizi. Spiegami cosa desideri.",
                            nextNode: "explain_fantasy",
                            empathyChange: 15,
                            unlockedTerms: ["fantasia sessuale"]
                        },
                        {
                            text: "Va beh, scusa se non salto di gioia. Eviterò di chiedere in futuro.",
                            nextNode: "end_bad",
                            empathyChange: -15,
                            unlockedTerms: []
                        }
                    ]
                },
                rushed: {
                    text: "Aspetta, mi fa piacere che tu sia entusiasta, ma vorrei parlarne con calma, capire i limiti di entrambi e sentirmi a mio agio. Non voglio affrettare le cose stasera stessa.",
                    speaker: "Giulia",
                    avatar: "👩‍🦰",
                    status: "Un po' intimorita e sopraffatta",
                    options: [
                        {
                            text: "Hai pienamente ragione, scusami. La fretta guasta il gioco. Prendiamoci tutto il tempo per parlarne e pianificare una cosa che piaccia a entrambi.",
                            nextNode: "end_good",
                            empathyChange: 20,
                            unlockedTerms: ["consenso"]
                        }
                    ]
                },
                end_good: {
                    text: "Grazie per avermi ascoltata senza giudicarmi. Poter condividere i miei desideri più profondi e sapere che li accogli con cura ed empatia rende la nostra relazione ancora più forte e sicura.",
                    speaker: "Giulia",
                    avatar: "👩‍🦰",
                    status: "Estremamente felice e innamorata",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                },
                end_bad: {
                    text: "Capisco. Forse ci sono lati di me che è meglio che tenga per me stessa. Buona serata.",
                    speaker: "Giulia",
                    avatar: "👩‍🦰",
                    status: "Distante e ferita",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                }
            }
        },
        {
            id: "adults_clara",
            title: "Oltre la Monogamia",
            category: "Relazioni & Consenso",
            description: "Pietro esprime curiosità sul poliamore. Affrontate una discussione matura ed onesta sulle dinamiche di coppia.",
            audience: "adults",
            startNode: "start",
            nodes: {
                start: {
                    text: "Senti... ultimamente ho letto degli articoli molto interessanti sulla <span class='word-highlight' data-word='non-monogamia consensuale'>non-monogamia consensuale</span> e sul <span class='word-highlight' data-word='poliamore'>poliamore</span>. Mi chiedo se la monogamia sia davvero l'unica via per noi o se potremmo valutare qualcosa... Tu cosa ne pensi?",
                    speaker: "Pietro",
                    avatar: "🧑",
                    status: "Nervoso ma sincero",
                    highlights: ["non-monogamia consensuale", "poliamore", "consenso"],
                    options: [
                        {
                            text: "Cosa?? Mi stai dicendo che mi tradisci o che non ti basto più? Se vuoi andare con altre persone, finisce qui!",
                            nextNode: "monogamy_panic",
                            empathyChange: -20,
                            unlockedTerms: ["poliamore", "non-monogamia consensuale"]
                        },
                        {
                            text: "È una domanda complessa. Non ti nascondo che mi spaventa un po', ma apprezzo che tu me ne parli liberamente. Cosa ti incuriosisce di questo modello?",
                            nextNode: "polyamory_explain",
                            empathyChange: 20,
                            unlockedTerms: ["poliamore", "non-monogamia consensuale"]
                        },
                        {
                            text: "Ah, sì! Se ci apriamo a relazioni esterne, allora posso divertirmi anche io. Finalmente meno responsabilità!",
                            nextNode: "open_relationship_trap",
                            empathyChange: -15,
                            unlockedTerms: ["non-monogamia consensuale"]
                        }
                    ]
                },
                monogamy_panic: {
                    text: "No! Non ti ho tradito e ti amo tantissimo. Volevo solo fare una riflessione sincera con te sull'esclusività romantica. Ma se ti arrabbi così, diventa impossibile parlarsi liberamente...",
                    speaker: "Pietro",
                    avatar: "🧑",
                    status: "Triste e sulla difensiva",
                    options: [
                        {
                            text: "Scusami, ho reagito male per paura di perderti. Ripartiamo: cosa ti affascina di questo concetto?",
                            nextNode: "polyamory_explain",
                            empathyChange: 15,
                            unlockedTerms: ["poliamore"]
                        },
                        {
                            text: "Non c'è nulla di cui parlare. Proporre certe cose è un insulto a quello che abbiamo costruito.",
                            nextNode: "end_bad",
                            empathyChange: -25,
                            unlockedTerms: []
                        }
                    ]
                },
                open_relationship_trap: {
                    text: "Veramente, la non-monogamia etica richiede molta *più* responsabilità e comunicazione, non meno. Non si tratta di fare quello che si vuole disordinatamente, ma di gestire più legami con estrema trasparenza. Se la vedi così, mi preoccupo...",
                    speaker: "Pietro",
                    avatar: "🧑",
                    status: "Preoccupato",
                    options: [
                        {
                            text: "Hai ragione, ho banalizzato. È un lavoro relazionale immenso. Parliamone: cosa significa l'esclusività per te?",
                            nextNode: "polyamory_explain",
                            empathyChange: 20,
                            unlockedTerms: ["non-monogamia consensuale"]
                        }
                    ]
                },
                polyamory_explain: {
                    text: "Mi incuriosisce l'idea che l'amore possa essere condiviso e che l'esclusività non sia l'unico modo per essere uniti. Però so che richiede una sicurezza emotiva immensa e non farei mai nulla senza il tuo accordo. Per te sarebbe un limite invalicabile?",
                    speaker: "Pietro",
                    avatar: "🧑",
                    status: "Aperto e rilassato",
                    highlights: ["consenso"],
                    options: [
                        {
                            text: "Per me l'esclusività sentimentale e sessuale è fondamentale per sentirmi al sicuro. Preferisco rimanere nella monogamia, ma possiamo trovare altri modi per arricchire la nostra complicità.",
                            nextNode: "end_good_monogamy",
                            empathyChange: 20,
                            unlockedTerms: ["consenso"]
                        },
                        {
                            text: "Al momento mi spaventa molto, ma sono disposta a leggere qualcosa sul tema insieme a te ed esplorare le nostre paure, senza alcun impegno di fare scelte affrettate.",
                            nextNode: "end_good_exploration",
                            empathyChange: 20,
                            unlockedTerms: ["consenso"]
                        }
                    ]
                },
                end_good_monogamy: {
                    text: "Grazie per aver espresso chiaramente le tue esigenze senza farmi sentire giudicato. Rispetto totalmente la sua scelta, stare bene insieme a te è la mia priorità assoluta.",
                    speaker: "Pietro",
                    avatar: "🧑",
                    status: "Sollevato e grato",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                },
                end_good_exploration: {
                    text: "Mi sembra un ottimo punto di partenza. Confrontarsi liberamente senza tabù su desideri e paure è già un bellissimo modo per essere intimi. Ti amo.",
                    speaker: "Pietro",
                    avatar: "🧑",
                    status: "Felice e innamorato",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                },
                end_bad: {
                    text: "Forse abbiamo visioni dell'amore troppo diverse. Credo sia meglio prenderci del tempo per riflettere.",
                    speaker: "Pietro",
                    avatar: "🧑",
                    status: "Distante e freddo",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                }
            }
        },
        {
            id: "adults_luca",
            title: "Riconoscere i confini (Relazioni)",
            category: "Relazioni & Consenso",
            description: "Luca si sente soffocare in una relazione in cui riceve regali eccessivi e pressioni, ed è confuso da discussioni in cui dubita di se stesso.",
            audience: "adults",
            startNode: "start",
            nodes: {
                start: {
                    text: "Grazie di essere venuto... sono davvero confuso. Sto con questa persona da poche settimane, all'inizio è stato travolgente. Mi riempiva di regali, complimenti, voleva vederci ogni giorno... Un vero e proprio <span class='word-highlight' data-word='love bombing'>love bombing</span>. Ma adesso, se voglio vedere i miei amici, si arrabbia e mi accusa di non amarla. E se litighiamo, mi dice 'non l'ho mai detto, ti stai inventando tutto', facendomi dubitare dei fatti.",
                    speaker: "Luca",
                    avatar: "🧑",
                    status: "Estremamente ansioso e insicuro",
                    options: [
                        {
                            text: "Ma scusa, ti riempie di regali e ti ama così tanto! Non essere paranoico, goditi questa fortuna. Ognuno ha il suo modo di amare.",
                            nextNode: "justification_trap",
                            empathyChange: -15,
                            unlockedTerms: ["love bombing"]
                        },
                        {
                            text: "Luca, quello che descrivi è allarmante. Il love bombing iniziale seguito dal tentativo di isolarti e di farti dubitare dei tuoi ricordi - che è una forma di <span class='word-highlight' data-word='gaslighting'>gaslighting</span> - sono segnali di manipolazione. Dobbiamo parlare dei tuoi <span class='word-highlight' data-word='confini personali'>confini personali</span>.",
                            nextNode: "analyze_situation",
                            empathyChange: 20,
                            unlockedTerms: ["love bombing", "gaslighting", "confini personali"]
                        },
                        {
                            text: "Forse sei tu che ti dimentichi le cose davvero, no? Magari prova a registrare le discussioni sul telefono o segnarle per capire chi ha ragione.",
                            nextNode: "doubt_trap",
                            empathyChange: -10,
                            unlockedTerms: ["gaslighting"]
                        }
                    ]
                },
                justification_trap: {
                    text: "Sì, all'inizio era bellissimo... ma ora mi sento soffocare. Mi controlla persino il telefono dicendo che 'in amore non ci sono segreti'. Se provo a mettere una distanza o a dire no, mi fa sentire in colpa dicendo che voglio distruggere la nostra relazione. Non so più cosa pensare.",
                    speaker: "Luca",
                    avatar: "🧑",
                    status: "Triste e smarrito",
                    options: [
                        {
                            text: "Nessuno ha il diritto di controllarti o di ignorare i tuoi limiti. Mettere dei paletti, cioè definire i propri confini personali, è sano in qualsiasi tipo di relazione.",
                            nextNode: "explain_boundaries",
                            empathyChange: 20,
                            unlockedTerms: ["confini personali"]
                        },
                        {
                            text: "Se ti ama così tanto, forse dovresti semplicemente accontentarla e rinunciare a vedere gli amici per un po'. Alla fine le coppie felici fanno tutto insieme.",
                            nextNode: "end_bad",
                            empathyChange: -25,
                            unlockedTerms: []
                        }
                    ]
                },
                doubt_trap: {
                    text: "Ma come posso stare con qualcuno se devo registrare le conversazioni per non impazzire? Sento che sto perdendo la testa, non mi fido più delle mie stesse sensazioni. Forse ho davvero torto io.",
                    speaker: "Luca",
                    avatar: "🧑",
                    status: "Sull'orlo del panico",
                    options: [
                        {
                            text: "Luca, fermati. Questo è esattamente l'effetto del gaslighting: farti perdere fiducia nella tua percezione. Non sei tu il problema. Devi difendere i tuoi confini personali.",
                            nextNode: "explain_boundaries",
                            empathyChange: 20,
                            unlockedTerms: ["gaslighting", "confini personali"]
                        },
                        {
                            text: "In effetti, se sei così insicuro, forse dovresti fare terapia di coppia per risolvere i tuoi problemi di memoria.",
                            nextNode: "end_bad",
                            empathyChange: -20,
                            unlockedTerms: []
                        }
                    ]
                },
                analyze_situation: {
                    text: "Quindi si tratta di manipolazione? Non riesco a crederci. Diceva che ero l'anima gemella... Ora invece mi sento costantemente sotto controllo e in colpa. Cosa sono esattamente questi <span class='word-highlight' data-word='confini personali'>confini personali</span> di cui parli e come posso difenderli?",
                    speaker: "Luca",
                    avatar: "🧑",
                    status: "Attento e speranzoso",
                    options: [
                        {
                            text: "I confini personali sono le linee guida e i limiti fisici ed emotivi che stabiliamo per proteggerci. Dire 'ho bisogno di vedere i miei amici' è un tuo diritto inalienabile.",
                            nextNode: "explain_boundaries",
                            empathyChange: 20,
                            unlockedTerms: ["confini personali"]
                        }
                    ]
                },
                explain_boundaries: {
                    text: "Capisco... quindi ho il diritto di dire 'no' e di pretendere spazio. Ma quando provo a dirlo, la discussione si sposta sempre su 'se mi amassi, non chiederesti spazio'. Come posso gestire questa manipolazione verbale senza cedere?",
                    speaker: "Luca",
                    avatar: "🧑",
                    status: "Più consapevole ma spaventato dalla reazione",
                    options: [
                        {
                            text: "Resta fermo sui fatti e non farti trascinare nel senso di colpa. Se la reazione del partner è rabbia o manipolazione invece che ascolto, significa che non c'è rispetto per te.",
                            nextNode: "confrontation",
                            empathyChange: 20,
                            unlockedTerms: ["confini personali", "gaslighting"]
                        }
                    ]
                },
                confrontation: {
                    text: "Hai ragione. Ho provato a cedere per evitare discussioni, ma mi sto annullando come persona. Devo pretendere che i miei limiti vengano rispettati, anche a costo di chiudere la relazione se la manipolazione continua.",
                    speaker: "Luca",
                    avatar: "🧑",
                    status: "Determinato ed emotivamente saldo",
                    options: [
                        {
                            text: "Esatto, Luca. L'amore sano si basa sul rispetto e sul consenso reciproco di entrambi, non sul controllo e sul senso di colpa. Sei sulla strada giusta.",
                            nextNode: "end_good",
                            empathyChange: 20,
                            unlockedTerms: ["confini personali", "love bombing"]
                        }
                    ]
                },
                end_good: {
                    text: "Grazie per avermi aperto gli occhi e avermi dato le parole per capire cosa stava succedendo. Mi sento finalmente lucido e pronto ad agire per il mio benessere.",
                    speaker: "Luca",
                    avatar: "🧑",
                    status: "Sollevato e grato",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                },
                end_bad: {
                    text: "Forse ho solo esagerato a parlarne... Spero solo che le cose migliorino da sole. Grazie comunque per il tempo.",
                    speaker: "Luca",
                    avatar: "🧑",
                    status: "Depresso e rassegnato",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                }
            }
        },
        {
            id: "adults_elena",
            title: "Esplorazione e Sicurezza (Salute e Kink)",
            category: "Salute & Prevenzione",
            description: "Elena e il partner vogliono esplorare pratiche kink e sex toys. Aiutali a pianificare tutto nel consenso e nella prevenzione medica.",
            audience: "adults",
            startNode: "start",
            nodes: {
                start: {
                    text: "Ciao! Volevo un consiglio. Io e il mio partner vorremmo esplorare alcune pratiche <span class='word-highlight' data-word='kink'>kink</span> e introdurre dei <span class='word-highlight' data-word='sex toys'>sex toys</span> nella nostra intimità. Siamo molto complici, ma vogliamo farlo in modo sicuro e proteggendoci sia fisicamente che da possibili infezioni. Come possiamo muoverci?",
                    speaker: "Elena",
                    avatar: "👧",
                    status: "Entusiasta ma desiderosa di fare le cose bene",
                    options: [
                        {
                            text: "Che bello esplorare! Visto che siete una coppia aperta e volete il massimo della sicurezza, potreste semplicemente assumere la <span class='word-highlight' data-word='prep'>PrEP</span> e dimenticarvi di profilattici e altre barriere.",
                            nextNode: "prep_trap",
                            empathyChange: -10,
                            unlockedTerms: ["kink", "prep"]
                        },
                        {
                            text: "È un'ottima iniziativa! Per prima cosa, stabilite confini e parole di sicurezza. Per l'uso di sex toys e pratiche intime, ricordate l'importanza dell'igiene e di barriere come il <span class='word-highlight' data-word='dental dam'>dental dam</span> e i profilattici per evitare scambi di fluidi.",
                            nextNode: "safety_first",
                            empathyChange: 20,
                            unlockedTerms: ["kink", "sex toys", "dental dam"]
                        },
                        {
                            text: "Ma siete sicuri? Il kink non vi sembra una deviazione un po' strana? Forse dovreste parlarne con un terapeuta prima per capire se avete dei problemi da risolvere.",
                            nextNode: "kink_shame_trap",
                            empathyChange: -20,
                            unlockedTerms: ["kink"]
                        }
                    ]
                },
                prep_trap: {
                    text: "Ma la <span class='word-highlight' data-word='prep'>PrEP</span> non protegge solo dall'HIV? Esplorando pratiche kink con sex toys condivisi o contatti orali, non rischiamo comunque altre infezioni sessualmente trasmissibili come sifilide, gonorrea o HPV?",
                    speaker: "Elena",
                    avatar: "👧",
                    status: "Dubbiosa e prudente",
                    options: [
                        {
                            text: "Hai assolutamente ragione, scusami. La PrEP protegge solo dal virus dell'HIV. Per tutte le altre IST servono barriere fisiche come profilattici, dighe dentali e pellicole protettive per i giocattoli sessuali.",
                            nextNode: "safety_first",
                            empathyChange: 20,
                            unlockedTerms: ["prep", "dental dam"]
                        },
                        {
                            text: "Ma no, con le moderne terapie e lavando bene i giocattoli non si corre alcun rischio reale, non siate ansiosi.",
                            nextNode: "end_bad",
                            empathyChange: -15,
                            unlockedTerms: []
                        }
                    ]
                },
                kink_shame_trap: {
                    text: "Non credo che abbiamo dei problemi... Ci amiamo e vogliamo solo esplorare nuove fantasie in modo consensuale. Il kink, se vissuto nel rispetto di entrambi, è una normale espressione della sessualità. Speravo in un atteggiamento meno giudicante.",
                    speaker: "Elena",
                    avatar: "👧",
                    status: "Delusa e sulla difensiva",
                    options: [
                        {
                            text: "Chiedo scusa, Elena. Ho risposto basandomi su un pregiudizio. Il kink è una preferenza sessuale sanissima se basata su consenso ed empatia. Parliamo di come farlo in sicurezza.",
                            nextNode: "safety_first",
                            empathyChange: 15,
                            unlockedTerms: ["kink"]
                        },
                        {
                            text: "Sì, ma io parlavo per il vostro bene. Certi giochi possono nascondere traumi irrisolti. Pensateci.",
                            nextNode: "end_bad",
                            empathyChange: -20,
                            unlockedTerms: []
                        }
                    ]
                },
                safety_first: {
                    text: "Sì, infatti volevamo proprio capire l'uso pratico del <span class='word-highlight' data-word='dental dam'>dental dam</span> per il sesso orale e se condividere i <span class='word-highlight' data-word='sex toys'>sex toys</span> possa trasmettere batteri. Come si usano in sicurezza?",
                    speaker: "Elena",
                    avatar: "👧",
                    status: "Molto attenta",
                    options: [
                        {
                            text: "La diga dentale si stende sulla vulva o sulla zona anale durante il cunnilingus o l'anilingus. Per i sex toys condivisi, basta coprirli con un profilattico nuovo e cambiarlo quando passate da una persona all'altra.",
                            nextNode: "expert_guidance",
                            empathyChange: 20,
                            unlockedTerms: ["dental dam", "sex toys"]
                        }
                    ]
                },
                expert_guidance: {
                    text: "Consigli utilissimi e pratici! E se volessimo approfondire questi temi con una figura professionale, per chiarire dubbi sulla salute sessuale e comunicare ancora meglio in coppia?",
                    speaker: "Elena",
                    avatar: "👧",
                    status: "Rassicurata e propositiva",
                    options: [
                        {
                            text: "Potete rivolgervi a una <span class='word-highlight' data-word='consulenza sessuologica'>consulenza sessuologica</span> con un sessuologo clinico. È il professionista perfetto per accompagnare le coppie nell'esplorazione dei desideri in totale sicurezza.",
                            nextNode: "end_good",
                            empathyChange: 20,
                            unlockedTerms: ["consulenza sessuologica"]
                        }
                    ]
                },
                end_good: {
                    text: "Grazie di cuore! Ora abbiamo una mappa chiara di come esplorare la nostra intimità in modo divertente, intimo e soprattutto protetto dal punto di vista medico.",
                    speaker: "Elena",
                    avatar: "👧",
                    status: "Molto felice e grata",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                },
                end_bad: {
                    text: "Forse non siamo ancora pronti per tutta questa burocrazia della sicurezza. Meglio rimandare l'esplorazione a tempi migliori. Grazie comunque.",
                    speaker: "Elena",
                    avatar: "👧",
                    status: "Rassegnata e demotivata",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                }
            }
        },
        {
            id: "adults_marco",
            title: "Oltre la monogamia (Relazioni)",
            category: "Relazioni & Consenso",
            description: "Marco vuole esplorare l'idea di una relazione aperta o dell'anarchia relazionale con la partner Giulia, ma teme di ferirla.",
            audience: "adults",
            startNode: "start",
            nodes: {
                start: {
                    text: "Giulia, c'è un argomento di cui vorrei parlarti da un po', ma ho molta paura di ferirti. Amo moltissimo la nostra relazione, ma ultimamente sento che la monogamia mi sta stretta. Ho letto molto su concetti come la <span class='word-highlight' data-word='relazione aperta'>relazione aperta</span> e l'<span class='word-highlight' data-word='anarchia relazionale'>anarchia relazionale</span>. Pensi che parlarne significhi rovinare quello che abbiamo o tradire la tua fiducia?",
                    speaker: "Marco",
                    avatar: "👨",
                    status: "Nervoso ma sincero",
                    options: [
                        {
                            text: "Se provi attrazione per altri, allora forse non mi ami abbastanza e la nostra relazione è finita.",
                            nextNode: "love_trap",
                            empathyChange: -15,
                            unlockedTerms: ["relazione aperta"]
                        },
                        {
                            text: "Parlare dei propri desideri non è mai un tradimento, Marco. L'onestà è fondamentale. Cerchiamo di capire cosa intendi per <span class='word-highlight' data-word='relazione aperta'>relazione aperta</span> e come la immagini per noi.",
                            nextNode: "explain_open",
                            empathyChange: 20,
                            unlockedTerms: ["relazione aperta", "anarchia relazionale"]
                        },
                        {
                            text: "La trovo un'idea interessante, ma mi spaventa la gelosia. Pensi che potremmo farcela senza ferirci?",
                            nextNode: "explain_jealousy",
                            empathyChange: 10,
                            unlockedTerms: ["relazione aperta"]
                        }
                    ]
                },
                love_trap: {
                    text: "No Giulia, ti amo tantissimo ed è per questo che te ne parlo, invece di agire alle tue spalle! Volevo che fossimo sinceri. Sentirmi dire che non ti amo solo perché provo desideri diversi mi fa sentire in colpa per essere onesto...",
                    speaker: "Marco",
                    avatar: "👨",
                    status: "Triste e scoraggiato",
                    options: [
                        {
                            text: "Scusami Marco, la mia è stata una reazione dettata dalla paura dell'abbandono. Apprezzo la tua sincerità. Parliamone con calma: cosa intendi esattamente?",
                            nextNode: "explain_open",
                            empathyChange: 15,
                            unlockedTerms: ["relazione aperta"]
                        },
                        {
                            text: "Se provi certe cose significa che sono io a non bastarti. È inutile continuare questo discorso.",
                            nextNode: "end_bad",
                            empathyChange: -20,
                            unlockedTerms: []
                        }
                    ]
                },
                explain_jealousy: {
                    text: "La gelosia è normale, spaventa anche me. Ma la non-monogamia si basa proprio sulla gestione condivisa di queste emozioni, definendo confini precisi. Ad Example, nell'<span class='word-highlight' data-word='anarchia relazionale'>anarchia relazionale</span> si rifiutano le regole imposte dall'alto e ogni legame si co-crea da zero, basandosi sulla fiducia.",
                    speaker: "Marco",
                    avatar: "👨",
                    status: "Riflessivo ed empatico",
                    options: [
                        {
                            text: "Capisco il concetto di co-creare il legame, ma per me la sicurezza emotiva è fondamentale. Se aprissimo la relazione, vorrei che lo facessimo con regole condivise, passo dopo passo.",
                            nextNode: "explain_open",
                            empathyChange: 15,
                            unlockedTerms: ["relazione aperta", "anarchia relazionale"]
                        },
                        {
                            text: "L'anarchia relazionale mi sembra solo una scusa per fare quello che si vuole senza assumersi responsabilità.",
                            nextNode: "responsibility_trap",
                            empathyChange: -10,
                            unlockedTerms: ["anarchia relazionale"]
                        }
                    ]
                },
                responsibility_trap: {
                    text: "In realtà è il contrario: richiede molta più responsabilità, comunicazione e consapevolezza rispetto a seguire un copione standard di coppia. Ma capisco che possa spaventare. Non voglio imporlo, volevo solo confrontarmi.",
                    speaker: "Marco",
                    avatar: "👨",
                    status: "Un po' deluso ma calmo",
                    options: [
                        {
                            text: "Scusami, ho giudicato senza conoscere. Voglio capire meglio. Dimmi pure come immagini che possa funzionare per noi.",
                            nextNode: "explain_open",
                            empathyChange: 15,
                            unlockedTerms: ["anarchia relazionale", "relazione aperta"]
                        },
                        {
                            text: "Allora forse non siamo compatibili, io voglio una relazione tradizionale e tu no.",
                            nextNode: "end_bad",
                            empathyChange: -20,
                            unlockedTerms: []
                        }
                    ]
                },
                explain_open: {
                    text: "Per me l'importante è che la nostra intimità affettiva rimanga solida. Immagino la possibilità di esplorare attrazioni fisiche con altre persone, ma sempre con il tuo consenso, in totale trasparenza e senza che questo diminuisca il mio amore per te. Cosa ne pensi, saresti disposta a fare un piccolo passo alla volta per esplorare questa idea?",
                    speaker: "Marco",
                    avatar: "👨",
                    status: "Speranzoso ma rispettoso",
                    options: [
                        {
                            text: "Apprezzo che tu non stia imponendo nulla. Ho bisogno di tempo per pensarci, leggere e capire cosa provo. Facciamo un passo alla volta, continuando a parlarne senza fretta.",
                            nextNode: "end_good",
                            empathyChange: 20,
                            unlockedTerms: ["relazione aperta"]
                        },
                        {
                            text: "Va bene, facciamolo subito. Se serve a tenerti con me, accetto anche se la cosa mi fa stare male.",
                            nextNode: "compromise_trap",
                            empathyChange: -15,
                            unlockedTerms: ["relazione aperta"]
                        }
                    ]
                },
                compromise_trap: {
                    text: "No Giulia, accettare per costrizione o paura di perdermi è la ricetta per stare male entrambi. Una relazione aperta funziona solo se è un desiderio condiviso e consensuale, non un ricatto emotivo. Preferisco che rimaniamo monogami piuttosto che vederti soffrire.",
                    speaker: "Marco",
                    avatar: "👨",
                    status: "Preoccupato e protettivo",
                    options: [
                        {
                            text: "Grazie per avermi protetta. Hai ragione, non posso farlo solo per compiacerti. Prendiamoci del tempo per capire se è una strada che possiamo desiderare davvero insieme.",
                            nextNode: "end_good",
                            empathyChange: 20,
                            unlockedTerms: ["relazione aperta"]
                        },
                        {
                            text: "Allora vedi che è impossibile? Le relazioni non-monogame sono destinate a fallire.",
                            nextNode: "end_bad",
                            empathyChange: -20,
                            unlockedTerms: []
                        }
                    ]
                },
                end_good: {
                    text: "Grazie Giulia. Sapere che posso condividere con te i miei pensieri più intimi senza che la nostra relazione vada in pezzi mi fa sentire ancora più legato a te. Continuiamo a parlarne.",
                    speaker: "Marco",
                    avatar: "👨",
                    status: "Sereno e grato",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                },
                end_bad: {
                    text: "Mi spiace, ma questa conversazione ha aperto una crepa di insicurezza troppo grande. Sento che non posso più fidarmi del fatto che tu sia felice con me. Forse dovremmo prenderci una pausa.",
                    speaker: "Marco",
                    avatar: "👨",
                    status: "Chiuso e ferito",
                    options: [
                        {
                            text: "Completa lo scenario",
                            nextNode: "finish",
                            empathyChange: 0,
                            isEnd: true
                        }
                    ]
                }
            }
        }
    ]
};

// STATO DELL'APPLICAZIONE
let appState = {
    activeSection: "home",
    selectedAudience: null,
    currentScenario: null,
    currentNodeId: null,
    empathyScore: 100,
    unlockedTerms: new Set(),
    scenarioTermsUnlockedThisRun: new Set(),
    unlockedBadges: new Set(),
    completedScenarios: new Set(),
    quizCorrectCount: 0,
    quizTotalCount: 0,
    isMuted: false
};

// DATABASE DEI TROFEI / BADGE
const badgesData = [
    {
        id: "empathy_champion",
        title: "Campione dell'Empatia",
        description: "Completa uno scenario con un punteggio di empatia del 100%.",
        icon: '<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 12 L62 38 L90 40 L68 58 L75 85 L50 70 L25 85 L32 58 L10 40 L38 38 Z" /><circle cx="42" cy="48" r="3" fill="currentColor" stroke="none" /><circle cx="58" cy="48" r="3" fill="currentColor" stroke="none" /><path d="M46 56 Q50 61 54 56" stroke-width="4" /></svg>'
    },
    {
        id: "glossary_explorer",
        title: "Linguista Sessuologo",
        description: "Sblocca almeno 8 termini nel Sexsapiens.",
        icon: '<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M25 25 L70 18 C75 17 80 20 81 25 L88 65 C89 70 86 75 81 76 L36 83 C31 84 26 80 25 75 Z" /><path d="M25 25 C25 25 22 55 25 75" /><path d="M20 30 L20 80 C20 82 23 85 25 83" /><path d="M30 24 L75 18" /><circle cx="48" cy="45" r="3" fill="currentColor" stroke="none" /><circle cx="63" cy="42" r="3" fill="currentColor" stroke="none" /><path d="M52 54 Q58 56 61 50" stroke-width="4" /><path d="M25 50 Q15 45 12 52" /><path d="M85 45 Q92 48 95 40" /><path d="M42 82 L40 92" /><path d="M60 80 L62 90" /></svg>'
    },
    {
        id: "quiz_master",
        title: "Cervellone del Consenso",
        description: "Rispondi correttamente a tutte le domande di un Mini-Quiz post-scenario.",
        icon: '<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M50 75 C40 75 30 75 25 65 C20 58 22 50 28 46 C25 40 30 30 40 30 C45 30 48 35 50 40" /><path d="M50 75 C60 75 70 75 75 65 C80 58 78 50 72 46 C75 40 70 30 60 30 C55 30 52 35 50 40" /><path d="M50 30 L50 75" stroke-width="3" stroke-dasharray="2 3" /><path d="M35 40 Q30 44 38 48" stroke-width="3" /><path d="M65 40 Q70 44 62 48" stroke-width="3" /><circle cx="40" cy="58" r="2.5" fill="currentColor" stroke="none" /><circle cx="60" cy="58" r="2.5" fill="currentColor" stroke="none" /><path d="M46 64 Q50 68 54 64" stroke-width="4" /></svg>'
    },
    {
        id: "all_scenarios",
        title: "Esploratore delle Relazioni",
        description: "Completa tutti i 10 scenari educativi disponibili.",
        icon: '<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M25 25 L75 25 C75 45 65 60 50 60 C35 60 25 45 25 25 Z" /><path d="M25 32 C15 32 15 45 25 48" /><path d="M75 32 C85 32 85 45 75 48" /><path d="M50 60 L50 75" stroke-width="6" /><path d="M35 75 C45 75 55 75 65 75" /><path d="M30 82 C42 80 58 80 70 82" /><circle cx="42" cy="38" r="3" fill="currentColor" stroke="none" /><circle cx="58" cy="38" r="3" fill="currentColor" stroke="none" /><path d="M47 46 Q50 50 53 46" stroke-width="4" /></svg>'
    },
    {
        id: "quiz_champion",
        title: "Cervellone di Sexsapiens",
        description: "Rispondi correttamente a 10 domande su 10 nel Grande Quiz.",
        icon: '<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M30 35 L40 20 L50 30 L60 20 L70 35 Z" fill="var(--accent-magenta)" opacity="0.3" /><path d="M50 75 C40 75 30 75 25 65 C20 58 22 50 28 46 C25 40 30 30 40 30 C45 30 48 35 50 40" /><path d="M50 75 C60 75 70 75 75 65 C80 58 78 50 72 46 C75 40 70 30 60 30 C55 30 52 35 50 40" /><path d="M50 40 L50 75" stroke-width="3" stroke-dasharray="2 3" /><circle cx="40" cy="58" r="2.5" fill="currentColor" stroke="none" /><circle cx="60" cy="58" r="2.5" fill="currentColor" stroke="none" /><path d="M44 65 Q50 69 56 65" stroke-width="4" /></svg>'
    },
    {
        id: "myth_debunker",
        title: "Debunker di Falsi Miti",
        description: "Rispondi correttamente a 10 affermazioni su 10 nel gioco 'Mito o Realtà?'.",
        icon: '<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20 C40 15 60 15 80 20 C80 45 75 70 50 85 C25 70 20 45 20 20 Z" fill="var(--accent-cyan)" opacity="0.3" /><path d="M20 20 C40 15 60 15 80 20 C80 45 75 70 50 85 C25 70 20 45 20 20 Z" /><path d="M35 50 L45 60 L65 40" stroke-width="7" /></svg>'
    },
    {
        id: "empathetic_communicator",
        title: "Comunicatore Empatico",
        description: "Rispondi correttamente a 8 frasi su 8 nel gioco 'Le parole giuste'.",
        icon: '<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 25 C40 20 70 20 80 25 C88 28 88 45 80 55 C70 65 40 65 30 70 C28 72 20 78 18 78 C18 78 22 68 25 62 C15 55 12 40 20 25 Z" fill="var(--accent-magenta)" opacity="0.3" /><path d="M20 25 C40 20 70 20 80 25 C88 28 88 45 80 55 C70 65 40 65 30 70 C28 72 20 78 18 78 C18 78 22 68 25 62 C15 55 12 40 20 25 Z" /><path d="M40 38 L65 38 M40 48 L60 48" stroke-width="5" /><path d="M68 62 L85 45 L92 45 L92 52 L75 69 L68 70 Z" stroke-width="4" /></svg>'
    }
];

// CARICAMENTO INIZIALE DEI DATI DA LOCALSTORAGE
function loadStateFromLocalStorage() {
    const savedTerms = localStorage.getItem("sexsapiens_unlocked_terms") || localStorage.getItem("sexicon_unlocked_terms");
    if (savedTerms) {
        try {
            appState.unlockedTerms = new Set(JSON.parse(savedTerms));
        } catch (e) { console.error(e); }
    }

    const savedBadges = localStorage.getItem("sexsapiens_unlocked_badges") || localStorage.getItem("sexicon_unlocked_badges");
    if (savedBadges) {
        try {
            appState.unlockedBadges = new Set(JSON.parse(savedBadges));
        } catch (e) { console.error(e); }
    }

    const savedCompleted = localStorage.getItem("sexsapiens_completed_scenarios") || localStorage.getItem("sexicon_completed_scenarios");
    if (savedCompleted) {
        try {
            appState.completedScenarios = new Set(JSON.parse(savedCompleted));
        } catch (e) { console.error(e); }
    }

    const savedMuted = localStorage.getItem("sexsapiens_is_muted") || localStorage.getItem("sexicon_is_muted");
    if (savedMuted !== null) {
        appState.isMuted = savedMuted === "true";
    } else {
        appState.isMuted = false;
    }

    const savedAudience = localStorage.getItem("sexsapiens_selected_audience") || localStorage.getItem("sexicon_selected_audience");
    if (savedAudience) {
        appState.selectedAudience = savedAudience;
    } else {
        appState.selectedAudience = null;
    }
}

// SALVATAGGIO IN LOCALSTORAGE
function saveStateToLocalStorage() {
    localStorage.setItem("sexsapiens_unlocked_terms", JSON.stringify(Array.from(appState.unlockedTerms)));
    localStorage.setItem("sexsapiens_unlocked_badges", JSON.stringify(Array.from(appState.unlockedBadges)));
    localStorage.setItem("sexsapiens_completed_scenarios", JSON.stringify(Array.from(appState.completedScenarios)));
    localStorage.setItem("sexsapiens_is_muted", appState.isMuted.toString());
    if (appState.selectedAudience) {
        localStorage.setItem("sexsapiens_selected_audience", appState.selectedAudience);
    } else {
        localStorage.removeItem("sexsapiens_selected_audience");
    }
}

// TRACCIAMENTO GOOGLE ANALYTICS
function trackAnalyticsEvent(eventName, params = {}) {
    if (typeof gtag === "function") {
        gtag("event", eventName, params);
    }
}

// ONBOARDING: schermata di benvenuto per nuovi utenti
function setupOnboarding() {
    const STORAGE_KEY = "sx_onboarding_done";
    if (localStorage.getItem(STORAGE_KEY)) return;

    const modal = document.getElementById("onboarding-modal");
    if (!modal) return;
    modal.classList.remove("hidden");

    let currentStep = 1;
    const totalSteps = 3;

    function goToStep(step) {
        document.querySelectorAll(".onboarding-step").forEach(el => el.classList.remove("active"));
        document.querySelectorAll(".onboarding-dot").forEach(el => el.classList.remove("active"));
        const targetStep = modal.querySelector(`.onboarding-step[data-step="${step}"]`);
        const targetDot = modal.querySelector(`.onboarding-dot[data-dot="${step}"]`);
        if (targetStep) targetStep.classList.add("active");
        if (targetDot) targetDot.classList.add("active");

        const btnNext = document.getElementById("btn-onboarding-next");
        const btnSkip = document.getElementById("btn-onboarding-skip");
        if (step === totalSteps) {
            btnNext.style.display = "none";
            btnSkip.style.display = "none";
        } else {
            btnNext.style.display = "";
            btnSkip.style.display = "";
        }
        currentStep = step;
    }

    function closeOnboarding() {
        localStorage.setItem(STORAGE_KEY, "1");
        modal.classList.add("hidden");
        trackAnalyticsEvent("onboarding_complete");
    }

    document.getElementById("btn-onboarding-next").addEventListener("click", () => {
        if (currentStep < totalSteps) goToStep(currentStep + 1);
    });

    document.getElementById("btn-onboarding-skip").addEventListener("click", () => {
        trackAnalyticsEvent("onboarding_skip", { step: currentStep });
        closeOnboarding();
    });

    document.getElementById("btn-onboarding-start").addEventListener("click", closeOnboarding);

    modal.querySelectorAll(".onboarding-dot").forEach(dot => {
        dot.addEventListener("click", () => {
            const step = parseInt(dot.getAttribute("data-dot"), 10);
            goToStep(step);
        });
    });

    trackAnalyticsEvent("onboarding_start");
}

// GESTIONE CONSENSO COOKIE (GDPR)
function setupCookieConsent() {
    const banner = document.getElementById("cookie-banner");
    const btnAccept = document.getElementById("btn-cookie-accept");
    const btnReject = document.getElementById("btn-cookie-reject");
    
    if (!banner || !btnAccept || !btnReject) return;
    
    const consent = localStorage.getItem("sexsapiens_cookie_consent");
    
    // Se non è mai stato espresso il consenso, mostra il banner
    if (!consent) {
        banner.classList.remove("hidden");
    }
    
    btnAccept.addEventListener("click", () => {
        localStorage.setItem("sexsapiens_cookie_consent", "accepted");
        // Rimuove il blocco di Google Analytics
        window['ga-disable-G-V53G68EN0C'] = false;
        
        // Se Analytics è presente, lo re-inizializziamo per sicurezza
        if (typeof gtag === "function") {
            gtag("config", "G-V53G68EN0C", {
                'anonymize_ip': true
            });
        }
        
        banner.classList.add("hidden");
        playAudioEffect("click");
    });
    
    btnReject.addEventListener("click", () => {
        localStorage.setItem("sexsapiens_cookie_consent", "rejected");
        // Forza la disattivazione di Analytics
        window['ga-disable-G-V53G68EN0C'] = true;
        
        banner.classList.add("hidden");
        playAudioEffect("click");
    });
}

// GESTIONE ACCESSIBILITÀ (A11Y)
function setupAccessibility() {
    const btnTogglePanel = document.getElementById("btn-a11y-toggle");
    const panel = document.getElementById("a11y-menu-panel");
    const btnDyslexia = document.getElementById("btn-toggle-dyslexia");
    const btnContrast = document.getElementById("btn-toggle-contrast");
    const sizeBtns = document.querySelectorAll(".a11y-size-btn");

    if (!btnTogglePanel || !panel) return;

    // 1. Mostra/Nascondi pannello A11y
    btnTogglePanel.addEventListener("click", (e) => {
        e.stopPropagation();
        const isHidden = panel.classList.contains("hidden");
        if (isHidden) {
            panel.classList.remove("hidden");
            btnTogglePanel.setAttribute("aria-expanded", "true");
        } else {
            panel.classList.add("hidden");
            btnTogglePanel.setAttribute("aria-expanded", "false");
        }
        playAudioEffect("click");
    });

    // Chiudi il pannello se si clicca fuori
    document.addEventListener("click", (e) => {
        if (!panel.classList.contains("hidden") && !panel.contains(e.target) && e.target !== btnTogglePanel) {
            panel.classList.add("hidden");
            btnTogglePanel.setAttribute("aria-expanded", "false");
        }
    });

    // Impedisci la chiusura cliccando dentro il pannello
    panel.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    // 2. Toggle Font Dislessia
    const isDyslexia = localStorage.getItem("sexsapiens_a11y_dyslexia") === "true";
    if (isDyslexia) {
        document.body.classList.add("dyslexia-mode");
        if (btnDyslexia) {
            btnDyslexia.setAttribute("aria-pressed", "true");
            btnDyslexia.textContent = "Attivo";
        }
    }
    if (btnDyslexia) {
        btnDyslexia.addEventListener("click", () => {
            const active = document.body.classList.toggle("dyslexia-mode");
            localStorage.setItem("sexsapiens_a11y_dyslexia", active ? "true" : "false");
            btnDyslexia.setAttribute("aria-pressed", active ? "true" : "false");
            btnDyslexia.textContent = active ? "Attivo" : "Disattivo";
            playAudioEffect("click");
        });
    }

    // 3. Toggle Contrasto Elevato
    const isContrast = localStorage.getItem("sexsapiens_a11y_contrast") === "true";
    if (isContrast) {
        document.body.classList.add("high-contrast-mode");
        if (btnContrast) {
            btnContrast.setAttribute("aria-pressed", "true");
            btnContrast.textContent = "Attivo";
        }
    }
    if (btnContrast) {
        btnContrast.addEventListener("click", () => {
            const active = document.body.classList.toggle("high-contrast-mode");
            localStorage.setItem("sexsapiens_a11y_contrast", active ? "true" : "false");
            btnContrast.setAttribute("aria-pressed", active ? "true" : "false");
            btnContrast.textContent = active ? "Attivo" : "Disattivo";
            playAudioEffect("click");
        });
    }

    // 4. Regolazione Dimensione Testo
    const savedSize = localStorage.getItem("sexsapiens_a11y_size") || "normal";
    applyTextSize(savedSize);
    
    sizeBtns.forEach(btn => {
        const size = btn.getAttribute("data-size");
        if (size === savedSize) {
            sizeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        }
        
        btn.addEventListener("click", () => {
            sizeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            applyTextSize(size);
            localStorage.setItem("sexsapiens_a11y_size", size);
            playAudioEffect("click");
        });
    });

    function applyTextSize(size) {
        document.body.classList.remove("text-large", "text-xlarge");
        if (size === "large") {
            document.body.classList.add("text-large");
        } else if (size === "xlarge") {
            document.body.classList.add("text-xlarge");
        }
    }
}

// ==========================================================================
// MODULO SINTESI SONORA (WEB AUDIO API) E GESTIONE AUDIO
// ==========================================================================
let audioCtx = null;

// VARIABILI GLOBALI PER LA CONDIVISIONE SOCIAL
let currentShareBlob = null;
let currentShareTitle = "";

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playAudioEffect(type) {
    if (appState.isMuted) return;
    
    // Inizializzazione lazy al primo suono riprodotto
    try {
        initAudio();
    } catch (e) {
        console.warn("Web Audio Context non supportato o bloccato:", e);
        return;
    }
    
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    
    switch (type) {
        case 'click': {
            // Click breve (onda a triangolo a 600Hz decrescente in 0.08 secondi)
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(600, now);
            
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start(now);
            osc.stop(now + 0.08);
            break;
        }
        case 'correct': {
            // Suono di successo (doppio bip ascendente ad onda sinusoidale da C5 a E5 in 0.3 secondi)
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, now); // C5
            osc.frequency.setValueAtTime(523.25, now + 0.08);
            osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.25); // E5
            
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.setValueAtTime(0.12, now + 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start(now);
            osc.stop(now + 0.3);
            break;
        }
        case 'incorrect': {
            // Suono di errore (ronzio basso discendente ad onda a dente di sega da 150Hz a 80Hz in 0.35 secondi)
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.linearRampToValueAtTime(80, now + 0.35);
            
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start(now);
            osc.stop(now + 0.35);
            break;
        }
        case 'empathy_up': {
            // Aumento Empatia (accordo piacevole arpeggiato D5 -> A5 in 0.4 secondi)
            const osc1 = audioCtx.createOscillator();
            const osc2 = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(587.33, now); // D5
            osc1.frequency.exponentialRampToValueAtTime(880.00, now + 0.3); // A5
            
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(880.00, now + 0.1); // A5 ritardato
            
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            
            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc1.start(now);
            osc1.stop(now + 0.4);
            osc2.start(now + 0.1);
            osc2.stop(now + 0.4);
            break;
        }
        case 'empathy_down': {
            // Diminuzione Empatia (suono cupo e calante ad onda triangolare A4 -> F4 in 0.45 secondi)
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(440.00, now); // A4
            osc.frequency.linearRampToValueAtTime(349.23, now + 0.45); // F4
            
            gain.gain.setValueAtTime(0.14, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
            
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            
            osc.start(now);
            osc.stop(now + 0.45);
            break;
        }
    }
}

// INIZIALIZZAZIONE DELLA PAGINA
document.addEventListener("DOMContentLoaded", () => {
    loadStateFromLocalStorage();
    setupNavigation();
    setupGlossary();
    setupTargetSelectors();
    initStandaloneQuizListeners();
    initMythGameListeners();
    setupCookieConsent();
    setupOnboarding();
    setupAccessibility();
    initShareModalListeners();
    initWordsGameListeners();
    
    // Rendi visibili i trofei sulla home all'avvio
    renderTrophies();
    renderProgressPanel();
    
    // Mostra la home di default
    showSection("home");

    // Registrazione del Service Worker per il funzionamento offline PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js')
                .then(reg => console.log('Service Worker registrato con successo!', reg))
                .catch(err => console.error('Errore nella registrazione del Service Worker:', err));
        });
    }
});

// GESTIONE NAVIGAZIONE (SPA)
function setupNavigation() {
    const nav = document.getElementById("main-nav");
    const menuToggle = document.getElementById("btn-menu-toggle");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("is-open");
            menuToggle.classList.toggle("is-open", isOpen);
            menuToggle.setAttribute("aria-expanded", isOpen);
        });
    }

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const target = link.getAttribute("data-target");
            showSection(target);
            // Chiudi il menu mobile dopo la selezione
            if (nav) nav.classList.remove("is-open");
            if (menuToggle) {
                menuToggle.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    });

    document.getElementById("btn-home").addEventListener("click", () => {
        showSection("home");
        if (nav) nav.classList.remove("is-open");
        if (menuToggle) {
            menuToggle.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

    // Binding dei click per le CTA (invito all'azione) della Home Page
    const ctaGlossary = document.getElementById("cta-go-glossary");
    if (ctaGlossary) {
        ctaGlossary.addEventListener("click", () => {
            showSection("glossary");
        });
    }

    const ctaGame = document.getElementById("cta-go-game");
    if (ctaGame) {
        ctaGame.addEventListener("click", () => {
            showSection("simulator");
        });
    }

    // Bottone "Cambia Percorso" nella schermata degli scenari
    const btnChangeAudience = document.getElementById("btn-change-audience");
    if (btnChangeAudience) {
        btnChangeAudience.addEventListener("click", () => {
            appState.selectedAudience = null;
            saveStateToLocalStorage();
            
            // Suono di avvio scenario/selezione
            playAudioEffect("click");
            
            // Ripristina lo schermo di selezione target nel simulatore
            document.getElementById("target-selection-screen").classList.remove("hidden");
            document.getElementById("scenario-selection-screen").classList.add("hidden");
        });
    }


    // Mute/Unmute toggle button binding
    const audioToggleBtn = document.getElementById("btn-audio-toggle");
    if (audioToggleBtn) {
        const updateAudioIcon = () => {
            const activeIcon = `<svg class="doodle-icon-inline" viewBox="0 0 100 100" width="24" height="24" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" style="margin-right:0;"><path d="M20 40 L35 40 L55 20 L55 80 L35 60 L20 60 Z" /><path d="M70 30 C78 40 78 60 70 70" /><path d="M82 20 C95 35 95 65 82 80" stroke-width="4" /><circle cx="32" cy="48" r="2" fill="currentColor" stroke="none" /><circle cx="42" cy="48" r="2" fill="currentColor" stroke="none" /><path d="M35 54 Q37 57 39 54" stroke-width="4" /></svg>`;
            const muteIcon = `<svg class="doodle-icon-inline" viewBox="0 0 100 100" width="24" height="24" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" style="margin-right:0;"><path d="M20 40 L35 40 L55 20 L55 80 L35 60 L20 60 Z" /><path d="M70 40 L85 55 M85 40 L70 55" stroke-width="7" stroke="var(--accent-magenta)" /><circle cx="32" cy="48" r="2" fill="currentColor" stroke="none" /><circle cx="42" cy="48" r="2" fill="currentColor" stroke="none" /><path d="M34 56 L40 56" stroke-width="4" /></svg>`;
            audioToggleBtn.innerHTML = appState.isMuted ? muteIcon : activeIcon;
        };

        updateAudioIcon();
        
        audioToggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            try { initAudio(); } catch (err) {}
            
            appState.isMuted = !appState.isMuted;
            updateAudioIcon();
            saveStateToLocalStorage();
        });
    }
}

function showSection(sectionId) {
    appState.activeSection = sectionId;
    
    // Aggiorna classi active sui link nav
    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("data-target") === sectionId) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Mostra/Nascondi le sezioni reali
    document.querySelectorAll(".view-section").forEach(sec => {
        if (sec.id === `sec-${sectionId}`) {
            sec.classList.add("active");
        } else {
            sec.classList.remove("active");
        }
    });

    // Flusso selettore target spostato in Gioco (simulator)
    if (sectionId === "simulator") {
        resetSimulatorViews();
    }

    // Se entriamo nel glossario, rinfreschiamo la lista
    if (sectionId === "glossary") {
        renderGlossaryGrid();
    }
    
    // Se entriamo nella modalità quiz, resetta la schermata iniziale del quiz
    if (sectionId === "quiz-mode") {
        resetStandaloneQuizStartScreen();
    }
    
    // Se torniamo in Home, rinfreschiamo i trofei
    if (sectionId === "home") {
        renderTrophies();
    renderProgressPanel();
    }
}

// SELEZIONE TARGET NELLA SEZIONE GIOCO
function setupTargetSelectors() {
    const cards = document.querySelectorAll(".target-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const audience = card.getAttribute("data-audience");
            appState.selectedAudience = audience;
            saveStateToLocalStorage();

            // Suono di click ingresso
            playAudioEffect("click");

            document.getElementById("target-selection-screen").classList.add("hidden");
            document.getElementById("scenario-selection-screen").classList.remove("hidden");
            renderScenarioSelectionList(audience);
        });
    });
}

// COSTRUZIONE SCHERMATA SELEZIONE SCENARI
function renderScenarioSelectionList(audience) {
    const listGrid = document.getElementById("scenarios-list-grid");
    listGrid.innerHTML = "";

    // Mostra selezione, nascondi gameplay
    document.getElementById("scenario-selection-screen").classList.remove("hidden");
    document.getElementById("simulator-layout-area").classList.add("hidden");

    const scenarios = scenariosData[audience];

    scenarios.forEach(scen => {
        const hasCompleted = appState.completedScenarios.has(scen.id);
        
        const card = document.createElement("div");
        card.className = "scenario-list-card glass-panel";
        card.innerHTML = `
            <div>
                <span class="term-badge ${audience === 'adults' ? 'badge-orientation' : ''}">${scen.category}</span>
                ${hasCompleted ? '<span style="float: right; font-size: 0.95rem;">✅ Completato</span>' : ''}
            </div>
            <h4>${scen.title}</h4>
            <p>${scen.description || 'Affronta questo scenario interattivo di dialogo per apprendere i termini corretti.'}</p>
            <button class="btn-primary" style="margin-top: auto; padding: 0.5rem 1.2rem; font-size: 0.85rem;">Gioca ➔</button>
        `;

        card.addEventListener("click", () => {
            playAudioEffect("click");
            document.getElementById("scenario-selection-screen").classList.add("hidden");
            document.getElementById("simulator-layout-area").classList.remove("hidden");
            startScenario(scen);
        });

        listGrid.appendChild(card);
    });
}

// ==========================================================================
// SEZIONE GIOCO SIMULATORE
// ==========================================================================
function startScenario(scenario) {
    appState.currentScenario = scenario;
    appState.currentNodeId = scenario.startNode;
    appState.empathyScore = 100;
    appState.scenarioTermsUnlockedThisRun = new Set();
    
    // Nascondi schermata di fine, nascondi quiz, mostra il gioco
    document.getElementById("end-screen").classList.add("hidden");
    document.getElementById("quiz-card").classList.add("hidden");
    document.querySelector(".dialogue-card").classList.remove("hidden");
    document.getElementById("options-container").classList.remove("hidden");
    
    renderCurrentNode();

    // Traccia avvio scenario su Analytics
    trackAnalyticsEvent("start_scenario", {
        scenario_id: scenario.id,
        scenario_title: scenario.title,
        audience: scenario.audience
    });
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function renderCurrentNode() {
    const scenario = appState.currentScenario;
    const node = scenario.nodes[appState.currentNodeId];
    
    // Aggiorna intestazione
    document.getElementById("scenario-category").textContent = scenario.category;
    document.getElementById("scenario-title").textContent = scenario.title;
    
    // Calcola progresso indicativo (in base ai nodi visitati/rimanenti)
    let progress = 30;
    if (appState.currentNodeId === "start") progress = 20;
    else if (appState.currentNodeId.startsWith("explain")) progress = 60;
    else if (appState.currentNodeId.startsWith("end_")) progress = 90;
    document.getElementById("progress-bar").style.width = `${progress}%`;
    
    // Aggiorna info personaggio con Avatar SVG Animato
    const avatarContainer = document.getElementById("character-avatar");
    avatarContainer.innerHTML = getAvatarSvg(node.status || "");
    
    document.getElementById("character-name").textContent = node.speaker || "Narratore";
    document.getElementById("character-status").textContent = node.status || "In ascolto";
    
    // Imposta testo del dialogo (con parole evidenziate)
    const textContainer = document.getElementById("dialogue-text");
    textContainer.innerHTML = node.text;
    
    // Attacca eventi click sulle parole evidenziate
    setupHighlightClickEvents(textContainer);

    // Carica e aggiorna la barra laterale con i termini sbloccati o presenti in questo nodo
    updateSidebarKeywords(node.highlights || []);

    // Mostra opzioni (mischiate se sono più di una)
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    
    // Mescoliamo le opzioni solo se non è un nodo finale di completamento
    const displayOptions = (node.options.length > 1) ? shuffleArray(node.options) : node.options;
    
    displayOptions.forEach((opt, idx) => {
        const button = document.createElement("button");
        button.className = "dialogue-option";
        
        const marker = document.createElement("span");
        marker.className = "option-marker";
        marker.textContent = String.fromCharCode(65 + idx); // A, B, C...
        
        const text = document.createElement("span");
        text.textContent = opt.text;
        
        button.appendChild(marker);
        button.appendChild(text);
        
        button.addEventListener("click", () => handleOptionSelection(opt));
        optionsContainer.appendChild(button);
    });

    // Reset e trigger delle animazioni CSS
    const dialogueCard = document.querySelector(".dialogue-card");
    dialogueCard.classList.remove("animate-fade-in");
    optionsContainer.classList.remove("animate-stagger-in");
    
    // Forza reflow
    void dialogueCard.offsetWidth;
    void optionsContainer.offsetWidth;
    
    dialogueCard.classList.add("animate-fade-in");
    optionsContainer.classList.add("animate-stagger-in");
}

// Gestione clic sulle parole all'interno del dialogo
function setupHighlightClickEvents(container) {
    const highlights = container.querySelectorAll(".word-highlight");
    highlights.forEach(el => {
        el.addEventListener("click", (e) => {
            const wordKey = el.getAttribute("data-word").toLowerCase();
            openTermModal(wordKey);
        });
    });
}

function updateSidebarKeywords(highlights) {
    const listContainer = document.getElementById("keywords-list");
    listContainer.innerHTML = "";
    
    if (highlights.length === 0) {
        listContainer.innerHTML = `<div class="no-keywords">Nessun termine chiave speciale in questa battuta.</div>`;
        return;
    }
    
    highlights.forEach(wordKey => {
        const term = glossaryData[wordKey.toLowerCase()];
        if (term) {
            // Sblocchiamo temporaneamente/visivamente il termine se appare nello scenario attuale
            appState.unlockedTerms.add(wordKey.toLowerCase());
            appState.scenarioTermsUnlockedThisRun.add(wordKey.toLowerCase());
            saveStateToLocalStorage();

            const item = document.createElement("div");
            item.className = "keyword-item";
            item.innerHTML = `
                <h4>${term.title}</h4>
                <p>${term.definition}</p>
            `;
            item.addEventListener("click", () => openTermModal(wordKey.toLowerCase()));
            listContainer.appendChild(item);
        }
    });
}

function handleOptionSelection(option) {
    // Riproduci effetto sonoro in base all'empatia
    if (option.empathyChange > 0) {
        playAudioEffect("empathy_up");
    } else if (option.empathyChange < 0) {
        playAudioEffect("empathy_down");
    } else {
        playAudioEffect("click");
    }

    // Aggiorna punteggio empatia
    appState.empathyScore += option.empathyChange;
    // Limita punteggio tra 0 e 100
    appState.empathyScore = Math.max(0, Math.min(100, appState.empathyScore));
    
    // Aggiungi termini sbloccati al Set globale
    if (option.unlockedTerms) {
        option.unlockedTerms.forEach(termKey => {
            appState.unlockedTerms.add(termKey);
            appState.scenarioTermsUnlockedThisRun.add(termKey);
        });
        saveStateToLocalStorage();
    }

    if (option.isEnd) {
        // Avvia il quiz invece di terminare subito
        startQuiz();
    } else {
        appState.currentNodeId = option.nextNode;
        renderCurrentNode();
    }
}

function showEndScreen() {
    // Nascondi area dialogo, opzioni e quiz
    document.querySelector(".dialogue-card").classList.add("hidden");
    document.getElementById("options-container").classList.add("hidden");
    document.getElementById("quiz-card").classList.add("hidden");
    
    const endScreen = document.getElementById("end-screen");
    endScreen.classList.remove("hidden");
    
    // Calcola feedback finale basato su empatia
    const empathy = appState.empathyScore;
    document.getElementById("stat-empathy").textContent = `${empathy}%`;
    
    let feedbackText = "";
    let icon = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 80px; height: 80px;">
                  <path d="M30 70 L50 20 L70 70 Z" />
                  <circle cx="50" cy="15" r="5" fill="none" />
                  <path d="M20 25 L28 32 M80 25 L72 32 M15 50 L25 50 M85 50 L75 50" stroke-width="3" />
                  <path d="M25 72 Q15 80 20 90" stroke-width="3" />
                  <path d="M75 72 Q85 80 80 90" stroke-width="3" />
                  <circle cx="44" cy="48" r="2.5" fill="currentColor" stroke="none" />
                  <circle cx="56" cy="48" r="2.5" fill="currentColor" stroke="none" />
                  <path d="M47 55 Q50 59 53 55" stroke-width="4" />
                </svg>`;
    
    if (empathy >= 90) {
        feedbackText = "Eccezionale! Hai mostrato un'empatia straordinaria, creando uno spazio sicuro di accoglienza e comprensione profonda.";
        icon = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 80px; height: 80px;">
                  <path d="M50 12 L62 38 L90 40 L68 58 L75 85 L50 70 L25 85 L32 58 L10 40 L38 38 Z" />
                  <circle cx="42" cy="48" r="3" fill="currentColor" stroke="none" />
                  <circle cx="58" cy="48" r="3" fill="currentColor" stroke="none" />
                  <path d="M46 56 Q50 61 54 56" stroke-width="4" />
                </svg>`;
    } else if (empathy >= 70) {
        feedbackText = "Ottimo lavoro! Ti sei relazionato con rispetto e attenzione, cogliendo i punti salienti del discorso con sensibilità.";
        icon = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 80px; height: 80px;">
                  <path d="M50 82 C50 82 15 55 15 35 C15 20 30 15 50 32 C70 15 85 20 85 35 C85 55 50 82 50 82 Z" />
                  <circle cx="38" cy="35" r="3" fill="currentColor" stroke="none" />
                  <circle cx="62" cy="35" r="3" fill="currentColor" stroke="none" />
                  <path d="M44 45 Q50 51 56 45" stroke-width="4" />
                </svg>`;
    } else if (empathy >= 50) {
        feedbackText = "Buona prova, ma c'è spazio per migliorare. A volte le tue risposte sono risultate un po' sfuggenti o affrettate. Prova a riascoltare con più pazienza.";
        icon = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 80px; height: 80px;">
                  <path d="M15 50 L30 50 C32 45 38 45 42 50 L48 42 M35 50 C38 55 45 55 48 50" />
                  <path d="M85 50 L70 50 C68 45 62 45 58 50 L52 42 M65 50 C62 55 55 55 52 50" stroke-width="5" />
                  <path d="M50 30 L50 20 M40 32 L35 25 M60 32 L65 25" stroke-width="3" />
                  <circle cx="44" cy="65" r="2.5" fill="currentColor" stroke="none" />
                  <circle cx="56" cy="65" r="2.5" fill="currentColor" stroke="none" />
                  <path d="M48 72 Q50 75 52 72" stroke-width="3" />
                </svg>`;
    } else {
        feedbackText = "Lo scenario non è andato benissimo. Le tue risposte hanno ferito l'interlocutore o sminuito i suoi sentimenti. Riprova focalizzandoti sull'ascolto attivo e sul consenso.";
        icon = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 80px; height: 80px;">
                  <rect x="15" y="35" width="70" height="30" rx="15" transform="rotate(-30 50 50)" />
                  <rect x="38" y="38" width="24" height="24" rx="2" transform="rotate(-30 50 50)" stroke-dasharray="2 2" />
                  <circle cx="28" cy="40" r="1" fill="currentColor" stroke="none" />
                  <circle cx="32" cy="48" r="1" fill="currentColor" stroke="none" />
                  <circle cx="68" cy="52" r="1" fill="currentColor" stroke="none" />
                  <circle cx="72" cy="60" r="1" fill="currentColor" stroke="none" />
                  <circle cx="46" cy="46" r="2.5" fill="currentColor" stroke="none" />
                  <circle cx="54" cy="50" r="2.5" fill="currentColor" stroke="none" />
                  <path d="M47 55 Q51 57 53 52" stroke-width="3" />
                </svg>`;
    }
    
    endScreen.querySelector(".end-icon").innerHTML = icon;
    document.getElementById("end-feedback").textContent = feedbackText;
    
    // Mostra punteggio del Quiz
    document.getElementById("stat-quiz").textContent = `${appState.quizCorrectCount}/${appState.quizTotalCount}`;
    
    // Visualizza termini sbloccati in questa sessione
    const listTerms = document.getElementById("unlocked-terms-list");
    listTerms.innerHTML = "";
    
    const unlockedCount = appState.scenarioTermsUnlockedThisRun.size;
    document.getElementById("stat-unlocked").textContent = unlockedCount;
    
    if (unlockedCount === 0) {
        listTerms.innerHTML = "<p style='color: var(--text-muted); font-size: 0.9rem;'>Nessun nuovo termine sbloccato. Li avevi già scoperti tutti!</p>";
    } else {
        appState.scenarioTermsUnlockedThisRun.forEach(termKey => {
            const term = glossaryData[termKey];
            if (term) {
                const badge = document.createElement("span");
                badge.className = "unlocked-term-badge";
                badge.textContent = term.title;
                listTerms.appendChild(badge);
            }
        });
    }

    // Registra lo scenario come completato
    appState.completedScenarios.add(appState.currentScenario.id);
    
    // Verifica se si sono sbloccati nuovi trofei
    checkBadges();
    saveStateToLocalStorage();
    renderTrophies();
    renderProgressPanel();

    // Traccia completamento scenario su Analytics
    trackAnalyticsEvent("complete_scenario", {
        scenario_id: appState.currentScenario.id,
        scenario_title: appState.currentScenario.title,
        empathy_score: appState.empathyScore,
        unlocked_terms_count: appState.scenarioTermsUnlockedThisRun.size
    });

    // Configura bottoni di fine gioco
    document.getElementById("btn-go-glossary").onclick = () => {
        showSection("glossary");
    };
    
    document.getElementById("btn-restart-scenario").onclick = () => {
        playAudioEffect("click");
        startScenario(appState.currentScenario);
    };
}


// ==========================================================================
// SEZIONE GLOSSARIO (SEXSAPIENS)
// ==========================================================================
let currentGlossaryCategory = "all";
let glossarySearchQuery = "";

function setupGlossary() {
    // Filtri Categoria
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentGlossaryCategory = btn.getAttribute("data-category");
            renderGlossaryGrid();
        });
    });

    // Input di Ricerca
    const searchInput = document.getElementById("glossary-search");
    searchInput.addEventListener("input", (e) => {
        glossarySearchQuery = e.target.value.toLowerCase().trim();
        renderGlossaryGrid();
    });

    // Chiusura Modale
    document.getElementById("btn-close-modal").addEventListener("click", closeTermModal);
    document.getElementById("term-modal").addEventListener("click", (e) => {
        if (e.target.id === "term-modal") closeTermModal();
    });
}

function renderGlossaryGrid() {
    const grid = document.getElementById("glossary-grid");
    grid.innerHTML = "";
    
    const seenIds = new Set();
    let terms = Object.values(glossaryData).filter(t => {
        if (seenIds.has(t.id)) return false;
        seenIds.add(t.id);
        return true;
    });

    // Applica filtro categoria
    if (currentGlossaryCategory !== "all") {
        terms = terms.filter(t => t.category === currentGlossaryCategory);
    }
    
    // Applica filtro ricerca
    if (glossarySearchQuery !== "") {
        terms = terms.filter(t => 
            t.title.toLowerCase().includes(glossarySearchQuery) || 
            t.definition.toLowerCase().includes(glossarySearchQuery)
        );
    }

    if (terms.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted); border: 1px dashed rgba(255,255,255,0.05); border-radius:15px;">
                <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">Nessun termine trovato.</p>
                <p style="font-size: 0.9rem;">Prova a cambiare categoria o a inserire una parola chiave diversa.</p>
            </div>
        `;
        return;
    }

    terms.forEach(term => {
        // Un termine è considerato scoperto se incontrato negli scenari
        const isDiscovered = appState.unlockedTerms.has(term.id);
        
        const card = document.createElement("div");
        card.className = "term-card glass-panel";
        
        // Badge di categoria
        let badgeClass = "";
        if (term.category === "orientation") badgeClass = "badge-orientation";
        else if (term.category === "desire") badgeClass = "badge-desire";
        else if (term.category === "relation") badgeClass = "badge-relation";
        else if (term.category === "health") badgeClass = "badge-health";

        card.innerHTML = `
            <div class="term-card-header">
                <span class="term-badge ${badgeClass}">${term.categoryName}</span>
                ${isDiscovered ? '<span class="term-badge-discovered">✨ Letto nel Gioco</span>' : ''}
            </div>
            <h3>${term.title}</h3>
            <p>${term.definition}</p>
            <div class="term-card-footer">
                Leggi Dettaglio ➔
            </div>
        `;

        card.addEventListener("click", () => {
            openTermModal(term.id);
        });

        grid.appendChild(card);
    });
}

// GESTIONE MODALE DETTAGLI TERMINE
function openTermModal(wordKey) {
    const term = glossaryData[wordKey];
    if (!term) return;

    // Assicuriamoci che il termine sia sbloccato se visualizzato in dettaglio
    appState.unlockedTerms.add(term.id);
    saveStateToLocalStorage();

    const modal = document.getElementById("term-modal");
    
    // Configura classi del badge nel modale
    const badge = document.getElementById("modal-term-badge");
    badge.textContent = term.categoryName;
    badge.className = "term-badge"; // reset
    if (term.category === "orientation") badge.classList.add("badge-orientation");
    else if (term.category === "desire") badge.classList.add("badge-desire");
    else if (term.category === "relation") badge.classList.add("badge-relation");
    else if (term.category === "health") badge.classList.add("badge-health");

    document.getElementById("modal-term-title").textContent = term.title;
    document.getElementById("modal-term-definition").textContent = term.definition;
    document.getElementById("modal-term-example").textContent = term.example;
    
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // blocca scroll dello sfondo
}

function closeTermModal() {
    document.getElementById("term-modal").classList.add("hidden");
    document.body.style.overflow = ""; // ripristina scroll
}

// ==========================================================================
// AVATAR ANIMATI IN SVG (EMPATIA VISIVA)
// ==========================================================================
function getAvatarSvg(status) {
    const s = status.toLowerCase();
    
    // Felice / Rassicurato / Sorridente
    if (s.includes("felice") || s.includes("sollevato") || s.includes("sorridente") || 
        s.includes("sereno") || s.includes("fiduciosa") || s.includes("intrigata") || 
        s.includes("grato") || s.includes("eccitata") || s.includes("rassicurata") || 
        s.includes("innamorata")) {
        return getHappySvg();
    }
    
    // Nervoso / Triste / Inibito / Deluso
    if (s.includes("nervoso") || s.includes("imbarazzata") || s.includes("deluso") || 
        s.includes("frenata") || s.includes("triste") || s.includes("ferito") || 
        s.includes("freddo") || s.includes("intimorita") || s.includes("sopraffatta") || 
        s.includes("chiusa") || s.includes("preoccupata") || s.includes("bloccata")) {
        return getNervousSvg();
    }
    
    // Default: In ascolto / Pensoso / Didattico
    return getListenSvg();
}

function getHappySvg() {
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;">
        <style>
            @keyframes floatHeart {
                0% { transform: translate(0, 10px) scale(0.6); opacity: 0; }
                50% { opacity: 0.8; }
                100% { transform: translate(5px, -20px) scale(1.1); opacity: 0; }
            }
            @keyframes pulseHead {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.03); }
            }
            .happy-head { animation: pulseHead 3s infinite ease-in-out; transform-origin: center; }
            .heart { animation: floatHeart 2s infinite ease-out; fill: #ec4899; transform-origin: bottom center; }
            .heart-2 { animation: floatHeart 2.5s infinite ease-out; animation-delay: 1.2s; fill: #ec4899; transform-origin: bottom center; }
        </style>
        <!-- Cerchio sfondo base disegno (Stile bozzetto a inchiostro) -->
        <circle cx="50" cy="50" r="46" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5" />
        
        <g class="happy-head">
            <!-- Orecchie a cartoon -->
            <path d="M10 50 C4 50 4 60 10 60" stroke="#1e293b" stroke-width="3" fill="#f8fafc" stroke-linecap="round" />
            <path d="M90 50 C96 50 96 60 90 60" stroke="#1e293b" stroke-width="3" fill="#f8fafc" stroke-linecap="round" />
            
            <!-- Capelli spensierati (ciuffo spavaldo stile fumetto) -->
            <path d="M22 36 C18 20 38 12 50 24 C62 12 82 20 78 36 L80 32 C84 18 68 8 50 16 C32 8 16 18 20 32 Z" fill="#1e293b" />
            <path d="M42 16 L48 6 L53 14 Z" fill="#1e293b" />
            
            <!-- Occhi grandi spaiati stile scarabocchio -->
            <ellipse cx="36" cy="45" rx="10" ry="13" fill="#ffffff" stroke="#1e293b" stroke-width="3" />
            <ellipse cx="64" cy="45" rx="8" ry="11" fill="#ffffff" stroke="#1e293b" stroke-width="3" />
            
            <!-- Pupille buffe e strabiche -->
            <circle cx="39" cy="45" r="3.5" fill="#1e293b" />
            <circle cx="61" cy="44" r="3" fill="#1e293b" />
            
            <!-- Sopracciglia alzate e asimmetriche -->
            <path d="M24 30 Q36 22 46 29" stroke="#1e293b" stroke-width="3.5" fill="none" stroke-linecap="round" />
            <path d="M54 29 Q64 24 74 32" stroke="#1e293b" stroke-width="3.5" fill="none" stroke-linecap="round" />
            
            <!-- Naso a uncino -->
            <path d="M49 43 Q53 48 49 53" stroke="#1e293b" stroke-width="3" fill="none" stroke-linecap="round" />
            
            <!-- Bocca sorridente e aperta con lingua -->
            <path d="M28 58 Q50 78 72 58 Z" fill="#1e293b" />
            <path d="M42 68 Q50 60 58 68 Q50 74 42 68" fill="#f43f5e" /> <!-- lingua -->
            <path d="M34 58 L66 58 L64 61 L36 61 Z" fill="#ffffff" /> <!-- denti -->
        </g>
        
        <!-- Cuoricini dell'empatia -->
        <g transform="translate(14, 18)">
            <path class="heart" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" transform="scale(0.35)" />
        </g>
        <g transform="translate(70, 22)">
            <path class="heart-2" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" transform="scale(0.3)" />
        </g>
    </svg>`;
}

function getNervousSvg() {
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;">
        <style>
            @keyframes shake {
                0%, 100% { transform: translate(0, 0); }
                20%, 60% { transform: translate(-2px, 1px); }
                40%, 80% { transform: translate(1px, -1px); }
            }
            @keyframes sweat {
                0% { transform: translate(0, -5px) scale(0.5); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translate(-3px, 15px) scale(1); opacity: 0; }
            }
            .nervous-head { animation: shake 2.5s infinite ease-in-out; transform-origin: center; }
            .sweat-drop { animation: sweat 1.8s infinite linear; fill: #06b6d4; }
        </style>
        <!-- Cerchio sfondo base disegno (Stile bozzetto a inchiostro) -->
        <circle cx="50" cy="50" r="46" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5" />
        
        <g class="nervous-head">
            <!-- Orecchie buffe -->
            <path d="M10 52 C5 52 5 60 10 60" stroke="#1e293b" stroke-width="3" fill="#f8fafc" />
            <path d="M90 52 C95 52 95 60 90 60" stroke="#1e293b" stroke-width="3" fill="#f8fafc" />
            
            <!-- Capelli ritti per il panico (stile spilli/fulmine) -->
            <path d="M20 34 L16 16 L25 22 L32 8 L38 20 L48 4 L54 18 L64 8 L68 22 L78 14 L74 34 Z" fill="#1e293b" />
            
            <!-- Occhi sgranati di paura (uno molto grande, uno molto piccolo) -->
            <ellipse cx="34" cy="46" rx="12" ry="14" fill="#ffffff" stroke="#1e293b" stroke-width="3" />
            <ellipse cx="64" cy="46" rx="7" ry="9" fill="#ffffff" stroke="#1e293b" stroke-width="3" />
            
            <!-- Pupille ridotte a puntini per lo shock -->
            <circle cx="36" cy="46" r="2.5" fill="#1e293b" />
            <circle cx="63" cy="45" r="1.5" fill="#1e293b" />
            
            <!-- Sopracciglia tese e tremanti (slanciate all'insù al centro) -->
            <path d="M22 31 Q35 34 44 26" stroke="#1e293b" stroke-width="3.5" fill="none" stroke-linecap="round" />
            <path d="M54 26 Q64 34 76 32" stroke="#1e293b" stroke-width="3.5" fill="none" stroke-linecap="round" />
            
            <!-- Linee di tensione/occhiaie sotto gli occhi -->
            <line x1="28" y1="62" x2="28" y2="65" stroke="#1e293b" stroke-width="1.5" />
            <line x1="32" y1="63" x2="32" y2="66" stroke="#1e293b" stroke-width="1.5" />
            <line x1="62" y1="58" x2="62" y2="61" stroke="#1e293b" stroke-width="1.5" />
            
            <!-- Naso a zig-zag -->
            <path d="M48 44 L53 50 L47 52" stroke="#1e293b" stroke-width="2.5" fill="none" stroke-linecap="round" />
            
            <!-- Bocca a zig-zag spaventata -->
            <path d="M30 63 Q40 57 50 65 Q60 73 68 62" stroke="#1e293b" stroke-width="3.5" fill="none" stroke-linecap="round" />
        </g>
        
        <!-- Goccia di sudore freddo animata -->
        <path class="sweat-drop" d="M24 28 C24 28 22 33 20 33 C18 33 18 30 18 28 C18 26 24 22 24 22 Z" />
    </svg>`;
}

function getListenSvg() {
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:100%;">
        <style>
            @keyframes blinkPupil {
                0%, 90%, 100% { transform: scaleY(1); }
                95% { transform: scaleY(0.1); }
            }
            @keyframes glowCircle {
                0% { r: 44; opacity: 0.8; }
                100% { r: 49; opacity: 0; stroke: #a855f7; }
            }
            .eye-pupil { animation: blinkPupil 4s infinite ease-in-out; transform-origin: center; }
            .ripple { animation: glowCircle 2.5s infinite ease-out; fill: none; stroke-width: 1.5; stroke: #a855f7; }
        </style>
        <!-- Onde concentriche dell'attenzione/ascolto -->
        <circle class="ripple" cx="50" cy="50" r="44" />
        
        <!-- Cerchio sfondo base disegno (Stile bozzetto a inchiostro) -->
        <circle cx="50" cy="50" r="46" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5" />
        
        <g>
            <!-- Orecchie a cartoon -->
            <path d="M10 51 C5 51 5 59 10 59" stroke="#1e293b" stroke-width="3" fill="#f8fafc" />
            <path d="M90 51 C95 51 95 59 90 59" stroke="#1e293b" stroke-width="3" fill="#f8fafc" />
            
            <!-- Capelli pettinati ordinati (riga laterale) -->
            <path d="M18 36 C18 18 42 16 50 26 C58 16 82 18 82 36 L82 30 C82 14 65 8 50 14 C35 8 18 14 18 30 Z" fill="#1e293b" />
            
            <!-- Occhiali tondi grandi da intellettuale/didattico -->
            <circle cx="35" cy="46" r="13" fill="none" stroke="#1e293b" stroke-width="3" />
            <circle cx="65" cy="46" r="13" fill="none" stroke="#1e293b" stroke-width="3" />
            <line x1="48" y1="46" x2="52" y2="46" stroke="#1e293b" stroke-width="3" />
            
            <!-- Occhi calmi (pupille nere che sbattono le ciglia) -->
            <circle class="eye-pupil" cx="35" cy="46" r="3.5" fill="#1e293b" />
            <circle class="eye-pupil" cx="65" cy="46" r="3.5" fill="#1e293b" />
            
            <!-- Sopracciglia rilassate -->
            <path d="M22 28 Q34 26 44 32" stroke="#1e293b" stroke-width="2.5" fill="none" stroke-linecap="round" />
            <path d="M56 32 Q66 26 78 28" stroke="#1e293b" stroke-width="2.5" fill="none" stroke-linecap="round" />
            
            <!-- Naso cartoon a elle -->
            <path d="M49 44 L52 51 L48 52" stroke="#1e293b" stroke-width="2.5" fill="none" stroke-linecap="round" />
            
            <!-- Bocca serena, in ascolto pacato -->
            <path d="M40 65 Q50 69 60 65" stroke="#1e293b" stroke-width="3" fill="none" stroke-linecap="round" />
        </g>
    </svg>`;
}

// ==========================================================================
// DATABASE DOMANDE QUIZ E LOGICA DI GIOCO POST-SCENARIO
// ==========================================================================
const quizQuestions = {
    "non-binario": {
        question: "Cosa significa per una persona definirsi 'Non-binaria'?",
        options: [
            "Non riconoscersi esclusivamente nel binarismo tradizionale maschio/femmina.",
            "Provare attrazione romantica e sessuale per tutti i generi.",
            "Essere biologicamente privi di caratteri sessuali maschili o femminili."
        ],
        correct: 0
    },
    "identità di genere": {
        question: "Cosa descrive l'Identità di Genere di una persona?",
        options: [
            "L'orientamento e l'attrazione romantica verso le altre persone.",
            "Il sesso biologico assegnato dal medico alla nascita.",
            "Il senso profondo e soggettivo di appartenenza a un genere."
        ],
        correct: 2
    },
    "cisgender": {
        question: "Una persona si definisce 'Cisgender' quando:",
        options: [
            "La sua identità di genere coincide con il sesso biologico assegnato alla nascita.",
            "Non prova alcuna forma di attrazione sessuale.",
            "Cambia la propria espressione di genere tramite il vestiario."
        ],
        correct: 0
    },
    "asessuale": {
        question: "L'asessualità è caratterizzata principalmente da:",
        options: [
            "La scelta morale di astenersi dai rapporti intimi fino al matrimonio.",
            "Scarsa o assente attrazione sessuale verso gli altri.",
            "L'attrazione esclusiva verso le persone dello stesso sesso."
        ],
        correct: 1
    },
    "bdsm": {
        question: "Qual è il pilastro fondamentale di qualsiasi pratica BDSM?",
        options: [
            "Il dolore fisico estremo obbligatorio.",
            "Il consenso informato, attivo, la consapevolezza e la sicurezza reciproca.",
            "La spontaneità estrema senza alcuna regola preventiva."
        ],
        correct: 1
    },
    "consenso": {
        question: "Il consenso in un rapporto intimo o in chat deve essere:",
        options: [
            "Fornito una volta all'inizio della relazione e valido per sempre.",
            "Espresso solo dal partner passivo.",
            "Libero, informato, entusiasta, specifico e sempre reversibile."
        ],
        correct: 2
    },
    "poliamore": {
        question: "Il Poliamore si distingue per:",
        options: [
            "Avere relazioni sentimentali/sessuali multiple nel consenso e trasparenza di tutti.",
            "Avere relazioni segrete all'insaputa del partner primario.",
            "La mancanza assoluta di coinvolgimento romantico o affettivo."
        ],
        correct: 0
    },
    "pronomi neutri": {
        question: "I pronomi neutri (come 'loro') sono usati principalmente per:",
        options: [
            "Rispettare le persone non-monogame.",
            "Rispettare l'identità di persone non-binarie o che non si riconoscono nel binario lui/lei.",
            "Evitare di parlare di sessualità in contesti pubblici."
        ],
        correct: 1
    },
    "sexting": {
        question: "Cosa si intende per 'Sexting'?",
        options: [
            "L'invio consensuale di messaggi o immagini sessualmente esplicite tramite smartphone.",
            "La condivisione non autorizzata di foto intime di altre persone.",
            "Un orientamento sessuale incentrato sulla tecnologia."
        ],
        correct: 0
    },
    "non-monogamia consensuale": {
        question: "La Non-Monogamia Consensuale (CNM) descrive relazioni in cui:",
        options: [
            "Un partner tradisce l'altro tenendolo all'oscuro di tutto.",
            "Tutti i partner concordano sulla possibilità di avere altre relazioni sessuali/affettive.",
            "Nessun partner prova attrazione romantica."
        ],
        correct: 1
    },
    "aromanticismo": {
        question: "Una persona 'Aromantica':",
        options: [
            "Non prova attrazione romantica, ma può provare attrazione sessuale.",
            "È allergica ai profumi e agli aromi chimici.",
            "Non desidera alcun tipo di amicizia o legame sociale."
        ],
        correct: 0
    },
    "ist": {
        question: "Le Infezioni Sessualmente Trasmissibili (IST) si contraggono e si trasmettono:",
        options: [
            "Solo se sono presenti sintomi visibili come lesioni o secrezioni.",
            "Attraverso contatti quotidiani come abbracci, baci sulle guance o condivisione di stoviglie.",
            "Principalmente tramite contatti sessuali intimi (anche orali o cutanei), spesso senza presentare alcun sintomo visibile."
        ],
        correct: 2
    },
    "profilattico": {
        question: "Qual è la caratteristica unica del profilattico rispetto ad altri metodi contraccettivi?",
        options: [
            "È efficace al 100% solo se combinato con la pillola anticoncezionale.",
            "È l'unico metodo contraccettivo che previene contemporaneamente gravidanze indesiderate e la trasmissione delle IST.",
            "Non richiede alcuna precauzione particolare nella conservazione o nell'utilizzo."
        ],
        correct: 1
    },
    "contraccezione d'emergenza": {
        question: "La contraccezione d'emergenza (es. la pillola del giorno dopo):",
        options: [
            "Provoca l'interruzione di una gravidanza già in corso (è abortiva).",
            "Agisce ritardando o bloccando l'ovulazione e va assunta il prima possibile dopo il rapporto a rischio.",
            "Offre protezione contro le gravidanze e le IST per tutti i rapporti successivi all'assunzione."
        ],
        correct: 1
    },
    "demisessualità": {
        question: "La demisessualità è definita come l'attrazione sessuale che si manifesta solo:",
        options: [
            "Durante il periodo dell'adolescenza.",
            "Dopo aver stabilito un forte legame emotivo o intellettuale con una persona.",
            "In modo virtuale tramite chat e social media."
        ],
        correct: 1
    },
    "lubrificante": {
        question: "Quale tipo di lubrificante deve essere evitato con i profilattici in lattice?",
        options: [
            "I lubrificanti a base acquosa.",
            "I lubrificanti a base siliconica.",
            "I lubrificanti a base oleosa (es. vaselina, oli per massaggi)."
        ],
        correct: 2
    },
    "love bombing": {
        question: "Cosa caratterizza la dinamica manipolatoria del 'Love Bombing'?",
        options: [
            "Un'iniziale pioggia eccessiva di attenzioni e regali per creare dipendenza emotiva.",
            "L'evitamento totale del contatto fisico all'inizio della relazione.",
            "La condivisione equa di tutte le spese di coppia."
        ],
        correct: 0
    },
    "gaslighting": {
        question: "Il 'Gaslighting' è una manipolazione psicologica che mira a:",
        options: [
            "Illuminare meglio le stanze durante l'intimità.",
            "Far dubitare la vittima della propria memoria, percezione o sanità mentale.",
            "Esprimere in modo sano le proprie gelosie."
        ],
        correct: 1
    },
    "confini personali": {
        question: "Nelle relazioni, stabilire dei 'Confini Personali' serve a:",
        options: [
            "Isolarsi completamente dal partner per non soffrire.",
            "Creare barriere insormontabili che impediscono l'intimità.",
            "Comunicare e proteggere i propri limiti fisici ed emotivi per il proprio benessere."
        ],
        correct: 2
    },
    "kink": {
        question: "Nelle pratiche e preferenze sessuali definite 'Kink', qual è l'elemento essenziale?",
        options: [
            "Che avvengano in segreto senza che l'altro lo sappia.",
            "Il consenso informato, la sicurezza e la negoziazione condivisa tra i partner.",
            "L'assenza totale di qualsiasi regola o accordo."
        ],
        correct: 1
    },
    "prep": {
        question: "La PrEP (Profilassi Pre-Esposizione) è una terapia farmacologica che:",
        options: [
            "Riduce del 99% il rischio di contrarre l'HIV prima di un'esposizione.",
            "Cura definitivamente l'AIDS una volta contratto.",
            "Protegge contemporaneamente da tutte le IST (gonorrea, sifilide, ecc.)."
        ],
        correct: 0
    },
    "dental dam": {
        question: "A cosa serve il Dental Dam (diga dentale) durante i rapporti intimi?",
        options: [
            "A proteggere i denti da possibili traumi fisici.",
            "Come barriera di lattice per fare sesso orale (vulvare o anale) in sicurezza prevenendo le IST.",
            "Come pulire i giocattoli sessuali dopo l'utilizzo."
        ],
        correct: 1
    },
    "consulenza sessuologica": {
        question: "Il ruolo del professionista nella Consulenza Sessuologica è di:",
        options: [
            "Giudicare moralmente i comportamenti sessuali delle coppie.",
            "Prescrivere farmaci contraccettivi obbligatori.",
            "Fornire supporto e terapia clinica per dubbi, ansie, disfunzioni o benessere intimo."
        ],
        correct: 2
    },
    "pansessuale": {
        question: "Cosa definisce l'orientamento 'Pansessuale'?",
        options: [
            "Provare attrazione verso persone indipendentemente dal loro genere o sesso biologico.",
            "Provare attrazione solo per persone dello stesso genere.",
            "Astenersi dai rapporti sessuali fino al matrimonio."
        ],
        correct: 0
    },
    "fantasia sessuale": {
        question: "Le 'Fantasie Sessuali' sono:",
        options: [
            "Desideri che devono necessariamente essere messi in pratica nella realtà.",
            "Rappresentazioni mentali sane e naturali che possono arricchire l'eccitazione e il piacere.",
            "Pensieri patologici che indicano problemi relazionali."
        ],
        correct: 1
    },
    "gioco di ruolo": {
        question: "Nel contesto dell'intimità, il 'Gioco di Ruolo' (Roleplay) consiste nel:",
        options: [
            "Assumere e recitare ruoli concordati consensualmente per esplorare fantasie e desideri.",
            "Obbligare il partner a interpretare un personaggio contro la sua volontà.",
            "Giocare a giochi da tavolo durante l'atto sessuale."
        ],
        correct: 0
    },
    "transgender": {
        question: "Una persona si definisce 'Transgender' (o Trans) quando:",
        options: [
            "La sua identità di genere differisce dal sesso biologico assegnato alla nascita.",
            "Prova attrazione sessuale per tutti i generi.",
            "Rifiuta qualsiasi forma di etichetta relazionale."
        ],
        correct: 0
    },
    "intersessualità": {
        question: "L'intersessualità descrive variazioni biologiche in cui:",
        options: [
            "Una persona si innamora solo di amici stretti.",
            "Le caratteristiche del corpo (cromosomi, ormoni, genitali) non rientrano nelle tipiche definizioni binarie di maschio o femmina.",
            "Si sperimenta una completa assenza di identità di genere."
        ],
        correct: 1
    },
    "genderqueer": {
        question: "Un'identità di genere 'Genderqueer' si caratterizza per:",
        options: [
            "La scelta di non praticare sesso penetrativo.",
            "Una collocazione al di fuori o in opposizione al binarismo tradicional maschio/femmina.",
            "L'attrazione romantica verso persone non-binarie."
        ],
        correct: 1
    },
    "agender": {
        question: "Cosa esprime una persona che si definisce 'Agender'?",
        options: [
            "La totale assenza di attrazione sessuale.",
            "La tendenza a innamorarsi esclusivamente di persone asessuali.",
            "L'assenza di un'identità di genere o il sentirsi neutrali rispetto ad essa."
        ],
        correct: 2
    },
    "disforia di genere": {
        question: "La 'Disforia di Genere' è definita come:",
        options: [
            "Il disagio o sofferenza dovuti all'incongruenza tra il proprio genere percepito e il sesso assegnato alla nascita.",
            "La paura irrazionale delle persone omosessuali.",
            "La difficoltà biologica a riprodursi."
        ],
        correct: 0
    },
    "bisessuale": {
        question: "Una persona 'Bisessuale' prova attrazione verso:",
        options: [
            "Esclusivamente persone non-binarie.",
            "Più di un genere, non necessariamente allo stesso modo o nello stesso momento.",
            "Solo persone dello stesso sesso biologico."
        ],
        correct: 1
    },
    "graysessuale": {
        question: "La 'Graysessualità' si colloca nello spettro asessuale per descrivere:",
        options: [
            "L'attrazione sessuale sperimentata raramente, a bassa intensità o solo in circostanze specifiche.",
            "L'attrazione esclusiva per persone anziane.",
            "La preferenza per rapporti sessuali in ambienti poco illuminati."
        ],
        correct: 0
    },
    "omosessuale": {
        question: "L'orientamento 'Omosessuale' descrive:",
        options: [
            "L'attrazione romantica e sessuale verso persone di genere diverso dal proprio.",
            "L'attrazione romantica e sessuale verso persone del proprio stesso genere.",
            "L'assenza di attrazione romantica verso chiunque."
        ],
        correct: 1
    },
    "eterosessuale": {
        question: "L'orientamento 'Eterosessuale' descrive:",
        options: [
            "L'attrazione romantica e sessuale verso persone di genere diverso dal proprio.",
            "L'attrazione romantica e sessuale verso persone del proprio stesso genere.",
            "La capacità di innamorarsi solo dopo un profondo legame mentale."
        ],
        correct: 0
    },
    "feticismo": {
        question: "Il 'Feticismo' (Fetish) è caratterizzato da attrazione sessuale focalizzata su:",
        options: [
            "Unicamente il volto del partner.",
            "Oggetti non vivi o parti del corpo non considerate tradizionalmente erogene.",
            "La negazione totale del contatto fisico."
        ],
        correct: 1
    },
    "masturbazione": {
        question: "La masturbazione è una prática:",
        options: [
            "Sana e naturale di autoerotismo che aiuta a conoscere il proprio corpo e alleviare lo stress.",
            "Pericolosa per la salute fisica e mentale a lungo termine.",
            "Consigliata solo in assenza di un partner stabile."
        ],
        correct: 0
    },
    "punto g": {
        question: "La stimolazione del Punto G (o della zona prostatica) fa parte di:",
        options: [
            "Prevenzioni oncologiche periodiche obbligatorie.",
            "Esplorazioni di aree erogene interne capaci di indurre intense sensazioni di piacere.",
            "Pratiche ginecologiche per testare la fertilità."
        ],
        correct: 1
    },
    "sex toys": {
        question: "L'uso dei 'Sex Toys' (giocattoli sessuali) serve a:",
        options: [
            "Sostituire completamente e obbligatoriamente il partner nelle relazioni.",
            "Stimolare le zone erogene individualmente o in coppia, arricchendo l'intimità.",
            "Curare patologie cliniche dell'apparato riproduttivo."
        ],
        correct: 1
    },
    "relazione aperta": {
        question: "In una 'Relazione Aperta', i partner concordano sulla possibilità di:",
        options: [
            "Avere rapporti sessuali extra-coppia mantenendo la stabilità romantica, nel consenso di entrambi.",
            "Tradire il partner di nascosto senza alcuna regola.",
            "Convivere con più famiglie contemporaneamente all'insaputa del fisco."
        ],
        correct: 0
    },
    "anarchia relazionale": {
        question: "L'Anarchia Relazionale sostiene che:",
        options: [
            "Le relazioni non debbano avere alcuna regola, portando al caos e al disinteresse reciproco.",
            "Ogni legame sia unico e co-creato, rifiutando gerarchie precostituite (es. l'amore romantico superiore all'amicizia).",
            "Si debbano cambiare partner ogni settimana per legge."
        ],
        correct: 1
    },
    "pap test": {
        question: "Il Pap Test (e l'HPV Test) sono esami di screening periodici essenziali per:",
        options: [
            "Identificare precocemente alterazioni cellulari sul collo dell'utero prevenendo patologie oncologiche.",
            "Diagnosticare gravidanze indesiderate nelle prime ore.",
            "Verificare la compatibilità sanguigna dei partner."
        ],
        correct: 0
    },
    "zone erogene": {
        question: "Le 'Zone Erogene' sono aree del corpo che:",
        options: [
            "Sono identiche per tutte le persone e si limitano ai soli organi genitali.",
            "Variano da persona a persona e possono generare piacere o eccitazione se stimolate.",
            "Indicano zone del corpo soggette a malattie sessualmente trasmissibili."
        ],
        correct: 1
    },
    "bondage": {
        question: "Nel Bondage, quale elemento è assolutamente indispensabile?",
        options: [
            "L'effetto sorpresa: il partner non deve sapere cosa sta per succedere.",
            "Il consenso esplicito, la comunicazione aperta e una safe word concordata.",
            "L'uso esclusivo di materiali metallici rigidi per garantire sicurezza."
        ],
        correct: 1
    },
    "revenge porn": {
        question: "Il Revenge Porn consiste in:",
        options: [
            "Un genere cinematografico di finzione adulta.",
            "La diffusione non consensuale di immagini o video intimi di una persona, che in Italia è un reato penale.",
            "Una pratica consensuale tra adulti per esplorare la propria sessualità online."
        ],
        correct: 1
    },
    "ghosting": {
        question: "Il 'Ghosting' descrive il comportamento di chi:",
        options: [
            "Comunica in modo eccessivo e ossessivo con il partner.",
            "Interrompe improvvisamente ogni contatto con una persona senza dare spiegazioni.",
            "Racconta bugie al partner per ottenere attenzioni."
        ],
        correct: 1
    },
    "trabocchetto-silenzio": {
        question: "Durante un rapporto intimo, una persona non dice 'no' ma rimane in silenzio. Questo silenzio equivale a:",
        options: [
            "Un consenso implicito: se non protesta, è d'accordo.",
            "Un segnale ambiguo che va sempre chiarito fermandosi e chiedendo esplicitamente.",
            "Il consenso dipende da quanto si conosce la persona."
        ],
        correct: 1
    },
    "trabocchetto-consenso-revoca": {
        question: "Una persona ha detto 'sì' all'inizio di un rapporto intimo, poi cambia idea a metà. Cosa succede al consenso?",
        options: [
            "Rimane valido: aveva già acconsentito all'inizio.",
            "Decade solo se ci si trova alla prima esperienza insieme.",
            "Viene revocato immediatamente: il rapporto deve fermarsi senza eccezioni."
        ],
        correct: 2
    },
    "trabocchetto-acqua": {
        question: "Fare sesso in acqua (piscina, mare, vasca da bagno) riduce il rischio di gravidanza perché:",
        options: [
            "È falso: l'acqua non ha alcun effetto contraccettivo.",
            "L'acqua fredda rallenta gli spermatozoi.",
            "Il cloro e il sale distruggono gli spermatozoi."
        ],
        correct: 0
    },
    "trabocchetto-hpv": {
        question: "L'HPV (Papillomavirus Umano) riguarda:",
        options: [
            "Solo le donne: gli uomini non possono contrarlo.",
            "Tutti i generi: può causare condilomi, tumori dell'ano, della gola e del pene.",
            "Solo persone omosessuali o bisessuali."
        ],
        correct: 1
    },
    "trabocchetto-orale": {
        question: "Il sesso orale (cunnilingus, fellatio) rispetto alla trasmissione di IST è:",
        options: [
            "Completamente sicuro: le IST non si trasmettono per via orale.",
            "Rischioso solo se si hanno già sintomi visibili.",
            "Un'attività che può trasmettere herpes, gonorrea, sifilide e HPV: le barriere proteggono."
        ],
        correct: 2
    },
    "trabocchetto-ubriaco": {
        question: "Una persona in stato di forte ebbrezza può dare un consenso sessuale valido?",
        options: [
            "Sì, se è sveglia e non perde conoscenza.",
            "No: l'ebbrezza compromette le facoltà cognitive e non permette un consenso libero e consapevole.",
            "Dipende da quanto ha bevuto e da quanto la si conosce."
        ],
        correct: 1
    },
    "trabocchetto-ist-coppia": {
        question: "Due partner che hanno già la stessa IST possono smettere di usare il preservativo tra loro?",
        options: [
            "Sì: non possono infettarsi a vicenda con qualcosa che hanno già.",
            "No: rischiano reinfezione con ceppi diversi, altre IST e, nel caso dell'HIV, varianti resistenti.",
            "Sì, ma solo se entrambi sono in cura con gli stessi farmaci."
        ],
        correct: 1
    }
};

// Alias per mappare le forme nominalizzate anche nel database dei quiz
quizQuestions["asessualità"] = quizQuestions["asessuale"];
quizQuestions["demisessualità"] = quizQuestions["demisessuale"];
quizQuestions["bisessualità"] = quizQuestions["bisessuale"];
quizQuestions["pansessualità"] = quizQuestions["pansessuale"];
quizQuestions["graysessualità"] = quizQuestions["graysessuale"];
quizQuestions["omosessualità"] = quizQuestions["omosessuale"];
quizQuestions["eterosessualità"] = quizQuestions["eterosessuale"];

let quizState = {
    questions: [],
    currentIndex: 0,
    activeAnswersEnabled: true
};

function startQuiz() {
    appState.quizCorrectCount = 0;
    appState.quizTotalCount = 0;
    quizState.questions = [];
    quizState.currentIndex = 0;

    // Seleziona i termini sbloccati o presenti in questo scenario
    let termsToQuiz = Array.from(appState.scenarioTermsUnlockedThisRun);
    
    // Se non ci sono nuovi termini sbloccati (es. lo scenario è rigiocato), prendiamo i highlights generali dello scenario
    if (termsToQuiz.length === 0) {
        // Cerca in tutti i nodi dello scenario per estrarre gli highlights
        const highlightsSet = new Set();
        Object.values(appState.currentScenario.nodes).forEach(n => {
            if (n.highlights) {
                n.highlights.forEach(h => highlightsSet.add(h));
            }
        });
        termsToQuiz = Array.from(highlightsSet);
    }

    // Filtra i termini che possiedono una domanda associata nel database quizQuestions
    termsToQuiz = termsToQuiz.filter(t => quizQuestions[t.toLowerCase()]);

    // Limitiamo il quiz a massimo 2 domande per non annoiare
    termsToQuiz = shuffleArray(termsToQuiz).slice(0, 2);

    if (termsToQuiz.length === 0) {
        // Se non ci sono termini idonei per il quiz, salta direttamente alla fine
        showEndScreen();
        return;
    }

    termsToQuiz.forEach(termKey => {
        const questionData = quizQuestions[termKey.toLowerCase()];
        quizState.questions.push({
            termKey: termKey,
            question: questionData.question,
            options: questionData.options,
            correct: questionData.correct
        });
    });

    appState.quizTotalCount = quizState.questions.length;

    // Nascondi area dialogo e opzioni dello scenario, mostra scheda Quiz
    document.querySelector(".dialogue-card").classList.add("hidden");
    document.getElementById("options-container").classList.add("hidden");
    document.getElementById("quiz-card").classList.remove("hidden");

    renderQuizQuestion();
}

function renderQuizQuestion() {
    quizState.activeAnswersEnabled = true;
    const currentQ = quizState.questions[quizState.currentIndex];

    // Aggiorna avanzamento
    document.getElementById("quiz-progress").textContent = `Domanda ${quizState.currentIndex + 1} di ${appState.quizTotalCount}`;
    document.getElementById("quiz-question-text").textContent = currentQ.question;

    const optionsBox = document.getElementById("quiz-options");
    optionsBox.innerHTML = "";

    currentQ.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option-btn";
        btn.textContent = opt;
        
        btn.addEventListener("click", () => {
            if (!quizState.activeAnswersEnabled) return;
            handleQuizAnswer(idx, currentQ.correct, btn);
        });

        optionsBox.appendChild(btn);
    });
}

function handleQuizAnswer(selectedIndex, correctIndex, clickedBtn) {
    quizState.activeAnswersEnabled = false;
    const optionsBox = document.getElementById("quiz-options");
    const buttons = optionsBox.querySelectorAll(".quiz-option-btn");

    if (selectedIndex === correctIndex) {
        clickedBtn.classList.add("correct");
        appState.quizCorrectCount++;
        playAudioEffect("correct");
    } else {
        clickedBtn.classList.add("incorrect");
        // Evidenzia quella corretta per fini didattici
        buttons[correctIndex].classList.add("correct");
        playAudioEffect("incorrect");
    }

    // Attendi 1.5 secondi prima di procedere alla prossima domanda o alla fine
    setTimeout(() => {
        quizState.currentIndex++;
        if (quizState.currentIndex < appState.quizTotalCount) {
            renderQuizQuestion();
        } else {
            showEndScreen();
        }
    }, 1500);
}

// ==========================================================================
// LOGICA DISTINTIVI / TROFEI (GAMIFICATION)
// ==========================================================================
function checkBadges() {
    // 1. Campione dell'Empatia (100% Empatia)
    if (appState.empathyScore === 100) {
        if (!appState.unlockedBadges.has("empathy_champion")) {
            appState.unlockedBadges.add("empathy_champion");
            trackAnalyticsEvent("unlock_badge", { badge_id: "empathy_champion", badge_title: "Campione dell'Empatia" });
        }
    }

    // 2. Linguista Sessuologo (Sblocca 8+ termini)
    if (appState.unlockedTerms.size >= 8) {
        if (!appState.unlockedBadges.has("glossary_explorer")) {
            appState.unlockedBadges.add("glossary_explorer");
            trackAnalyticsEvent("unlock_badge", { badge_id: "glossary_explorer", badge_title: "Linguista Sessuologo" });
        }
    }

    // 3. Cervellone del Consenso (Quiz perfetto)
    if (appState.quizCorrectCount === appState.quizTotalCount && appState.quizTotalCount > 0) {
        if (!appState.unlockedBadges.has("quiz_master")) {
            appState.unlockedBadges.add("quiz_master");
            trackAnalyticsEvent("unlock_badge", { badge_id: "quiz_master", badge_title: "Cervellone del Consenso" });
        }
    }

    // 4. Esploratore delle Relazioni (Completa tutti e 10 gli scenari)
    if (appState.completedScenarios.size >= 10) {
        if (!appState.unlockedBadges.has("all_scenarios")) {
            appState.unlockedBadges.add("all_scenarios");
            trackAnalyticsEvent("unlock_badge", { badge_id: "all_scenarios", badge_title: "Esploratore delle Relazioni" });
        }
    }
}

function renderProgressPanel() {
    // Totale termini unici nel glossario (deduplicati per id)
    const seenForCount = new Set();
    const totalTerms = Object.values(glossaryData).filter(t => {
        if (seenForCount.has(t.id)) return false;
        seenForCount.add(t.id);
        return true;
    }).length;

    // Totale scenari (youth + adults)
    const totalScenarios = (scenariosData.youth?.length || 0) + (scenariosData.adults?.length || 0);

    // Totale badge
    const totalBadges = badgesData.length;

    const discoveredTerms = appState.unlockedTerms.size;
    const completedScen = appState.completedScenarios.size;
    const unlockedBadges = appState.unlockedBadges.size;

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    const setW = (id, pct) => { const el = document.getElementById(id); if (el) el.style.width = pct + "%"; };

    set("prog-terms-count",     `${discoveredTerms} / ${totalTerms}`);
    set("prog-scenarios-count", `${completedScen} / ${totalScenarios}`);
    set("prog-badges-count",    `${unlockedBadges} / ${totalBadges}`);

    setW("prog-terms-bar",     totalTerms     ? Math.round(discoveredTerms / totalTerms * 100)     : 0);
    setW("prog-scenarios-bar", totalScenarios ? Math.round(completedScen / totalScenarios * 100)   : 0);
    setW("prog-badges-bar",    totalBadges    ? Math.round(unlockedBadges / totalBadges * 100)     : 0);
}

function renderTrophies() {
    const trophyGrid = document.getElementById("trophy-grid");
    if (!trophyGrid) return;

    trophyGrid.innerHTML = "";

    badgesData.forEach(badge => {
        const isUnlocked = appState.unlockedBadges.has(badge.id);
        
        const item = document.createElement("div");
        item.className = `trophy-item ${isUnlocked ? 'unlocked' : 'locked'}`;
        
        const openLock = `<svg class="doodle-icon-inline" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" style="width: 1.2em; height: 1.2em; margin-right: 4px; vertical-align: text-bottom;"><path d="M30 45 L30 30 C30 18 70 18 70 30 L70 35" /><rect x="20" y="45" width="60" height="40" rx="10" /><circle cx="50" cy="60" r="4" fill="currentColor" stroke="none" /><path d="M50 64 L50 72" stroke-width="6" /></svg>`;
        const closedLock = `<svg class="doodle-icon-inline" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" style="width: 1.2em; height: 1.2em; margin-right: 4px; vertical-align: text-bottom;"><path d="M30 45 L30 30 C30 18 70 18 70 30 L70 45" /><rect x="20" y="45" width="60" height="40" rx="10" /><circle cx="50" cy="60" r="4" fill="currentColor" stroke="none" /><path d="M50 64 L50 72" stroke-width="6" /></svg>`;

        item.innerHTML = `
            <div class="trophy-badge-icon">${badge.icon}</div>
            <h4>${badge.title}</h4>
            <p>${badge.description}</p>
            <span style="display: inline-flex; align-items: center; font-size:0.75rem; margin-top: 10px; font-weight:700; color: ${isUnlocked ? 'var(--accent-magenta)' : 'var(--text-muted)'}">
                ${isUnlocked ? openLock + ' SBLOCCATO' : closedLock + ' BLOCCATO'}
            </span>
            ${isUnlocked ? `
            <button class="btn-share-trophy btn-secondary" style="padding: 0.4rem 0.8rem; font-size: 0.72rem; margin-top: 12px; border-radius: 15px; width: 100%; font-weight: 600; display: inline-flex; align-items: center; justify-content: center; gap: 5px;" data-badge-id="${badge.id}">
                Condividi Trofeo 🔗
            </button>
            ` : ''}
        `;
        
        trophyGrid.appendChild(item);
    });

    // Aggiungi click listener per la condivisione dei trofei
    const shareBtns = trophyGrid.querySelectorAll(".btn-share-trophy");
    shareBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const badgeId = btn.getAttribute("data-badge-id");
            generateTrophyCard(badgeId);
            playAudioEffect("click");
        });
    });
}

// GESTIONE CONDIVISIONE CARD TROFEI
function initShareModalListeners() {
    const btnCloseShareModal = document.getElementById("btn-close-share-modal");
    const shareModal = document.getElementById("share-modal");
    const btnDownload = document.getElementById("btn-download-card");
    const btnShareNative = document.getElementById("btn-share-card-native");

    if (btnCloseShareModal && shareModal) {
        btnCloseShareModal.addEventListener("click", () => {
            shareModal.classList.add("hidden");
            playAudioEffect("click");
        });
        
        // Chiudi se clicchi fuori dal modale
        shareModal.addEventListener("click", (e) => {
            if (e.target === shareModal) {
                shareModal.classList.add("hidden");
            }
        });
    }

    if (btnDownload) {
        btnDownload.addEventListener("click", () => {
            const img = document.getElementById("share-card-image");
            if (!img || !img.src) return;
            
            const a = document.createElement("a");
            a.href = img.src;
            a.download = `${currentShareTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            playAudioEffect("click");
        });
    }

    if (btnShareNative) {
        // Aggiorna il testo del bottone in base al supporto nativo
        if (navigator.share) {
            btnShareNative.textContent = "Condividi 🔗";
        } else {
            btnShareNative.textContent = "Copia Testo 📋";
        }

        btnShareNative.addEventListener("click", () => {
            if (navigator.share && currentShareBlob) {
                const file = new File([currentShareBlob], `${currentShareTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`, { type: "image/png" });
                navigator.share({
                    title: currentShareTitle,
                    text: `Ho sbloccato il trofeo "${currentShareTitle}" su Sexsapiens.it! Vieni a metterti alla prova anche tu!`,
                    url: "https://sexsapiens.it",
                    files: [file]
                }).catch((err) => {
                    console.error("Errore nella condivisione nativa:", err);
                });
            } else {
                // Fallback: copia testo negli appunti
                const textToCopy = `Ho sbloccato il trofeo "${currentShareTitle}" su Sexsapiens.it! Mettiti alla prova anche tu: https://sexsapiens.it`;
                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        alert("Testo di condivisione copiato negli appunti!");
                    }).catch(err => {
                        console.error("Errore copia appunti:", err);
                    });
            }
            playAudioEffect("click");
        });
    }
}

function generateTrophyCard(badgeId) {
    const badge = badgesData.find(b => b.id === badgeId);
    if (!badge) return;

    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1080;
    const ctx = canvas.getContext("2d");

    // 1. Sfondo
    ctx.fillStyle = "#120a24";
    ctx.fillRect(0, 0, 1080, 1080);

    // Effetto sfumatura radiale al centro
    const radialGrad = ctx.createRadialGradient(540, 540, 100, 540, 540, 600);
    radialGrad.addColorStop(0, "rgba(168, 85, 247, 0.15)");
    radialGrad.addColorStop(1, "rgba(18, 10, 36, 0)");
    ctx.fillStyle = radialGrad;
    ctx.fillRect(0, 0, 1080, 1080);

    // 2. Cornice neon fucsia arrotondata
    ctx.strokeStyle = "#ec4899";
    ctx.lineWidth = 10;
    ctx.shadowColor = "#ec4899";
    ctx.shadowBlur = 30;
    
    const pad = 60;
    ctx.beginPath();
    ctx.roundRect(pad, pad, 1080 - 2 * pad, 1080 - 2 * pad, 40);
    ctx.stroke();
    
    // Resetta shadow
    ctx.shadowBlur = 0;

    // 3. Testo Intestazione
    ctx.fillStyle = "#06b6d4";
    ctx.font = "800 36px 'Outfit', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("SEXSAPIENS.IT", 540, 150);

    ctx.fillStyle = "#a855f7";
    ctx.font = "600 24px 'Inter', sans-serif";
    ctx.fillText("✨ NUOVO TROFEO SBLOCCATO ✨", 540, 200);

    // 4. Carica e disegna l'SVG dell'icona
    const svgString = badge.icon;
    let cleanSvg = svgString;
    if (!cleanSvg.includes('xmlns="http://www.w3.org/2000/svg"')) {
        cleanSvg = cleanSvg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    // Adatta colori per render su Canvas scuro
    cleanSvg = cleanSvg.replaceAll('currentColor', '#00ffff');
    cleanSvg = cleanSvg.replaceAll('var(--accent-magenta)', '#ec4899');
    cleanSvg = cleanSvg.replaceAll('var(--accent-cyan)', '#06b6d4');
    
    const blob = new Blob([cleanSvg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    
    img.onload = function() {
        ctx.drawImage(img, 390, 260, 300, 300);
        URL.revokeObjectURL(url);
        
        // 5. Titolo del Badge
        ctx.fillStyle = "#ffffff";
        ctx.font = "800 56px 'Outfit', sans-serif";
        ctx.fillText(badge.title.toUpperCase(), 540, 650);

        // 6. Descrizione del Badge
        ctx.fillStyle = "#94a3b8"; // slate-400
        ctx.font = "500 28px 'Inter', sans-serif";
        
        wrapText(ctx, badge.description, 540, 730, 800, 42);

        // 7. Footer
        ctx.fillStyle = "#64748b"; // slate-500
        ctx.font = "600 24px 'Inter', sans-serif";
        ctx.fillText("Mettiti alla prova ed esplora la sessualità senza tabù.", 540, 920);
        
        // Assegna anteprima immagine
        const dataUrl = canvas.toDataURL("image/png");
        document.getElementById("share-card-image").src = dataUrl;
        
        // Salva blob
        canvas.toBlob(blobPng => {
            currentShareBlob = blobPng;
            currentShareTitle = badge.title;
        }, "image/png");

        document.getElementById("share-modal").classList.remove("hidden");
    };
    img.src = url;
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let currentY = y;

    for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, currentY);
            line = words[n] + ' ';
            currentY += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, currentY);
}

// ==========================================================================
// LOGICA STANDALONE QUIZ MODE
// ==========================================================================
let standaloneQuizState = {
    length: 5,
    questions: [],
    currentIndex: 0,
    score: 0,
    activeAnswersEnabled: true
};

function initStandaloneQuizListeners() {
    // Gestione bottoni selezione lunghezza
    const lenBtns = document.querySelectorAll(".quiz-len-btn");
    lenBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            lenBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            standaloneQuizState.length = parseInt(btn.getAttribute("data-len"), 10) || 5;
            playAudioEffect("click");
        });
    });

    // Avvia quiz
    const btnStart = document.getElementById("btn-start-standalone-quiz");
    if (btnStart) {
        btnStart.addEventListener("click", () => {
            playAudioEffect("click");
            startStandaloneQuiz();
        });
    }

    // Rigiocare
    const btnRestart = document.getElementById("btn-restart-standalone-quiz");
    if (btnRestart) {
        btnRestart.addEventListener("click", () => {
            playAudioEffect("click");
            resetStandaloneQuizStartScreen();
        });
    }

    // Vai al glossario
    const btnToGlossary = document.getElementById("btn-quiz-to-glossary");
    if (btnToGlossary) {
        btnToGlossary.addEventListener("click", () => {
            playAudioEffect("click");
            showSection("glossary");
        });
    }
}

function resetStandaloneQuizStartScreen() {
    document.getElementById("quiz-mode-start").classList.remove("hidden");
    document.getElementById("quiz-mode-active").classList.add("hidden");
    document.getElementById("quiz-mode-results").classList.add("hidden");
}

function startStandaloneQuiz() {
    standaloneQuizState.currentIndex = 0;
    standaloneQuizState.score = 0;
    standaloneQuizState.questions = [];

    // Traccia avvio del quiz su Analytics
    trackAnalyticsEvent("start_quiz", {
        questions_count: standaloneQuizState.length
    });

    // Otteniamo tutte le chiavi reali di quizQuestions (escludendo gli alias per evitare doppioni)
    const keys = Object.keys(quizQuestions).filter(k => {
        return typeof quizQuestions[k] === 'object' && quizQuestions[k] !== null;
    });

    // Filtriamo per ottenere oggetti univoci
    const uniqueQuestionsMap = new Map();
    keys.forEach(k => {
        uniqueQuestionsMap.set(quizQuestions[k], k);
    });

    const uniqueQuestions = Array.from(uniqueQuestionsMap.entries()).map(([qObj, key]) => {
        return {
            key: key,
            ...qObj
        };
    });

    // Mescola e seleziona il numero richiesto di domande
    const shuffled = shuffleArray(uniqueQuestions);
    standaloneQuizState.questions = shuffled.slice(0, standaloneQuizState.length);

    // Mostra lo schermo del quiz attivo
    document.getElementById("quiz-mode-start").classList.add("hidden");
    document.getElementById("quiz-mode-active").classList.remove("hidden");
    document.getElementById("quiz-mode-results").classList.add("hidden");

    renderStandaloneQuestion();
}

function renderStandaloneQuestion() {
    standaloneQuizState.activeAnswersEnabled = true;
    const currentQ = standaloneQuizState.questions[standaloneQuizState.currentIndex];

    // Aggiorna avanzamento e punteggio
    document.getElementById("standalone-quiz-progress").textContent = `Domanda ${standaloneQuizState.currentIndex + 1} di ${standaloneQuizState.questions.length}`;
    document.getElementById("standalone-quiz-score").textContent = standaloneQuizState.score;
    document.getElementById("standalone-quiz-question-text").textContent = currentQ.question;

    const optionsBox = document.getElementById("standalone-quiz-options");
    optionsBox.innerHTML = "";

    // Applica stagger a cascata delle risposte
    currentQ.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option-btn";
        btn.textContent = opt;
        
        // Stagger animativo
        btn.style.opacity = "0";
        btn.style.transform = "translateY(10px)";
        btn.style.animation = `dialogueSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards`;
        btn.style.animationDelay = `${idx * 0.1}s`;

        btn.addEventListener("click", () => {
            if (!standaloneQuizState.activeAnswersEnabled) return;
            handleStandaloneAnswer(idx, currentQ.correct, btn);
        });

        optionsBox.appendChild(btn);
    });
}

function handleStandaloneAnswer(selectedIndex, correctIndex, clickedBtn) {
    standaloneQuizState.activeAnswersEnabled = false;
    const optionsBox = document.getElementById("standalone-quiz-options");
    const buttons = optionsBox.querySelectorAll(".quiz-option-btn");

    if (selectedIndex === correctIndex) {
        clickedBtn.classList.add("correct");
        standaloneQuizState.score++;
        playAudioEffect("correct");
    } else {
        clickedBtn.classList.add("incorrect");
        // Evidenzia quella corretta per fini didattici
        buttons[correctIndex].classList.add("correct");
        playAudioEffect("incorrect");
    }

    // Aggiorna punteggio a video all'istante
    document.getElementById("standalone-quiz-score").textContent = standaloneQuizState.score;

    // Attendi 1.5 secondi prima di procedere alla prossima domanda o ai risultati
    setTimeout(() => {
        standaloneQuizState.currentIndex++;
        if (standaloneQuizState.currentIndex < standaloneQuizState.questions.length) {
            renderStandaloneQuestion();
        } else {
            showStandaloneResults();
        }
    }, 1500);
}

function showStandaloneResults() {
    document.getElementById("quiz-mode-active").classList.add("hidden");
    document.getElementById("quiz-mode-results").classList.remove("hidden");

    const score = standaloneQuizState.score;
    const total = standaloneQuizState.questions.length;
    const ratio = score / total;

    document.getElementById("standalone-quiz-final-score").textContent = `${score}/${total}`;

    // Traccia completamento quiz su Analytics
    trackAnalyticsEvent("complete_quiz", {
        questions_count: total,
        score: score,
        score_ratio: ratio
    });

    // Scegli icona e messaggio basato sul punteggio
    const iconBox = document.getElementById("standalone-quiz-result-icon");
    const titleBox = document.getElementById("standalone-quiz-result-title");
    const subtitleBox = document.getElementById("standalone-quiz-result-subtitle");

    let iconSVG = "";
    let titleText = "";
    let subtitleText = "";

    if (ratio === 1) {
        // Punteggio perfetto
        iconSVG = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; color: var(--accent-magenta);"><path d="M50 12 L62 38 L90 40 L68 58 L75 85 L50 70 L25 85 L32 58 L10 40 L38 38 Z" /><circle cx="42" cy="48" r="3" fill="currentColor" stroke="none" /><circle cx="58" cy="48" r="3" fill="currentColor" stroke="none" /><path d="M46 56 Q50 61 54 56" stroke-width="4" /></svg>`;
        titleText = "Sapiens Supremo!";
        subtitleText = "Incredibile! Hai risposto correttamente a tutte le domande. Hai una comprensione eccezionale ed empatica della sessualità e delle relazioni.";
        
        // Sblocca il trofeo speciale se era la sfida da 10 domande
        if (total === 10) {
            if (!appState.unlockedBadges.has("quiz_champion")) {
                appState.unlockedBadges.add("quiz_champion");
                trackAnalyticsEvent("unlock_badge", { badge_id: "quiz_champion", badge_title: "Cervellone di Sexsapiens" });
            }
            saveStateToLocalStorage();
            renderTrophies();
    renderProgressPanel();
        }
    } else if (ratio >= 0.7) {
        // Ottimo punteggio
        iconSVG = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; color: var(--accent-cyan);"><path d="M50 85 C50 85 12 58 12 36 C12 18 30 12 50 30 C70 12 88 18 88 36 C88 58 50 85 50 85 Z" /><circle cx="37" cy="48" r="3" fill="currentColor" stroke="none" /><circle cx="63" cy="48" r="3" fill="currentColor" stroke="none" /><path d="M44 60 Q50 66 56 60" stroke-width="4" /></svg>`;
        titleText = "Ottimo cammino!";
        subtitleText = "Complimenti, hai dimostrato un'eccellente conoscenza generale. Continua così per sbloccare tutti i segreti della bacheca!";
    } else if (ratio >= 0.5) {
        // Punteggio sufficiente
        iconSVG = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; color: var(--accent-violet);"><path d="M20 50 C40 30 60 70 80 50" stroke-width="6" /><path d="M50 20 L50 80" stroke-width="4" stroke-dasharray="3 3" /><circle cx="35" cy="42" r="3" fill="currentColor" stroke="none" /><circle cx="65" cy="42" r="3" fill="currentColor" stroke="none" /><path d="M45 56 Q50 61 55 56" stroke-width="4" /></svg>`;
        titleText = "Buona base!";
        subtitleText = "Hai una buona conoscenza di base, ma c'è ancora spazio per approfondire. Fai un giro nel Glossario per rivedere alcuni concetti!";
    } else {
        // Punteggio basso
        iconSVG = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; color: var(--text-muted);"><path d="M15 50 L85 50 M15 57 L85 57" stroke-width="4" /><rect x="25" y="30" width="50" height="40" rx="5" /><circle cx="42" cy="45" r="2.5" fill="currentColor" stroke="none" /><circle cx="58" cy="45" r="2.5" fill="currentColor" stroke="none" /><path d="M46 56 Q50 52 54 56" stroke-width="4" /></svg>`;
        titleText = "Non scoraggiarti!";
        subtitleText = "La sessualità e l'affettività sono mondi complessi e pieni di sfumature. Usa il Glossario per imparare e riprova quando vuoi!";
    }

    iconBox.innerHTML = iconSVG;
    titleBox.textContent = titleText;
    subtitleBox.textContent = subtitleText;
}

// ==========================================================================
// GIOCO MITO O REALTÀ (THE DEBUNKER)
// ==========================================================================
const mythsData = [
    {
        myth: "Il coito interrotto (saltare fuori prima) è un metodo contraccettivo sicuro e privo di rischi.",
        isMyth: true,
        explanation: "Falso. Il liquido pre-eiaculatorio può contenere spermatozoi attivi capaci di fecondare, e può trasmettere infezioni sessualmente trasmissibili (IST). Non è considerato in alcun modo un metodo contraccettivo sicuro."
    },
    {
        myth: "Le infezioni sessualmente trasmissibili (IST) presentano sempre sintomi visibili.",
        isMyth: true,
        explanation: "Falso. Moltissime infezioni (come clamidia, gonorrea, sifilide o l'HPV) possono decorrere in modo del tutto asintomatico per mesi o anni. L'unico modo per essere sicuri è effettuare screening clinici periodici."
    },
    {
        myth: "La pillola del giorno dopo è un metodo contraccettivo abortivo.",
        isMyth: true,
        explanation: "Falso. La contraccezione d'emergenza agisce bloccando o ritardando l'ovulazione per impedire l'incontro tra ovulo e spermatozoo. Non ha alcun effetto abortivo e non funziona se l'impianto dell'ovulo è già avvenuto."
    },
    {
        myth: "È impossibile rimanere incinta durante il ciclo mestruale.",
        isMyth: true,
        explanation: "Falso. Anche se le probabilità sono più basse, gli spermatozoi possono sopravvivere all'interno del corpo femminile fino a 5 giorni e l'ovulazione può essere irregolare o anticipata, portando a un concepimento."
    },
    {
        myth: "L'uso del doppio preservativo (uno sopra l'altro) raddoppia la protezione.",
        isMyth: true,
        explanation: "Falso. Lo sfregamento continuo tra i due preservativi in lattice aumenta enormemente la frizione, facilitando la rottura di entrambi. Usane sempre e solo uno alla volta per garantire l'efficacia."
    },
    {
        myth: "La prima volta per una donna deve essere necessariamente dolorosa e causare sanguinamento.",
        isMyth: true,
        explanation: "Falso. Il dolore e il sanguinamento non sono inevitabili; dipendono dall'elasticità dell'imene, dal livello di eccitazione, dalla rilassatezza e da una corretta lubrificazione. La sensibilità, la lentezza e il rispetto reciproco prevengono il dolore."
    },
    {
        myth: "La pillola contraccettiva protegge dalle infezioni sessualmente trasmissibili (IST).",
        isMyth: true,
        explanation: "Falso. La pillola previene unicamente gravidanze indesiderate bloccando l'ovulazione, ma non offre alcuna barriera contro agenti patogeni. Solo i contraccettivi di barriera (preservativo, dental dam) proteggono dalle IST."
    },
    {
        myth: "Il lavaggio vaginale interno dopo un rapporto previene gravidanze e IST.",
        isMyth: true,
        explanation: "Falso. Le lavande vaginali interne non offrono alcuna protezione (gli spermatozoi salgono nell'utero in pochissimi secondi) e alterano il pH naturale della flora batterica, aumentando la vulnerabilità a infezioni."
    },
    {
        myth: "La masturbazione frequente causa cecità, stanchezza cronica o problemi fisici.",
        isMyth: true,
        explanation: "Falso. Si tratta di una credenza repressiva priva di fondamento scientifico. La masturbazione è una pratica autoerotica sana e naturale che aiuta a ridurre lo stress e a conoscere meglio i propri confini di piacere."
    },
    {
        myth: "La PrEP (profilassi pre-esposizione) protegge da tutte le infezioni sessualmente trasmissibili.",
        isMyth: true,
        explanation: "Falso. La PrEP è una terapia preventiva mirata esclusivamente a ridurre la trasmissione del virus dell'HIV. Non protegge in alcun modo da sifilide, clamidia, gonorrea o HPV, per le quali serve il preservativo."
    },
    {
        myth: "Se una persona non dice esplicitamente 'no', il suo silenzio equivale automaticamente al consenso.",
        isMyth: true,
        explanation: "Falso. Il consenso deve essere attivo, entusiasta ed esplicito. Il silenzio, la passività o l'assenza di un rifiuto non costituiscono mai un 'sì'. Solo un 'sì' chiaro, libero e consapevole è un consenso valido."
    },
    {
        myth: "Fare sesso in acqua (piscina, vasca, mare) previene le gravidanze indesiderate.",
        isMyth: true,
        explanation: "Falso. L'acqua non ha alcuna proprietà contraccettiva o spermicida. Gli spermatozoi sopravvivono nell'acqua e la gravidanza rimane possibile. Inoltre l'acqua può ridurre la lubrificazione naturale e la tenuta del preservativo."
    },
    {
        myth: "L'HPV (Papillomavirus Umano) è un'infezione che riguarda esclusivamente le donne.",
        isMyth: true,
        explanation: "Falso. L'HPV colpisce tutti i generi: può causare condilomi genitali, tumori della gola, dell'ano e del pene negli uomini. Il vaccino contro l'HPV è raccomandato a prescindere dal genere."
    },
    {
        myth: "Una volta che il consenso viene dato all'inizio di un rapporto intimo, non può essere ritirato a metà.",
        isMyth: true,
        explanation: "Falso. Il consenso è sempre revocabile in qualsiasi momento, senza eccezioni. Se una persona cambia idea e lo comunica (verbalmente o con segnali chiari), il rapporto deve fermarsi immediatamente. Continuare costituisce una violazione."
    },
    {
        myth: "Il sesso orale (cunnilingus, fellatio, anilingus) è completamente privo di rischi per le IST.",
        isMyth: true,
        explanation: "Falso. Attraverso il sesso orale si trasmettono herpes, gonorrea, sifilide, HPV e, in misura minore, HIV. Usare barriere protettive (preservativo o dental dam) riduce significativamente il rischio."
    },
    {
        myth: "Se entrambi i partner hanno già la stessa IST, possono smettere di usare il preservativo tra loro.",
        isMyth: true,
        explanation: "Falso. Esiste il rischio di reinfection (reinfezione con ceppi diversi dello stesso agente, es. HPV) e di trasmettere altre IST contemporaneamente presenti. Inoltre alcune IST come l'HIV evolvono in varianti: proteggersi rimane importante."
    },
    {
        myth: "Una persona in stato di ebbrezza può dare un consenso sessuale pieno e valido.",
        isMyth: true,
        explanation: "Falso. Una persona che ha consumato alcol o sostanze in modo tale da compromettere le proprie facoltà cognitive non è in grado di dare un consenso libero, informato e consapevole. Approfittarne costituisce una violazione grave."
    },
    {
        myth: "Le persone transgender sono sempre attratte dal sesso opposto rispetto al loro genere d'arrivo.",
        isMyth: true,
        explanation: "Falso. L'identità di genere (chi sei) e l'orientamento sessuale (chi ti attrae) sono dimensioni completamente indipendenti. Una donna trans può essere lesbica, eterosessuale, bisessuale o asessuale esattamente come qualsiasi altra donna."
    },
    {
        myth: "È normale provare ansia, vergogna o imbarazzo nei momenti di intimità, soprattutto se si tratta delle prime volte.",
        isMyth: false,
        explanation: "Vero. Ansia, imbarazzo e insicurezza durante l'intimità sono esperienze molto comuni e umane, in particolare all'inizio. Non indicano un problema o una disfunzione: riconoscerle, nominarle e comunicarle al partner è un atto di coraggio e la base di un'intimità più autentica."
    },
    {
        myth: "I miei desideri e i miei bisogni possono non coincidere con quelli dell'altra persona.",
        isMyth: false,
        explanation: "Vero. Due persone non condividono mai esattamente gli stessi desideri, ritmi o bisogni sessuali e affettivi: è la norma, non l'eccezione. La differenza non è un problema da nascondere, ma uno spazio di dialogo da esplorare con rispetto reciproco e comunicazione aperta."
    },
    {
        myth: "Nella coppia, è normale che uno dei due non sia sempre desideroso di fare sesso nello stesso momento dell'altro.",
        isMyth: false,
        explanation: "Vero. Il desiderio sessuale è influenzato da stress, stanchezza, ciclo ormonale, umore e molti altri fattori: rarissimamente due persone sono perfettamente sincronizzate. Gestire queste differenze con empatia e comunicazione rafforza la relazione invece di indebolirla."
    }
];

let mythGameState = {
    myths: [],
    currentIndex: 0,
    score: 0,
    activeAnswerEnabled: true
};

function initMythGameListeners() {
    // Navigazione tra le schermate
    const btnPlayScenarios = document.getElementById("card-play-scenarios");
    if (btnPlayScenarios) {
        btnPlayScenarios.addEventListener("click", () => {
            playAudioEffect("click");
            document.getElementById("game-mode-selection-screen").classList.add("hidden");
            
            // Ripristina lo schermo di selezione target nel simulatore
            if (!appState.selectedAudience) {
                document.getElementById("target-selection-screen").classList.remove("hidden");
                document.getElementById("scenario-selection-screen").classList.add("hidden");
            } else {
                document.getElementById("target-selection-screen").classList.add("hidden");
                document.getElementById("scenario-selection-screen").classList.remove("hidden");
                renderScenarioSelectionList(appState.selectedAudience);
            }
        });
    }

    const btnPlayMyths = document.getElementById("card-play-myths");
    if (btnPlayMyths) {
        btnPlayMyths.addEventListener("click", () => {
            playAudioEffect("click");
            startMythGame();
        });
    }

    const btnBackToGames = document.getElementById("btn-back-to-games");
    if (btnBackToGames) {
        btnBackToGames.addEventListener("click", () => {
            playAudioEffect("click");
            resetSimulatorViews();
        });
    }

    const btnBackToGamesMyths = document.getElementById("btn-back-to-games-myths");
    if (btnBackToGamesMyths) {
        btnBackToGamesMyths.addEventListener("click", () => {
            playAudioEffect("click");
            resetSimulatorViews();
        });
    }

    const btnMythsToGames = document.getElementById("btn-myths-to-games");
    if (btnMythsToGames) {
        btnMythsToGames.addEventListener("click", () => {
            playAudioEffect("click");
            resetSimulatorViews();
        });
    }

    // Risposte
    const btnChoiceMyth = document.getElementById("btn-choice-myth");
    if (btnChoiceMyth) {
        btnChoiceMyth.addEventListener("click", () => {
            if (!mythGameState.activeAnswerEnabled) return;
            handleMythAnswer(true); // Risponde "è un mito"
        });
    }

    const btnChoiceReality = document.getElementById("btn-choice-reality");
    if (btnChoiceReality) {
        btnChoiceReality.addEventListener("click", () => {
            if (!mythGameState.activeAnswerEnabled) return;
            handleMythAnswer(false); // Risponde "è una realtà"
        });
    }

    // Prossimo
    const btnNext = document.getElementById("btn-next-myth");
    if (btnNext) {
        btnNext.addEventListener("click", () => {
            playAudioEffect("click");
            
            // Rimuovi classe di rotazione per far tornare la carta sul fronte prima di cambiare testo
            const card = document.getElementById("myth-card");
            card.classList.remove("flipped");
            
            // Attendi il tempo del flip all'indietro (0.3s) prima di renderizzare la nuova carta
            setTimeout(() => {
                mythGameState.currentIndex++;
                if (mythGameState.currentIndex < mythGameState.myths.length) {
                    renderMythCard();
                } else {
                    showMythResults();
                }
            }, 300);
        });
    }

    // Rigioca
    const btnRestart = document.getElementById("btn-restart-myth-game");
    if (btnRestart) {
        btnRestart.addEventListener("click", () => {
            playAudioEffect("click");
            startMythGame();
        });
    }
}

function startMythGame() {
    mythGameState.currentIndex = 0;
    mythGameState.score = 0;
    
    // Copia e mescola i miti
    mythGameState.myths = shuffleArray([...mythsData]);

    document.getElementById("game-mode-selection-screen").classList.add("hidden");
    document.getElementById("myth-game-screen").classList.remove("hidden");
    document.getElementById("myth-game-results").classList.add("hidden");

    // Traccia avvio del gioco dei miti su Analytics
    trackAnalyticsEvent("start_myth_game");

    // Assicurati che non sia flippata
    document.getElementById("myth-card").classList.remove("flipped");

    renderMythCard();
}

function renderMythCard() {
    mythGameState.activeAnswerEnabled = true;
    const currentM = mythGameState.myths[mythGameState.currentIndex];

    // Popola fronte
    document.getElementById("myth-progress").textContent = `Affermazione ${mythGameState.currentIndex + 1} di ${mythGameState.myths.length}`;
    document.getElementById("myth-score").textContent = mythGameState.score;
    document.getElementById("myth-text").textContent = currentM.myth;

    // Resetta classi sul retro
    const cardBack = document.querySelector(".flip-card-back");
    cardBack.classList.remove("correct-border", "incorrect-border");
}

function handleMythAnswer(userSaysItIsAMyth) {
    mythGameState.activeAnswerEnabled = false;
    const currentM = mythGameState.myths[mythGameState.currentIndex];
    
    // Controlla se la risposta è corretta (l'affermazione è un mito e l'utente ha detto Mito, oppure l'affermazione è verità e l'utente ha detto Verità)
    const isCorrect = (currentM.isMyth === userSaysItIsAMyth);

    const indicator = document.getElementById("myth-result-indicator");
    const cardBack = document.querySelector(".flip-card-back");

    if (isCorrect) {
        mythGameState.score++;
        playAudioEffect("correct");
        indicator.textContent = "ESATTO! 🎉";
        indicator.className = "result-indicator correct-text";
        cardBack.classList.add("correct-border");
    } else {
        playAudioEffect("incorrect");
        indicator.textContent = "SBAGLIATO! ❌";
        indicator.className = "result-indicator incorrect-text";
        cardBack.classList.add("incorrect-border");
    }

    // Popola il retro
    document.getElementById("myth-back-title").textContent = currentM.isMyth ? "È UN MITO DA DEBUNKARE:" : "È UNA REALTÀ SCIENTIFICA:";
    document.getElementById("myth-back-explanation").textContent = currentM.explanation;

    // Aggiorna punteggio in alto all'istante
    document.getElementById("myth-score").textContent = mythGameState.score;

    // Esegui flip 3D
    const card = document.getElementById("myth-card");
    card.classList.add("flipped");
}

function showMythResults() {
    document.getElementById("myth-game-screen").classList.add("hidden");
    document.getElementById("myth-game-results").classList.remove("hidden");

    const score = mythGameState.score;
    const total = mythGameState.myths.length;
    const ratio = score / total;

    document.getElementById("myth-final-score").textContent = `${score}/${total}`;

    // Traccia completamento gioco miti su Analytics
    trackAnalyticsEvent("complete_myth_game", {
        score: score,
        total_questions: total,
        score_ratio: ratio
    });

    const iconBox = document.getElementById("myth-result-icon");
    const titleBox = document.getElementById("myth-result-title");
    const subtitleBox = document.getElementById("myth-result-subtitle");

    let iconSVG = "";
    let titleText = "";
    let subtitleText = "";

    if (ratio === 1) {
        // Scudo con stella o cuore per punteggio perfetto
        iconSVG = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; color: var(--accent-cyan);"><path d="M20 20 C40 15 60 15 80 20 C80 45 75 70 50 85 C25 70 20 45 20 20 Z" fill="var(--accent-cyan)" opacity="0.3" /><path d="M20 20 C40 15 60 15 80 20 C80 45 75 70 50 85 C25 70 20 45 20 20 Z" /><path d="M35 50 L45 60 L65 40" stroke-width="7" /></svg>`;
        titleText = "Debunker Supremo!";
        subtitleText = "Incredibile! Hai smascherato ogni singolo falso mito. La tua conoscenza scientifica e di prevenzione è impeccabile.";
        
        // Sblocca badge
        if (!appState.unlockedBadges.has("myth_debunker")) {
            appState.unlockedBadges.add("myth_debunker");
            trackAnalyticsEvent("unlock_badge", { badge_id: "myth_debunker", badge_title: "Debunker di Falsi Miti" });
        }
        saveStateToLocalStorage();
        renderTrophies();
    renderProgressPanel();
    } else if (ratio >= 0.7) {
        iconSVG = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; color: var(--accent-magenta);"><path d="M50 12 L62 38 L90 40 L68 58 L75 85 L50 70 L25 85 L32 58 L10 40 L38 38 Z" /><circle cx="42" cy="48" r="3" fill="currentColor" stroke="none" /><circle cx="58" cy="48" r="3" fill="currentColor" stroke="none" /><path d="M46 56 Q50 61 54 56" stroke-width="4" /></svg>`;
        titleText = "Ottimo cacciatore di bufale!";
        subtitleText = "Hai un ottimo intuito scientifico. Pochi falsi miti sono riusciti a ingannarti. Continua così!";
    } else if (ratio >= 0.5) {
        iconSVG = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; color: var(--accent-violet);"><path d="M50 85 C65 85 75 75 75 60 C75 42 62 30 55 15 C52 25 45 32 38 38 C30 45 25 55 25 65 C25 76 35 85 50 85 Z" /><circle cx="44" cy="60" r="2.5" fill="currentColor" stroke="none" /><circle cx="56" cy="60" r="2.5" fill="currentColor" stroke="none" /><path d="M47 66 Q50 70 53 66" stroke-width="4" /></svg>`;
        titleText = "Buona consapevolezza!";
        subtitleText = "Riconosci gran parte dei falsi miti, ma alcune credenze comuni ti hanno tratto in inganno. Riprova per migliorare!";
    } else {
        iconSVG = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; color: var(--text-muted);"><path d="M15 50 L85 50 M15 57 L85 57" stroke-width="4" /><rect x="25" y="30" width="50" height="40" rx="5" /><circle cx="42" cy="45" r="2.5" fill="currentColor" stroke="none" /><circle cx="58" cy="45" r="2.5" fill="currentColor" stroke="none" /><path d="M46 56 Q50 52 54 56" stroke-width="4" /></svg>`;
        titleText = "Sotto la media!";
        subtitleText = "I falsi miti sulla sessualità sono molto radicati. Leggere con attenzione le spiegazioni sul retro delle carte ti aiuterà a debunkerli tutti!";
    }

    iconBox.innerHTML = iconSVG;
    titleBox.textContent = titleText;
    subtitleBox.textContent = subtitleText;
}

function resetSimulatorViews() {
    document.getElementById("game-mode-selection-screen").classList.remove("hidden");
    document.getElementById("target-selection-screen").classList.add("hidden");
    document.getElementById("scenario-selection-screen").classList.add("hidden");
    document.getElementById("simulator-layout-area").classList.add("hidden");
    document.getElementById("myth-game-screen").classList.add("hidden");
    document.getElementById("myth-game-results").classList.add("hidden");
    document.getElementById("words-game-screen").classList.add("hidden");
    document.getElementById("words-game-results").classList.add("hidden");
    document.getElementById("quiz-card").classList.add("hidden");
}



// ==========================================================================
// DATABASE E LOGICA GIOCO "LE PAROLE GIUSTE"
// ==========================================================================

const wordsGameData = [
    {
        wrong: "Sei bisessuale? Sicura sia una cosa vera e non solo una fase di passaggio?",
        options: [
            "Grazie per avermelo confidato. Dimmi di più, come vivi questa parte della tua sessualità?",
            "Capisco, ma alla fine devi pur scegliere una parte prima o poi, no?",
            "Ah ok, ma per me è indifferente, alla fine ognuno fa quel che vuole basta non sbandierarlo."
        ],
        explanation: "Ritenere la bisessualità 'una fase' o 'una scelta obbligata' invalida l'orientamento sessuale reale di una persona. Una risposta accogliente valida il vissuto personale senza imporre definizioni esterne."
    },
    {
        wrong: "Che bello che vi sposate! E chi è il marito nella coppia?",
        options: [
            "Che bello che vi sposate! Raccontatemi, come state pianificando di festeggiare il vostro matrimonio?",
            "Auguri! Ma in casa chi è che comanda e prende le decisioni?",
            "Congratulazioni! Ma alla fine chi fa la parte maschile?"
        ],
        explanation: "Applicare i ruoli di genere della coppia eterosessuale alle coppie formate da persone dello stesso sesso è eteronormativo e cancella le peculiarità relazionali. È più rispettoso interessarsi alla coppia senza proiettare stereotipi di ruoli."
    },
    {
        wrong: "Sì, va beh, ma all'anagrafe ti chiami ancora col tuo vecchio nome, quindi per ora uso quello.",
        options: [
            "Capisco che i tempi burocratici siano lunghi. Quali sono i pronomi e il nome con cui ti senti a tuo agio e vuoi che ti chiami?",
            "Ma se uso il tuo nuovo nome nei documenti ufficiali faccio un errore, per questo preferisco l'anagrafico.",
            "Non mi sembra una cosa così grave, alla fine un nome vale l'altro finché non cambi i documenti."
        ],
        explanation: "Usare il vecchio nome di una persona transgender (deadnaming) invalida la sua identità di genere ed è fonte di forte disagio psicologico. Il nome d'elezione e i pronomi scelti vanno rispettati a prescindere dallo stato burocratico."
    },
    {
        wrong: "Se mi amassi davvero, lo faresti anche se stasera non ti va molto.",
        options: [
            "Capisco perfettamente, non c'è fretta. Possiamo semplicemente stare vicini o fare altro, la cosa importante è stare bene entrambi.",
            "Va bene, però sappi che mi sento rifiutato e frustrato quando ti comporti così.",
            "Ok, ma allora la prossima volta decidiamo noi quando farlo, altrimenti non è giusto."
        ],
        explanation: "Associare il sesso alla prova dell'amore o usare il senso di colpa per superare la riluttanza del partner è una violazione del consenso e una forma di pressione emotiva (coercizione). Il consenso dev'essere sempre libero, entusiasta e revocabile in qualsiasi momento."
    },
    {
        wrong: "Hai sempre mal di testa. Secondo me non ti interesso più sessualmente.",
        options: [
            "Ho notato che ultimamente abbiamo meno intimità fisica. Mi piacerebbe capire se c'è qualcosa di cui hai bisogno o se stai vivendo un periodo di stress.",
            "Ormai stiamo insieme solo come coinquilini, se non cambiamo marcia finisce male.",
            "Vorrà dire che aspetterò che ti passi la voglia di stare da sola, ma non so quanto durerà."
        ],
        explanation: "Attaccare il partner o interpretare una diminuzione del desiderio come un rifiuto personale aumenta la distanza e la colpevolizzazione. Aprire un dialogo empatico e non giudicante aiuta a individuare fattori come stress, fatica o bisogni relazionali insoddisfatti."
    },
    {
        wrong: "Non ti piace il sesso? Secondo me è solo perché non hai ancora trovato la persona giusta.",
        options: [
            "Grazie per averlo condiviso. Lo spettro dell'asessualità è ampio; come descriveresti il modo in cui vivi le relazioni e l'affettività?",
            "Ma ti sei fatta controllare i livelli ormonali? Potrebbe essere un problema di salute.",
            "Magari è solo un periodo di stress, vedrai che quando ti innamorerai cambierai idea."
        ],
        explanation: "L'asessualità è un orientamento sessuale valido e stabile, non una patologia, un problema ormonale o una transizione in attesa della 'persona giusta'. Rispettare e comprendere la diversità degli spettri affettivi e relazionali è fondamentale."
    },
    {
        wrong: "Ah, sei gay? Vabbè, basta che non ci provi con me, eh!",
        options: [
            "Grazie per esserti aperto con me. Apprezzo molto la tua fiducia.",
            "Capisco, ma mi raccomando, non andarlo a dire in giro che siamo amici sennò la gente mormora.",
            "Ma dai, che bello! Ora dobbiamo assolutamente andare a fare shopping insieme!"
        ],
        explanation: "La frase 'basta che non ci provi con me' riflette una presunzione egocentrica e pregiudizi omofobici, implicando che le persone LGBTQ+ siano incapaci di gestire i confini relazionali. Un coming out va accolto con riconoscimento della fiducia dimostrata."
    },
    {
        wrong: "Ami più di una persona? Questa è solo una scusa per tradire senza sentirti in colpa!",
        options: [
            "È una dinamica relazionale interessante. Come riuscite a gestire la comunicazione, il tempo e il consenso tra tutti voi?",
            "Io non ci riuscirei mai, per me l'amore vero è solo tra due persone ed il resto è solo egoismo.",
            "Sì, ma alla fine c'è sempre un partner principale che ami di più e gli altri sono secondari."
        ],
        explanation: "Il poliamore etico e la non-monogamia consensuale si basano sulla trasparenza, sul consenso esplicito di tutti i partecipanti e sull'onestà. Distinguersi dal tradimento (che implica menzogna e violazione dei patti) richiede accordi chiari e rispetto reciproco."
    }
];

let wordsGameState = {
    currentIndex: 0,
    score: 0,
    activeAnswerEnabled: true,
    phrases: []
};

function initWordsGameListeners() {
    // Selettore Card "Le parole giuste"
    const cardWords = document.getElementById("card-play-words");
    if (cardWords) {
        cardWords.addEventListener("click", () => {
            playAudioEffect("click");
            startWordsGame();
        });
    }

    // Prossima frase
    const btnNext = document.getElementById("btn-next-word");
    if (btnNext) {
        btnNext.addEventListener("click", () => {
            playAudioEffect("click");
            wordsGameState.currentIndex++;
            if (wordsGameState.currentIndex < wordsGameState.phrases.length) {
                renderWordsQuestion();
            } else {
                showWordsResults();
            }
        });
    }

    // Rigioca
    const btnRestart = document.getElementById("btn-restart-words");
    if (btnRestart) {
        btnRestart.addEventListener("click", () => {
            playAudioEffect("click");
            startWordsGame();
        });
    }

    // Torna alla selezione giochi
    const btnBack = document.getElementById("btn-back-to-games-words");
    if (btnBack) {
        btnBack.addEventListener("click", () => {
            playAudioEffect("click");
            document.getElementById("words-game-screen").classList.add("hidden");
            document.getElementById("game-mode-selection-screen").classList.remove("hidden");
        });
    }

    const btnBackResults = document.getElementById("btn-words-to-games");
    if (btnBackResults) {
        btnBackResults.addEventListener("click", () => {
            playAudioEffect("click");
            document.getElementById("words-game-results").classList.add("hidden");
            document.getElementById("game-mode-selection-screen").classList.remove("hidden");
        });
    }
}

function startWordsGame() {
    wordsGameState.currentIndex = 0;
    wordsGameState.score = 0;
    wordsGameState.phrases = shuffleArray([...wordsGameData]);

    document.getElementById("game-mode-selection-screen").classList.add("hidden");
    document.getElementById("words-game-screen").classList.remove("hidden");
    document.getElementById("words-game-results").classList.add("hidden");

    renderWordsQuestion();
}

function renderWordsQuestion() {
    wordsGameState.activeAnswerEnabled = true;
    const currentP = wordsGameState.phrases[wordsGameState.currentIndex];

    // Reset spiegazione
    document.getElementById("words-explanation-panel").classList.add("hidden");

    // Popola testi
    document.getElementById("words-progress").textContent = `Frase ${wordsGameState.currentIndex + 1} di ${wordsGameState.phrases.length}`;
    document.getElementById("words-score").textContent = wordsGameState.score;
    document.getElementById("words-wrong-text").textContent = `"${currentP.wrong}"`;

    // Opzioni
    const optionsContainer = document.getElementById("words-options-container");
    optionsContainer.innerHTML = "";

    const optionsWithStatus = currentP.options.map((opt, index) => {
        return {
            text: opt,
            isCorrect: index === 0
        };
    });

    const shuffledOptions = shuffleArray(optionsWithStatus);

    shuffledOptions.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "quiz-choice-btn";
        btn.textContent = opt.text;
        
        btn.addEventListener("click", () => {
            if (!wordsGameState.activeAnswerEnabled) return;
            wordsGameState.activeAnswerEnabled = false;

            const allBtns = optionsContainer.querySelectorAll(".quiz-choice-btn");
            allBtns.forEach(b => {
                b.style.pointerEvents = "none";
                b.style.opacity = "0.5";
            });

            const expPanel = document.getElementById("words-explanation-panel");
            const expStatus = document.getElementById("words-explanation-status");
            const expText = document.getElementById("words-explanation-text");

            expPanel.classList.remove("hidden");
            expText.textContent = currentP.explanation;

            if (opt.isCorrect) {
                btn.classList.add("correct-choice");
                btn.style.opacity = "1";
                expStatus.textContent = "ESATTO! 🎉";
                expStatus.className = "explanation-status correct";
                wordsGameState.score++;
                document.getElementById("words-score").textContent = wordsGameState.score;
                playAudioEffect("success");
            } else {
                btn.classList.add("wrong-choice");
                btn.style.opacity = "1";
                expStatus.textContent = "INSENSIBILE ❌";
                expStatus.className = "explanation-status wrong";
                
                // Evidenzia corretta per chiarezza didattica
                allBtns.forEach(b => {
                    const matchedOpt = shuffledOptions.find(o => o.text === b.textContent);
                    if (matchedOpt && matchedOpt.isCorrect) {
                        b.classList.add("correct-choice");
                        b.style.opacity = "1";
                    }
                });
                
                playAudioEffect("error");
            }
            
            // Focus sul tasto Prossima Frase
            setTimeout(() => {
                document.getElementById("btn-next-word").focus();
            }, 100);
        });

        optionsContainer.appendChild(btn);
    });
}

function showWordsResults() {
    document.getElementById("words-game-screen").classList.add("hidden");
    document.getElementById("words-game-results").classList.remove("hidden");

    const score = wordsGameState.score;
    const total = wordsGameState.phrases.length;
    const ratio = score / total;

    document.getElementById("words-final-score").textContent = `${score}/${total}`;

    const iconBox = document.getElementById("words-result-icon");
    const titleBox = document.getElementById("words-result-title");
    const subtitleBox = document.getElementById("words-result-subtitle");

    let iconSVG = "";
    let titleText = "";
    let subtitleText = "";

    if (ratio === 1) {
        iconSVG = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; color: var(--accent-magenta);"><path d="M20 25 C40 20 70 20 80 25 C88 28 88 45 80 55 C70 65 40 65 30 70 C28 72 20 78 18 78 C18 78 22 68 25 62 C15 55 12 40 20 25 Z" fill="var(--accent-magenta)" opacity="0.3" /><path d="M20 25 C40 20 70 20 80 25 C88 28 88 45 80 55 C70 65 40 65 30 70 C28 72 20 78 18 78 C18 78 22 68 25 62 C15 55 12 40 20 25 Z" /><circle cx="38" cy="35" r="2" fill="currentColor" stroke="none" /><circle cx="58" cy="35" r="2" fill="currentColor" stroke="none" /><path d="M44 48 Q50 54 56 48" stroke-width="4" /></svg>`;
        titleText = "Comunicatore Eccellente!";
        subtitleText = "Favoloso! Sai sempre scegliere le parole giuste per esprimere vicinanza, rispetto ed empatia, abbattendo ogni pregiudizio omo-bi-transfobico.";
        
        // Sblocca il nuovo badge
        if (!appState.unlockedBadges.has("empathetic_communicator")) {
            appState.unlockedBadges.add("empathetic_communicator");
            saveStateToLocalStorage();
            renderTrophies();
    renderProgressPanel();
            trackAnalyticsEvent("unlock_badge", { badge_id: "empathetic_communicator", badge_title: "Comunicatore Empatico" });
        }
    } else if (ratio >= 0.7) {
        iconSVG = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; color: var(--accent-cyan);"><path d="M50 12 L62 38 L90 40 L68 58 L75 85 L50 70 L25 85 L32 58 L10 40 L38 38 Z" /><circle cx="42" cy="48" r="3" fill="currentColor" stroke="none" /><circle cx="58" cy="48" r="3" fill="currentColor" stroke="none" /><path d="M46 56 Q50 61 54 56" stroke-width="4" /></svg>`;
        titleText = "Comunicatore Attento!";
        subtitleText = "Ottimo intuito! Hai scelto risposte altamente inclusive ed empatiche. Rivedi i dettagli didattici per eliminare del tutto le microaggressioni.";
    } else if (ratio >= 0.5) {
        iconSVG = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; color: var(--accent-violet);"><path d="M50 82 C50 82 15 55 15 35 C15 20 30 15 50 32 C70 15 85 20 85 35 C85 55 50 82 50 82 Z" /></svg>`;
        titleText = "Comunicazione da affinare!";
        subtitleText = "Buona sensibilità, ma alcune frasi giudicanti ti sono sfuggite. Rifletti su come alcune espressioni comuni possano ferire anche senza volerlo.";
    } else {
        iconSVG = `<svg class="doodle-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" style="width: 100px; height: 100px; color: var(--text-muted);"><path d="M15 50 L85 50 M15 57 L85 57" stroke-width="4" /><rect x="25" y="30" width="50" height="40" rx="5" /></svg>`;
        titleText = "Parole da ri-calibrare!";
        subtitleText = "Le parole che usiamo hanno un peso enorme sulle relazioni. Gioca di nuovo e leggi con attenzione le spiegazioni per comprendere l'impatto dei cliché.";
    }

    iconBox.innerHTML = iconSVG;
    titleBox.textContent = titleText;
    subtitleBox.textContent = subtitleText;

    trackAnalyticsEvent("complete_words_game", {
        score: score,
        total_questions: total,
        score_ratio: ratio
    });
}
