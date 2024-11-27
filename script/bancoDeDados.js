const produtos = [
    {   
        id: "1", 
        titulo: "Cágado-de-pente", 
        preco: 120, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-1.svg', 
        descricao: "O Cágado-de-pente é um réptil herbívoro que se alimenta de plantas aquáticas e algas. Ele vive em rios e lagos de água doce, sendo encontrado em regiões com clima tropical e subtropical. Seu habitat natural é composto por águas tranquilas e vegetação aquática densa. Esse cágado é adaptado ao clima quente e úmido, podendo passar bastante tempo submerso nas águas." 
    },
    { 
        id: "2", 
        titulo: "Cágado-de-barbicha", 
        preco: 100, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-2.svg', 
        descricao: "O Cágado-de-barbicha é um réptil aquático de água doce, conhecido por sua habilidade de se camuflar entre a vegetação. Alimenta-se principalmente de plantas aquáticas e pequenos invertebrados. Habita lagos e rios com águas calmas, preferindo ambientes com vegetação abundante. O clima ideal para esse cágado é o tropical, com alta umidade e temperaturas elevadas durante o ano todo." 
    },
    { 
        id: "3", 
        titulo: "Cágado-pintado", 
        preco: 90, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-3.svg', 
        descricao: "O Cágado-pintado é um pequeno réptil que habita rios e lagos da América do Norte. Sua característica marcante são as cores vibrantes e as manchas coloridas em seu casco. Ele é onívoro, alimentando-se de plantas aquáticas, insetos e pequenos peixes. O habitat desse cágado são áreas de água doce com vegetação aquática, e ele é adaptado a climas temperados e subtropicais." 
    },
    { 
        id: "5", 
        titulo: "Cágado-da-caatinga", 
        preco: 150, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-5.svg', 
        descricao: "O Cágado-da-caatinga é um réptil adaptado a ambientes semiáridos. Ele se alimenta principalmente de plantas de caatinga, frutos e raízes. Esse cágado habita áreas de vegetação esparsa e de clima seco, preferindo áreas com poucas chuvas e temperaturas elevadas durante a maior parte do ano. A Caatinga, seu habitat, é caracterizada por um clima quente e seco, com vegetação adaptada à escassez de água." 
    },
    { 
        id: "7", 
        titulo: "Cágado-de-pescoço-longo", 
        preco: 110, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-7.svg', 
        descricao: "Este cágado é caracterizado por seu pescoço mais longo, o que facilita sua alimentação de plantas aquáticas mais profundas. Ele habita rios e lagos da América do Sul, em ambientes com vegetação aquática. Alimenta-se principalmente de plantas, insetos e pequenos peixes. O clima quente e úmido da região amazônica e das áreas tropicais do continente são ideais para essa espécie." 
    },
    { 
        id: "8", 
        titulo: "Cágado-de-pescoço-curto", 
        preco: 95, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-8.svg', 
        descricao: "O Cágado-de-pescoço-curto vive em lagos e pântanos de águas calmas. Alimenta-se de plantas aquáticas e pequenos invertebrados. Seu habitat é composto por águas tranquilas com vegetação densa, onde o cágado se esconde para se proteger de predadores. O clima subtropical e tropical, com altas temperaturas e boa umidade, são ideais para essa espécie." 
    },
    { 
        id: "9", 
        titulo: "Cágado-de-carapaça-dura", 
        preco: 140, 
        categoria: "Cágados", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-9.svg', 
        descricao: "Com carapaça mais resistente, o Cágado-de-carapaça-dura é capaz de resistir a predadores naturais em seu habitat. Alimenta-se principalmente de vegetação aquática e pequenos invertebrados. Esse cágado habita lagos e rios de água doce, onde a vegetação aquática é abundante. Ele prefere climas tropicais, com temperaturas altas e umidade elevada, que favorecem seu desenvolvimento." 
    },
    { 
        id: "11", 
        titulo: "Camaleão-comum", 
        preco: 200, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-11.svg', 
        descricao: "O Camaleão-comum é conhecido pela sua habilidade de mudar de cor. Habita florestas tropicais e regiões subtropicais. Sua dieta inclui insetos, como moscas e gafanhotos, além de folhas e frutas. Prefere climas quentes e úmidos, encontrando seu habitat ideal em áreas com vegetação densa e bem iluminadas." 
    },
    { 
        id: "12", 
        titulo: "Iguana-verde", 
        preco: 250, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-12.svg', 
        descricao: "A Iguana-verde é uma espécie herbívora encontrada principalmente nas regiões tropicais da América Central e do Sul. Ela se alimenta de folhas, frutas e flores. Seu habitat é formado por florestas tropicais e vegetação densa. O clima quente e úmido das áreas tropicais é ideal para essa espécie, que vive em ambientes com grande disponibilidade de vegetação." 
    },
    { 
        id: "13", 
        titulo: "Dragão barbudo", 
        preco: 180, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-13.svg', 
        descricao: "O Dragão barbudo é um réptil nativo das regiões áridas e semiáridas da Austrália. Alimenta-se de insetos, frutas e pequenas plantas. Seu habitat é composto por áreas secas e rochosas, com clima quente e seco. A espécie é adaptada a viver em ambientes com pouca vegetação e temperaturas elevadas." 
    },
    { 
        id: "14", 
        titulo: "Gecko-leopardo", 
        preco: 120, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-14.svg', 
        descricao: "O Gecko-leopardo é um réptil de pequeno porte, popular no mercado de animais de estimação. Ele habita áreas secas e rochosas, alimentando-se de insetos e frutas. Seu habitat é composto por regiões áridas e semidesérticas, com clima quente e seco. Esse gecko é adaptado para sobreviver em ambientes com temperaturas extremas." 
    },
    { 
        id: "15", 
        titulo: "Serpente-de-corn", 
        preco: 150, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-15.svg', 
        descricao: "A serpente-de-corn é uma espécie não venenosa encontrada nas regiões do sudoeste dos Estados Unidos e México. Ela se alimenta de roedores, pequenos répteis e ovos, e prefere habitats secos e rochosos." 
    },
    { 
        id: "16", 
        titulo: "Jararaca", 
        preco: 220, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-16.svg', 
        descricao: "A jararaca é uma serpente venenosa, amplamente distribuída nas florestas tropicais da América Latina. Sua dieta consiste em pequenos mamíferos, aves e anfíbios. Prefere climas quentes e úmidos, sendo encontrada principalmente em áreas florestais." 
    },
    { 
        id: "17", 
        titulo: "Cobra-cega", 
        preco: 180, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-17.svg', 
        descricao: "A cobra-cega é uma espécie de serpente não venenosa encontrada em regiões subtropicais e tropicais. Sua dieta inclui invertebrados como minhocas e insetos, e ela é adaptada a viver em solos úmidos e subterrâneos." 
    },
    { 
        id: "18", 
        titulo: "Tegu", 
        preco: 200, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-18.svg', 
        descricao: "O Tegu é um réptil de grande porte, encontrado em várias partes da América do Sul, conhecido pela sua alimentação variada. Sua dieta inclui frutas, insetos e pequenos vertebrados. Habita regiões de florestas tropicais e savanas." 
    },
    { 
        id: "19", 
        titulo: "Cobra-cipó", 
        preco: 160, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-19.svg', 
        descricao: "A cobra-cipó é uma serpente não venenosa de corpo esguio, comum nas florestas tropicais e subtropicais. Ela se alimenta de pequenos roedores e répteis, e prefere habitats de vegetação densa, como árvores e arbustos." 
    },
    { 
        id: "21", 
        titulo: "Canário", 
        preco: 80, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-21.svg', 
        descricao: "O canário é uma ave pequena conhecida pelo seu canto melodioso, muito comum como animal de estimação. Alimenta-se de sementes e vegetais, e pode ser encontrado em climas temperados, geralmente em áreas abertas." 
    },
    { 
        id: "22", 
        titulo: "Periquito-australiano", 
        preco: 50, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-22.svg', 
        descricao: "O periquito australiano é uma ave pequena e colorida, originária da Austrália. Sua dieta é baseada em sementes e vegetação, e ele prefere viver em regiões abertas e áreas semiáridas." 
    },
    { 
        id: "24", 
        titulo: "Curió", 
        preco: 120, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-24.svg', 
        descricao: "O curió é uma ave muito apreciada pelo seu canto melodioso, e é comum em cativeiro no Brasil. Sua dieta consiste em sementes e grãos, e ele habita principalmente áreas de campo e florestas abertas." 
    },
    { 
        id: "25", 
        titulo: "Cacatua", 
        preco: 300, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-25.svg', 
        descricao: "A cacatua é uma ave exótica conhecida por seu comportamento brincalhão e suas penas em forma de crista. Ela se alimenta de sementes, frutas e nozes, e pode ser encontrada em florestas tropicais e subtropicais." 
    },
    { 
        id: "27", 
        titulo: "Pardal", 
        preco: 30, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-27.svg', 
        descricao: "O pardal é uma ave pequena e comum, com distribuição ampla no mundo, adaptada à vida urbana. Sua dieta é composta por sementes, grãos e pequenos insetos, e é encontrado principalmente em ambientes urbanos e suburbanos." 
    },
    { 
        id: "28", 
        titulo: "Sabiá", 
        preco: 60, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-28.svg', 
        descricao: "O sabiá é uma ave de médio porte com canto melodioso, muito apreciada no Brasil. Sua alimentação inclui frutas, insetos e sementes, e ela vive em florestas tropicais e áreas de campo." 
    },
    { 
        id: "29", 
        titulo: "Codorna", 
        preco: 100, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-29.svg', 
        descricao: "A codorna é uma ave pequena, comum em cativeiro, conhecida por sua carne macia e saborosa. Ela se alimenta de sementes, plantas e pequenos insetos, e habita áreas de campo aberto e regiões agrícolas." 
    },
    { 
        id: "30", 
        titulo: "Faisão", 
        preco: 250, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-30.svg', 
        descricao: "O faisão é uma ave de grande porte, com penas coloridas e características, muito apreciada por caçadores e colecionadores. Sua dieta é composta por sementes, frutas e pequenos insetos, e ele habita florestas abertas e áreas de campo." 
    },
    { 
        id: "31", 
        titulo: "Betta", 
        preco: 15, 
        categoria: "Peixes", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-31.svg', 
        descricao: "O betta é um peixe de água doce, conhecido por sua agressividade e cores vibrantes. Alimenta-se de pequenos invertebrados e pode ser encontrado em habitats aquáticos lentos e de água quente." 
    },
    { 
        id: "32", 
        titulo: "Neon", 
        preco: 20, 
        categoria: "Peixes", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-32.svg', 
        descricao: "O neon é um peixe de pequeno porte com uma faixa luminosa em seu corpo, muito comum em aquários. Sua dieta inclui pequenos invertebrados e algas, e ele prefere viver em cardumes em águas de pH neutro." 
    },
    { 
        id: "33", 
        titulo: "Carpa", 
        preco: 60, 
        categoria: "Peixes", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-33.svg', 
        descricao: "As carpas são peixes de grande porte, originários da Ásia, conhecidos por sua resistência e longevidade. Sua alimentação inclui algas, plantas aquáticas e pequenos invertebrados." 
    },
    { 
        id: "35", 
        titulo: "Peixe-palhaço", 
        preco: 50, 
        categoria: "Peixes", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-35.svg', 
        descricao: "O peixe-palhaço é uma espécie colorida que vive em simbiose com as anêmonas. Alimenta-se de pequenos crustáceos e detritos marinhos e habita recifes de corais tropicais." 
    },
    { 
        id: "36", 
        titulo: "Goldfish", 
        preco: 40, 
        categoria: "Peixes", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-36.svg', 
        descricao: "O goldfish é um peixe ornamental muito comum em aquários domésticos, conhecido por sua cor dourada e comportamento tranquilo. Sua dieta é composta por flocos de ração e vegetação aquática." 
    },
    { 
        id: "38", 
        titulo: "Axolotl", 
        preco: 350, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-38.svg', 
        descricao: "O axolotl é uma espécie de salamandra aquática que mantém suas características larvais durante a fase adulta. Sua dieta inclui vermes, pequenos peixes e outros invertebrados." 
    },
    { 
        id: "40", 
        titulo: "Salamandra", 
        preco: 120, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-40.svg', 
        descricao: "As salamandras são anfíbios caracterizados por sua pele lisa e úmida. Sua alimentação inclui insetos e pequenos invertebrados, e elas vivem em ambientes aquáticos ou úmidos." 
    },
    { 
        id: "42", 
        titulo: "Iguana-verde", 
        preco: 200, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-42.svg', 
        descricao: "A iguana-verde é um réptil herbívoro, encontrado em florestas tropicais da América Central e do Sul. Ela se alimenta principalmente de folhas e frutas e pode viver em árvores e arbustos." 
    },
    { 
        id: "44", 
        titulo: "Camaleão", 
        preco: 250, 
        categoria: "Répteis", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-44.svg', 
        descricao: "O camaleão é conhecido pela sua habilidade de mudar de cor, uma adaptação para camuflagem. Sua alimentação consiste em insetos, e ele é encontrado em regiões tropicais da África e Ásia." 
    },
    { 
        id: "48", 
        titulo: "Andorinha", 
        preco: 60, 
        categoria: "Aves", 
        tipo: "animal", 
        imagem: '../imagens/bancoDeDados-id-48.svg', 
        descricao: "A andorinha é uma pequena ave migratória que se alimenta principalmente de insetos. Ela é conhecida por sua habilidade em voo acrobático e pode ser encontrada em todo o mundo durante a primavera e verão." 
    },
    { 
        id: "61", 
        titulo: "Alimento para Répteis Insectívoros", 
        preco: 30, 
        categoria: "Répteis", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-61.svg', 
        descricao: "Ração especial para répteis insectívoros, como tegu e jararaca, rica em proteínas e cálcio." 
    },
    { 
        id: "62", 
        titulo: "Folhas e Vegetais para Répteis Herbívoros", 
        preco: 15, 
        categoria: "Répteis", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-62.svg', 
        descricao: "Mistura de folhas frescas e vegetais, como couve e alface, para répteis herbívoros como iguanas." 
    },
    { 
        id: "63", 
        titulo: "Alimento para Cobras e Serpentes", 
        preco: 25, 
        categoria: "Répteis", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-63.svg', 
        descricao: "Alimento específico para cobras, ideal para cobras não-venenosas como a serpente-de-corn." 
    },
    { 
        id: "64", 
        titulo: "Vermes e Insetos para Répteis", 
        preco: 20, 
        categoria: "Répteis", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-64.svg', 
        descricao: "Alimento com vermes e insetos, adequado para répteis carnívoros, como algumas cobras e lagartos." 
    },
    { 
        id: "65", 
        titulo: "Ração para Tartarugas", 
        preco: 40, 
        categoria: "Répteis", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-65.svg', 
        descricao: "Ração para tartarugas, rica em cálcio, indicada para tartarugas-das-bermudas." 
    },

    // Para aves (como papagaio, canário, arara)
    { 
        id: "66", 
        titulo: "Sementes para Aves", 
        preco: 12, 
        categoria: "Aves", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-66.svg', 
        descricao: "Mistura de sementes, ideal para aves como canário e periquito australiano." 
    },
    { 
        id: "67", 
        titulo: "Frutas Frescas para Aves", 
        preco: 18, 
        categoria: "Aves", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-67.svg', 
        descricao: "Frutas frescas como maçã e banana, adequadas para aves como o papagaio-do-mangue." 
    },
    { 
        id: "68", 
        titulo: "Alimento para Aves Exóticas", 
        preco: 25, 
        categoria: "Aves", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-68.svg', 
        descricao: "Ração balanceada, ideal para aves exóticas como a arara-azul e cacatua." 
    },
    { 
        id: "69", 
        titulo: "Verduras para Aves", 
        preco: 10, 
        categoria: "Aves", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-69.svg', 
        descricao: "Verduras frescas como couve e alface para aves herbívoras." 
    },
    { 
        id: "70", 
        titulo: "Nozes e Castanhas para Aves", 
        preco: 15, 
        categoria: "Aves", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-70.svg', 
        descricao: "Nozes e castanhas para aves, recomendadas para papagaios e araras." 
    },

    // Para peixes (como betta, neon, guppy)
    { 
        id: "71", 
        titulo: "Ração para Peixes Tropicais", 
        preco: 10, 
        categoria: "Peixes", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-71.svg', 
        descricao: "Ração para peixes tropicais, ideal para betta, neon e guppy." 
    },
    { 
        id: "72", 
        titulo: "Alimento Vivo para Peixes Carnívoros", 
        preco: 12, 
        categoria: "Peixes", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-72.svg', 
        descricao: "Alimento vivo como larvas de mosquito, perfeito para peixes carnívoros como betta." 
    },
    { 
        id: "73", 
        titulo: "Comida Congelada para Peixes", 
        preco: 15, 
        categoria: "Peixes", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-73.svg', 
        descricao: "Comida congelada como camarões e artêmia, ideal para peixes carnívoros e onívoros." 
    },

    // Para aracnídeos (como aranha-caranguejeira, escorpião)
    { 
        id: "74", 
        titulo: "Insetos para Aranhas e Escorpiões", 
        preco: 8, 
        categoria: "Aracnídeos", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-74.svg', 
        descricao: "Insetos vivos como grilos, tenébrio e outros, ideais para aracnídeos como tarântulas e escorpiões." 
    },
    { 
        id: "75", 
        titulo: "Vermes para Aranhas", 
        preco: 5, 
        categoria: "Aracnídeos", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-75.svg', 
        descricao: "Vermes e larvas, perfeitos para a alimentação de aranhas como a aranha-de-teia-de-ouro." 
    },

    // Para animais diversos
    { 
        id: "76", 
        titulo: "Pó de Calcio para Animais", 
        preco: 8, 
        categoria: "Répteis", 
        tipo: "comida", 
        imagem: '../imagens/bancoDeDados-id-76.svg', 
        descricao: "Pó de cálcio essencial para a saúde óssea de répteis como serpentes e tartarugas." 
    },
    {
        id: "77",
        titulo: "Gaiola para Pardal",
        preco: 50,
        categoria: "Aves",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-77.svg',
        descricao: "Gaiola ideal para abrigar pardais, proporcionando conforto e segurança."
    },
    {
        id: "79",
        titulo: "Comedouro para Sabiá",
        preco: 15,
        categoria: "Aves",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-79.svg',
        descricao: "Comedouro para sabiá, perfeito para sementes e frutas."
    },
    {
        id: "80",
        titulo: "Gaiola para Codorna",
        preco: 80,
        categoria: "Aves",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-80.svg',
        descricao: "Gaiola confortável e espaçosa para criar codornas em cativeiro."
    },
    {
        id: "81",
        titulo: "Pote de Ração para Faisão",
        preco: 20,
        categoria: "Aves",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-81.svg',
        descricao: "Pote de ração ideal para alimentar faisões, com compartimento para sementes e grãos."
    },
    {
        id: "82",
        titulo: "Aquário para Betta",
        preco: 120,
        categoria: "Peixes",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-82.svg',
        descricao: "Aquário compacto ideal para bettas, com sistema de filtragem e iluminação."
    },
    {
        id: "83",
        titulo: "Ração para Neon",
        preco: 10,
        categoria: "Peixes",
        tipo: "comida",
        imagem: '../imagens/bancoDeDados-id-83.svg',
        descricao: "Ração especial para peixes pequenos como o neon, rica em nutrientes."
    },
    {
        id: "84",
        titulo: "Filtro para Aquário de Carpas",
        preco: 250,
        categoria: "Peixes",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-84.svg',
        descricao: "Filtro de alta eficiência para manter o aquário de carpas limpo e saudável."
    },
    {
        id: "85",
        titulo: "Aquário Decorativo para Peixe-palhaço",
        preco: 300,
        categoria: "Peixes",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-85.svg',
        descricao: "Aquário decorativo com tema de recifes, perfeito para peixes-palhaço."
    },
    {
        id: "86",
        titulo: "Cápsulas de Cálcio para Iguanas",
        preco: 15,
        categoria: "Répteis",
        tipo: "comida",
        imagem: '../imagens/bancoDeDados-id-86.svg',
        descricao: "Cápsulas ricas em cálcio para fortalecer a saúde óssea de iguanas e outros répteis herbívoros."
    },
    {
        id: "87",
        titulo: "Lâmpada UV para Répteis",
        preco: 80,
        categoria: "Répteis",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-87.svg',
        descricao: "Lâmpada UV indispensável para répteis, auxiliando na absorção de cálcio e saúde geral."
    },
    {
        id: "88",
        titulo: "Toca de Cerâmica para Camaleão",
        preco: 60,
        categoria: "Répteis",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-88.svg',
        descricao: "Toca de cerâmica que proporciona um ambiente seguro e confortável para camaleões."
    },
    {
        id: "89",
        titulo: "Terrário para Répteis de Pequeno Porte",
        preco: 400,
        categoria: "Répteis",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-89.svg',
        descricao: "Terrário espaçoso com sistema de ventilação ideal para répteis de pequeno porte."
    },
    {
        id: "90",
        titulo: "Terrário para Aracnídeos",
        preco: 150,
        categoria: "Aracnídeos",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-90.svg',
        descricao: "Terrário compacto e ventilado, ideal para criar aranhas e escorpiões com segurança."
    },
    {
        id: "91",
        titulo: "Pinça para Alimentação de Aracnídeos",
        preco: 25,
        categoria: "Aracnídeos",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-91.svg',
        descricao: "Pinça longa e segura para manipular alimentos vivos ou objetos no terrário."
    },
    {
        id: "92",
        titulo: "Substrato para Terrários de Aracnídeos",
        preco: 40,
        categoria: "Aracnídeos",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-92.svg',
        descricao: "Substrato natural para manter a umidade e conforto no ambiente de aracnídeos."
    },
    {
        id: "93",
        titulo: "Aquário para Carpas",
        preco: 100,
        categoria: "Peixes",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-93.svg',
        descricao: "Aquário grande e resistente, ideal para manter carpas com amplo espaço para nado."
    },
    {
        id: "94",
        titulo: "Ração Premium para Goldfish",
        preco: 30,
        categoria: "Peixes",
        tipo: "comida",
        imagem: '../imagens/bancoDeDados-id-94.svg',
        descricao: "Ração de alta qualidade especialmente desenvolvida para peixes ornamentais como o goldfish."
    },
    {
        id: "95",
        titulo: "Decoração de Coral para Aquários",
        preco: 100,
        categoria: "Peixes",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-95.svg',
        descricao: "Decoração realista de coral para aquários, ideal para peixes como o peixe-palhaço."
    },
    {
        id: "96",
        titulo: "Filtro de Água para Aquários de Tetras",
        preco: 200,
        categoria: "Peixes",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-96.svg',
        descricao: "Filtro eficiente para manter aquários de água doce com tetras limpos e saudáveis."
    },
    {
        id: "97",
        titulo: "aquaterrário para Cágados",
        preco: 150,
        categoria: "Cágados",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-97.svg',
        descricao: "Casinha flutuante para cágados, ideal para descanso e conforto em aquaterrários."
    },
    {
        id: "98",
        titulo: "Ração Balanceada para Cágados",
        preco: 20,
        categoria: "Cágados",
        tipo: "comida",
        imagem: '../imagens/bancoDeDados-id-98.svg',
        descricao: "Ração rica em nutrientes, especialmente formulada para a dieta equilibrada de cágados."
    },
    {
        id: "99",
        titulo: "Lâmpada de Aquecimento para Cágados",
        preco: 80,
        categoria: "Cágados",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-99.svg',
        descricao: "Lâmpada de aquecimento para criar um ambiente confortável e saudável para cágados."
    },
    {
        id: "100",
        titulo: "Filtro para Aquaterrários de Cágados",
        preco: 250,
        categoria: "Cágados",
        tipo: "acessório",
        imagem: '../imagens/bancoDeDados-id-100.svg',
        descricao: "Filtro eficiente para manter o ambiente aquático de cágados limpo e livre de resíduos."
    }
];

export {produtos};
