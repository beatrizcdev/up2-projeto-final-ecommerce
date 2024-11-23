const produtos = [

        {   
            id: "1", 
            especie: "Cágado-de-pente", 
            preco: 120, categoria: "Cágados", tipo: "animal", 
            imagem: '', 
            descricao: "Cágado-de-pente é um réptil herbívoro que se alimenta de plantas aquáticas e algas, e vive em rios e lagos de água doce." 
        },
        { 
            id: "2", 
            especie: "Cágado-de-barbicha", 
            preco: 100, 
            categoria: "Cágados", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O Cágado-de-barbicha é um réptil aquático de água doce, conhecido por sua habilidade de se camuflar entre a vegetação." 
        },
        { 
            id: "3", 
            especie: "Cágado-pintado", 
            preco: 90, 
            categoria: "Cágados", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O Cágado-pintado é um pequeno réptil que habita rios e lagos da América do Norte, com marcas coloridas em seu casco." 
        },
        { 
            id: "4", 
            especie: "Cágado-de-ouvido-vermelho", 
            preco: 80, 
            categoria: "Cágados", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Este cágado é conhecido por suas manchas vermelhas nas laterais da cabeça, e é comum em habitats de água doce." },
        { 
            id: "5", 
            especie: "Cágado-da-caatinga", 
            preco: 150, 
            categoria: "Cágados", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Habitante da caatinga nordestina, o Cágado-da-caatinga é um réptil adaptado a ambientes semiáridos." 
        },
        { 
            id: "6", 
            especie: "Cágado-da-amazônia", 
            preco: 130, 
            categoria: "Cágados", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Espécie nativa da região amazônica, conhecida por sua resistência ao ambiente úmido e quente da floresta." 
        },
        { 
            id: "7", 
            especie: "Cágado-de-pescoço-longo", 
            preco: 110, 
            categoria: "Cágados", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Este cágado é caracterizado por seu pescoço mais longo e é encontrado em regiões de água doce da América do Sul." 
        },
        { 
            id: "8", 
            especie: "Cágado-de-pescoço-curto", 
            preco: 95, categoria: "Cágados", tipo: "animal", 
            imagem: '', 
            descricao: "Possui um pescoço mais curto que o do cágado de pescoço longo, e vive em lagos e pântanos." 
        },
        { 
            id: "9", 
            especie: "Cágado-de-carapaça-dura", 
            preco: 140, 
            categoria: "Cágados", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Com carapaça mais resistente, este cágado é capaz de resistir a predadores naturais em seu habitat." 
        },
        { 
            id: "10", 
            especie: "Cágado-mexicano", 
            preco: 125, 
            categoria: "Cágados", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Espécie endêmica do México, adaptada a viver em ambientes aquáticos frescos." 
        },
        { 
            id: "11", 
            especie: "Camaleão-comum", 
            preco: 200, 
            categoria: "Répteis", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Camaleão conhecido por sua habilidade de mudar de cor, habitando regiões tropicais e subtropicais." 
        },
        { 
            id: "12", 
            especie: "Iguana-verde", 
            preco: 250, 
            categoria: "Répteis", 
            tipo: "animal", 
            imagem: '', 
            descricao: "A iguana verde é uma espécie herbívora encontrada principalmente nas regiões tropicais da América Central e do Sul." 
        },
        { 
            id: "13", 
            especie: "Dragão barbudo", 
            preco: 180, 
            categoria: "Répteis", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Dragão barbudo é um réptil com aparência distinta, nativo das regiões áridas e semiáridas da Austrália." 
        },
        { 
            id: "14", 
            especie: "Gecko-leopardo", 
            preco: 120, 
            categoria: "Répteis", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Gecko-leopardo é um réptil de pequeno porte, popular no mercado de animais de estimação devido à sua personalidade dócil." 
        },
        { 
            id: "15", 
            especie: "Serpente-de-corn", 
            preco: 150, 
            categoria: "Répteis", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Serpente-de-corn é uma espécie não venenosa encontrada nas regiões do sudoeste dos Estados Unidos e México." 
        },
        { 
            id: "6", 
            especie: "Jararaca", 
            preco: 220, 
            categoria: "Répteis", 
            tipo: "animal", 
            imagem: '', 
            descricao: "A jararaca é uma serpente venenosa, amplamente distribuída nas florestas tropicais da América Latina." 
        },
        { 
            id: "17", especie: "Cobra-cega", 
            preco: 180, 
            categoria: "Répteis", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Cobra-cega é uma espécie de serpente não venenosa encontrada em regiões subtropicais e tropicais." 
        },
        { 
            id: "18", 
            especie: "Tegu", 
            preco: 200, 
            categoria: "Répteis", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O Tegu é um réptil de grande porte, encontrado em várias partes da América do Sul, conhecido pela sua alimentação variada." 
        },
        { 
            id: "19", 
            especie: "Cobra-cipó", 
            preco: 160, 
            categoria: "Répteis", 
            tipo: "animal", 
            imagem: '', 
            descricao: "A cobra-cipó é uma serpente não venenosa de corpo esguio, comum nas florestas tropicais e subtropicais." 
        },
        { 
            id: "20", 
            especie: "Tartaruga-das-bermudas", 
            preco: 350, 
            categoria: "Répteis", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Tartaruga marinha em risco de extinção, nativa das Ilhas Bermudas, com uma dieta de águas rasas e corais." 
        },
        { 
            id: "21", 
            especie: "Canário", 
            preco: 80, 
            categoria: "Aves", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O canário é uma ave pequena conhecida pelo canto melodioso, muito comum como animal de estimação." 
        },
        { 
            id: "22", 
            especie: "Periquito-australiano", 
            preco: 50, 
            categoria: "Aves", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Periquito australiano é uma ave muito popular, pequena e colorida, originária da Austrália." 
        },
        { 
            id: "23", 
            especie: "Papagaio-do-mangue", 
            preco: 450, 
            categoria: "Aves", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O papagaio-do-mangue é uma espécie de ave endêmica da região litorânea brasileira, com penas verdes e vermelhas." 
        },
        { 
            id: "24", 
            especie: "Curió", 
            preco: 120, 
            categoria: "Aves", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Curió é uma ave muito apreciada pelo seu canto melodioso e é comum em cativeiro no Brasil." 
        },
        { 
            id: "25", 
            especie: "Cacatua", 
            preco: 300, 
            categoria: "Aves", 
            tipo: "animal", 
            imagem: '', 
            descricao: "A cacatua é uma ave exótica conhecida por seu comportamento brincalhão e suas penas em forma de crista." 
        },
        { 
            id: "26", especie: "Arara-azul", 
            preco: 800, 
            categoria: "Aves", 
            tipo: "animal", 
            imagem: '', 
            descricao: "A arara-azul é uma espécie de papagaio nativa da América do Sul, famosa pela sua plumagem vibrante." 
        },
        { 
            id: "27", 
            especie: "Pardal", 
            preco: 30, 
            categoria: "Aves", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Pardal é uma ave pequena e comum, com distribuição ampla no mundo, adaptada à vida urbana." 
        },
        { 
            id: "28", 
            especie: "Sabiá", 
            preco: 60, 
            categoria: "Aves", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Sabiá é uma ave de médio porte com canto melodioso, muito apreciada no Brasil." 
        },
        { 
            id: "29", 
            especie: "Codorna", 
            preco: 100, 
            categoria: "Aves", 
            tipo: "animal", 
            imagem: '', 
            descricao: "A codorna é uma ave pequena, comum em cativeiro, conhecida por sua carne macia e saborosa." 
        },
        { 
            id: "30", 
            especie: "Faisão", 
            preco: 250, 
            categoria: "Aves", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Faisão é uma ave de grande porte, com penas coloridas e características, muito apreciada por caçadores e colecionadores." 
        },
        { 
            id: "31", 
            especie: "Betta", 
            preco: 15, 
            categoria: "Peixes", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O betta é um peixe de água doce, conhecido por sua agressividade e cores vibrantes." 
        },
        { 
            id: "32", 
            especie: "Neon", 
            preco: 20, 
            categoria: "Peixes", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O neon é um peixe de pequeno porte com uma faixa luminosa em seu corpo, muito comum em aquários." 
        },
        { 
            id: "33", 
            especie: "Carpa", 
            preco: 60, 
            categoria: "Peixes", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Carpas são peixes de grande porte, originários da Ásia, conhecidos por sua resistência e longevidade." 
        },
        { 
            id: "34", 
            especie: "Peixe-dourado", 
            preco: 50, 
            categoria: "Peixes", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O peixe-dourado é uma espécie de peixe ornamental muito popular, conhecida por sua coloração dourada e fácil cuidado." 
        },
        { 
            id: "35", 
            especie: "Molly", 
            preco: 18, 
            categoria: "Peixes", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O Molly é um peixe pequeno e resistente, frequentemente encontrado em aquários de água doce." 
        },
        { 
            id: "36", 
            especie: "Guppy", 
            preco: 12, 
            categoria: "Peixes", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Guppy é um peixe colorido e de pequeno porte, muito popular em aquários de água doce." 
        },
        { 
            id: "37", 
            especie: "Escalares", 
            preco: 40, 
            categoria: "Peixes", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O peixe-escalar é um peixe de água doce de formas elegantes, muito popular em aquários comunitários." 
        },
        { 
            id: "38", 
            especie: "Acará-disco", 
            preco: 100, 
            categoria: "Peixes", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O acará-disco é um peixe de água doce, conhecido por sua forma circular e cores vibrantes, muito apreciado em aquários." 
        },
        { 
            id: "39", 
            especie: "Barbo", 
            preco: 30, 
            categoria: "Peixes", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O barbo é um peixe de água doce de tamanho médio, conhecido por sua resistência e variedade de cores." 
        },
        { 
            id: "40", 
            especie: "Neon-tetra", 
            preco: 25, 
            categoria: "Peixes", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O Neon-tetra é um pequeno peixe de água doce com uma marca luminosa em seu corpo." 
        },
        { 
            id: "41", 
            especie: "Aranha-de-jardim", 
            preco: 40, 
            categoria: "Aracnídeos", 
            tipo: "animal", 
            imagem: '', 
            descricao: "A aranha-de-jardim é uma aranha comum encontrada em áreas urbanas e rurais, conhecida pela sua teia em formato radial." 
        },
        { 
            id: "42", 
            especie: "Aranha-caranguejeira", 
            preco: 120, 
            categoria: "Aracnídeos", 
            tipo: "animal", 
            imagem: '', 
            descricao: "A aranha-caranguejeira é uma aranha grande e peluda, popular como animal de estimação, nativa das regiões tropicais." 
        },
        { 
            id: "43", 
            especie: "Viúva-negra", 
            preco: 150, 
            categoria: "Aracnídeos", 
            tipo: "animal", 
            imagem: '', 
            descricao: "A viúva-negra é uma aranha venenosa conhecida pelo seu corpo preto com marca vermelha, encontrada em áreas mais secas e rochosas." 
        },
        { 
            id: "44", 
            especie: "Aranha-marrom", 
            preco: 180, 
            categoria: "Aracnídeos", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Aranha-marrom é uma espécie venenosa que habita ambientes urbanos e rurais, com uma marca característica em forma de violino." 
        },
        { 
            id: "45", 
            especie: "Aranha-de-teia-de-ouro", 
            preco: 70, 
            categoria: "Aracnídeos", 
            tipo: "animal", 
            imagem: '', 
            descricao: "A aranha-de-teia-de-ouro é famosa por construir teias grandes e complexas, com fios dourados que brilham ao sol." 
        },
        { 
            id: "46", 
            especie: "Escorpião-amarelo", 
            preco: 100, 
            categoria: "Aracnídeos", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O escorpião-amarelo é uma espécie venenosa encontrada principalmente no Brasil, sendo perigoso, mas comum em áreas secas." 
        },
        { 
            id: "47", 
            especie: "Escorpião-de-cauda-gorda", 
            preco: 130, 
            categoria: "Aracnídeos", 
            tipo: "animal", 
            imagem: '', 
            descricao: "O escorpião-de-cauda-gorda é uma espécie de escorpião que se destaca pela cauda mais espessa e seu veneno potente." 
        },
        { 
            id: "48", 
            especie: "Aranha-de-patas-longas", 
            preco: 40, 
            categoria: "Aracnídeos", 
            tipo: "animal", 
            imagem: '', 
            descricao: "A aranha-de-patas-longas é uma aranha pequena e inofensiva, com longas patas que parecem frágeis." 
        },
        { 
            id: "49", 
            especie: "Aranha-banana", 
            preco: 200, 
            categoria: "Aracnídeos", 
            tipo: "animal", 
            imagem: '', 
            descricao: "Aranha-banana é uma espécie venenosa encontrada em regiões tropicais e subtropicais, conhecida por sua velocidade e veneno potente." 
        },
        { 
            id: "50", 
            especie: "Tarántula", 
            preco: 250, 
            categoria: "Aracnídeos", 
            tipo: "animal", 
            imagem: '', 
            descricao: "A tarântula é uma aranha de grande porte e peluda, muito popular como animal de estimação, com diversas variedades de cores e tamanhos." 
        }
]