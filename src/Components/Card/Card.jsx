/*import React from 'react'
import './Card.css'
import bgadb from '../../assets/adoption img/bgadb.png'
import Header from '../Header/Header'
import leaf2 from '../../assets/Home/leaf 2.png'
import AFRICANGREYPARROT from '../../assets/adoption img/Birds/AFRICAN GREY PARROT.jpg'
import ALEXANDRINEPARAKEET from '../../assets/adoption img/Birds/ALEXANDRINE PARAKEET.jpg'
import BARBARYDOVE from '../../assets/adoption img/Birds/BARBARY DOVE.jpg'
import BARNOWL from '../../assets/adoption img/Birds/BARN OWL.jpg'
import BENGALESEFINCH from '../../assets/adoption img/Birds/BENGALESE FINCH.jpg'
import BLACKHEADEDMUNIA from '../../assets/adoption img/Birds/BLACK HEADED MUNIA.jpg'
import BLACKKITE from '../../assets/adoption img/Birds/BLACK KITE.jpg'
import BLACKSWAN from '../../assets/adoption img/Birds/BLACK SWAN.jpg'
import BLOSSOMHEADEDPARAKEET from '../../assets/adoption img/Birds/BLOSSOM HEADED PARAKEET.jpg'
import BLUEFACEDLORIKEET from '../../assets/adoption img/Birds/BLUE FACED LORIKEET.jpg'
import BRAMHINYKITE from '../../assets/adoption img/Birds/BRAMHINY KITE.jpg'
import BROWNFISHOWL from '../../assets/adoption img/Birds/BROWN FISH OWL.jpg'
import BROWNTHROATEDCONURE from '../../assets/adoption img/Birds/BROWN THROATED CONURE.jpg'
import BUDGERIGAR from '../../assets/adoption img/Birds/BUDGERIGAR.jpg'
import CASSOWARY from '../../assets/adoption img/Birds/CASSOWARY.jpg'
import CATTLEEGRET from '../../assets/adoption img/Birds/CATTLE EGRET.jpg'
import CINEREOUSVULTURE from '../../assets/adoption img/Birds/CINEREOUS VULTURE.jpg'
import COCKATIEL from '../../assets/adoption img/Birds/COCKATIEL.jpg'
import DIAMONDDOVE from '../../assets/adoption img/Birds/DIAMOND DOVE.jpg'
import EASTERNROSELLA from '../../assets/adoption img/Birds/EASTERN ROSELLA.jpg'
import EMERALDDOVE from '../../assets/adoption img/Birds/EMERALD DOVE.jpg'
import EMU from '../../assets/adoption img/Birds/EMU.jpg'
import FISCHERSLOVEBIRD from '../../assets/adoption img/Birds/FISCHERS LOVE BIRD.jpg'
import GIANTFRUITBAT from '../../assets/adoption img/Birds/GIANT FRUIT BAT.jpg'
import GOLDENPHEASANT from '../../assets/adoption img/Birds/GOLDEN PHEASANT.jpg'
import GREENWINGEDMACAW from '../../assets/adoption img/Birds/GREEN WINGED MACAW.jpg'
import GREYHERON from '../../assets/adoption img/Birds/GREY HERON.jpg'
import GREYHORNBILL from '../../assets/adoption img/Birds/GREY HORNBILL.jpg'
import GREYPELICAN from '../../assets/adoption img/Birds/GREY PELICAN.jpg'
import HILLMYNA from '../../assets/adoption img/Birds/HILL MYNA.jpg'
import INDIANPEAFOWLWHITE from '../../assets/adoption img/Birds/INDIAN PEAFOWL WHITE.jpg'
import INDIANPEAFOWL from '../../assets/adoption img/Birds/INDIAN PEAFOWL.jpg'
import JANDAYACONURE from '../../assets/adoption img/Birds/JANDAYA CONURE.jpg'
import JAVASPARROW from '../../assets/adoption img/Birds/JAVA SPARROW.jpg'
import KOEL from '../../assets/adoption img/Birds/KOEL.jpg'
import LADYAMHERSTSPHEASANT from '../../assets/adoption img/Birds/LADY AMHERSTS PHEASANT.jpg'
import LARGEEGRET from '../../assets/adoption img/Birds/LARGE EGRET.jpg'
import LAUGHINGDOVE from '../../assets/adoption img/Birds/LAUGHING DOVE.jpg'
import LESSERADJUTANTSTORK from '../../assets/adoption img/Birds/LESSER ADJUTANT STORK.jpg'
import COCKLESSERSULPHURCRESTEDCOCKATOOATIEL from '../../assets/adoption img/Birds/LESSER SULPHUR CRESTED COCKATOO.jpg'
import LITTLEEGRET from '../../assets/adoption img/Birds/LITTLE EGRET.jpg'
import LIVINGSTONESTURACO from '../../assets/adoption img/Birds/LIVING STONES TURACO.jpg'
import LONGBILLEDVULTURE from '../../assets/adoption img/Birds/LONG BILLED VULTURE.jpg'
import LONGTAILEDFINCH from '../../assets/adoption img/Birds/LONG TAILED FINCH.jpg'
import MANDARINDUCK from '../../assets/adoption img/Birds/MANDARIN DUCK.jpg'
import MASKEDLOVEBIRD from '../../assets/adoption img/Birds/MASKED LOVE BIRD.jpg'
import MEDIANEGRET from '../../assets/adoption img/Birds/MEDIAN EGRET.jpg'
import MEYERSPARROT from '../../assets/adoption img/Birds/MEYERS PARROT.jpg'
import NIGHTHERON from '../../assets/adoption img/Birds/NIGHT HERON.jpg'
import OPENBILLEDSTORK from '../../assets/adoption img/Birds/OPEN BILLED STORK.jpg'
import ORIENTALSCOPSOWL from '../../assets/adoption img/Birds/ORIENTAL SCOPS OWL.jpg'
import OSTRICH from '../../assets/adoption img/Birds/OSTRICH.jpg'
import PAINTEDSTORK from '../../assets/adoption img/Birds/PAINTED STORK.jpg'
import PEACHFACEDLOVEBIRD from '../../assets/adoption img/Birds/PEACH FACED LOVE BIRD.jpg'
import PINEAPPLECONURE from '../../assets/adoption img/Birds/PINEAPPLE CONURE.jpg'
import REDBELLIEDPARROT from '../../assets/adoption img/Birds/RED BELLIED PARROT.jpg'
import REDJUNGLEFOWL from '../../assets/adoption img/Birds/RED JUNGLE FOWL.jpg'
import REDMUNIA from '../../assets/adoption img/Birds/RED MUNIA.jpg'
import REEVESPHEASANT from '../../assets/adoption img/Birds/REEVES PHEASANT.jpg'
import RINGNECKEDDOVE from '../../assets/adoption img/Birds/RING NECKED DOVE.jpg'
import RINGNECKEDPARAKEET from '../../assets/adoption img/Birds/RING NECKED PARAKEET.jpg'
import RINGNECKEDPHEASANT from '../../assets/adoption img/Birds/RING NECKED PHEASANT.jpg'
import ROSERINGPARAKEET from '../../assets/adoption img/Birds/ROSE RING PARAKEET.jpg'
import ROSYPELICAN from '../../assets/adoption img/Birds/ROSY PELICAN.jpg'
import SARUSCRANE from '../../assets/adoption img/Birds/SARUS CRANE.jpg'
import SILVERPHEASANT from '../../assets/adoption img/Birds/SILVER PHEASANT.jpg'
import SPOTTEDDOVE from '../../assets/adoption img/Birds/SPOTTED DOVE.jpg'
import SPOTTEDMUNIA from '../../assets/adoption img/Birds/SPOTTED MUNIA.jpg'
import STARFINCH from '../../assets/adoption img/Birds/STAR FINCH.jpg'
import SUNCONURE from '../../assets/adoption img/Birds/SUN CONURE.jpg'
import SWAINSONSLORIKEET from '../../assets/adoption img/Birds/SWAINSONS LORIKEET.jpg'
import UMBRELLACRESTEDCOCKATOO from '../../assets/adoption img/Birds/UMBRELLA CRESTED COCKATOO.jpg'
import VIOLETTURACO from '../../assets/adoption img/Birds/VIOLET TURACO.jpg'
import WHITEBACKEDVULTURE from '../../assets/adoption img/Birds/WHITE BACKED VULTURE.jpg'
import WHITEEURASIANSPOONBILL from '../../assets/adoption img/Birds/WHITE EURASIAN SPOONBILL.jpg'
import WHITEIBIS from '../../assets/adoption img/Birds/WHITE IBIS.jpg'
import WOOLYNECKEDSTORK from '../../assets/adoption img/Birds/WOOLY NECKED STORK.jpg'
import YELLOWBACKEDLORRY from '../../assets/adoption img/Birds/YELLOW BACKED LORRY.jpg'
import YELLOWGOLDENPHEASANT from '../../assets/adoption img/Birds/YELLOW GOLDEN PHEASANT.jpg'
import YELLOWSIDEDCONURE from '../../assets/adoption img/Birds/YELLOW SIDED CONURE.jpg'
import ZEBRAFINCH from '../../assets/adoption img/Birds/ZEBRA FINCH.jpg'


import AFRICANLION from '../../assets/adoption img/Mammals/AFRICAN LION.jpg'
import ASIATICLION from '../../assets/adoption img/Mammals/ASIATIC LION.jpg'
import ASIATICWILDDOG from '../../assets/adoption img/Mammals/ASIATIC WILD DOG.jpg'
import ASSAMESEMACAQUE from '../../assets/adoption img/Mammals/ASSAMESE MACAQUE.jpg'
import BARKINGDEER from '../../assets/adoption img/Mammals/BARKING DEER.jpg'
import BENGALTIGERNCTICANLION from '../../assets/adoption img/Mammals/BENGAL TIGER NCT.jpg'
import BLACKBUCK from '../../assets/adoption img/Mammals/BLACK BUCK.jpg'
import BONNETMACAQUE from '../../assets/adoption img/Mammals/BONNET MACAQUE.jpg'
import BROWANTLEREDDEERSANGAI from '../../assets/adoption img/Mammals/BROW ANTLERED DEER SANGAI.jpg'
import CHIMPANZEE from '../../assets/adoption img/Mammals/CHIMPANZEE.jpg'
import CHINKARA from '../../assets/adoption img/Mammals/CHINKARA.jpg'
import COMMONMANGOOSE from '../../assets/adoption img/Mammals/COMMON MANGOOSE.jpg'
import COMMONMONITORLIZARD from '../../assets/adoption img/Mammals/COMMON MONITOR LIZARD.jpg'
import COMMONPALMCIVET from '../../assets/adoption img/Mammals/COMMONPALMCIVET.jpg'
import COMMONSQUIRRELMONKEY from '../../assets/adoption img/Mammals/COMMONSQUIRRELMONKEY.jpg'
import GAUR from '../../assets/adoption img/Mammals/GAUR.jpg'
import GIANTSQUIRREL from '../../assets/adoption img/Mammals/GIANTSQUIRREL.jpg'
import GIRAFFE from '../../assets/adoption img/Mammals/GIRAFFE.jpg'
import GREENIGUANA from '../../assets/adoption img/Mammals/GREEN IGUANA.jpg'
import HAMADRYASBABOON from '../../assets/adoption img/Mammals/HAMADRYAS BABOON.jpg'
import HIMALAYANBLACKBEAR from '../../assets/adoption img/Mammals/HIMALAYAN BLACK BEAR.jpg'
import HOGDEER from '../../assets/adoption img/Mammals/HOG DEER.jpg'
import HOOLOCKGIBBON from '../../assets/adoption img/Mammals/HOOLOCK GIBBON.jpg'
import INDIANCHAMELEON from '../../assets/adoption img/Mammals/INDIAN CHAMELEON.jpg'
import INDIANELEPHANT from '../../assets/adoption img/Mammals/INDIAN ELEPHANT.jpg'
import INDIANFOX from '../../assets/adoption img/Mammals/INDIAN FOX.jpg'
import INDIANGREYWOLF from '../../assets/adoption img/Mammals/INDIAN GREY WOLF.jpg'
import INDIANHARE from '../../assets/adoption img/Mammals/INDIAN HARE.jpg'
import INDIANPANGOLIN from '../../assets/adoption img/Mammals/INDIAN PANGOLIN.jpg'
import INDIANPORCUPINE from '../../assets/adoption img/Mammals/INDIAN PORCUPINE.jpg'
import JACKAL from '../../assets/adoption img/Mammals/JACKAL.jpg'
import JUNGLECAT from '../../assets/adoption img/Mammals/JUNGLE CAT.jpg'
import LEOPARDPANTHER from '../../assets/adoption img/Mammals/LEOPARD  PANTHER.jpg'
import LEOPARDCAT from '../../assets/adoption img/Mammals/LEOPARD CAT.jpg'
import LION from '../../assets/adoption img/Mammals/LION.jpg'
import MELANISTICTIGER from '../../assets/adoption img/Mammals/MELANISTIC TIGER.jpg'
import MOUSEDEER from '../../assets/adoption img/Mammals/MOUSE DEER.jpg'
import NILGAIBLUEBULL from '../../assets/adoption img/Mammals/NILGAI BLUEBULL.jpg'
import RATEL from '../../assets/adoption img/Mammals/RATEL.jpg'
import REDHANDEDTAMARIN from '../../assets/adoption img/Mammals/RED HANDED TAMARIN.jpg'
import REDIGUANA from '../../assets/adoption img/Mammals/RED IGUANA.jpg'
import RHESUSMACAQUE from '../../assets/adoption img/Mammals/RHESUS MACAQUE.jpg'
import SAMBARDEER from '../../assets/adoption img/Mammals/SAMBAR DEER.jpg'
import SLENDERTAILEDMEERKAT from '../../assets/adoption img/Mammals/SLENDER TAILED MEERKAT.jpg'
import SLOTHBEAR from '../../assets/adoption img/Mammals/SLOTH BEAR.jpg'
import SMALLINDIANCIVET from '../../assets/adoption img/Mammals/SMALL INDIAN CIVET.jpg'
import SPOTTEDDEER from '../../assets/adoption img/Mammals/SPOTTED DEER.jpg'
import STRIPEDHYAENA from '../../assets/adoption img/Mammals/STRIPED HYAENA.jpg'
import STUMPTAILEDMACAQUE from '../../assets/adoption img/Mammals/AFRICANLION.jpg'
import SWAMPDEER from '../../assets/adoption img/Mammals/SWAMP DEER.jpg'
import TIGER  from '../../assets/adoption img/Mammals/TIGER.jpg'
import TUFTEDCAPUCHIN from '../../assets/adoption img/Mammals/TUFTED CAPUCHIN.jpg'
import WATERMONITORLIZARD from '../../assets/adoption img/Mammals/WATER MONITOR LIZARD.jpg'
import WHITETIGER from '../../assets/adoption img/Mammals/WHITE TIGER.jpg'
import WILDBOAR from '../../assets/adoption img/Mammals/WILD BOAR.jpg'




import ASIANBROWNTORTOISE from '../../assets/adoption img/Reptiles/ASIAN BROWN TORTOISE.jpg'
import BANDEDKRAIT from '../../assets/adoption img/Reptiles/BANDED KRAIT.jpg'
import BINOCELLATECOBRA from '../../assets/adoption img/Reptiles/BINOCELLATE COBRA.jpg'
import BURMESEPYTHON from '../../assets/adoption img/Reptiles/BURMESE PYTHON.jpg'
import CHITRATURTLE from '../../assets/adoption img/Reptiles/CHITRA TURTLE.jpg'
import COMMONINDIANKRAIT from '../../assets/adoption img/Reptiles/COMMON INDIAN KRAIT.jpg'
import COMMONSANDBOA from '../../assets/adoption img/Reptiles/COMMON SAND BOA.jpg'
import CUVIERSDWARFCAIMAN from '../../assets/adoption img/Reptiles/CUVIERS DWARF CAIMAN.jpg'
import GANGESSOFTSHELLTURTLE from '../../assets/adoption img/Reptiles/GANGES SOFT SHELL TURTLE.jpg'
import GHARIAL from '../../assets/adoption img/Reptiles/GHARIAL.jpg'
import INDIANFLAPSHELLTURTLE from '../../assets/adoption img/Reptiles/INDIAN FLAP SHELL TURTLE.jpg'
import INDIANROCKPYTHON from '../../assets/adoption img/Reptiles/INDIAN ROCK PYTHON.jpg'
import INDIANSTARTORTOISE from '../../assets/adoption img/Reptiles/INDIAN STAR TORTOISE.jpg'
import INDIANTENTTURTLE from '../../assets/adoption img/Reptiles/INDIAN TENT TURTLE.jpg'
import KINGCOBRA from '../../assets/adoption img/Reptiles/KING COBRA.jpg'
import MONOCELLATECOBRA from '../../assets/adoption img/Reptiles/MONOCELLATE COBRA.jpg'
import MORELETSCROCODILE from '../../assets/adoption img/Reptiles/MORELETS CROCODILE.jpg'
import MUGGERCROCODILE from '../../assets/adoption img/Reptiles/MUGGER CROCODILE.jpg'
import NILECROCIDILE from '../../assets/adoption img/Reptiles/NILE CROCIDILE.jpg'
import RATSNAKE from '../../assets/adoption img/Reptiles/RAT SNAKE.jpg'
import REDSANDBOA from '../../assets/adoption img/Reptiles/RED SAND BOA.jpg'
import RETICULATEDPYTHON from '../../assets/adoption img/Reptiles/RETICULATED PYTHON.jpg'
import RUSSELSVIPER from '../../assets/adoption img/Reptiles/RUSSELS VIPER.jpg'
import SALTWATERCROCODILE from '../../assets/adoption img/Reptiles/SALT WATER CROCODILE.jpg'
import SIAMESECROCODILE from '../../assets/adoption img/Reptiles/SIAMESE CROCODILE.jpg'
import YELLOWANACONDA from '../../assets/adoption img/Reptiles/YELLOW ANACONDA.jpg'




const Card = () => {
  return (
    <div>
        <>
      <Header/>  
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div className="flex-box">
  
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/AFRICAN LION.jpg"
            alt="Animals"
            style={{ width: 300, height: 300, filter: "saturate(2)" }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb} />
          <h1 className="flih1">AFRICAN LION</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/ASIATIC LION.jpg"
            alt="Animals"
            style={{ width: 300, height: 300, filter: "saturate(1.5)" }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">ASIATIC LION</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/ASIATIC WILD DOG.jpg"
            alt="Animals"
            style={{ width: 300, height: 300, filter: "saturate(1.1)" }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            ASIATIC WILD
            <br /> DOG
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/BARKING DEER.jpg"
            alt="Animals"
            style={{ width: 300, height: 300, filter: "saturate(1.3)" }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">BARKING DEER</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/BENGAL TIGER (NCT).jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">BENGAL TIGER</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/BLACK BUCK.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">BLACK BUCK</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/BONNET MACAQUE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            BONNET
            <br /> MACAQUE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/BROW ANTLERED DEER SANGAI.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            BROW ANTLERED
            <br /> DEER SANGAI
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/CHIMPANZEE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">CHIMPANZEE</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/CHINKARA.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">CHINKARA</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/COMMON MANGOOSE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            COMMON <br />
            MANGOOSE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/COMMON MONITOR LIZARD.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            COMMON
            <br /> MONITOR <br />
            LIZARD
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/COMMON PALM CIVET.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            COMMON PALM
            <br /> CIVET
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/COMMON SQUIRREL MONKEY.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            COMMON
            <br /> SQUIRREL
            <br /> MONKEY
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/GAUR.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">GAUR</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/GIANT SQUIRREL.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">GIANT SQUIRREL</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/GIRAFFE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">GIRAFFE</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/GREEN IGUANA.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">GREEN IGUANA</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/HAMADRYAS BABOON.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            HAMADRYAS
            <br /> BABOON
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/HIMALAYAN BLACK BEAR.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            HIMALAYAN
            <br /> BLACK
            <br /> BEAR
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/HOG DEER.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">HOG DEER</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/HOOLOCK GIBBON.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            HOOLOCK <br />
            GIBBON
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/INDIAN CHAMELEON.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            INDIAN
            <br /> CHAMELEON
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/INDIAN ELEPHANT.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            INDIAN <br />
            ELEPHANT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/INDIAN FOX.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">INDIAN FOX</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/INDIAN GREY WOLF.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            INDIAN GREY
            <br /> WOLF
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/INDIAN HARE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">INDIAN HARE</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/INDIAN PANGOLIN.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">INDIAN PANGOLIN</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/JACKAL.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">JACKAL</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/JUNGLE CAT.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">JUNGLE CAT</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/LEOPARD  PANTHER.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            LEOPARD <br /> PANTHER
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/LEOPARD CAT.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">LEOPARD CAT</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/LION 2.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">LION</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/MELANISTIC TIGER.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            MELANISTIC <br />
            TIGER
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/MOUSE DEER.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">MOUSE DEER</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/NILGAI BLUEBULL.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">NILGAI BLUEBULL</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/RATEL.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">RATEL</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/RED HANDED TAMARIN.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            RED HANDED
            <br /> TAMARIN
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/RED IGUANA.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">RED IGUANA</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/RHESUS MACAQUE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            RHESUS <br />
            MACAQUE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/SAMBAR DEER.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">SAMBAR DEER</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/SLENDER TAILED MEERKAT.jpeg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            SLENDER TAILED
            <br /> MEERKAT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/SLOTH BEAR.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">SLOTH BEAR</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/SMALL INDIAN CIVET.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            SMALL INDIAN
            <br /> CIVET
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/SPOTTED DEER.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">SPOTTED DEER</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/STRIPED HYAENA.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">STRIPED HYAENA</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/STUMP TAILED MACAQUE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            STUMP TAILED
            <br /> MACAQUE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/SWAMP DEER.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">SWAMP DEER</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/TUFTED CAPUCHIN.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            TUFTED <br />
            CAPUCHIN
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/WATER MONITOR LIZARD.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            WATER MONITOR
            <br /> LIZARD
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/WHITE TIGER.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">WHITE TIGER</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Mammals/WILD BOAR.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">WILD BOAR</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  {/*Reptils}
  <div className="flex-box2">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/ASIAN BROWN TORTOISE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            ASIAN BROWN
            <br /> TORTOISE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/BANDED KRAIT.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">BANDED KRAIT</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>{" "}
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/BINOCELLATE COBRA.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            BINOCELLATE
            <br /> COBRA
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/BURMESE PYTHON.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            BURMESE <br />
            PYTHON
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/COMMON INDIAN KRAIT.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            COMMON INDIAN
            <br /> KRAIT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/COMMON SAND BOA.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            COMMON SAND
            <br /> BOA
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/CUVIER'S DWARF CAIMAN.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            CUVIER'S DWARF
            <br /> CAIMAN
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/GANGES SOFT SHELL TURTLE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            GANGES SOFT <br />
            SHELL TURTLE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/GHARIAL.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">GHARIAL</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/INDIAN ROCK PYTHON.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            INDIAN ROCK
            <br /> PYTHON
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/INDIAN STAR TORTOISE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            INDIAN STAR
            <br /> TORTOISE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/INDIAN TENT TURTLE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            INDIAN TENT
            <br /> TURTLE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/KING COBRA.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">KING COBRA</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/MONOCELLATE COBRA.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            MONOCELLATE
            <br /> COBRA
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/MORELETS CROCODILE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            MORELETS
            <br /> CROCODILE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/MUGGER CROCODILE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            MUGGER <br />
            CROCODILE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/NILE CROCIDILE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">NILE CROCIDILE</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/RAT SNAKE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">RAT SNAKE</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/RED SAND BOA.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">RED SAND BOA</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/RETICULATED PYTHON.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            RETICULATED
            <br /> PYTHON
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/RUSSEL'S VIPER.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">RUSSEL'S VIPER</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/SALT WATER CROCODILE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            SALT WATER
            <br /> CROCODILE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/SIAMESE CROCODILE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            SIAMESE
            <br /> CROCODILE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Reptiles/YELLOW ANACONDA.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            YELLOW
            <br /> ANACONDA
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <div className="flex-box3">
    {/*birds}
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/AFRICAN GREY PARROT.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            AFRICAN <br />
            GREY PARROT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/ALEXANDRINE PARAKEET.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            ALEXANDRINE <br />
            PARAKEET
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/BARBARY DOVE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            BARBARY <br />
            DOVE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/BARN OWL.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">BARN OWL</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/BENGALESE FINCH.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            BENGALESE <br />
            FINCH
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/BLACK HEADED MUNIA.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            BLACK <br />
            HEADED MUNIA
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/BLACK KITE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">BLACK KITE</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/BLACK SWAN.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">BLACK SWAN</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/BLOSSOM HEADED PARAKEET.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            BLOSSOM HEADED
            <br /> PARAKEET
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/BLUE FACED LORIKEET.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            BLUE FACED
            <br /> LORIKEET
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/BRAMHINY KITE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">BRAMHINY KITE</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/BROWN FISH OWL.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            BROWN <br />
            FISH OWL
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/BROWN THROATED CONURE.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            BROWN THROATED
            <br /> CONURE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/BUDGERIGAR.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">BUDGERIGAR</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/CASSOWARY.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">CASSOWARY</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src="adoption img/Birds/CATTLE EGRET.jpg"
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">CATTLE EGRET</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={CINEREOUSVULTURE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            CINEREOUS <br />
            VULTURE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={COCKATIEL}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">COCKATIEL</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={DIAMONDDOVE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">DIAMOND DOVE</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={EASTERNROSELLA}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            EASTERN <br />
            ROSELLA
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={EMERALDDOVE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">EMERALD DOVE</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={EMU}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">EMU</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={FISCHERSLOVEBIRD}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            FISCHERS <br />
            LOVE BIRD
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={GIANTFRUITBAT}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            GIANT FRUIT
            <br /> BAT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={GOLDENPHEASANT}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            GOLDEN
            <br /> PHEASANT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={GREENWINGEDMACAW}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            GREEN WINGED
            <br /> MACAW
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={GREYHERON}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">GREY HERON</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={ GREYHORNBILL}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">GREY HORNBILL</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={GREYPELICAN}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">GREY PELICAN</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={HILLMYNA}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">HILL MYNA</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={INDIANPEAFOWLWHITE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            INDIAN <br />
            PEAFOWL WHITE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={INDIANPEAFOWL}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">INDIAN PEAFOWL</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={JANDAYACONURE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            JANDAYA <br />
            CONURE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={JAVASPARROW}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">JAVA SPARROW</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={KOEL}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">KOEL</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={LADYAMHERSTSPHEASANT}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            LADY AMHERST'S
            <br /> PHEASANT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={LARGEEGRET}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">LARGE EGRET</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={LAUGHINGDOVE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            LAUGHING <br />
            DOVE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={LESSERADJUTANTSTORK}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            LESSER <br />
            ADJUTANT STORK
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={COCKLESSERSULPHURCRESTEDCOCKATOOATIEL}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1" style={{ fontSize: 15 }}>
            LESSER SULPHUR
            <br /> CRESTED COCKATOO
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={LITTLEEGRET}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">LITTLE EGRET</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={LIVINGSTONESTURACO}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            LIVING STONES <br />
            TURACO
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={LONGBILLEDVULTURE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            LONG BILLED
            <br /> VULTURE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={LONGBILLEDVULTURE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            LONG TAILED <br />
            FINCH
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={MANDARINDUCK}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            MANDARIN
            <br /> DUCK
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={MEDIANEGRET}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            MASKED
            <br /> LOVE BIRD
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={MEDIANEGRET}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">MEDIAN EGRET</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={MEYERSPARROT}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            MEYERS <br />
            PARROT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={NIGHTHERON}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">NIGHT HERON</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={OPENBILLEDSTORK}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            OPEN BILLED
            <br /> STORK
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={ORIENTALSCOPSOWL}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            ORIENTAL <br />
            SCOPS OWL
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={OSTRICH}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">OSTRICH</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={PAINTEDSTORK}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">PAINTED STORK</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={PEACHFACEDLOVEBIRD}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            PEACH FACED <br />
            LOVE BIRD
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={REDBELLIEDPARROT}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            RED BELLIED <br />
            PARROT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={PINEAPPLECONURE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            PINEAPPLE
            <br /> CONURE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={REDJUNGLEFOWL}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            RED JUNGLE
            <br /> FOWL
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={REDMUNIA}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">RED MUNIA</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={REEVESPHEASANT}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            REEVE'S
            <br /> PHEASANT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={RINGNECKEDDOVE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            RING NECKED
            <br /> DOVE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={RINGNECKEDPARAKEET}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            RING NECKED <br />
            PARAKEET
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={RINGNECKEDPHEASANT}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            RING NECKED
            <br /> PHEASANT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={ROSERINGPARAKEET}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            ROSE RING
            <br /> PARAKEET
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={ROSYPELICAN }
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">ROSY PELICAN</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={SILVERPHEASANT}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            SILVER <br />
            PHEASANT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={SPOTTEDDOVE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            SPOTTED
            <br /> DOVE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={SPOTTEDMUNIA}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            SPOTTED
            <br /> MUNIA
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={STARFINCH}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">STAR FINCH</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={SUNCONURE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">SUN CONURE</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={SWAINSONSLORIKEET}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            SWAINSONS
            <br /> LORIKEET
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={UMBRELLACRESTEDCOCKATOO}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1" style={{ fontSize: 15 }}>
            UMBRELLA <br />
            CRESTED
            <br /> COCKATOO
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={VIOLETTURACO}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">VIOLET TURACO</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={WHITEBACKEDVULTURE}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            WHITE BACKED <br />
            VULTURE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={WHITEEURASIANSPOONBILL}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            WHITE EURASIAN
            <br /> SPOONBILL
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={WHITEIBIS}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">WHITE IBIS</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={WOOLYNECKEDSTORK}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            WOOLY NECKED
            <br /> STORK
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={YELLOWBACKEDLORRY}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            YELLOW BACKED <br />
            LORRY
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={YELLOWGOLDENPHEASANT}
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            YELLOW GOLDEN
            <br /> PHEASANT
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={YELLOWSIDEDCONURE }
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">
            YELLOW SIDED
            <br /> CONURE
          </h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={leaf2}
            alt="Leaf"
            style={{ width: 300, height: 300, filter: "saturate(3)" }}
          />
          <img
            className="secondimg"
            src={ZEBRAFINCH }
            alt="Animals"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div className="flip-card-back">
          <img className="flibg" src={bgadb}  />
          <h1 className="flih1">ZEBRA FINCH</h1>
          <button className="flibtn">Adoption Now</button>
        </div>
      </div>
    </div>
  </div>

</>

    </div>
  )
}

export default Card 
*/