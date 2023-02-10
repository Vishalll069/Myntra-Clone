let products = [
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6837541/2022/1/27/86827c8b-4d8b-4adf-b70e-c9419c9b27ed1643280119188TRESemmeWomenKeratinSmoothShampoo185ml1.jpg",
      "brand": "TRESemme",
      "type": "Keratin Smooth Shampoo 185 ml",
      "price": "164",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11782162/2020/9/11/137a3d23-9716-48a6-974d-13c2f3d486581599823221533-Dove-Women-Shampoo-and-Conditioner-5131599823220943-1.jpg",
      "brand": "Dove",
      "type": "Anti Dandruff Shampoo 80 ml",
      "price": "71",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12371154/2022/1/21/b614ce80-354f-4183-823c-a450774eb2a51642768848965LOrealParis6OilNourishShampoo1000ml1.jpg",
      "brand": "LOreal",
      "type": "6 Oil Nourish Shampoo",
      "price": "899",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10414868/2019/11/4/f319a2c2-111c-4f60-8590-8fbaee2b8b0c1572873854677-LOreal-Paris-Rapid-Reviver-Extraordinary-Clay-Deep-Condition-1.jpg",
      "brand": "LOreal",
      "type": "Clay Deep Conditioner 180 ml",
      "price": "180",
      "MP": "240",
      "offer": 25
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16956352/2022/2/24/9e53f81a-37ce-4a03-8105-46d3f3ab427a1645682787117-Nyle-Naturals-Soft-and-Shiny-Anti-Hairfall-Shampoo-With-Good-1.jpg",
      "brand": "Nyle Naturals",
      "type": "Anti-Hairfall Shampoo 800 ml",
      "price": "288",
      "MP": "395",
      "offer": 27
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5711014/2020/6/6/6a20c92d-65b1-4818-8ba6-362e7a302f071591434193053LOrealParis6OilNourishShampoo175ml1.jpg",
      "brand": "LOreal",
      "type": "6 Oil Nourish Sustainable Shampoo",
      "price": "116",
      "MP": "135",
      "offer": 14
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15729188/2021/12/28/8350f83e-1c38-460e-8d43-8913d7ff39321640639197783-Garnier-Fructis-Hair-Food---Reparing-Papaya-Shampoo-For-Dama-1.jpg",
      "brand": "Garnier",
      "type": "Deep Repair Papaya Hair Food",
      "price": "499",
      "MP": "549",
      "offer": 9
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11318448/2020/7/20/a5bb7f96-8dac-43e2-b6f4-d91f2de00ba51595249938310ProfusionCosmeticsMasterArtistryParadiseBathSoakSaltandOilFo1.jpg",
      "brand": "Pantene",
      "type": "Silky Smooth Care Shampoo",
      "price": "330",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16679476/2022/2/9/4dbd7e0d-2081-4eab-8471-e86480515bc71644394088083-LOreal-Paris-Extraordinary-Oil-Smooth-Conditioner-for-Smooth-1.jpg",
      "brand": "LOreal",
      "type": "Extraordinary Oil Conditioner",
      "price": "859",
      "MP": "999",
      "offer": 14
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10414880/2022/1/21/0913bcba-d7ca-4914-9abe-a1c734e3181e1642768817165LOrealParisRapidReviverTotalRepair5DeepConditioner180ml1.jpg",
      "brand": "LOreal",
      "type": "Total Repair 5 Conditioner",
      "price": "180",
      "MP": "240",
      "offer": 25
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6837550/2019/1/25/85deada1-38f2-4564-a402-39ab45a575e61548408272841-TRESemme-Hair-Fall-Defense-Shampoo-580-ml-7651548408272699-1.jpg",
      "brand": "TRESemme",
      "type": "Hair Fall Defense Shampoo",
      "price": "579",
      "MP": "610",
      "offer": 5
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/12371142/2022/1/28/b67f4f22-c85f-403b-8b57-1b8a1a1e2c711643364351332LorealParisTotalRepair5Shampoo1L1.jpg",
      "brand": "LOreal",
      "type": "Total Repair 5 Shampoo 1L",
      "price": "863",
      "MP": "899",
      "offer": 4
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16466410/2021/12/10/7ac401c5-6f41-4bae-8365-706fddafaaa81639134673552LAFZAnahitaWomenBodySpray150ml1.jpg",
      "brand": "LAFZ",
      "type": "Women Anahita Body Spray 150ml",
      "price": "150",
      "MP": "200",
      "offer": 25
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15506348/2021/12/21/e3f44c70-bd55-47ff-80e6-8da6223038a61640068889128-Dove-Body-Love-Paraben-Free-48hrs-Hydration-Cooling-Gel-Crem-1.jpg",
      "brand": "Dove",
      "type": "Body Love Cooling Gel Creme",
      "price": "310",
      "MP": "330",
      "offer": 6
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14275018/2021/6/14/10d000a4-2dac-4622-a9f5-f25470c153821623676848372-Miss-Claire-Women-Lip-Liner-7171623676848315-1.jpg",
      "brand": "Miss Claire",
      "type": "Mahogany L-52 Lip Liner",
      "price": "65",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14499392/2022/3/9/ea597da5-522d-4d2a-91ac-8f0238cacf0a1646825647811KayaYouthSetof3HydroReplenishSoothingAloeVeraFaceMask1.jpg",
      "brand": "Kaya Youth",
      "type": "Set of 3 Soothing Face Mask",
      "price": "375",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/7111969/2018/9/14/cc985c63-5938-47c7-8f32-1c37adef83431536925184235-Miss-Claire-L-33-Fire-Brick-Red-Glimmer-Stick-for-Lips-18-g--1.jpg",
      "brand": "Miss Claire",
      "type": "L-33 Fire Brick Red Lip Liner",
      "price": "65",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14275120/2021/6/14/a700c157-e3e7-41c6-a8fd-87b14f85a9831623674472535-Miss-Claire-Women-Eyeshadow-2281623674472303-1.jpg",
      "brand": "Miss Claire",
      "type": "Single Eyeshadow - 0852",
      "price": "160",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14145770/2021/5/11/e5d3024e-09bd-4c33-90c6-f662c983cc561620734587937-Miss-Claire-Women-Nail-Polish-1981620734587637-1.jpg",
      "brand": "Miss Claire",
      "type": "G35 Gel Effect Nail Polish 5ml",
      "price": "90",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15950086/2021/11/12/8664fe24-45ed-490e-b88d-f63db3d8cdea1636697833261NYBaeDewyDropsLiquidFoundationMacchiato30ml1.jpg",
      "brand": "NY Bae",
      "type": "Liquid Foundation",
      "price": "183",
      "MP": "229",
      "offer": 20
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16276418/2021/11/27/77c97e08-5595-448d-b8cc-c12988fda8fc1638006914749MildcaresReusableStandandPeeForWomenPackof21.jpg",
      "brand": "MILDCARES",
      "type": "Set Of 2 Urination Funnel",
      "price": "395",
      "MP": "1198",
      "offer": 67
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/17192980/2022/3/14/c708c015-6f3a-4cf3-a5d1-75dce0b93b3f1647230032958SevenSeasInfiniteTouchLoosePowderSPF-18Compact-Skin1.jpg",
      "brand": "Seven Seas",
      "type": "Infinite Touch Loose Powder Compact SPF-18- 20 g",
      "price": "205",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15580926/2021/10/12/8862ea5d-de92-40ad-be58-269dd75c33991634026539248-SWISS-BEAUTY-Gel-Effect-Lustre-Nail-Lacquer-20-2616340265391-1.jpg",
      "brand": "SWISS BEAUTY",
      "type": "Gel Lustre Nail Lacquer-20",
      "price": "84",
      "MP": "99",
      "offer": 15
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14275086/2021/8/5/02d9ac78-065a-4837-b7db-3710b37f77541628150496529-Miss-Claire-Women-Lip-Gloss-4471628150496396-1.jpg",
      "brand": "Miss Claire",
      "type": "Matte & Pearly Gloss - 106",
      "price": "125",
      "MP": null,
      "offer": null
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15738030/2021/10/6/0981ea5e-93ef-4d3c-bef2-66efd9d378a71633503180732GYNOCUP1.jpg",
      "brand": "GYNOCUP",
      "type": "Pack of 5 Removal Razor",
      "price": "249",
      "MP": "499",
      "offer": 50
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16762094/2022/3/15/732a90e4-1b6f-458a-8617-cf6c3dfff7b21647339342144MissRoseMoisturizingCreamyNonTransferMatteLipstick-7301-007B1.jpg",
      "brand": "MISS ROSE",
      "type": "Matte Lipstick - 7301-007B 50",
      "price": "249",
      "MP": "399",
      "offer": 150
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16532336/2022/1/11/857cb291-24af-4c50-8f36-07201ef56b5e1641897897136-essence-LONG-LASTING-lipstick-08-Passionate-4451641897896932-1.jpg",
      "brand": "essence",
      "type": "08 Passionate Lasting Lipstick",
      "price": "310",
      "MP": null,
      "offer": null
    },
    {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11178082/2020/1/13/22d48310-290a-429b-8534-db884cde683f1578907784720-Maybelline-New-York-Sensational-03-Flush-It-Red-Liquid-Matte-1.jpg",
        "brand": "Maybelline",
        "type": "Matte Lipstick-Flush It Red 03",
        "price": "268",
        "MP": "349",
        "offer": 23
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11178096/2022/3/28/16f525cb-5e71-4193-8f59-3a52b4925f501648457264774-Maybelline-New-York-Sensational-Liquid-Matte-Lipstick---08-S-1.jpg",
        "brand": "Maybelline",
        "type": "Liquid Matte Sensationally Me",
        "price": "289",
        "MP": "349",
        "offer": 17
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/14336572/2021/5/24/0c23a790-a8e3-4a27-be5e-2b177698a2c61621829340252-Maybelline-Women-Beauty-Gift-Set-1431621829340019-1.jpg",
        "brand": "Maybelline",
        "type": "Set of 4 Liquid Matte Minis",
        "price": "316",
        "MP": "396",
        "offer": 20
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2230635/2017/11/7/11510034492880-Maybelline-Women-Lipstick-9421510034492872-1.jpg",
        "brand": "Maybelline",
        "type": "Super Stay Matte - 15 Lover",
        "price": "650",
        "MP": null,
        "offer": null
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13105590/2022/4/13/fe16c1fd-2fd7-4281-9fac-211e1b3252271649824360798Lakme9to5PrimerMatteLipstick-PlumPickMP41.jpg",
        "brand": "Lakme",
        "type": "Matte Lipstick-Plum Pick MP4",
        "price": "400",
        "MP": "500",
        "offer": 20
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8051025/2022/2/21/61beefd1-6915-4944-bf1b-a7463e5f260f1645423276110-Maybelline-New-York-Super-Stay-Matte-Ink-Liquid-Lipstick---F-1.jpg",
        "brand": "Maybelline",
        "type": "Super Stay Matte - Founder 115",
        "price": "594",
        "MP": "699",
        "offer": 15
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/6870092/2018/12/26/001c5c9d-ec8a-4091-a16b-df8a850b0bbe1545825125810-Maybelline-New-York-80-Ruler-Super-Stay-Matte-Ink-Liquid-Lip-1.jpg",
        "brand": "Maybelline",
        "type": "Super Stay Matte - Ruler 80",
        "price": "608",
        "MP": "699",
        "offer": 13
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15990822/2021/12/8/fa878233-56ad-462c-aa4d-b0aa43583c151638957490027-Maybelline-Color-Sensational-Ultimattes-Lipstick-More-Blush--5.jpg",
        "brand": "Maybelline",
        "type": "Lipstick 499 More Blush",
        "price": "494",
        "MP": "549",
        "offer": 10
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2383022/2018/3/14/11521032706846-Maybelline-Color-Sensational-Chilli-Nude-Inti-Matte-Nudes-Lipstick-2141521032706813-1.jpg",
        "brand": "Maybelline",
        "type": "Matte Lipstick - Chilli Nude",
        "price": "209",
        "MP": "299",
        "offer": 30
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2019/12/20/91913af8-d794-4aa7-b4a1-b54176fbb3321576792969444-2.jpg",
        "brand": "SUGAR",
        "type": "Matte Transferproof Lipstick",
        "price": "699",
        "MP": null,
        "offer": null
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/11632896/2021/7/26/9d860722-88ac-4ec4-adb0-19eebbaeb0e41627289836416-SUGAR-Set-of-4-Smudge-Me-Not-Liquid-Mini-Nude-Lipstick-41416-1.jpg",
        "brand": "SUGAR",
        "type": "Set of 4 Mini Lipstick",
        "price": "799",
        "MP": null,
        "offer": null
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/productimage/2021/1/9/b0841404-fbd0-41bc-afcd-56eeacdec8e01610179137422-1.jpg",
        "brand": "Just Herbs",
        "type": "Ayurvedic Lipstick Trial Kit",
        "price": "460",
        "MP": "575",
        "offer": 20
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/13105572/2021/1/25/9547adc2-db67-42b6-81d5-fbd835046a5d1611572248485-Lakme-Women-Lipstick-2481611572247698-1.jpg",
        "brand": "Lakme",
        "type": "Lipstick-Rosy Sunday MP8",
        "price": "470",
        "MP": "500",
        "offer": 6
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15990832/2021/12/1/39122196-78f1-4485-ae4d-fd6f6a57c84f1638338165721-Maybelline-Women-Lipstick-5591638338165630-1.jpg",
        "brand": "Maybelline",
        "type": "Lipstick- 399 More Magenta",
        "price": "466",
        "MP": "549",
        "offer": 15
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1906679/2022/4/21/287444a2-5425-48b4-8f3f-9777d201a4251650544469288LakmeEnrichLipCrayonCinnamonBrown091.jpg",
        "brand": "Lakme",
        "type": "Enrich Lip Crayon - Cinnamon Brown",
        "price": "258",
        "MP": "275",
        "offer": 6
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/55269/2021/3/24/2a8ba3df-cca2-4f48-ab17-8cd307538c621616563309201-Lakme-Absolute-Shine-Line-Eye-Liner---Black-3261616563308869-1.jpg",
        "brand": "Lakme",
        "type": "Shine Line Eye Liner - Black",
        "price": "378",
        "MP": "450",
        "offer": 16
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514918/2020/7/24/b1706334-cc5a-4330-b86f-c7b520e395e41595568842568LakmeAbsoluteShineLineEyeliner-ShimmeryBronze45ml1.jpg",
        "brand": "Lakme",
        "type": "Eyeliner - Shimmery Bronze",
        "price": "441",
        "MP": "450",
        "offer": 2
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514916/2020/7/24/f55c439b-c0c5-4608-8cf5-d2ede94043fe1595568838351LakmeAbsoluteShineLineEyeliner-SteelGrey45ml1.jpg",
        "brand": "Lakme",
        "type": "Line Eyeliner - Steel Grey",
        "price": "441",
        "MP": "450",
        "offer": 2
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1967184/2018/4/9/11523275170012-Maybelline-EYESTUDIO-Blackest-Black-Dramatic-Gel-Eyeliner-950-1301523275169972-1.jpg",
        "brand": "Maybelline",
        "type": "Gel Eyeliner - Blackest Black",
        "price": "350",
        "MP": "500",
        "offer": 30
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1514917/2022/2/23/67f121d0-0250-48a8-80e9-f95a913f49541645615415239-Lakme-Absolute-Shine-Line-Eyeliner---Sparkling-Olive-6441645-1.jpg",
        "brand": "Lakme",
        "type": "Eyeliner - Sparkling Olive",
        "price": "441",
        "MP": "450",
        "offer": 2
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5660739/2022/4/18/d346f98d-585b-480e-847c-64bfa8f004d11650284885776MaybellineNewYorkColossalKajal-SuperBlack1.jpg",
        "brand": "Maybelline",
        "type": "Colossal Kajal - Super Black",
        "price": "240",
        "MP": "300",
        "offer": 20
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8450977/2022/2/23/1db855f2-5677-4590-9eef-2ded0bce94311645615492693-Lakme-9to5-Pure-Rouge-Blusher---Coral-Punch-1741645615492210-1.jpg",
        "brand": "Lakme",
        "type": "9to5 Pure Rouge Blusher",
        "price": "500",
        "MP": null,
        "offer": null
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2368963/2020/7/24/bd290bdf-abb9-4739-992c-87591d0a36ec1595568846153LakmeEyeconicFineTipLinerPen-DeepBlack1ml1.jpg",
        "brand": "Lakme",
        "type": "Fine Tip Liner Pen-Deep Black",
        "price": "445",
        "MP": "500",
        "offer": 11
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/56167/2019/1/11/08984654-668c-4f50-828b-a7b7d2d3492e1547199758092-Colorbar-Precision-Waterproof-Eye-Liner-4461547199758032-1.jpg",
        "brand": "Colorbar",
        "type": "Waterproof Eyeliner - Black",
        "price": "339",
        "MP": "399",
        "offer": 15
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2000582/2022/4/26/8cae6f02-a974-4209-946c-843c932ad11a1650957988536-Lakme-9-to-5-SPF-30-Complexion-Care-Cream--Honey-30-g-809165-1.jpg",
        "brand": "Lakme",
        "type": "Honey SPF 30 CC Cream - 30 g",
        "price": "360",
        "MP": null,
        "offer": null
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/image/style/properties/285218/Lakme-9-to-5-Black-Impact-Eyeliner_1_96bd14879dc3013d4aed0c7216d36419.jpg",
        "brand": "Lakme",
        "type": "9to5 Eyeliner - Black Impact",
        "price": "252",
        "MP": "300",
        "offer": 16
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/5803205/2018/6/5/499a621e-d253-4c47-b5de-ec262a99b0561528191281546-Lakme-9-to-5-Naturale-Black-Gel-Kajal-3-g-7971528191281456-1.jpg",
        "brand": "Lakme",
        "type": "Naturale Black Gel Kajal",
        "price": "441",
        "MP": "475",
        "offer": 7
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/8886405/2020/5/27/d5cd2eda-fe90-414a-9a61-cce19fb4c1e71590583803223FACESCANADAMagneteyesKajal-Black01035g1.jpg",
        "brand": "FACES CANADA",
        "type": "Magneteyes Kajal Black 01",
        "price": "139",
        "MP": "179",
        "offer": 22
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/2966311/2022/3/31/c85baf75-a526-47f1-bd27-c2a54e24b0581648724132330MaybellineNewYorkFaceStudioMasterChromeMetallicHighlighter-M1.jpg",
        "brand": "Maybelline",
        "type": "Studio Metallic Highlighter",
        "price": "449",
        "MP": "599",
        "offer": 25
      },
      {
        "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/1546432/2022/4/1/3b25eb26-7876-4ca1-ba02-e6f93950777f1648804871850MaybellineNewYorkFitMeConcealer-10Light68ml1.jpg",
        "brand": "Maybelline",
        "type": "Fit Me Concealer - Light 10",
        "price": "399",
        "MP": "499",
        "offer": 20
      }


  ];

window.addEventListener("load", function () {
    displayproducts(products);
  });

  function myFunction(){
    location.reload();
  }

function displayproducts(products){
    document.querySelector("#data").innerHTML = "";
    products.map(function (ele, i){
        var div = document.createElement('div');
        var brand = document.createElement("h3");
        brand.textContent = ele.brand;
        
        var image = document.createElement("img");
        image.setAttribute("src", ele.image)
        
        var desc = document.createElement("h3");
        desc.textContent = ele.type;
        desc.setAttribute("class","desc");

        var brandbox = document.createElement("div");
        brandbox.setAttribute("class","brandbox");

        var pricebox = document.createElement("div");
        pricebox.setAttribute("class","pricebox");

        var buttonbox =document.createElement("div");
        buttonbox.setAttribute("class","buttonbox");


        var mrp = document.createElement("p");
        mrp.textContent ="RS."+ele.price;
        
        var finalprice = document.createElement("p");
        finalprice.innerHTML ="RS."+ele.MP;

        var offer=document.createElement("p");
        offer.textContent="("+ele.offer+"%OFF)";
        var wishbt=document.createElement("button");
         wishbt.setAttribute("class","wishbtn");
        wishbt.innerHTML='<i class="fa-solid fa-heart"></i> whishlist';
        wishbt.addEventListener("click",function(){
            addtoWish(i);
           
        
            if(  wishbt.style.backgroundColor=="rgb(83, 87, 102)"){
              wishbt.style.backgroundColor = "white";
              wishbt.style.color="#FF69B4";
             
              alert("item removed");
            }
            else{
              wishbt.style.color="white";
              wishbt.style.backgroundColor = "rgb(83, 87, 102)";
              
              alert("item added to wishlist");
            }


           
           console.log( wishbt.style.backgroundColor);
        });
        brandbox.append(brand,desc);
        pricebox.append(mrp, finalprice,offer);
        buttonbox.append(wishbt);
        div.append(image,brandbox, pricebox,buttonbox);
        document.getElementById("data").append(div);
        
    });
    console.log(products);
    console.log("hello there");
    var wish = JSON.parse(localStorage.getItem("wishlistGo"))||[];
    function addtoWish(index){
        var wishitem = products.filter(function (elem, i){
            return i=== index;
        });
        wish.push(wishitem[0]);
        console.log(wishitem);
        console.log("wish-item");
        localStorage.setItem("wish",JSON.stringify(wish));

    }
    
}

console.log("this is the product-page");

function sortvalue(){
    var sortvalue=document.getElementById("sortit").value;
    console.log(sortvalue);
    if(sortvalue=="htl"){
        products.sort(function(a,b){
            return b.price-a.price;
        });
        displayproducts(products);
    }
    if (sortvalue == "lth") {
        products.sort(function(a,b) {
          return a.price - b.price;
        });
        displayproducts(products);
      }
      if(sortvalue =="discount"){
        products.sort(function(a,b){
            return b.offer - a.offer;
        });
        displayproducts(products);
      }

      if(sortvalue=="SbyR"){
        location.reload();
      }
      if(sortvalue=="new"){
        products.sort();
        products.reverse();
        displayproducts(products);
      }
      if(sortvalue=="Popularity"){
        products.sort(function(){return 0.5 - Math.random()});
        displayproducts(products);
      }
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
 
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
     let filteredArray = [];
      checkboxes.forEach(function(cb) {
        if (cb.checked) {
          filteredArray = [...filteredArray, ...products.filter(function(obj) {
            return obj.brand === cb.value;
            console.log(obj.brand,cb.value);
         
          })];

        }
      });

      checkboxes.forEach(function(cb) {
        if (cb.checked) {
          filteredArray = [...filteredArray, ...products.filter(function(obj) {
            if(cb.value==10){
            return obj.offer >10;
          }
          if(cb.value==20){
            return obj.offer >20;
          }
          if(cb.value==30){
            return obj.offer >30;
          }
          if(cb.value==40){
            return obj.offer >40;
          }
          if(cb.value==50){
            return obj.offer >50;
          }
            console.log(obj.brand,cb.value);
         
          })];
          
        }
      });

      // to edit
    //   checkboxes.forEach(function(cb) {
    //     if (cb.checked) {
    //       filteredArray = [...filteredArray, ...products.filter(function(obj) {
    //         return obj.color === cb.value;
    //         console.log(obj.brand,cb.value);
         
    //       })];
          
    //     }
    //   });

      // to edit

      // to edit
    
      if(filteredArray.length===0){
          displayproducts(products);
      }
      else{
          displayproducts(filteredArray);
      }
    });
  });


