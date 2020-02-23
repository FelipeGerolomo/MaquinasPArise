


var app = angular.module('myApp', []);
app.controller('photoCtrl', function ($scope, $http) {
    $scope.fotos = [
        {
            id: "balanca-sacaria",
            name: "Balança para Sacaria",
            photos: [
                {
                    src: "./images/fotos/Balanca/PHOTO-2020-01-22-16-13-04.jpg",
                    description: "Balança para Sacaria 1",
                    date: "22 JANEIRO",
                },
            ]
        },
        {
            id: "caixa-dozadora",
            name: "Caixa Dozadora",
            photos: [
                {
                    src: "./images/fotos/Caixa_Dozadora/caixa dozadora grande.JPG",
                    description: "Caixa Dozadora 1",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Caixa_Dozadora/caixa dozadora pequena.JPG",
                    description: "Caixa Dozadora 2",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Caixa_Dozadora/caixa dozadora.png",
                    description: "Caixa Dozadora 3",
                    date: "21 DEZEMBRO",
                }
            ]
        },
        {
            id: "elevador",
            name: "Elevador",
            photos: [
                {
                    src: "./images/fotos/Elevador/condutor-elevador-metalico.png",
                    description: "Elevador 1",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Elevador/elevador grand.JPG",
                    description: "Elevador 2",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Elevador/elevador peq.JPG",
                    description: "Elevador 3",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Elevador/Elevador.jpg",
                    description: "Elevador 4",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "estrutura",
            name: "Estrutura",
            photos: [
                {
                    src: "./images/fotos/Estrutura/Estrutura.jpg",
                    description: "Estrutura 1",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Estrutura/Estrutura 2.jpg",
                    description: "Estrutura 2",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "fabrica-racao",
            name: "Fabrica de Ração",
            photos: [
                {
                    src: "./images/fotos/Fabrica_Racao/fabrica.png",
                    description: "Fabrica de Ração 1",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Fabrica_Racao/PHOTO-2020-01-22-16-13-05.jpg",
                    description: "Fabrica de ração conforme especificações do cliente 2",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "fornalha",
            name: "Fornalha",
            photos: [
                {
                    src: "./images/fotos/Fornalha/fornalha-de-calor-irradiado.png",
                    description: "Fornalha 1",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Fornalha/fornalha-de-calor-irradiadogrande.JPG",
                    description: "Fornalha 2",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Fornalha/fornalha-de-calor-irradiadoPEQ.JPG",
                    description: "Fornalha 3",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "levantador",
            name: "Levantador",
            photos: [
                {
                    src: "./images/fotos/Levantador/Levantador GRD.JPG",
                    description: "Levantador 1",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Levantador/levantador PEQ.JPG",
                    description: "Levantador 2",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "misturador-racoes",
            name: "Misturador de Rações",
            photos: [
                {
                    src: "./images/fotos/Misturador_Racoes/misturador-de-racoes-tipo-vertical.png",
                    description: "Misturador de Rações 1",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Misturador_Racoes/misturador-de-racoes-tipo-verticalGRANDE.JPG",
                    description: "Misturador de Rações 2",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Misturador_Racoes/misturador-de-racoes-tipo-verticalPEQ.JPG",
                    description: "Misturador de Rações 3",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Misturador_Racoes/PHOTO-2020-01-22-16-13-03.jpg",
                    description: "Misturador de ração tipo Y para amostragem 4",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "moinho",
            name: "Moinho",
            photos: [
                {
                    src: "./images/fotos/Moinho/mOINHO.jpg",
                    description: "Moinho 1",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "peneira",
            name: "Peneiras",
            photos: [
                {
                    src: "./images/fotos/Peneira/peneira vibratorio.png",
                    description: "Peneira 1",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Peneira/PeneiraoGrande.JPG",
                    description: "Peneira 2",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Peneira/PeneiraoPequeno.JPG",
                    description: "Peneira 3",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Peneira/PHOTO-2020-01-22-16-18-51.jpg",
                    description: "Peneiras para classificação de feijão 4",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Peneira/PHOTO-2020-01-22-16-18-53_1.jpg",
                    description: "Peneiras para classificação de feijão 5",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Peneira/PHOTO-2020-01-22-16-18-53.jpg",
                    description: "Peneiras para classificação de feijão 6",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "roscas",
            name: "Roscas",
            photos: [
                {
                    src: "./images/fotos/Roscas/rosca chupim grande.JPG",
                    description: "Rosca 1",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Roscas/rosca chupim grande.png",
                    description: "Rosca 2",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Roscas/rosca chupim peq.JPG",
                    description: "Rosca 3",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Roscas/rosca chupim peq.png",
                    description: "Rosca 4",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Roscas/rosca chupim.png",
                    description: "Rosca 5",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Roscas/Rosca.jpg",
                    description: "Rosca 6",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "silo",
            name: "Silo",
            photos: [
                {
                    src: "./images/fotos/Silo/Silo.jpg",
                    description: "Silo 1",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Silo/SiloGRANDE.jpg",
                    description: "Silo 2",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Silo/SiloPEQ.jpg",
                    description: "Silo 3",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "transportadora-mecanica",
            name: "Transportadora Mecânica",
            photos: [
                {
                    src: "./images/fotos/Transportadora_Mecanica/transportadora mecanica continua de correia.png",
                    description: "Transportadora Mecânica 1",
                    date: "21 DEZEMBRO",
                },
            ]
        }, 
        {
            id: "outros",
            name: "Outros",
            photos: [
                {
                    src: "./images/fotos/Outros/imagem1grande.JPG",
                    description: "Outros 1",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/Outros/imagem2pequena.JPG",
                    description: "Outros 2",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "chapaPerfuraPeneiras",
            name: "Chapa Perfura Peneiras",
            photos: [
                {
                    src: "./images/fotos/CHAPA PERFURA PENEIRAS/03 CHAPA PERFURA-72092600.jpg",
                    description: "Chapa Perfura Peneiras",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "elevadoresDeCaneca",
            name: "Elevadores de Caneca",
            photos: [
                {
                    src: "./images/fotos/ELEVADORES DE CANECA/elevador 01.png",
                    description: "Elevadores de Caneca",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/ELEVADORES DE CANECA/ELEVADOR.jpg",
                    description: "Elevadores de Caneca",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "esteriaParaMontagemDeCesta",
            name: "Esteira para Montagem de Cesta Básica",
            photos: [
                {
                    src: "./images/fotos/ESTEIRA PARA MONTAGEM DE  CESTA BASICA/ESTEIRA CESTA BASICA 01.jpg",
                    description: "Esteira para Montagem de Cesta Básica",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/ESTEIRA PARA MONTAGEM DE  CESTA BASICA/ESTEIRA CESTA BASICA.jpg",
                    description: "Esteira para Montagem de Cesta Básica",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "maquinasNovaUsadas",
            name: "Máquinas Novas e Usadas",
            photos: [
                {
                    src: "./images/fotos/MAQUINAS NOVA E USADA/BALANÇA 60 KL.png",
                    description: "Balança 60KG",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/MAQUINAS NOVA E USADA/COSTURADEIRAS.jpg",
                    description: "Costuradeiras",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "mesaDensimetrica",
            name: "Mesa Densimétrica",
            photos: [
                {
                    src: "./images/fotos/MESA DENSIMETRICA/MESA DENSIMETRICA.jpg",
                    description: "Mesa Densimétrica",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "peçasReposicaoParaMaquinasAgricolas",
            name: "Peças de Reposição para Máquinas Agricólas",
            photos: [
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/13 ROLETINHO TAPI.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/17 CORREIA LAMINADA 40101200.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/20 ROLETE TAPIR.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/24 MANCAL PRE-LIMPEZA ANT.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/26 BREQUE BRUNIDOR ARROZ.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/27 ELICOIDE.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/32 ROLAMENTO.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/34 CANECA PLASTICA-84379000.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/37 BUCHA PARA ROLAMENTO HE.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/38 FACA PARA CANJIQUEIRA DESGERMINADORA.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/39 ROTOR ABANADEIRA.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/52 MOTOR ELETRICO USADO.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/56 CHAPA LISA.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/58 CORREIA CORRUGADA ASPERA 40103900.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/59- POLIA FF.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/Canecas para Elevadores.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS DE REPOSIÇAO PARA MAQUINAS AGRICOLA/placa de ima.jpg",
                    description: "Peças de Reposição para Máquinas Agricólas",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "pecasEspeciais",
            name: "Peças Especiais",
            photos: [
                {
                    src: "./images/fotos/PEÇAS ESPECIAIS/18 FECHAMENTO MONITOR.jpg",
                    description: "Peças Especiais",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS ESPECIAIS/25 INSUFLADOR E ASPIRADOR CENTRIFUGO CLE 600.jpg",
                    description: "Peças Especiais",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS ESPECIAIS/29 BICA ESPECIAL.jpg",
                    description: "Peças Especiais",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS ESPECIAIS/31 QUADRO PARA PENEIRA.jpg",
                    description: "Peças Especiais",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS ESPECIAIS/PENEIRA PARA CLASSIFICAÇAO DE CEREAIS 1.jpg",
                    description: "Peças Especiais",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS ESPECIAIS/PENEIRA PARA CLASSIFICÇAO DE CEREAIS.jpg",
                    description: "Peças Especiais",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "pecasParaSeladoraMatisa",
            name: "Peças para Seladora Matisa",
            photos: [
                {
                    src: "./images/fotos/PEÇAS PARA  SELADORA MATISA/01 FITA DE AÇO 1630.jpg",
                    description: "Peças para Seladora Matisa",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS PARA  SELADORA MATISA/02 JOGO DE ELETRODO MATISA.jpg",
                    description: "Peças para Seladora Matisa",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS PARA  SELADORA MATISA/04 FELTRO LUBRIFICADOR.jpg",
                    description: "Peças para Seladora Matisa",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS PARA  SELADORA MATISA/05 CORREIA REDONDA NYLON.jpg",
                    description: "Peças para Seladora Matisa",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS PARA  SELADORA MATISA/06 RESISTENCIA MATISA 110.jpg",
                    description: "Peças para Seladora Matisa",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS PARA  SELADORA MATISA/07 LIMPADOR DE FITA SILICONE.jpg",
                    description: "Peças para Seladora Matisa",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS PARA  SELADORA MATISA/12 OLEO DE MAMONA 1 L.jpg",
                    description: "Peças para Seladora Matisa",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PEÇAS PARA  SELADORA MATISA/12 OLEO DE MAMONA 5 L.jpg",
                    description: "Peças para Seladora Matisa",
                    date: "21 DEZEMBRO",
                },
            ]
        },
        {
            id: "pecasParaMaquinasdeFeijao",
            name: "Peças para Máquinas de Feijão",
            photos: [
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/09 PENEIRA COLUNA DE AR COM REFORÇO 73141900.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/10 ESCOVA NYLON-96035000.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/11 REGULADOR ESCOVA.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/13 ROLETINHO TAPI.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/14 ESCOVA POLIDOR FEIJAO 84379000.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/15 PENEIRA POLIDOR 1070-72092600.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/16 TAMBORIM PARA POLIDOR.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/17 CORREIA LAMINADA 40101200.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/21 PARAFUSO CANECA.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/22 ESFERA BORRACHA 30MM.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/23 CORREIA COM CANECA 84379000.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/24 MANCAL PRE-LIMPEZA ANT.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/32 ROLAMENTO.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/35 ABANADEIRA COLUNA MT 250.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
                {
                    src: "./images/fotos/PECAS PARA MAQUNAS DE FEIJAO/37 BUCHA PARA ROLAMENTO HE.jpg",
                    description: "Peças para Máquinas de Feijão",
                    date: "21 DEZEMBRO",
                },
            ]
        },
    ]
});


$('[data-magnify]').magnify({
    headToolbar: [
        'close'
    ],
    footToolbar: [
        'zoomIn',
        'zoomOut',
        'prev',
        'fullscreen',
        'next',
        'actualSize',
        'rotateRight'
    ],
    title: false
});


