<TeXmacs|1.99.19>

<style|source>

<\body>
  <\active*>
    <\src-title>
      <src-style-file|kjh-vita|0.1>

      <\src-purpose>
        A CV style based on the curriculum of Kieran Healy
        <hlink|http://github.com/kjhealy|http://github.com/kjhealy>.

        The content of the CV is property of Kieran Healy.

        \;

        Reimplemented in <TeXmacs> by M. Gubinelli. \<copyright\> License
        Creative Commons CC BY 4.0.

        \;

        Icons (phone, web, twitter,...) are converted in PNG from Fontawesome
        5 (\<copyright\> CC BY 4.0)
      </src-purpose>

      \;
    </src-title>
  </active*>

  <use-package|generic|british|reduced-margins>

  <\active*>
    <\src-comment>
      Global style parameters.
    </src-comment>
  </active*>

  <assign|timeline-hsep|<macro|7fn>>

  <\active*>
    <\src-comment>
      Global page parameters.
    </src-comment>
  </active*>

  <assign|font|sansserif=Gill Sans, Palatino>

  <assign|font-base-size|10>

  <assign|font-family|rm>

  <assign|full-screen-mode|false>

  <assign|math-font|math-termes>

  <assign|page-bot|3cm>

  <assign|page-top|3cm>

  <assign|page-medium|paper>

  <assign|page-even|<plus|1.5cm|<timeline-hsep>>>

  <assign|page-odd|<plus|1.5cm|<timeline-hsep>>>

  <assign|page-right|2.5cm>

  <assign|page-screen-margin|false>

  <assign|par-columns|1>

  <assign|par-par-sep|0.4fn>

  <assign|par-sep|0.4fn>

  <assign|src-compact|inline args>

  <\active*>
    <\src-comment>
      General informations (TODO: phone link has to be normalized without
      spaces)
    </src-comment>
  </active*>

  <assign|cv-title|<\macro|body>
    <\with|font|Gill Sans|font-shape|condensed|par-mode|center>
      <\with|par-sep|0.0fn>
        <with|font-series|bold|font-size|2.5|<arg|body>><next-line><with|font-size|2|par-par-sep|0.3fn|par-sep|0.4fn|Curriculum
        Vit�>
      </with>
    </with>
  </macro>>

  <assign|cv-address|<\macro|body>
    <\with|font|Avenir Next|par-mode|right|font-family|ss|font-size|0.8>
      <arg|body>
    </with>
  </macro>>

  <assign|cv-phone|<macro|text|<hlink|<arg|text>|<merge|tel:|<arg|text>>>
  <image|<tuple|<#89504E470D0A1A0A0000000D494844520000006400000064080600000070E29554000000017352474200AECE1CE900000044655849664D4D002A00000008000187690004000000010000001A000000000003A00100030000000100010000A00200040000000100000064A00300040000000100000064000000002FBBDE4100000713494441547801ED9C5BA855451CC68FA6DD8C0AD3A4AB166921487483A4C8136204896446054558214597870AA997C8075F227B2822A4084F45F4523D54127413C14B64417829CCEA5879CA320DCD2E5A56BF2FCFE2ACB3D97B9FB567CDCC9AB567FEF0B16E33F3BF7C33B366CD9AB546F5241929029792E00630174C029F81B58358C7F64790C4530416A2E710F8B70DB671AD0F2C02D3C128602CA5321B6BAD47C67331733318D3A1B97B48AF96A356A4ED06F00748523202CF92BF5DCB287AED00E5AC07CBC07CA06EAFA5A416D23C34E339FD1D38B6F9E5D267BFA484EC3EF401FB5F952EB1CB0B588C7F455B40D974FFA0EB1530B9CB636AECDE11E4EC076503DD69FE9FD03949CA930C8FC0B51CDE39FC9497A3716839CA8BA69A29519FDE69EDB6957EA066B1726EEE8C0AC9F89FD4D1CE5DAC9782FBAA36370D7B8718703DD41DD2D47AEF506A2143C1B9835D57CF1D435ADAEF1D6C7F399EAB550D751B0703BB530B395CE9E6B1991240FDDB9F0839CC42E537F3C1CAB03711D2D3A3A1EE9501B40E99B02711D2D3134AEB1021BB62274443DD9B1589406467EC848430D4CDD785819809D150F7EE7C3402D8FF2666424219EAE6EB417FFE20B6FD2A67751B1F08B3E309B19190F9ABA16E168450B63FCBB858BBAC9086BA5925D9122B215AD6A3856FA1C9261914630B513F7D42686C60CFA7B2294642D457EF93F381C9C7B2274642FEC6EF3E391F90FC862D5A2519ADA8CBDA0A421961ADCA9888B185C8F7BDE02AB0510701C89A006C08C284E3B0E23550754B991D44340231420B3D96002DE9AC8218AD8C3F06246988C0028EF703DFA4BCD360473ACC45E07CF6FB814F52EECFE94FBB4D22309173AB812F52A635B1219D6A88C0588E9703D7A4E87BC5241D44402FB0B478CD15314B3BB025251D8C402FDB5DC00529BA67253188C059E451F7629394CF9BD911EB937AB358B43BD7CF45CD37D994976D16165B597370D866EBD0B7EF53620BA24D7F35D7649390F76C1A175B59D7582643C4DE145B106DF93B8682F49EC266EBD0D7B6E9E34E4386EEB14C86887DCCD096E8B39D4C04F4DF129BAD436F2B35844E6210010D4B6D92A1B25E37B02365210273816D3254DECC14DDCE23701259BE07B609D1D2D524061178953CB6C95079BD06B6449F45FF387141C6BBD147D62000179047EFB76D13A277F51719D81375167DDAA69F88D92643E5BD1475640D9CD7D3B8161AB820438B264E37B029EA2C4F392243043F1C75640D9CD777222E5A86CAD41CD8910636459BE53A3CD754860B42F4BEE3B268236BE0F82CF2B8185165E43E696053B4592EC6732DB6CE82677BFB056557FD9BA711C91D450A7D02A06D95321DE5AE569088D8BF80FE151FAC6899CB73403FAC97C1BBC10A702AF02D5A2138006CB7887C798FF876AA883E8DEBAF07AB41DED8FCFE0F5C9B0A7CC90C14B99830CCFBB40A1DFA3B443032014B34EEFE16E40D6DB5AF7549EAC65CCB2C14D87ED1D4E8D34E749CE2DA91A2E5AB5B7A1EFC0E1A0D1DE97825795CD6AADB295F3FC31FC98E32D775DFE805954A916EA9A8932EDE31EB81EC1950D48632E91EA892894EBBA5A28EDE62D1A973286B8327325EB46877474595E9968A90A287B44B3AB2A879627551FB40119D65D3AC43CFD1CDCD7073D666B754C4F91DB8617A633C8DBC6F82227A6CA4F91A5D5A95E2455C754B4502F1211E7652EB4693FE2EF00B2852BE8D347A963A0F3897B3D1603A5AB2E16856C60B053DD51B3E751B593E1F5B8D242F2F685FA964BDE4763D56EF24600FB6F1462D7839703553DBCA4E0D6FE7B5B1CBDAA50B29C9E419A295E136CE2BD8573778A8AE6C31F0D93D65BEE8BDF8AD0DF6383BFC889233C5216D15F869400F8E0BC17650857D22436B7CBD49154E16D5A9A9EC2DA0687ADBE9BC9321D60F56E8B0ED00DA2C4FDDA69E6BBCCB7A34DA74A41BCAD283AA5EF17A178DE3D77AD71AB6423D67CC0195AC544F840CAF1C5B399C09D60C3FEDF76812EABAA19B29EBC3DBC4E144BFA16FAD6D5BC4A46824B514B87C2FD33AF22DAEF471BE6C0DAB637EDD2FF4714E30A27B8824C61BBB7CD67CD85B0A4068A2E53175ACE126366B4E6A0918038215AD9752F33571B04E7974AFD428AA16E2F3058F6F12B5D656CB3BC7D582894123B584C777A07CE8D33FD5835E4DD8AA925CD16584A80BBE17047DAF684586CEEBDFB107808F5AEB52C79FF8F004180F6A2F759E68D4E849AFA027D79E859C03CBD877597B5D942D225680A9393FBA66773E9EB8089A8B32F5DAF969300574ADD461A2519F363C0A26762D0B0D8EE9E1C9458D2E5BE627D8751BD06287A8A40F6FCB06CF56FE016CD18849734ED1CA223CB715509372B4B0E171A00569D9E427BBF18A96499A04D2348F1647BF01F410A7653F499A44E07DCE990678A47C7B297B257808684A632C48321801CDF236933338B9069CD9EC62C173226607D83488CD6C3702ADB3D2645F922611684588921E0FB496F546301BE801ECD73650D72302B6E7B09FFD241D44E03FD0C6E5FBC8D7A1390000000049454E44AE426082>|phone-solid.png>|0.8em|||-0.1em>>>

  <assign|cv-mail|<macro|text|<hlink|<arg|text>|<merge|mailto:|<arg|text>>>
  <image|<tuple|<#89504E470D0A1A0A0000000D494844520000006400000064080600000070E29554000000017352474200AECE1CE900000044655849664D4D002A00000008000187690004000000010000001A000000000003A00100030000000100010000A00200040000000100000064A00300040000000100000064000000002FBBDE4100000675494441547801ED9D5B8C5D6314C7A744AA8DB404715713D2460D0FA512894804894BF040101E84B46E7179901091346E2178246DF0DC29C990A8C4934B3D119A10AA54517D10542FD2D4A8B43A7EFF9A6F32B39DB3BFB5F7D997EFF4AC95FCB3CF3E7B7DDF5ADF6FEDFDEDCBD993191A7273024EC009380127E0049C801370024EC009380127E0049C80137002FD4160564E9AC7B06D215A8416A0C3915B7902FFD0742BDA84BE43BB90C986F15A8D265CB5321063B1CEB5656C1D475E8C661888B59877B447F8D60BD10E03B19F6197B0B61F7941DA6120F6AAC1904EEA47A00D482770B7F608E8443FA22BA7DB50D779ACBDFC062EF2B18C78B30AF23C3A6BE0869FE680E768CADA8E541DB7F609EC50410E202DDDDA2730A142E8CACA2D110287259287A73149C00B92D8AEE00549B020BF2596D320A7B34D47C8E82013486CEC076B318FA436227F8ED52E03D5607ED8414EE5C3A75E94D6764AB1570D66D86CD656223F529A6520E662DFD5F4B0710FF2C2D4CB408CC5DA648BF1F2F34A7D0511DB734C9598E674149FFDB7F5EA8BA22B29B12D6DF7D0F22FE453586F0CF6C2F0DED255C8345CC2FAF7C88B528EC10FB03B3FC3B4E7555D238F212F4A31066FC1ECE822F41FC6F96B74B9A1911ED73F88FE465E987C0662F410B2FCD674257E7A814EB59802AB37EB9E4096371497E2F723F2A27466B0053617A29889F53348EC03CBA90FE18BF7D878028A990EC3375168E7CBFF58688AD26BB8313B09870F5196DBFFBE90C32FE85214331D8E0F205D41643B1EB47531D0746E99A2747AF8B50BB3AE20F7D36005B24C61BA82D8DC25C020144657A017A09889E59368FA1495E5D3B520C15153D889B1486C9F87D6A0D06E5096AF33E6A9A7B47CEE669AA2DE47312E510775A029EC3264B1E538FD896281FB7DFB3863BCCB02049FBC292ACBC10C4E87D953C832858DE0A7D753B3C10E9575DD26688C3113ABA751DE1495655218DA3A029C826236178757513660BFAFBFC69834B69889D13A5474BC851B28C0367435B2D84D38FD818A26969ABFC670B365C0F85C85C4A8CC184A355220BDF1F822D2DBF3311BC6E1635426C114DA7C42EE1A43CCC4E205243665F32EDD30042C92ECB3245A643E0D31DA5A2AD7E79065A73B03BF2A76BA9E0B22583A9C3535594C576B3FA3B6205BE32A47E56AB11B71DA85AC7DE7F955D24908F00A49CD318CE0387CD656348010BBCAE53BE476BC611C1AEBAA8AC7516941044597BB964B423D62B81FA5F4E39772D1A320E516B3C5387C89AADC11D457E51DAA53DD34DDADCE0D762E3E5FA1AA0756B43FED48CAC562CB70AAEBE6B7561063246E79F2A943FF65D4CBD549D102047FC5546CCB54AB27DC6FA0D0B68E65AD9D2BE19FD0C5C862D7E2B413D531D04E7D2A96625AEC229CB6A04EFD54F95DED0194EC3EB402E95142CC74BDBF1E5539C84E7D2986E5DE42EF3F3F8E34864EFD54FD5D234142D21F31A8D350CC66E3A06924B4AB7AA9BE1523667AFCF101AA3A7E5E7F8D0653223BD00DC862F2AB720A535FD6D8D7E3BB1DE5C1AB635BE301C32074CF3217C5EC741C746485766597EA437DC54C27F795A86C9C5EDBB51658896F442328663AF73C8ACADCB3A88DDA5ACE5F67E3B701F50AB597F6AD0657E27BD0ADC86267E23486AC0396AFDA584C8F7E76236BDF75F9B59E4018D82A601C692187CF52F4363A8042FBB0D477DA261F8BE9E4FE120AED5B5DCE9A4CC49278133E7A14710BFAC6184C379DE74D4A4DD45ED2833E8B2DC4690D5A62716ECAA7D53D824166E3EB91C47D483B4B9DB69CCE355D66E3B7BD9E5C4201C8BBC03AB9868AE80D9AB50916228C3BD9822841DD37E8415E157F4FAF23EE0EF43B0A834F7199747201D8E740BC0E959DC6AEA1EDFAC40B11C6DA170509C9EA847D27B2DC53E8A8BA1D7D8142FBE497DAE39464BFD96E12FE16E9C652576492C6A11BBBE99ACF7A5F59BF16A4AF201749B68A93659178EE1B21E00589006A7AB317A469E291785E9008A0A6377B419A261E89E70589006A7AB317A469E291785E9008A0A637AB20FD78A7DE34A7A6E24DA8207AA2EA9606819D2AC86769E4E259A8162AC8A8A34886C0A81E2EEAAF83F4EA8B7E5F766B8FC0C17FE8A22344EFACEAF765FDF9965B3B04C45E35D8177EE8D9CACA5E7405726B9EC06384EC78EAD0EFD7E328F95FD60E911CC55ACC736D98ADAB9117A55E06622CD6334C27F56EA697D074A25F8416A030BDF1D1AD04019D27746AD8847402B7BECC87AB9B1370024EC009380127E0049C801370024EC009380127E0049C8013488FC0BF8253B388387EB9590000000049454E44AE426082>|envelope-solid.png>|0.8em|||-0.1em>>>

  <assign|cv-webpage|<macro|text|<hlink|<arg|text>|<merge|http://|<arg|text>>>
  <image|<tuple|<#89504E470D0A1A0A0000000D494844520000006400000064080600000070E29554000000017352474200AECE1CE900000044655849664D4D002A00000008000187690004000000010000001A000000000003A00100030000000100010000A00200040000000100000064A00300040000000100000064000000002FBBDE4100000B98494441547801ED5D5DAC5E45156D2D14A1D682506AC0041E2408526B13F969400C893E6008E5814008A02126057F92FA46080FA431BE14210836F485E813D1C4A2953EC00B505424045B1A7E0AD1D26B90622F34586DA93F80AEF5C17C399DBBD79C993933E77EF77276B239DFECD97BED3533E7CC9933E7DCB260C12013D5030B278A4D3A992508391B7ACE87A1BB717C057AF8C3F270E8A9079623CF9DD023D0FF794A1BEBE83348C71E5889F8635A30AE44FD01A83F107E993EF40DC9B1A83C2FE4F051AC3B138DBE1DFA12F43E68486E42E5BB50BFF35599BE8C09C96654BE08BD0D7A46C8713ED7F12AB80AFA28F47D283BF435E852A8921B50F11E5475BEB23386B14A96A1621F94F1F47D04BA16BA083AEFE538B4F066E8AB50BF03AF09B4FE32D4FDC788F1315499B1C450723D2AFCD83DB0AD8392F3BC938568D1B5D029A8DF70969F842A390D15D3502B2EC5460C6259427E4F412DBCBDB0F364A1CFBC9073D18AC7A1566369E394751154C93654A8D8543BB1945C828A10DE63A877CB6B8531D1F6C560B701FA6F68A8A10F075A71454B6C0857D5115309EF1F2A8E76B6E50E28DB36A784CBD7E7A0A1C6B9BA0B45CB3845EC88C47058314762AAE9A7ED2A71F83B81316796CBB780ACF5C0E61AD33C6E87AF921A5787CB1DBA4AD4BDC4C5BAE33B20BE4E919F043B57233F853AC231C7AB03C47F9B881593CFF9105BC975A8707E31C707E03F712BB193408A2BA59806389FFDF0E793B225BCC93BBF5A47B59060E7BE9598FF09F89F089D08E19ED12E686AC7DD1360FF60065E6A7EE650B20915A978BCAF9CA200FBB273309E87A692A7FF1A417205EC6D2BB39C7C7E0C7330972597C2E8FBC7947962CEDAA0709AE2591143D4F7E136895AE9DC9A89E9E788293397251F83711F3406C3F7E12AAEF7E9EB0424FD5D26613620B489B8BB03AEDF396D65E652723F2ADAE2553D170DC72BE0D2F64500FC35549189B17F4D903ABF236E4C6EDF87392DB91C46DF37A5BC05F1BCD2AACB5DC89042CCF7FD07E2170B965DB1FD5C3165E6B4E4E3301E82C660289F8D167049DB8D1D099238AF2E4B784F9982AAC6D5B233A7BA9F6D2BC0873BC9556425500F43BB76CC7705BBD505B073B931B725EB61CCC57471ECB3E86D96D8398E37F15F4079EC2ADC35B5E4EB96B1279BCAADB8A6D0629FFD1C5AF4267F2F00DD887739EE078E9A1EB617CA91C38FB92D21D737A139987E4CE841D8CA2D6D5F46CD7B85483D24B2F02CEAE361D0EF2457666E72B0642B8CCEAFCB917D78B195A0696B9BB2B8D7C4F5789B5F1333F4FB69517901EC6AE525428A9A999B1C2CF98365CCB0B10F3743D5FEDD08B2ADA3BF0DAFCF8F3CCBFCE71901B346D8FB342B0E8A730E37DEDCF97A224B3E89A852F3272FF5F7A1CB04932DB077990E4AC4928325DC2222F7123988310D5D0A352574857C0F112537CAA68077D064B160C12A61EFD3AC38BC0D127F29486439B0D8B749C2A754AE884A9D15C4F98D60C09B69A9454317BEE4402E96F0BD7F176C3FF66FC0631FCF107585F0B3975367787733BC2CC23F0BBBE22142AA98C9815C2C096D425AFE6DB61570601FCF10AEB32DF91C8C9FB62A3AD8FE8CD8BF1AF19CA3D57461B85735ED023AA7285F3E03831A2CDF37B6CCAB449DA4B11883DFD003430F0C3D30F4C0D003430F4C6A0FF8AB2C6E957049565A760270AB01CA15D67AC33E9BA6BB919C6F357D590BC36ADF58A0CCE73DEE17CE90E361A9B5E3FAA319D93E307C0907FFA169B6CBAB0457B6A106B77F01977D3F92E60319773B6BEDB8F22CB0A4C6D568E549B1294EAA0D29D8962FBF941C7F68E10F881550C2C64D4A4BB8AF3369A238A93694E0CF8B6124CD01A9313FBA3C07DC0FEF78B2579E84A2E2A4DA5082F3B8EF9B03725E096481F17761E74D7DD24471526D28C17FFCCEC90D088FA5F76A9A440F360B8DDF7CE73269A238A93694E07F1640462B5E3720DC481CDFE94B64F030FEE9955D51BEA8710EB370549C541B4A50E4B6FF6877DD0D0877336BCA3B025CBD7F10EEBD9897882CAA0DC23DD97C3A23DC808C462719223EE08870AD79558A94AD66F3C511A2541B5A01231D8EBA42D48D2C12ABD58D7FB86F49ADE71E2B57AC4D71526D88C56DF31B8D81BB42D465DA06125BFF5FE118FC2446C4D4362B4EAA0DA5F88CC6C00D883A2B4A25E3571B96B8FC56DD6CD91427D586523C4727824A5E2AC98093D8036E406ACF8F2E8F4FAFF659E7E78B292B4EAA0D3198313EA329D125391C13D1C167B6E6E51CCAEA5EA1DA9093C38A198D811B90B72D8F8236758FAA7D65E6344171526DC8C961C58CC6C00DC8B4E551D0A69E376AAFED739AC0F71396A83658BE39B6D118B801B1BE97CA015531EA89BCF6D3AFE213B2ABE95BB521849552F73A9DDD80F0A3AD9A67EB2704B39AFB432265AB5971527B5CAD80110E3C098EBA42B8B2E09785B5649900B6DE5D0BD7DECC8A936A4309627F02085F0F8FAF10FE7E81FFA924270ADCDA8B09913668569C541B82609195E3BE775316E3764606E7B87D4A04D57C0B2752B69A15A7935B23F31D76B8D0E6803CE38C158EEAEF4CDEAC90AB2BA4E2B4BC2B70207EDCF7FE80A83578002BAA4A6DEFEF8F8AEED749715A5189061753CF3AEC63DC0F1C59F17D688DC47F6CE469FEDC83C286A661027EEF151CF80FCA1C12755DCC6F2098DFC30D32F4C0D003430F0C3D30F4C0D003F3A907FC3F47706D1BFEE8D3F5C407C7D37138EB6853E71297D7BB6351BE01C7D29FDE6F14C9BF5021572E7772B1E48730E662AAB86F5989948DDF2671075881E5D81F16C94E807DD2FFE180870AF7057703D8EE19D27C526F56F225CD8F9B8602BFD5C7DC7C27B2B7007E57087250EF6714F7DC9CF70572494CEEFF4F4373AE062B865BFCEA83BC2D05F358B9636CE46009FBA1E4157C0078722B5F5D2124C617353FE08F42C205C46A8135DECB11F57D9815872F2279A89F52B9F17E745005B525DA8CC0F15EBD0249B05F207C4BFD2361023ECAAC3828CE51A09ED3CB28FFC4B325172F4644A94B76ABC8CE1B5CAD3F388D99AE98DBBCC9C2FE4B680C469B0FA7ECAF408BC83D40694B1853CFD5857AF6D95E28470C0FDF87B9957037D6F7CF296F520972ECFC048653570E113F66A520707B217C3F5F4C99B92DE103724C7C9B0F1F00975809BAD8B8F4E3D7116DC9DBEAD70B12BCE1B7C5D6AA578B8DEF14E0C4A5F42AD1E6CEE6EB0B10DC2658702A9B2A809F3A68CCA9A6D15F15E0F34D6054958D404F6D74D3FF10E2B91360C95D30367DFBF8CD9C96F0D3512E4FBB70B8DB022E6DE352B9EB56C2E582D4F9B077E9809C58E6B4E4AB30E6E0B918AE28F9BFF6E8457893E73B66973CF5787F80256F80A978B9FEA1DDD67B3BF0F83D62D5323AD0F46E55FC706C0734A733F6214E3D94DE9A8999C383B92CE13DE535680EE673883BC902EDC3760A92EC82E610BF54105C017B1F0F89CCC15C96AC8131A74DCF236EB905D8A78D83B2139ADA804D01920F66E0A5E6670E25390FC23C314F55807DDB397D3D014DE994B7E07F1CD4928B604CC1CAF1650E4B8E8531F55DD0938899B569CA6A046DECDC07A0299D731D0385745934B47120B692AB51D116DFACFF19FCD5325EE5E8D5BE0ED9F874DA24AD7E3F156076452486C20ED989AD84FB5AA1585777047EB7289049B3739B25F6BE728920CF954EEE2ACE759A7524A67A32BF1075568C6FE34A4AEDC9A16A32653168DD016D5B313D12A05FE32A095D1D7CEFEF777EB3CCB66C80B26D7356CE01F3C7A0CD86F9BFD555C2466F6B89F5B142656229E14D9EEF2C54FCE3A83B5705CF353BA7886BA07BA15683792F51D3C869A89B16711696B21183584AB852B262A760BF16AAF8A16AEE0A5762EBA07BA07EE3B993ACE43254F06F57FC98D8326389A184278B8FF52A6C3743D5D25C61CD49FB22B05E0BE5FDC3BD1EDE87DFCBA04A6E4085F3F53B2F54660C63952C4585DB26E194F528F42A68F36F6750FCE8C81968EA6DD017A19B5B9A7D13EADF858606A059475FC68484DF48BD04E55BC333A183347A80CB653E2987E44A541E80363BDEFA4D1FFA868457C19C5BBE861A345B75DCC0BB13CA87337F306863DDAC6FF28143B22C4C8E98AC007E387036944B6BCA6EE82BD0C32C0C32F440E71EF83FD49644AB809112FE0000000049454E44AE426082>|globe-solid.png>|0.8em|||-0.1em>>>

  <assign|cv-twitter|<macro|text|<hlink|<arg|text>|<merge|http://twitter.com/|<arg|text>>>
  <image|<tuple|<#89504E470D0A1A0A0000000D494844520000006400000064080600000070E29554000000017352474200AECE1CE900000044655849664D4D002A00000008000187690004000000010000001A000000000003A00100030000000100010000A00200040000000100000064A00300040000000100000064000000002FBBDE41000007E6494441547801ED9C6BEC57731CC723852E4B35517A40B92C0D25A3C57A1045938579208579501B1A0FF4C465B385ADA65CE641ABB5A56C4CB19931E92FA5B494529618A5542A524294AEBCDEFC7F75FEE77F2EDF737EE79CDFB97CDFDB7BE79CEFF95E3E97F3BD7F7FBF366D2CAC05AC05AC05AC05AC05AC05AC05AC05AC05AC05AC05AC052A6D81D32AADFDFFCA9FC3A53FECE56007EE77357327D7ED7013FC075AA46081F3C9F341B8181E833274187710E7653814B68549A2B215A30F569C038FC2300704BDDF4CFAB1F074580FBA937836EC5A4F26454CDB09A1A7C0C330C8D051DFAD21BFEB6054F420C173703F5C629A58050D338D9CE37843906D0B8C6A6CD3F8C7C97B2A6C0F8370062F47C105F06F58CBFF2EEE8DB090583FC1DE46B1F319E97EC43A026BCAA7795D46396A829C50CDBC13CE857BA1BB7CD530A366EF4A47E22FB8EF0C8B867B11F804741B21CDE77594A74EFF49B8043A6B82BB5C7D28574323BC422C67061FF17C9651CA7C44523395747FE1B44712F78F9A9A4A55484D95BBD0F7092B8253D4616AEEE0963F4FCF3390CF18D710D34F78D594BC375FEF06C8EFA75796E1EA4F22CD63549582045CCBFB9E308F18835041B237FA9DBA02AF4E5C13C311F061D80A9AA88409AE59EBA056291B1BA0E58E1F6198EC8D78AF89A8BBCFE842984660B3E076A8A51A35B7ADD0448889D00789F740ABD48D0B986428B7896E49C691A16F8183E14438076E80C760AD1C8DB8343AF3C4E784D6229A5C554047CF9CB20BD4A44BB5D644DEACE3EC412ED590A072C7F3DE17EB781394D8EBDDB7A4B9D637C7F45F8C8A21B3971E8D089B1C669ED53195D357F02C0C5B42082B3FCEFB39246A8431EB2DF3051365B564524F415F915E13B32CA14EB11E991B91F67964D6E82A14338951AF805A70533EDD424BAB3FC2B96451AFBC59A6D772CE1351D4D6583829017F21AF0930D244288AB0C455DF9594BC69E7731859B5C6160903889DB460EBC9531D6F1AB8994C9396378DFCB41C757D1C03A85D4B6B82A595637D214976FC4570C8F7E8DC1B86C26B1AAFAF637E68CA781106926C1ED49C611AEC0FEB859A81BCE30704D4471E1BFD4899D55E826ACDE3B06F4C69B58493461393649ECB63EAD622D97B0D50F44BCA7C065ED14292E0875EBC4ED27869E4B5325885536F83C6C11ABD7C0683E29CCA29F93B2D39684EB3D171D5FD6FD009C9F707ECE40CCCD9FD0AE4B9C14426AD01F94133F6D7E158BF082987F720FF61CD7416F52B0FDA80529B5CBBE6DD21DACA4D04DDC9451D701AD5B84A79BE63EA0DAF519633ED3E1EEE807F3903ED7D640BA8561BC1CB21EE3E630D39C92989553B23C9CA15492B1646F072C8A7A41C079DFD4B13CF23E1EFD022BA05D4D7C5869A29B5EFBBE04B5027186BB5E672EEBF83556AFF93D07534363342CDD0CEC89B78B8D819C0FD01B8B599FBB9DE0D8B702408317301CDAB34840F85974316916A78684A1BC1D402DA3BD71CC96889C7AB0FD116AE457216508B63E40C15E9E59025C9C96273C202913E703F87D8D15472DF92563C8CE1E51055AF378C73B011C32CB0222C82F3BD57A7AEF71ADEEA309797C3F4DEC2CC025A63D3F2933A7623F819FC6B52BF6594838D146481A5BC34768632F27388DE69D3C82E97C812F1F141D4A46D03126802A8266D58401CFBCADF029AE1EBA7D76AB612433B725A0593583EA85A1EB25B64043559CAEC281C03B5BE6511CD02F3A3458F165BDBB9DA3AADDA571E575F75E417443371F4D80349A26DD3B84256295D5374F3C64BD193641F5BA7847E94F7C4336FBC541A994D82876095BE7A535DF760973361E6B8901267412DB5980A5B85783A57D650E8E700E3E187F008AC82D1FD743C88FEE7C1D8089A187A653A88C05E50FBED32BEE6291A4DE8591BF9AAAE97C0240F53935D61300349335D729A42817E5F47D5C375544A839EBA1036317467FE9A3BC03E9FB4C08BDCED3EF994E1CDFB9455F5DAE0D65F27743A67E8831645E904859654DC4255F9795C0B0B35E04143BB2A3BC0A9FB626CE1B7D197996B34BA5A669DF2DF9967F719B6CC9CE02E483F17D85C71A73CE2364AA39FFB20C08E8A3A65117A37BCA9F2FA00FA12B8A5624EF9197DEB9E73781933A93009B7163A3BBBB2DE1F47CFE149192ECD7C74F87A2AD4E64C599D21BD9E8285423FA4D5413B7D496573CCDBE894CB7E03B942A1E1E074F8272C8363D6A3874EB1A78A2CBCADA64C1DFF65F0D266EAFE2AD81116017B1152E70AB61641D83832DE4722ED1D14A1E6A8860F8EA36411D27441C85761111C2119B5A47E232C1DD4346A014EABA24571868E3D0D85A583C6ECAB61511C2139B741AD6A9706AA11B7C115B0488E90AC9FC0BAF6C5499F1B74469289F01B5834479C40664D6CDBC142430A8C80B3A14E7A17CD11927727940E85846AC14DF069A815CFA23AA1F6E1CC43876E3017505B7F3BD4F19E030EB6E75EE7ADB4E7E1BE6A21B12D2C3AB6A2C0437061DE14D1C99309701FAC7D3565BE1E42CFC9B003CC35F4E3C469500297D5210BD0ED225828E824E274A826AC2C8E598E2E4360A1D115E91F83FACFD9A23A6625B2DF0A4B05F5311A12BE09F5ABDCBC3B47FF4231136A75B6F4D0F0500380A5304F1B50FA0BBDB970343C1B16161AF6C685FA9A917038D48AA806055941DBC45A1F6B6AE62AAE0A2B3CEA71885379356B7DA17E87280E68BE26B126A47D938D507F00B6A199728626A4A543520EF1338CC6FAAA396AEADC54B866FD1A66CBB8071CD4F37EB80DEE865A67B2B016B016B016B016B016B016B016B016B016B016B016B016B01628BF05FE057095D977D1E25A670000000049454E44AE426082>|twitter-brands.png>|0.8em|||-0.1em>>>

  <assign|cv-linkedin|<macro|text|<hlink|<arg|text>|<merge|http://www.linkedin.com/in/|<arg|text>>>
  <image|<tuple|<#89504E470D0A1A0A0000000D494844520000006400000064080600000070E29554000000017352474200AECE1CE900000044655849664D4D002A00000008000187690004000000010000001A000000000003A00100030000000100010000A00200040000000100000064A00300040000000100000064000000002FBBDE4100000586494441547801ED5D5D8856451856D10C354A572B295AAC1014F7C2342F146C110A6AC16E028370B18B20C13B418C7E10BA117FAED43B11B51BA5CB10ADA0ED0F2CD89B96946E125D1652D41B7FF307B7E7816FE3DBB367CE999933B33BCEF7BCF0F09D33E77DDF99F33C3BE79B33DF9CB3D3A6C9C48018100362400C8801312006C23330DD32E553F0EB0356033DC01380AC9E81FB701902068153C02DA0B1F522C330302A34E2E012F85B0F34B25E443F002446180ED8632A45A9BA64CD41F079A01B908563803D651970B72CE58CB2C256D907F894181504791E22A7E4B6D4AA0479B3344285211878CB94A44A9045A620953766C0C86D95208D6B5502770624883B6751232448547ADD934B1077CEA2464890A8F4BA279FE91EE21CC11BA08B00E7713806E708A3EA8614873BD762F6905F412BC7DBF380E5C01AE0396009B00FF8179039303000DF510F3C44CC0E8B7A56C0E76F8FFC3E6D4A2D86DC965A8C1EF2096ADA535ADBF8C23FB1BB01B836BEB8B3F7420BF233E8E4E5C8D638D1B6CDD6B913FC420BF22948E3E5C1C54EC2F90F97809C7D430A3202A2F845EE63277C82728C0929C8B9060435896D506D7AA12105B9D7E0F434046E91175210E394B28550CF5AF874844B48415E03634F7BB2F686675C76612105990D763EF260682162DEF788CB3224A42024E833E02547A6F6C39FEBBE646020B420BC647D0DD812BC15BEFD80ACC54068419896938883402F60B2F9387018386472E8D4F258D3EF4B41E80FC059E07780025D075602AB800DC002405660209620AC86BF79AC6D81FB320B06625CB22CAA958B8901096262668ACA25C814116FAA36E67788A9CE14CAB9A27F18B8D802B79F043885C39F998997812E60522DB420FC49F6B8E319BC0AFFCD15315771EC60C5F1B243CCC7BC45FB0D0547004EF7DF2C1E2CEC8F0D4A36A1FC3D6071E1F8A4EFF2775FFED8E4826F3D5AF9764D1DE73D729E2EE4E4F47E93F9B25988DF09DC2EE475E1A6DD7700794A6D4669695E855FE1745E077E6A705ABCC4ED06780FC5B500D12C7741BE04739C9AB91388C1BF90671DC01BDE2896B32007C0D8171158BB819C1B812B1172079F5C8CD1469F9CFCDED9EE136819730D7EBB2C7D9DDC72ED21EC19BCEEC7B463484E61825AAE82703414DBEEA282A3A12BC95590D03C99F2B197043509D28C4E0E8139F20A669D28085F0BF202C0350021EC54882463393A45901E9CF0E7C02FC02D6004E0D4C919800B331602BEF6A36FA06B1C6FEFDB6FF76DB653993A693FD76DD8E188ABAAFDFFE0F8B2F62087ED4535B9CBEA1D30E5CFBD877C8813E70DE24C1301ADF2E7F1F90D30B7C6AFEC30273F83DD24E62C08A7D3F7963168287B05E55B0CC7EA8A2FD439D81ECF59104E6F74D912D1F27BC7D17FCCFDF2D846D3CF9C0579D7831C2ECA98EE11C7014210CB5990F51E0C3D83986E8F383E5719C47215840BF15EF4646889475CA87B9A6C677B7DC5A016FC5DDDD57C4667A575E4DA43F8363C5FE3E8CCD57CBE774AEBC8559026D7F426B1A524BB14E62AC82317120ABE12A4404847EFE6DA431E5B51254862D24910099218038935473D448224C64062CD510F91208931905873D4432448620C24D61CF510099218038935473D448224C64062CD510F91208931905873D4432448620C24D69CBA45C8AECDE5F3E0C695DD866475EFCDE2C235D79CF30C75D914F3F9C48F6D1CDB7C56B46D47DB2409A342140E8C7F60FA0E89F6F7EC975882F8F1162D4A8244A3D62FB104F1E32D5A94048946AD5FE22A41F8EC9C2C0E03466EAB04F93E4E5B94150C7C6762A16A193D97F4F3AD3ADDA660957B317009517C049BEF4A9960553D842FFDDA024CE96AF0092D7EBC0BF8BC7C3F502A86EDA9F5C27118D05D7B330ED8336A9F7BACBA6421FE7FE37F3BE80356037C4D05DF1722AB67E03E5C86804180EF44E16B3D6462400C8801312006C48018100393CEC07F37D96C85D72E88E20000000049454E44AE426082>|linkedin-brands.png>|0.8em|||-0.1em>>>

  <\active*>
    <\src-comment>
      Sectioning and timeline
    </src-comment>
  </active*>

  <assign|timeline-vsep|<macro|2fn>>

  <assign|aligned-timeline|<macro|name|<style-with|src-compact|none|||||||<vspace*|<timeline-vsep>><with|par-first|<minus|<timeline-hsep>>|<yes-indent>><resize|<arg|name>|<minus|1r|<minus|<timeline-hsep>|1.0fn>>|1ex|<plus|1r|1.0fn>|>>>>

  <assign|timeline|<macro|text|<with|font|Gill
  Sans|font-family|ss|font-series|semibold|font-size|0.7|<aligned-timeline|<arg|text>>>>>

  <assign|cv-section|<macro|name|<aligned-timeline|<with|font|Gill
  Sans|font-family|ss|font-series|semibold|font-size|0.9|color|dark
  red|<tabular|<tformat|<cwith|1|1|1|1|cell-hyphen|t>|<cwith|1|1|1|1|cell-width|<timeline-hsep>>|<cwith|1|1|1|1|cell-hmode|exact>|<twith|table-valign|T>|<cwith|1|1|1|1|cell-halign|r>|<table|<row|<\cell>
    <with|par-mode|right|<arg|name>>
  </cell>>>>>>>>>

  <assign|cv-subsection|<\macro|title>
    <em|<arg|title>>
  </macro>>

  <\active*>
    <\src-comment>
      HTML generation (TODO)
    </src-comment>
  </active*>

  <assign|html-title|Curriculum Vitae>

  <assign|html-css|./cv-altmejd-texmacs.css>

  <assign|tmhtml-timeline|<macro|text|<html-class|tmweb-cv-timeline|<arg|text>>>>

  <assign|tmhtml-cv-section|<macro|title|<html-div-class|tmweb-cv-section|<arg|title>>>>

  <assign|tmhtml-cv-subsection|<macro|title|<html-div-class|tmweb-cv-subsection|<arg|title>>>>
</body>

<\initial>
  <\collection>
    <associate|src-special|raw>
  </collection>
</initial>