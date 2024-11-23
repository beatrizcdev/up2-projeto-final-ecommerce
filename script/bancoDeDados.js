const produtos = [
    {   
        id: "1", 
        titulo: "Cágado-de-pente", 
        preco: 120, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O Cágado-de-pente é um réptil herbívoro que se alimenta de plantas aquáticas e algas. Ele vive em rios e lagos de água doce, sendo encontrado em regiões com clima tropical e subtropical. Seu habitat natural é composto por águas tranquilas e vegetação aquática densa. Esse cágado é adaptado ao clima quente e úmido, podendo passar bastante tempo submerso nas águas." 
    },
    { 
        id: "2", 
        titulo: "Cágado-de-barbicha", 
        preco: 100, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O Cágado-de-barbicha é um réptil aquático de água doce, conhecido por sua habilidade de se camuflar entre a vegetação. Alimenta-se principalmente de plantas aquáticas e pequenos invertebrados. Habita lagos e rios com águas calmas, preferindo ambientes com vegetação abundante. O clima ideal para esse cágado é o tropical, com alta umidade e temperaturas elevadas durante o ano todo." 
    },
    { 
        id: "3", 
        titulo: "Cágado-pintado", 
        preco: 90, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O Cágado-pintado é um pequeno réptil que habita rios e lagos da América do Norte. Sua característica marcante são as cores vibrantes e as manchas coloridas em seu casco. Ele é onívoro, alimentando-se de plantas aquáticas, insetos e pequenos peixes. O habitat desse cágado são áreas de água doce com vegetação aquática, e ele é adaptado a climas temperados e subtropicais." 
    },
    { 
        id: "4", 
        titulo: "Cágado-de-ouvido-vermelho", 
        preco: 80, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '', 
        descricao: "Este cágado é conhecido por suas manchas vermelhas nas laterais da cabeça. Alimenta-se principalmente de plantas aquáticas, frutas e pequenos invertebrados. Seu habitat natural são os rios e lagos de água doce, preferindo ambientes com bastante vegetação e águas calmas. O Cágado-de-ouvido-vermelho se adapta a climas tropicais e subtropicais, onde as temperaturas são constantes e o ambiente é úmido." 
    },
    { 
        id: "5", 
        titulo: "Cágado-da-caatinga", 
        preco: 150, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O Cágado-da-caatinga é um réptil adaptado a ambientes semiáridos. Ele se alimenta principalmente de plantas de caatinga, frutos e raízes. Esse cágado habita áreas de vegetação esparsa e de clima seco, preferindo áreas com poucas chuvas e temperaturas elevadas durante a maior parte do ano. A Caatinga, seu habitat, é caracterizada por um clima quente e seco, com vegetação adaptada à escassez de água." 
    },
    { 
        id: "6", 
        titulo: "Cágado-da-amazônia", 
        preco: 130, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O Cágado-da-amazônia é uma espécie nativa da região amazônica, sendo encontrado em rios de água doce e pântanos. Alimenta-se de plantas aquáticas, frutas e pequenos invertebrados. O habitat dessa espécie é marcado por águas tropicais, com temperatura quente e alta umidade. As florestas úmidas e os rios lentos da Amazônia são seu ambiente ideal." 
    },
    { 
        id: "7", 
        titulo: "Cágado-de-pescoço-longo", 
        preco: 110, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '', 
        descricao: "Este cágado é caracterizado por seu pescoço mais longo, o que facilita sua alimentação de plantas aquáticas mais profundas. Ele habita rios e lagos da América do Sul, em ambientes com vegetação aquática. Alimenta-se principalmente de plantas, insetos e pequenos peixes. O clima quente e úmido da região amazônica e das áreas tropicais do continente são ideais para essa espécie." 
    },
    { 
        id: "8", 
        titulo: "Cágado-de-pescoço-curto", 
        preco: 95, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O Cágado-de-pescoço-curto vive em lagos e pântanos de águas calmas. Alimenta-se de plantas aquáticas e pequenos invertebrados. Seu habitat é composto por águas tranquilas com vegetação densa, onde o cágado se esconde para se proteger de predadores. O clima subtropical e tropical, com altas temperaturas e boa umidade, são ideais para essa espécie." 
    },
    { 
        id: "9", 
        titulo: "Cágado-de-carapaça-dura", 
        preco: 140, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '', 
        descricao: "Com carapaça mais resistente, o Cágado-de-carapaça-dura é capaz de resistir a predadores naturais em seu habitat. Alimenta-se principalmente de vegetação aquática e pequenos invertebrados. Esse cágado habita lagos e rios de água doce, onde a vegetação aquática é abundante. Ele prefere climas tropicais, com temperaturas altas e umidade elevada, que favorecem seu desenvolvimento." 
    },
    { 
        id: "10", 
        titulo: "Cágado-mexicano", 
        preco: 125, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '', 
        descricao: "Espécie endêmica do México, o Cágado-mexicano é encontrado em lagos e rios com águas frescas. Sua alimentação é composta por plantas aquáticas e pequenos peixes. O habitat natural dessa espécie inclui rios de águas claras e vegetação aquática. O clima quente e seco das regiões do México é perfeito para essa espécie, que se adapta bem ao calor." 
    },
    { 
        id: "11", 
        titulo: "Camaleão-comum", 
        preco: 200, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O Camaleão-comum é conhecido pela sua habilidade de mudar de cor. Habita florestas tropicais e regiões subtropicais. Sua dieta inclui insetos, como moscas e gafanhotos, além de folhas e frutas. Prefere climas quentes e úmidos, encontrando seu habitat ideal em áreas com vegetação densa e bem iluminadas." 
    },
    { 
        id: "12", 
        titulo: "Iguana-verde", 
        preco: 250, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A Iguana-verde é uma espécie herbívora encontrada principalmente nas regiões tropicais da América Central e do Sul. Ela se alimenta de folhas, frutas e flores. Seu habitat é formado por florestas tropicais e vegetação densa. O clima quente e úmido das áreas tropicais é ideal para essa espécie, que vive em ambientes com grande disponibilidade de vegetação." 
    },
    { 
        id: "13", 
        titulo: "Dragão barbudo", 
        preco: 180, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O Dragão barbudo é um réptil nativo das regiões áridas e semiáridas da Austrália. Alimenta-se de insetos, frutas e pequenas plantas. Seu habitat é composto por áreas secas e rochosas, com clima quente e seco. A espécie é adaptada a viver em ambientes com pouca vegetação e temperaturas elevadas." 
    },
    { 
        id: "14", 
        titulo: "Gecko-leopardo", 
        preco: 120, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O Gecko-leopardo é um réptil de pequeno porte, popular no mercado de animais de estimação. Ele habita áreas secas e rochosas, alimentando-se de insetos e frutas. Seu habitat é composto por regiões áridas e semidesérticas, com clima quente e seco. Esse gecko é adaptado para sobreviver em ambientes com temperaturas extremas." 
    },
    { 
        id: "15", 
        titulo: "Serpente-de-corn", 
        preco: 150, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A serpente-de-corn é uma espécie não venenosa encontrada nas regiões do sudoeste dos Estados Unidos e México. Ela se alimenta de roedores, pequenos répteis e ovos, e prefere habitats secos e rochosos." 
    },
    { 
        id: "16", 
        titulo: "Jararaca", 
        preco: 220, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A jararaca é uma serpente venenosa, amplamente distribuída nas florestas tropicais da América Latina. Sua dieta consiste em pequenos mamíferos, aves e anfíbios. Prefere climas quentes e úmidos, sendo encontrada principalmente em áreas florestais." 
    },
    { 
        id: "17", 
        titulo: "Cobra-cega", 
        preco: 180, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A cobra-cega é uma espécie de serpente não venenosa encontrada em regiões subtropicais e tropicais. Sua dieta inclui invertebrados como minhocas e insetos, e ela é adaptada a viver em solos úmidos e subterrâneos." 
    },
    { 
        id: "18", 
        titulo: "Tegu", 
        preco: 200, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O Tegu é um réptil de grande porte, encontrado em várias partes da América do Sul, conhecido pela sua alimentação variada. Sua dieta inclui frutas, insetos e pequenos vertebrados. Habita regiões de florestas tropicais e savanas." 
    },
    { 
        id: "19", 
        titulo: "Cobra-cipó", 
        preco: 160, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A cobra-cipó é uma serpente não venenosa de corpo esguio, comum nas florestas tropicais e subtropicais. Ela se alimenta de pequenos roedores e répteis, e prefere habitats de vegetação densa, como árvores e arbustos." 
    },
    { 
        id: "20", 
        titulo: "Tartaruga-das-bermudas", 
        preco: 350, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A tartaruga-das-bermudas é uma espécie marinha em risco de extinção, nativa das Ilhas Bermudas. Ela se alimenta de algas, esponjas e pequenos invertebrados marinhos e vive em águas rasas e recifes de corais." 
    },
    { 
        id: "21", 
        titulo: "Canário", 
        preco: 80, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O canário é uma ave pequena conhecida pelo seu canto melodioso, muito comum como animal de estimação. Alimenta-se de sementes e vegetais, e pode ser encontrado em climas temperados, geralmente em áreas abertas." 
    },
    { 
        id: "22", 
        titulo: "Periquito-australiano", 
        preco: 50, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O periquito australiano é uma ave pequena e colorida, originária da Austrália. Sua dieta é baseada em sementes e vegetação, e ele prefere viver em regiões abertas e áreas semiáridas." 
    },
    { 
        id: "23", 
        titulo: "Papagaio-do-mangue", 
        preco: 450, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O papagaio-do-mangue é uma espécie de ave endêmica da região litorânea brasileira, com penas verdes e vermelhas. Sua alimentação inclui frutas, sementes e folhas. Habita áreas de manguezais e florestas tropicais." 
    },
    { 
        id: "24", 
        titulo: "Curió", 
        preco: 120, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O curió é uma ave muito apreciada pelo seu canto melodioso, e é comum em cativeiro no Brasil. Sua dieta consiste em sementes e grãos, e ele habita principalmente áreas de campo e florestas abertas." 
    },
    { 
        id: "25", 
        titulo: "Cacatua", 
        preco: 300, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A cacatua é uma ave exótica conhecida por seu comportamento brincalhão e suas penas em forma de crista. Ela se alimenta de sementes, frutas e nozes, e pode ser encontrada em florestas tropicais e subtropicais." 
    },
    { 
        id: "26", 
        titulo: "Arara-azul", 
        preco: 800, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A arara-azul é uma espécie de papagaio nativa da América do Sul, famosa pela sua plumagem vibrante. Sua dieta inclui frutas, sementes e nozes, e ela habita florestas tropicais e áreas de várzea." 
    },
    { 
        id: "27", 
        titulo: "Pardal", 
        preco: 30, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O pardal é uma ave pequena e comum, com distribuição ampla no mundo, adaptada à vida urbana. Sua dieta é composta por sementes, grãos e pequenos insetos, e é encontrado principalmente em ambientes urbanos e suburbanos." 
    },
    { 
        id: "28", 
        titulo: "Sabiá", 
        preco: 60, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O sabiá é uma ave de médio porte com canto melodioso, muito apreciada no Brasil. Sua alimentação inclui frutas, insetos e sementes, e ela vive em florestas tropicais e áreas de campo." 
    },
    { 
        id: "29", 
        titulo: "Codorna", 
        preco: 100, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A codorna é uma ave pequena, comum em cativeiro, conhecida por sua carne macia e saborosa. Ela se alimenta de sementes, plantas e pequenos insetos, e habita áreas de campo aberto e regiões agrícolas." 
    },
    { 
        id: "30", 
        titulo: "Faisão", 
        preco: 250, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O faisão é uma ave de grande porte, com penas coloridas e características, muito apreciada por caçadores e colecionadores. Sua dieta é composta por sementes, frutas e pequenos insetos, e ele habita florestas abertas e áreas de campo." 
    },
    { 
        id: "31", 
        titulo: "Betta", 
        preco: 15, 
        categoria: "Peixes", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O betta é um peixe de água doce, conhecido por sua agressividade e cores vibrantes. Alimenta-se de pequenos invertebrados e pode ser encontrado em habitats aquáticos lentos e de água quente." 
    },
    { 
        id: "32", 
        titulo: "Neon", 
        preco: 20, 
        categoria: "Peixes", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O neon é um peixe de pequeno porte com uma faixa luminosa em seu corpo, muito comum em aquários. Sua dieta inclui pequenos invertebrados e algas, e ele prefere viver em cardumes em águas de pH neutro." 
    },
    { 
        id: "33", 
        titulo: "Carpa", 
        preco: 60, 
        categoria: "Peixes", 
        tipo: "animal", 
        imagem: '', 
        descricao: "As carpas são peixes de grande porte, originários da Ásia, conhecidos por sua resistência e longevidade. Sua alimentação inclui algas, plantas aquáticas e pequenos invertebrados." 
    },
    { 
        id: "34", 
        titulo: "Mestre dos Mares", 
        preco: 1000, 
        categoria: "Peixes", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O mestre dos mares é um peixe raro, conhecido por sua grande força e capacidade de viver em águas profundas e geladas. Sua alimentação é baseada em outros peixes menores e grandes invertebrados marinhos." 
    },
    { 
        id: "35", 
        titulo: "Peixe-palhaço", 
        preco: 50, 
        categoria: "Peixes", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O peixe-palhaço é uma espécie colorida que vive em simbiose com as anêmonas. Alimenta-se de pequenos crustáceos e detritos marinhos e habita recifes de corais tropicais." 
    },
    { 
        id: "36", 
        titulo: "Goldfish", 
        preco: 40, 
        categoria: "Peixes", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O goldfish é um peixe ornamental muito comum em aquários domésticos, conhecido por sua cor dourada e comportamento tranquilo. Sua dieta é composta por flocos de ração e vegetação aquática." 
    },
    { 
        id: "37", 
        titulo: "Tetra", 
        preco: 15, 
        categoria: "Peixes", 
        tipo: "animal", 
        imagem: '', 
        descricao: "Os tetrás são peixes pequenos e coloridos que habitam águas tropicais. Sua dieta consiste em pequenos invertebrados e algas, sendo muito populares em aquários de água doce." 
    },
    { 
        id: "38", 
        titulo: "Axolotl", 
        preco: 350, 
        categoria: "Anfíbios", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O axolotl é uma espécie de salamandra aquática que mantém suas características larvais durante a fase adulta. Sua dieta inclui vermes, pequenos peixes e outros invertebrados." 
    },
    { 
        id: "39", 
        titulo: "Rã-touro", 
        preco: 50, 
        categoria: "Anfíbios", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A rã-touro é uma espécie de anfíbio conhecida por seu tamanho impressionante e sua capacidade de adaptação a diferentes ambientes. Alimenta-se de insetos, pequenos vertebrados e até mesmo outros anfíbios." 
    },
    { 
        id: "40", 
        titulo: "Salamandra", 
        preco: 120, 
        categoria: "Anfíbios", 
        tipo: "animal", 
        imagem: '', 
        descricao: "As salamandras são anfíbios caracterizados por sua pele lisa e úmida. Sua alimentação inclui insetos e pequenos invertebrados, e elas vivem em ambientes aquáticos ou úmidos." 
    },
    const animais = [
    { 
        id: "41", 
        titulo: "Crocodilo-do-Nilo", 
        preco: 1500, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O crocodilo-do-Nilo é uma das maiores espécies de crocodilos, encontrado principalmente na África Subsaariana. Alimenta-se de grandes mamíferos, peixes e aves, vivendo em rios e lagos." 
    },
    { 
        id: "42", 
        titulo: "Iguana-verde", 
        preco: 200, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A iguana-verde é um réptil herbívoro, encontrado em florestas tropicais da América Central e do Sul. Ela se alimenta principalmente de folhas e frutas e pode viver em árvores e arbustos." 
    },
    { 
        id: "43", 
        titulo: "Cobra-real", 
        preco: 1200, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A cobra-real é uma das maiores cobras venenosas do mundo, encontrada principalmente no sudeste asiático. Sua dieta inclui outras cobras, pequenos mamíferos e aves." 
    },
    { 
        id: "44", 
        titulo: "Camaleão", 
        preco: 250, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O camaleão é conhecido pela sua habilidade de mudar de cor, uma adaptação para camuflagem. Sua alimentação consiste em insetos, e ele é encontrado em regiões tropicais da África e Ásia." 
    },
    { 
        id: "45", 
        titulo: "Jacaré", 
        preco: 800, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O jacaré é um grande réptil encontrado em regiões da América do Norte e América Latina. Ele é carnívoro e se alimenta de peixes, mamíferos e aves." 
    },
    { 
        id: "46", 
        titulo: "Águia-careca", 
        preco: 500, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A águia-careca é a ave símbolo dos Estados Unidos, conhecida por sua força e visão aguçada. Alimenta-se principalmente de peixes e aves aquáticas, e pode ser encontrada em regiões costeiras e florestas." 
    },
    { 
        id: "47", 
        titulo: "Pinguim-imperador", 
        preco: 1000, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O pinguim-imperador é a maior espécie de pinguim, encontrado na Antártica. Sua dieta é composta por peixes, krill e outros invertebrados marinhos. Ele é conhecido por suas habilidades de natação." 
    },
    { 
        id: "48", 
        titulo: "Andorinha", 
        preco: 60, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A andorinha é uma pequena ave migratória que se alimenta principalmente de insetos. Ela é conhecida por sua habilidade em voo acrobático e pode ser encontrada em todo o mundo durante a primavera e verão." 
    },
    { 
        id: "49", 
        titulo: "Gavião-real", 
        preco: 750, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O gavião-real é uma das maiores aves de rapina, conhecido por sua força e habilidades de caça. Ele se alimenta de mamíferos pequenos, aves e répteis, e é encontrado em florestas e áreas montanhosas." 
    },
    { 
        id: "50", 
        titulo: "Condor", 
        preco: 1500, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O condor é uma ave de rapina de grande porte, encontrada na América do Norte e do Sul. Sua alimentação é composta por carniça, e é uma das aves com maior envergadura de asas, podendo alcançar até 3 metros." 
    },
    { 
        id: "41", 
        titulo: "Crocodilo-do-Nilo", 
        preco: 1500, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O crocodilo-do-Nilo é uma das maiores espécies de crocodilos, encontrado principalmente na África Subsaariana. Alimenta-se de grandes mamíferos, peixes e aves, vivendo em rios e lagos." 
    },
    { 
        id: "42", 
        titulo: "Iguana-verde", 
        preco: 200, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A iguana-verde é um réptil herbívoro, encontrado em florestas tropicais da América Central e do Sul. Ela se alimenta principalmente de folhas e frutas e pode viver em árvores e arbustos." 
    },
    { 
        id: "43", 
        titulo: "Cobra-real", 
        preco: 1200, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A cobra-real é uma das maiores cobras venenosas do mundo, encontrada principalmente no sudeste asiático. Sua dieta inclui outras cobras, pequenos mamíferos e aves." 
    },
    { 
        id: "44", 
        titulo: "Camaleão", 
        preco: 250, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O camaleão é conhecido pela sua habilidade de mudar de cor, uma adaptação para camuflagem. Sua alimentação consiste em insetos, e ele é encontrado em regiões tropicais da África e Ásia." 
    },
    { 
        id: "45", 
        titulo: "Jacaré", 
        preco: 800, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O jacaré é um grande réptil encontrado em regiões da América do Norte e América Latina. Ele é carnívoro e se alimenta de peixes, mamíferos e aves." 
    },
    { 
        id: "46", 
        titulo: "Águia-careca", 
        preco: 500, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A águia-careca é a ave símbolo dos Estados Unidos, conhecida por sua força e visão aguçada. Alimenta-se principalmente de peixes e aves aquáticas, e pode ser encontrada em regiões costeiras e florestas." 
    },
    { 
        id: "47", 
        titulo: "Pinguim-imperador", 
        preco: 1000, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O pinguim-imperador é a maior espécie de pinguim, encontrado na Antártica. Sua dieta é composta por peixes, krill e outros invertebrados marinhos. Ele é conhecido por suas habilidades de natação." 
    },
    { 
        id: "48", 
        titulo: "Andorinha", 
        preco: 60, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "A andorinha é uma pequena ave migratória que se alimenta principalmente de insetos. Ela é conhecida por sua habilidade em voo acrobático e pode ser encontrada em todo o mundo durante a primavera e verão." 
    },
    { 
        id: "49", 
        titulo: "Gavião-real", 
        preco: 750, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O gavião-real é uma das maiores aves de rapina, conhecido por sua força e habilidades de caça. Ele se alimenta de mamíferos pequenos, aves e répteis, e é encontrado em florestas e áreas montanhosas." 
    },
    { 
        id: "50", 
        titulo: "Condor", 
        preco: 1500, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '', 
        descricao: "O condor é uma ave de rapina de grande porte, encontrada na América do Norte e do Sul. Sua alimentação é composta por carniça, e é uma das aves com maior envergadura de asas, podendo alcançar até 3 metros." 
    }
];
