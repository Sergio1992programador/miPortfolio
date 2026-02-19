const contenedor = document.getElementById("character-container");

class Personaje {
    constructor(id, nombre, enlace, imagen, titulo, descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.enlace = enlace;
        this.imagen = imagen;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }
}

const homerData = new Personaje(
    "homer",
    "Homer Simpson",
    "homer.html",
    "homerr.png",
    "Padre de la familia Simpson",
    "<p>Homer Jay Simpson es el entrañable y caótico protagonista masculino de Los Simpson, una de las series animadas más longevas de la televisión. Es esposo de Marge y padre de Bart, Lisa y Maggie. Trabaja como inspector de seguridad en la planta nuclear de Springfield, aunque su actitud despreocupada y su escasa inteligencia suelen poner en duda su competencia. Homer es impulsivo, glotón y perezoso, pero también profundamente humano: sus errores y meteduras de pata lo hacen cómico, mientras que su amor por su familia lo vuelve entrañable.</p><br>" +
    "<p>Su personalidad está marcada por frases célebres como “¡D’oh!” y por su devoción a placeres simples como la televisión, la cerveza Duff y los donuts. A pesar de sus defectos, Homer representa al hombre común enfrentándose a los absurdos de la vida moderna con humor y torpeza.</p><br>"
);

const margeData = new Personaje(
    "marge",
    "Marge Simpson",
    "homer.html",
    "marge.png",
    "Madre de la familia Simpson",
    "<p>Marge Bouvier Simpson es el pilar moral y emocional de la familia Simpson. Con su característico cabello azul en forma de torre y su voz rasposa pero dulce, Marge representa la sensatez en medio del caos que suele rodear a su esposo Homer y sus hijos. Es paciente, compasiva y profundamente dedicada a su familia, aunque a veces lucha por equilibrar sus propias deseos con las exigencias del hogar.</p><br>" +
    "<p>A lo largo de la serie, Marge ha demostrado ser mucho más que una ama de casa: ha sido artista, empresaria, policía, política y activista. Su carácter fuerte y su sentido ético la convierten en la voz de la razón en Springfield, aunque también ha tenido momentos de rebeldía que revelan su complejidad como personaje. Marge encarna la lucha silenciosa de muchas mujeres por mantener la armonía familiar sin perder su identidad.</p><br>"
);

const bartData = new Personaje(
    "bart",
    "Bart Simpson",
    "homer.html",
    "barttt.png",
    "Hijo mayor de la familia Simpson",
    "<p>Bart Simpson, el hijo mayor de la familia Simpson, es el epítome del niño travieso y rebelde. Con su camiseta roja, patineta y actitud desafiante, Bart se ha convertido en un ícono cultural. Es ingenioso, irreverente y siempre está buscando maneras de romper las reglas, ya sea gastando bromas pesadas, escapando de la escuela o enfrentándose a figuras de autoridad como el director Skinner</p><br>" +
    "<p>A pesar de su comportamiento problemático, Bart tiene un gran carisma y una inteligencia callejera que lo hacen encantador. Su famosa frase “¡Ay caramba!” y su espíritu indomable lo han convertido en uno de los personajes más memorables de la televisión. Aunque a menudo entra en conflicto con sus padres y su hermana Lisa, también muestra momentos de ternura y vulnerabilidad que revelan su necesidad de atención y afecto.</p><br>" +
    "<p>Bart representa la eterna lucha entre la infancia y la disciplina, entre la creatividad y las normas. Es el niño que todos temen en clase, pero que muchos admiran por su valentía y autenticidad.</p><br>"
);

const lisaData = new Personaje(
    "lisa",
    "Lisa Simpson",
    "homer.html",
    "lisa.png",
    "Hija mediana de la familia Simpson",
    "<p>Lisa Marie Simpson es la hija mediana de la familia Simpson y representa el intelecto, la sensibilidad y la conciencia social dentro del caos de Springfield. Con solo ocho años, Lisa es una niña prodigio: toca el saxofón con maestría, tiene una inteligencia excepcional y una curiosidad insaciable por el mundo. Es apasionada por la ciencia, la literatura, la filosofía y el medio ambiente, y a menudo se siente incomprendida por su familia y compañeros debido a su madurez.</p><br>" +
    "<p>Lisa es vegetariana, budista y activista, lo que la convierte en una voz crítica dentro de la serie. Aunque su entorno suele frustrarla, nunca deja de luchar por lo que cree justo. Su relación con Bart es una mezcla de rivalidad y afecto, y con Marge encuentra apoyo emocional, mientras que con Homer vive una constante búsqueda de reconocimiento.</p><br>" +
    "<p>Lisa encarna el idealismo infantil enfrentado a una sociedad indiferente. Es el corazón pensante de Los Simpson, una figura que equilibra la comedia con la reflexión, y que demuestra que incluso en un mundo absurdo, la inteligencia y la empatía pueden brillar.</p><br>"
);
const maggieData = new Personaje(
    "magie",
    "Maggie Simpson",
    "homer.html",
    "maggie.png",
    "Hija menor de la familia Simpson",
    "<p>Maggie Simpson, la bebé de la familia, es pequeña en tamaño pero enorme en simbolismo. Aunque casi nunca habla, su presencia es constante y poderosa. Con su chupete inseparable, su lazo azul y su mirada curiosa, Maggie representa la inocencia, el misterio y, a veces, una sorprendente inteligencia silenciosa. A lo largo de la serie, ha protagonizado momentos memorables —como salvar a Homer con un disparo certero o escapar de guarderías con astucia— que revelan una personalidad mucho más compleja de lo que su edad sugiere.</p><br>" +
    "<p>Maggie es observadora, sensible y, en ocasiones, la más madura de todos. Su silencio no es vacío: es contemplativo. En medio del bullicio de los Simpson, ella es el equilibrio silencioso, la que observa sin juzgar, la que actúa cuando nadie lo espera. Su relación con Marge es profundamente tierna, y con Lisa comparte una conexión intelectual que se insinúa desde sus primeros gestos.</p><br>" +
    "<p>Maggie encarna el potencial latente, la promesa del futuro y la magia de lo no dicho. Es el personaje que, sin palabras, dice mucho.</p><br>"
);

const abueloData = new Personaje(
    "abuelo",
    "Abraham J Simpson",
    "homer.html",
    "abuelo.png",
    "Padre de Homer Simpson",
    "<p>Abraham Abe Simpson, también conocido como el Abuelo Simpson, es el padre de Homer y el abuelo de Bart, Lisa y Maggie. Representa la figura del anciano olvidado, a menudo marginado por su familia y por la sociedad. Vive en el Castillo del Jubilado de Springfield, donde pasa sus días contando historias largas, confusas y muchas veces absurdas sobre su pasado, que mezclan nostalgia, exageración y una pizca de delirio.</p><br>" +
    "<p>Abe es cascarrabias, despistado y propenso a quedarse dormido en medio de una conversación, pero también ha demostrado tener una vida rica en experiencias: fue soldado en la Segunda Guerra Mundial, tuvo romances secretos y ha vivido momentos clave de la historia de Springfield. Aunque suele ser objeto de burla, sus relatos a veces revelan verdades profundas y momentos de ternura que lo humanizan.</p><br>" +
    "<p>Su relación con Homer es complicada, marcada por resentimientos y malentendidos, pero también por un amor que, aunque torpe, persiste. Abe encarna la vejez con todas sus contradicciones: sabiduría y olvido, dignidad y decadencia, humor y melancolía.</p><br>"
);
const monaData = new Personaje(
    "mona",
    "Mona Simpson ",
    "homer.html",
    "mona.png",
    "Madre de Homer Simpson",
    "<p>Mona Simpson es una figura profundamente emotiva y enigmática dentro del universo de Los Simpson. A diferencia de otros personajes más presentes, Mona aparece esporádicamente, pero cada una de sus apariciones deja una huella significativa. Fue una mujer idealista, activista y rebelde, que abandonó a Homer cuando él era niño para huir de la justicia tras sabotear las operaciones contaminantes del Sr. Burns. Esta decisión marcó a Homer de por vida, generando en él una mezcla de abandono, resentimiento y anhelo.</p><br>" +
    "<p>Mona representa la conciencia social y el espíritu de lucha, en contraste con la apatía que suele dominar Springfield. Su regreso en episodios clave revela una mujer inteligente, amorosa y profundamente arrepentida por haber dejado a su hijo. Aunque su relación con Homer es compleja y dolorosa, también está llena de momentos de reconciliación y ternura que muestran el poder del perdón y el amor familiar.</p><br>" +
    "<p>Como personaje, Mona Simpson encarna el idealismo perdido, la maternidad interrumpida y la esperanza de redención. Su historia añade una capa de profundidad emocional a la serie, recordando que incluso en una comedia animada, los vínculos familiares pueden ser tan frágiles como poderosos.</p><br>"
);

const madreData = new Personaje(
    "madre",
    "Jaqueline Bouvier",
    "homer.html",
    "madre.png",
    "Madre de Marge Simpson",
    "<p>Jacqueline Bouvier es la elegante, crítica y algo distante madre de Marge. Con su cabello gris perfectamente peinado y su actitud refinada, representa una generación más tradicional y conservadora. A menudo aparece con una copa en la mano y una expresión de desaprobación, especialmente hacia Homer, a quien nunca ha considerado digno de su hija. Su relación con Marge es compleja: aunque la quiere, suele ser exigente y poco afectuosa, lo que ha influido en la forma en que Marge busca equilibrio y armonía en su propia familia.</p><br>" +
    "<p>Jacqueline ha tenido momentos de vulnerabilidad, como sus breves romances y su viudez, que muestran que detrás de su fachada severa hay una mujer que también ha sufrido y amado. Su presencia en la serie añade una capa de sofisticación y crítica social, contrastando con el caos cotidiano de los Simpson.</p><br>" +
    "<p>En esencia, Jacqueline Bouvier encarna la figura de la madre tradicional que lucha por mantener las apariencias, incluso cuando el mundo a su alrededor se desmorona con humor. Su legado vive en Marge, quien heredó tanto su fortaleza como su capacidad de sacrificio</p><br>"
);

const patyData = new Personaje(
    "paty",
    "Patty y Selma",
    "homer.html",
    "paty.png",
    "Hermanas de Marge Simpson",
    "<p>Patty y Selma son las hermanas gemelas de Marge Simpson, y representan una mezcla de sarcasmo, desencanto y humor seco dentro del universo de Los Simpson. Trabajan en el Departamento de Vehículos Motorizados de Springfield, donde su actitud apática y su voz rasposa se han convertido en parte del paisaje burocrático de la ciudad. Ambas son fumadoras empedernidas, solteras por elección (aunque Selma ha tenido varios matrimonios fallidos), y profundamente críticas de Homer, a quien desprecian abiertamente.</p><br>" +
    "<p>Aunque comparten muchas características, hay matices que las diferencian: Patty es más cínica y reservada, mientras que Selma ha mostrado un deseo más fuerte por formar una familia, incluso adoptando una hija. Su vínculo como hermanas es inquebrantable, y juntas forman un dúo que combina sarcasmo con una lealtad feroz hacia Marge.</p><br>" +
    "<p>Patty y Selma encarnan la resistencia al conformismo, el desencanto con la vida moderna y el humor ácido que desafía las normas familiares. Aunque a menudo se presentan como antagonistas, también han tenido momentos de ternura y profundidad que revelan que, bajo su coraza de humo y sarcasmo, hay corazones que también buscan amor y sentido.</p><br>"
);

const flandersData = new Personaje(
    "flanders",
    "Ned Flanders",
    "homer.html",
    "flanders.png",
    "Vecino de la familia Simpsons",
    "<p>Ned Flanders es el vecino eternamente amable y devotamente religioso de la familia Simpson. Con su característico bigote, su suéter verde y su forma peculiar de hablar —llena de expresiones como “¡Hola vecinillo!” o “¡Okily dokily!”—, Ned representa la bondad, la fe y la rectitud moral en Springfield. Es cristiano evangélico, asiste con fervor a la iglesia y trata de vivir según los principios bíblicos, lo que a menudo lo convierte en blanco de las burlas de Homer, aunque Ned siempre responde con paciencia y compasión.</p><br>" +
    "<p>Viudo desde la muerte de su esposa Maude, Ned ha criado solo a sus hijos Rod y Todd, inculcándoles valores religiosos y una vida libre de excesos. Aunque su actitud puede parecer exageradamente puritana, también ha mostrado momentos de duda, tristeza y humanidad que lo hacen más complejo de lo que parece a simple vista.</p><br>" +
    "<p>Flanders encarna el ideal del buen vecino: servicial, optimista y moralmente firme. Su presencia en la serie sirve como contraste con el caos de los Simpson, y su relación con Homer —una mezcla de rivalidad, incomprensión y amistad— es una de las dinámicas más divertidas y entrañables del programa.</p><br>"
);

const maudeData = new Personaje(
    "maude",
    "Maude Flanders",
    "homer.html",
    "maude.png",
    "Mujer de Ned Flanders",
    "<p>Maude Flanders fue la esposa devota de Ned Flanders y madre de Rod y Todd. Representaba la figura de la mujer piadosa, reservada y tradicional, profundamente comprometida con su fe cristiana y con los valores familiares. Siempre vestida con modestia y una actitud serena, Maude era el complemento perfecto para Ned: compartían su religiosidad, su estilo de vida sobrio y su deseo de criar a sus hijos en un entorno moralmente recto.</p><br>" +
    "<p>Aunque su papel en la serie fue más discreto que el de otros personajes, Maude tuvo momentos memorables, como su participación en eventos comunitarios, su firme postura contra el contenido inmoral en televisión, y su trágica muerte en un accidente durante una carrera de autos, que dejó una marca emocional en Ned y en los espectadores. Su ausencia se sintió profundamente, y su legado continuó influyendo en la vida de su familia.</p><br>" +
    "<p>Maude encarnaba la bondad silenciosa, la fe inquebrantable y el papel de la esposa tradicional en una comunidad conservadora. Su historia añade una dimensión de pérdida y resiliencia al universo de Los Simpson, mostrando que incluso en una comedia animada, el duelo y el amor perduran.</p><br>"
);

const todData = new Personaje(
    "tod",
    "Rod y Todd Flanders",
    "homer.html",
    "tod.png",
    "Hijos de Ned y Maude Flanders",
    "<p>Rod y Todd Flanders son los hijos de Ned y Maude Flanders, y representan la inocencia, la devoción religiosa y la obediencia absoluta dentro del mundo de Los Simpson. Ambos son niños tranquilos, educados y profundamente influenciados por la fe cristiana que les inculcan sus padres. Visten de forma modesta, hablan con dulzura y suelen mostrar una actitud temerosa ante el mundo, especialmente frente a cualquier cosa que consideren “pecaminosa” o inapropiada.</p><br>" +
    "<p>Rod, el mayor, es ligeramente más curioso y algo más independiente que Todd, aunque ambos comparten una visión del mundo marcada por la moral estricta y la protección paterna. Su comportamiento contrasta fuertemente con el de Bart, lo que genera situaciones cómicas y tensas, especialmente cuando los Flanders intentan convivir con los Simpson.</p><br>" +
    "<p>Aunque a menudo se los presenta como caricaturas de la religiosidad infantil, Rod y Todd también han mostrado momentos de ternura, vulnerabilidad y deseo de explorar más allá de los límites impuestos por su educación. En ese sentido, representan el dilema entre la obediencia y el descubrimiento, entre la fe heredada y la identidad propia.</p><br>"
);

const milhouseData = new Personaje(
    "milhouse",
    "Milhouse Van Houten",
    "homer.html",
    "milhouse.png",
    "Mejor amigo de Bart",
    "<p>Milhouse es el mejor amigo de Bart Simpson y uno de los personajes más entrañables y vulnerables de Los Simpson. Con sus gafas grandes, cabello azul y voz nasal, Milhouse encarna al niño inseguro, ingenuo y emocionalmente frágil que suele ser blanco de burlas tanto en la escuela como en su entorno social. A pesar de esto, su lealtad a Bart es inquebrantable, aunque a veces lo lleva a situaciones absurdas o peligrosas.</p><br>" +
    "<p>Hijo de padres divorciados —Kirk y Luann Van Houten— Milhouse vive en un ambiente familiar inestable, lo que contribuye a su necesidad de afecto y aprobación. Está enamorado de Lisa Simpson, aunque su amor no es correspondido, lo que añade una capa de melancolía a su personaje. Aunque parece débil y torpe, Milhouse ha tenido momentos de valentía y determinación que revelan una fuerza interior inesperada.</p><br>" +
    "<p>Milhouse representa la vulnerabilidad infantil en un mundo que no siempre es amable. Es el niño que quiere encajar, que sueña con ser valiente, y que, a pesar de todo, nunca deja de creer en la amistad y el amor.</p><br>"
);
const madremData = new Personaje(
    "madrem",
    "Luann Van Houten",
    "homer.html",
    "madrem.png",
    "Madre de Milhouse",
    "<p>Luann Van Houten es una mujer de clase media en Springfield, conocida por ser la madre de Milhouse y exesposa de Kirk Van Houten. A diferencia de su hijo, Luann tiene una personalidad más segura, independiente y, en ocasiones, algo superficial. Tras su divorcio de Kirk —una ruptura que se dio de forma pública y algo humillante— Luann comenzó a explorar su libertad con entusiasmo, saliendo con varios hombres y redescubriendo su identidad fuera del rol de esposa.</p><br>" +
    "<p>Aunque no siempre se muestra como una madre muy presente o afectuosa, Luann se preocupa por Milhouse, aunque su estilo de crianza puede parecer más despreocupado que el de otros padres en Springfield. Su vida amorosa ha sido bastante activa, incluyendo relaciones con personajes como el gladiador americano Chase y el mismísimo Disco Stu, lo que añade un toque de comedia y extravagancia a su perfil</p><br>" +
    "<p>Luann representa a la mujer que, tras años de conformismo, decide reinventarse. Es un personaje que mezcla glamour, torpeza y una búsqueda constante de validación, todo mientras navega la maternidad y la vida social en Springfield</p><br>"
);

const padremData = new Personaje(
    "padrem",
    "Kirk Van Houten",
    "homer.html",
    "padrem.png",
    "Padre de Milhouse",
    "<p>Kirk Van Houten es el prototipo del hombre derrotado por la vida, un personaje que mezcla patetismo, comedia y una pizca de ternura. Exesposo de Luann Van Houten y padre de Milhouse, Kirk vive en constante lucha por recuperar su autoestima tras su humillante divorcio, que lo dejó emocionalmente devastado y socialmente marginado. Su personalidad es insegura, torpe y algo infantil, lo que lo convierte en blanco fácil de burlas, especialmente por parte de Homer.</p><br>" +
    "<p>Kirk ha tenido varios trabajos mediocres —como vendedor de crackers o empleado temporal— y ha protagonizado momentos memorables por lo ridículo, como su intento fallido de impresionar a Luann con una canción (“Can I Borrow a Feeling?”), que se ha convertido en un clásico de la serie por su tono desesperado y cómico. A pesar de sus fracasos, Kirk muestra un amor genuino por Milhouse, aunque su forma de expresarlo suele ser torpe y poco efectiva.</p><br>" +
    "<p>Kirk representa al adulto que nunca terminó de madurar, atrapado entre la nostalgia de lo que pudo ser y la realidad de lo que es. Su historia añade una dimensión de vulnerabilidad masculina al universo de Los Simpson, mostrando que incluso los personajes más ridículos pueden despertar compasión.</p><br>"
);

const burnsData = new Personaje(
    "burns",
    "Señor Burns",
    "homer.html",
    "burnss.png",
    "Dueño de la central nuclear de Springfield y jefe de Homer",
    "<p>El Sr. Burns es el dueño de la Planta Nuclear de Springfield y uno de los personajes más emblemáticos de Los Simpson. Representa el poder corporativo llevado al extremo: es avaro, despiadado, manipulador y completamente desconectado de la realidad cotidiana. Con su cuerpo encorvado, su piel pálida y su voz temblorosa, Burns parece salido de otra época —y en muchos sentidos lo está—, ya que ha vivido más de un siglo y conserva costumbres, valores y enemigos de tiempos remotos.</p><br>" +
    "<p>Su frase característica, “Excelente…”, pronunciada mientras junta las puntas de los dedos, refleja su deleite en el control y la intriga. Burns no duda en explotar a sus empleados, destruir el medio ambiente o conspirar por puro capricho. Sin embargo, su torpeza física, su fragilidad y su ocasional ingenuidad lo convierten también en una figura cómica y patética</p><br>" +
    "<p>A pesar de su crueldad, el Sr. Burns ha mostrado momentos de vulnerabilidad, especialmente en episodios donde busca afecto, amistad o reconocimiento. Su relación con Smithers —su fiel asistente y admirador secreto— añade una dimensión peculiar y a veces tierna a su personaje.</p><br>" +
    "<p>Montgomery Burns encarna la crítica feroz al capitalismo sin escrúpulos, al poder sin límites y a la decadencia moral de quienes lo ostentan. Es el villano que todos temen, pero que también provoca risa por su absurda desconexión con el mundo moderno.</p><br>"

);

const smithersData = new Personaje(
    "smithers",
    "Smithers",
    "homer.html",
    "smithers.png",
    "Mayordomo del señor Burns",
    "<p>Waylon Smithers es el fiel asistente personal del Sr. Burns y uno de los personajes más complejos y discretamente emotivos de Los Simpson. Siempre impecablemente vestido y profesional, Smithers es eficiente, servicial y absolutamente devoto a su jefe, hasta el punto de que su vida gira en torno a complacerlo. Su lealtad roza lo obsesivo, y su admiración por Burns tiene matices románticos que han sido insinuados a lo largo de la serie con humor y sensibilidad.</p><br>" +
    "<p>Smithers es inteligente, organizado y mucho más ético que su jefe, aunque suele mirar hacia otro lado ante las atrocidades de Burns por amor o por miedo. A pesar de su papel secundario, ha protagonizado episodios que revelan su vulnerabilidad, su lucha por ser aceptado y su deseo de vivir con autenticidad. Su orientación sexual, inicialmente tratada como un secreto cómico, ha sido abordada con mayor profundidad en episodios más recientes, mostrando su evolución como personaje.</p><br>" +
    "<p>Smithers encarna la figura del empleado leal atrapado entre la admiración y la sumisión, entre el deber y el deseo. Es un personaje que mezcla comedia, ternura y crítica social, y que ha ganado un lugar especial en el corazón de los fans por su humanidad silenciosa.</p><br>"
);

const lenyData = new Personaje(
    "leny",
    "Lenny y Carl",
    "homer.html",
    "leny.png",
    "compañeros de trabajo y amigos de Homer",
    "<p>Lenny Leonard y Carl Carlson son más que simples compañeros de trabajo en la Planta Nuclear de Springfield: son un dúo inseparable que encarna la amistad silenciosa y la rutina compartida. Siempre juntos en el fondo de las escenas, sus interacciones están llenas de complicidad, comentarios absurdos y una química que ha hecho que los fans los vean casi como una pareja, aunque la serie nunca lo confirma del todo.</p><br>" +
    "<p>Lenny, con su aire despistado y su corazón ingenuo, aporta la ternura y el desconcierto. Es el tipo que puede tener un apartamento lleno de velas sin saber por qué, o meterse en líos sin entender cómo llegó allí. Carl, por su parte, es el equilibrio: más serio, culto y con una voz grave que transmite calma. Tiene formación en física nuclear y raíces islandesas, lo que lo convierte en uno de los personajes más inesperadamente sofisticados del entorno de Homer</p><br>" +
    "<p>Juntos, forman una especie de microcosmos dentro del universo de Los Simpson: dos hombres comunes que, entre explosiones, apagones y cervezas en Moe’s, encuentran en su amistad una constante que los mantiene unidos. Su relación es tan natural que muchas veces parecen compartir pensamientos sin hablar, como si fueran dos mitades de una misma broma.</p><br>" +
    "<p>Lenny y Carl no necesitan protagonismo para brillar. Su fuerza está en los detalles, en los gestos, en las miradas cómplices. Son el recordatorio de que, incluso en los entornos más absurdos, la amistad verdadera puede florecer sin grandes discursos</p><br>"
);

const moeData = new Personaje(
    "moe",
    "Moe Szyslak",
    "homer.html",
    "moe.png",
    "Tabernero de Springfield y amigo de Homer",
    "<p>Moe Szyslak es el dueño y único empleado del bar de Moe, el lugar donde Homer, Barney, Lenny, Carl y otros personajes buscan refugio del caos cotidiano. Con su voz rasposa, su actitud hosca y su rostro permanentemente amargado, Moe representa la soledad adulta, el fracaso persistente y la necesidad desesperada de conexión.</p><br>" +
    "<p>Aunque es cínico, malhumorado y a menudo grosero, Moe también es profundamente vulnerable. Vive solo, tiene problemas de autoestima, y ha tenido múltiples intentos fallidos de encontrar el amor. Su vida amorosa es una tragicomedia: desde citas desastrosas hasta enamoramientos imposibles, Moe siempre parece estar a un paso del rechazo. Sin embargo, debajo de su rudeza hay una ternura que aparece en momentos inesperados, como cuando cuida a Maggie o muestra afecto por sus clientes.</p><br>" +
    "<p>Moe también ha tenido una historia sorprendente: fue boxeador, actor de telenovelas, y hasta dueño de un bar de cócteles sofisticados. Cada intento de reinventarse termina en ruina, pero su perseverancia lo convierte en un símbolo de resistencia emocional.</p><br>" +
    "<p>Moe encarna el antihéroe cotidiano: el hombre que ha perdido casi todo, pero que sigue abriendo su bar cada día, esperando que alguien entre y le dé una razón para seguir. Es el corazón roto de Springfield, envuelto en sarcasmo y olor a cerveza</p><br>"

);

const barnyData = new Personaje(
    "barny",
    "Barney Gumble",
    "homer.html",
    "barny.png",
    "Alcohólico de Springfield y amigo de Homer",
    "<p>Barney Gumble es el eterno cliente del bar de Moe, el amigo de Homer que alguna vez tuvo potencial y que ahora vive atrapado en una espiral de alcoholismo, soledad y ocasionales destellos de genialidad. Con su voz ronca, su risa explosiva y su aspecto desaliñado, Barney representa el lado oscuro de la adultez: el abandono de los sueños, la dependencia y el olvido.</p><br>" +
    "<p>Lo que hace a Barney tan interesante es que no siempre fue así. En flashbacks y momentos clave, se revela que Barney era un estudiante brillante, con talento para la música y la aviación, hasta que Homer lo introdujo a la cerveza justo antes de un examen decisivo. Desde entonces, su vida se desvió hacia el bar, donde se convirtió en una figura casi permanente, dormido en la barra o protagonizando borracheras épicas.</p><br>" +
    "<p>A pesar de su estado, Barney ha tenido momentos de redención: ha sido piloto, cineasta (su corto El hombre borracho y el mar ganó un festival), e incluso intentó rehabilitarse. Estos episodios muestran que bajo la superficie hay una persona sensible, creativa y profundamente herida.</p><br>" +
    "<p>Barney Gumble encarna la tragedia disfrazada de comedia. Es el recordatorio de que detrás de cada chiste hay una historia, y que incluso los personajes más caóticos pueden tener una chispa de grandeza esperando ser rescatada.</p><br>"
);

const krustyData = new Personaje(
    "krusty",
    "Krusty",
    "homer.html",
    "krusty.png",
    "Krusty el Payaso",
    "<p>Krusty el Payaso —Herschel Krustofsky para los pocos que lo conocen de verdad— es el rostro más famoso del entretenimiento infantil en Springfield, y al mismo tiempo, uno de los personajes más trágicos y contradictorios de Los Simpson. En pantalla, es estridente, colorido, y aparentemente dedicado a hacer reír a los niños. Su programa, lleno de bromas absurdas, marionetas y productos promocionales, es el favorito de Bart Simpson y una institución local.</p><br>" +
    "<p>Pero detrás del maquillaje, Krusty es un hombre roto. Adicto al juego, al alcohol, y a la fama fácil, vive atrapado en una rutina de autodestrucción y cinismo. Su vida personal está marcada por fracasos amorosos, problemas legales, y una relación tensa con su padre, el rabino Hyman Krustofsky, quien desaprobaba su carrera como payaso. Krusty ha tenido todo —dinero, fama, poder mediático— pero nunca ha encontrado paz ni autenticidad.</p><br>" +
    "<p>Lo fascinante de Krusty es su capacidad para seguir adelante. Ha caído muchas veces, pero siempre vuelve, con una nueva línea de productos, un nuevo especial, o una nueva crisis. Su historia es una sátira del mundo del espectáculo: la explotación comercial, la hipocresía mediática, y la soledad detrás del telón.</p><br>" +
    "<p>Krusty encarna la risa forzada, el brillo artificial, y el dolor que se esconde tras cada carcajada. Es el payaso que todos conocen, pero que nadie realmente entiende. Y en esa contradicción, se convierte en uno de los personajes más humanos y conmovedores de Springfield</p><br>"
);
const bobData = new Personaje(
    "bob",
    "Bob",
    "homer.html",
    "bob.png",
    "Actor secundario Bob",
    "<p>Actor Secundario Bob —cuyo nombre real es Robert Underdunk Terwilliger— es mucho más que un simple antagonista recurrente. Es un personaje complejo, culto y teatral, que combina la elegancia de un intelectual con la obsesión de un villano clásico. Con su voz grave, su melena roja y su amor por la ópera, Bob representa el lado refinado de Springfield… corrompido por el rencor.</p><br>" +
    "<p>Originalmente introducido como el ayudante de Krusty el Payaso, Bob se convirtió en enemigo público tras intentar incriminar a Krusty y tomar el control del programa infantil. Desde entonces, su principal objetivo ha sido vengarse de Bart Simpson, quien frustró su primer plan. Esta rivalidad ha dado lugar a algunos de los episodios más icónicos de la serie, donde Bob despliega su inteligencia, su talento y su locura con una teatralidad digna de Shakespeare.</p><br>" +
    "<p>A pesar de sus intentos criminales —que incluyen bombas, trampas y planes elaboradísimos— Bob no es un villano plano. Ha mostrado momentos de redención, de vulnerabilidad, e incluso de afecto por su familia, especialmente por su hermano Cecil y su hijo Gino. Su tragedia es la del hombre brillante que nunca fue tomado en serio, que se vio obligado a actuar como payaso cuando soñaba con ser artista.</p><br>" +
    "<p>Actor Secundario Bob encarna la sátira del elitismo, del ego herido y de la obsesión. Es el recordatorio de que incluso los más cultos pueden caer en la locura si se sienten ignorados. Y en su lucha constante entre el arte y la venganza, se convierte en uno de los personajes más fascinantes y teatrales de Los Simpson.</p><br>"

);
const melData = new Personaje(
    "mel",
    "Mel",
    "homer.html",
    "mel.png",
    "Actor secundario Mel",
    "<p>Actor Secundario Mel es el refinado y algo excéntrico compañero de escena de Krusty el Payaso. Con su voz grave, su peinado de hueso y su actitud teatral, Mel aporta un aire de dignidad al caótico mundo del espectáculo infantil. Aunque suele hablar con elegancia y citar obras clásicas, su papel en el programa de Krusty es a menudo humillante, lo que crea un contraste cómico entre su porte distinguido y las situaciones absurdas en las que se ve envuelto.</p><br>" +
    "<p>Mel representa al artista serio atrapado en un entorno frívolo, y aunque aparece poco, su presencia siempre deja una impresión peculiar y divertida.</p><br>"
);

const apuData = new Personaje(
    "apu",
    "Apu",
    "homer.html",
    "apu.png",
    "Dueño del Kwik-E-Mart y amigo de Homer",
    "<p>Apu es el dueño del Kwik-E-Mart, el supermercado más famoso de Springfield. Con su acento característico, su rapidez para atender y su frase icónica “¡Gracias, vuelva pronto!”, Apu representa al comerciante incansable, siempre detrás del mostrador. Es inteligente, trabajador y tiene una familia numerosa: está casado con Manjula y tiene ocho hijos.</p><br>" +
    "<p>Aunque su personaje ha sido objeto de debate en años recientes, Apu sigue siendo una figura reconocible por su dedicación, su sentido del humor y su papel como parte esencial del vecindario de Springfield</p><br>" +
    "<p>A lo largo de la serie, Apu ha mostrado una vida más allá del mostrador: tiene un doctorado en informática, fue parte de la banda de los solteros junto a Homer, y ha protagonizado episodios que exploran su cultura, sus tradiciones y su lucha por mantener su identidad en un entorno que a menudo lo caricaturiza. Su matrimonio con Manjula ha sido retratado con momentos de ternura, caos y comedia, especialmente al criar a sus ocho hijos.</p><br>" +
    "<p>Apu encarna el inmigrante que trabaja sin descanso, que busca integrarse sin perder sus raíces, y que, pese a los estereotipos, ha logrado ser uno de los personajes más queridos y complejos de Los Simpson. Su historia es una mezcla de humor, crítica social y humanidad, que ha dejado huella en generaciones de espectadores.</p><br>"
);

const apumData = new Personaje(
    "apum",
    "Manjula",
    "homer.html",
    "apum.png",
    "Mujer de Apu",
    "<p>Manjula es la esposa de Apu y madre de sus ocho hijos. De origen indio, como él, fue parte de un matrimonio arreglado que, con el tiempo, se convirtió en una relación afectuosa y estable, aunque no exenta de conflictos. Manjula es inteligente, firme y con un carácter fuerte que contrasta con la personalidad más servicial de Apu. Su papel en la serie suele girar en torno a la vida familiar, especialmente al caos de criar a tantos hijos a la vez.</p><br>" +
    "<p>Aunque aparece con menos frecuencia, Manjula ha protagonizado momentos memorables que muestran su independencia y sentido del humor. Ha enfrentado infidelidades, ha exigido respeto y ha demostrado que no es simplemente “la esposa de Apu”, sino una mujer con voz propia dentro del universo de Los Simpson.</p><br>"
);


const snakeData = new Personaje(
    "snake",
    "Snake",
    "homer.html",
    "snake.png",
    "Delincuente de Springfield",
    "<p>Snake Jailbird —cuyo nombre real es Albert — es el criminal por excelencia de Los Simpson, conocido por su voz arrastrada, su melena larga y su eterna chaqueta de cuero. Es el típico ladrón de poca monta que asalta tiendas, roba coches y escapa de la policía con una mezcla de torpeza y suerte. Su frase característica, “¡Malditos cerdos!”, dirigida a los agentes de la ley, lo ha convertido en un ícono del caos urbano en Springfield.</p><br>" +
    "<p>A pesar de su historial delictivo, Snake no es un villano despiadado. Tiene una personalidad relajada, casi despreocupada, y en ocasiones muestra rasgos de humanidad, especialmente en su relación con su novia Gloria. Su actitud rebelde parece más fruto de una vida sin rumbo que de una maldad profunda, lo que lo convierte en un personaje más cómico que amenazante.</p><br>" +
    "<p>Snake ha sido arrestado incontables veces por el Jefe Wiggum, pero siempre logra escapar o reincidir, lo que lo convierte en parte del ciclo eterno de crimen y castigo de Springfield. Su presencia en la serie sirve como sátira de los sistemas judiciales ineficaces y de la figura del “delincuente simpático” que nunca cambia, pero que tampoco desaparece.</p><br>" +
    "<p>En el fondo, Snake representa la rebeldía sin causa, el fracaso institucional y la caricatura del criminal moderno. Es un personaje que, aunque vive al margen de la ley, forma parte integral del ecosistema de Springfield, aportando caos, humor y una pizca de anarquía a cada episodio en el que aparece.</p><br>"
);

const bigunData = new Personaje(
    "bigun",
    "Wiggum",
    "homer.html",
    "bigun1.png",
    "Jefe de policía de Springfield",
    "<p>Jefe Clancy Wiggum es el encargado de mantener el orden en Springfield… aunque rara vez lo logra. Con su uniforme desajustado, su voz nasal y su amor por las rosquillas, Wiggum representa la parodia del policía incompetente: perezoso, distraído y completamente ajeno a los procedimientos básicos de la ley. Su presencia en la serie es constante, y su torpeza es fuente de innumerables momentos cómicos.</p><br>" +
    "<p>A pesar de su ineptitud, Wiggum tiene una confianza desmedida en su autoridad. Se toma su cargo muy en serio, aunque sus métodos suelen ser absurdos o contraproducentes. Desde arrestos sin sentido hasta persecuciones fallidas, su forma de ejercer la ley es más caótica que efectiva. Sin embargo, su actitud despreocupada y su falta de malicia lo hacen más entrañable que temible.</p><br>" +
    "<p>En su vida personal, Wiggum es padre de Ralph, uno de los niños más peculiares de Springfield. Su relación con Ralph muestra un lado más tierno y humano, aunque también está marcada por la misma torpeza que define su trabajo. Como esposo, aparece ocasionalmente junto a su esposa Sarah, aunque su vida familiar no es muy explorada en la serie.</p><br>" +
    "<p>Jefe Wiggum encarna la crítica humorística a las instituciones públicas: un hombre con poder, pero sin preparación. Es el símbolo de la autoridad que no funciona, pero que sigue ahí, sobreviviendo gracias a la rutina y al absurdo. Y aunque no resuelve muchos crímenes, sí garantiza que cada episodio tenga al menos una escena de caos policial inolvidable.</p><br>"
);

const ralphData = new Personaje(
    "ralph",
    "Ralph Wiggum",
    "homer.html",
    "ralph.png",
    "Hijo del jefe Wiggum",
    "<p>Ralph Wiggum es uno de los personajes más entrañables y peculiares de Los Simpson. Hijo del jefe de policía Clancy Wiggum, Ralph se caracteriza por su comportamiento ingenuo, su imaginación desbordante y sus frases absurdas que, aunque a menudo no tienen sentido, se han convertido en clásicos del humor de la serie. Su voz aguda y su forma de hablar lo hacen fácilmente reconocible, y su inocencia lo convierte en una figura querida por los fans</p><br>" +
    "<p>En la escuela primaria de Springfield, Ralph es compañero de clase de Lisa Simpson y otros niños del vecindario. Aunque no destaca por su inteligencia, su creatividad lo lleva a decir cosas como “¡Me metí un crayón en la nariz!” o “¡Mi gato se comió mi lengua!”. Estas frases, que parecen salidas de un mundo paralelo, reflejan su visión única de la realidad. A pesar de sus limitaciones, Ralph demuestra tener un corazón puro y buenas intenciones.</p><br>" +
    "<p>Uno de los momentos más memorables de Ralph ocurre en el episodio del Día de San Valentín, cuando Lisa le da una tarjeta por lástima y él interpreta el gesto como una señal de amor. Su reacción, que va desde la felicidad absoluta hasta el corazón roto en televisión nacional, muestra su vulnerabilidad y lo humaniza más allá del humor. Esta escena es una de las más recordadas por los seguidores de la serie.</p><br>" +
    "<p>A lo largo de los años, Ralph ha evolucionado de ser un personaje secundario a convertirse en una fuente constante de momentos cómicos. Su presencia en la serie sirve como contraste a la lógica del mundo adulto, y su forma de ver la vida —aunque absurda— nos recuerda que la inocencia y la espontaneidad también tienen un lugar en Springfield. Ralph no solo es el niño raro de la clase; es el alma libre que nos hace reír sin quererlo.</p><br>"
);

const bigunnData = new Personaje(
    "bigunn",
    "Sarah Wiggum",
    "homer.html",
    "bigunn.png",
    "Mujer del jefe Wiggum",
    "<p>Sarah Wiggum es la reservada y poco hablada esposa del Jefe Clancy Wiggum. Aunque aparece en pocas escenas, suele estar al fondo de la vida familiar del jefe de policía, especialmente en momentos relacionados con su hijo Ralph. Su personalidad es tranquila y discreta, y rara vez interviene en los conflictos o situaciones absurdas que rodean a su familia</p></br>" +
    "<p>A pesar de su bajo perfil, Sarah representa el equilibrio doméstico en medio del caos que genera su esposo. Su presencia aporta una nota de normalidad a la vida del Jefe Wiggum, y aunque no tiene un papel destacado en la serie, forma parte del retrato familiar que enriquece el universo de Springfield</p><br>"
);

const compisData = new Personaje(
    "lou",
    "Lou y Eddie",
    "homer.html",
    "compis.png",
    "Policias de Springfield y compañeros del jefe Wiggum",
    "<p>Lou es el más sensato del trío. Afroamericano, serio y con una actitud profesional, suele ser el que mantiene la calma cuando Wiggum actúa de forma incompetente. Aunque no siempre brilla por su eficacia, Lou representa el intento de cordura dentro del cuerpo policial.</p></br>" +
    "<p>Eddie, por otro lado, es más callado y menos desarrollado como personaje, pero siempre está presente en las patrullas y operativos. Ambos son inseparables de Wiggum, formando un trío cómico que parodia la ineptitud policial con humor absurdo y situaciones disparatadas.</p><br>"
);

const skynerData = new Personaje(
    "skyner",
    "Seymour Skinner ",
    "homer.html",
    "skyner.png",
    "Director de la Escuela Primaria de Springfield",
    "<p>El superintendente Chalmers es un personaje secundario pero icónico de la serie animada Los Simpson. Es el superior directo del director Seymour Skinner en la Escuela Primaria de Springfield, y suele aparecer en situaciones donde supervisa el desempeño del colegio o visita a Skinner por asuntos administrativos. Su personalidad se caracteriza por ser seria, exigente y con poca paciencia para las excusas o los errores, lo que lo convierte en el contrapunto perfecto para el nervioso y servil Skinner.</p><br>" +
    "<p>Una de las escenas más memorables que protagoniza es el famoso “almuerzo con almejas” o “Steamed Hams”, donde visita la casa de Skinner para una comida casera, pero termina comiendo hamburguesas compradas en Krusty Burger mientras Skinner inventa excusas absurdas para ocultar la verdad. Esta escena se volvió viral años después, convirtiéndose en un fenómeno de internet por su humor absurdo y los intentos desesperados de Skinner por mantener las apariencias frente a Chalmers.</p><br>" +
    "<p>A pesar de su actitud rígida, el superintendente Chalmers no es completamente insensible. En algunos episodios se muestra que, aunque frustrado, tiene cierto aprecio por Skinner y por la educación pública. Su famosa exclamación “¡Skinner!” se ha convertido en una frase recurrente que encapsula su constante estado de incredulidad ante las torpezas del director. En conjunto, Chalmers representa la figura del burócrata que intenta mantener el orden en un sistema caótico, con resultados cómicamente fallidos.</p><br>"
);


const skynerjData = new Personaje(
    "skynerj",
    " Superintendente Chalmers ",
    "homer.html",
    "skynerj.png",
    "Jefe director de la Escuela Primaria de Springfield",
    "<p>Seymour Skinner, cuyo nombre real es Armin Tamzarian, es el director de la Escuela Primaria de Springfield en Los Simpson. Es un personaje rígido, disciplinado y obsesionado con el orden, lo que lo convierte en el blanco perfecto para las bromas de Bart Simpson. Su personalidad está marcada por su pasado militar, que influye en su estilo autoritario y su forma de gestionar la escuela, aunque muchas veces se ve superado por los alumnos y por la falta de recursos.</p><br>" +
    "<p>Skinner vive con su madre, Agnes Skinner, una mujer dominante que lo trata como si aún fuera un niño. Esta relación ha sido fuente de numerosos momentos cómicos, mostrando a Skinner como un adulto reprimido que apenas puede tomar decisiones sin la aprobación de su madre. A pesar de su aparente autoridad en la escuela, en casa es sumiso y tímido, lo que añade una capa de vulnerabilidad a su personaje.</p><br>" +
    "<p>Uno de los episodios más recordados sobre Skinner es cuando se revela que su verdadera identidad es Armin Tamzarian, un joven que asumió el nombre de Seymour Skinner tras la desaparición del verdadero. Aunque esta revelación sacude a la comunidad de Springfield, finalmente deciden ignorarla y seguir tratándolo como el auténtico director. Este giro surrealista es una muestra del humor absurdo y autorreferencial que caracteriza a la serie.</p><br>" +
    "<p>A lo largo de la serie, Skinner ha demostrado ser un personaje complejo: por un lado, representa la autoridad educativa; por otro, es un hombre atrapado entre su pasado, su madre y sus propias inseguridades. Su relación con la profesora Krabappel, sus intentos por modernizar la escuela y su constante lucha por mantener el orden en medio del caos lo convierten en una figura tragicómica dentro del universo de Los Simpson.</p><br>"
);

const wilyData = new Personaje(
    "wily",
    "Willie el jardinero",
    "homer.html",
    "wily.png",
    "Jardinero de la Escuela Primaria de Springfield",
    "<p>El jardinero Willie, cuyo nombre completo es Groundskeeper Willie, es el encargado del mantenimiento y la jardinería en la Escuela Primaria de Springfield. Es un personaje escocés, pelirrojo, musculoso y de carácter explosivo, conocido por su fuerte acento y su temperamento irascible. Vive en una pequeña caseta dentro del terreno escolar y suele aparecer en situaciones donde se requiere fuerza bruta, reparaciones o simplemente como alivio cómico en medio del caos escolar.</p><br>" +
    "<p>Willie es famoso por sus gritos, sus peleas con los alumnos (especialmente con Bart Simpson), y por sus frases exageradas llenas de orgullo nacionalista escocés. A menudo se le muestra como un hombre solitario, con una vida dura y llena de frustraciones, lo que contrasta con su ocasional ternura y sentido del deber. Aunque parece rudo, en el fondo tiene un corazón noble y ha demostrado preocuparse por los niños y por la escuela en más de una ocasión.</p><br>" +
    "<p>Su papel en la serie es el de un personaje secundario pero muy querido por los fans, gracias a su estilo exagerado y sus apariciones memorables. Desde luchar contra lobos hasta disfrazarse para obras escolares, Willie siempre aporta un toque de locura y energía a los episodios en los que participa. Es, sin duda, uno de los personajes más pintorescos de Los Simpson, y su presencia añade sabor al ya caótico ecosistema de Springfield</p><br>"
);

const otoData = new Personaje(
    "oto",
    "Otto Mann",
    "homer.html",
    "oto.png",
    "Conductor del autobús de la Escuela Primaria de Springfield",
    "<p>El jardinero Willie, cuyo nombre completo es Groundskeeper Willie, es el encargado del mantenimiento y la jardinería en la Escuela Primaria de Springfield. Es un personaje escocés, pelirrojo, musculoso y de carácter explosivo, conocido por su fuerte acento y su temperamento irascible. Vive en una pequeña caseta dentro del terreno escolar y suele aparecer en situaciones donde se requiere fuerza bruta, reparaciones o simplemente como alivio cómico en medio del caos escolar.</p><br>" +
    "<p>A lo largo de la serie, Otto ha protagonizado varios momentos memorables, como cuando intenta obtener su licencia de conducir o cuando vive temporalmente en el autobús escolar. Su vida personal es un desastre: vive en condiciones precarias, tiene problemas financieros y su madurez emocional es cuestionable. Sin embargo, su actitud despreocupada y su amor por la música lo convierten en un personaje entrañable que aporta humor y rebeldía al entorno escolar de Springfield</p><br>" +
    "<p>Otto también sirve como una crítica social sutil al sistema educativo y al descuido institucional. A pesar de ser responsable de la seguridad de los niños, su comportamiento imprudente y su falta de profesionalismo son ignorados por las autoridades. Esto refleja el tono satírico de Los Simpson, donde personajes como Otto muestran las contradicciones y absurdos de la vida cotidiana en Springfield</p><br>"
);

const ednaData = new Personaje(
    "edna",
    "Edna krabappel",
    "homer.html",
    "edna.png",
    "Profesora de la Escuela Primaria de Springfield",
    "<p>La profesora Edna Krabappel fue durante muchos años la maestra de cuarto grado en la Escuela Primaria de Springfield, y uno de los personajes más reconocibles de Los Simpson. Con su voz ronca, su actitud sarcástica y su constante desilusión con la vida, Edna representaba a la docente quemada por el sistema educativo. A menudo se la veía fumando en clase, suspirando por un cambio en su rutina, y enfrentando con resignación el caos que provocaban sus alumnos, especialmente Bart Simpson.</p><br>" +
    "<p>A pesar de su cinismo, Edna tenía momentos de vulnerabilidad que mostraban su deseo de encontrar amor y estabilidad. Tuvo varias relaciones a lo largo de la serie, incluyendo una con el director Skinner y, más adelante, una más significativa con Ned Flanders. Esta última relación reveló una faceta más tierna y esperanzada de Edna, alejándola del estereotipo de la maestra amargada y acercándola a una mujer que aún creía en segundas oportunidades.</p><br>" +
    "<p>La profesora Krabappel también fue una crítica social dentro del universo de Los Simpson. Su personaje reflejaba los problemas del sistema educativo público: falta de recursos, desmotivación docente y alumnos difíciles. A través de su sarcasmo y sus frustraciones, la serie mostraba cómo incluso los educadores más dedicados pueden perder la fe cuando no reciben el apoyo necesario. Tras el fallecimiento de Marcia Wallace, la actriz que le daba voz, el personaje fue retirado con respeto, dejando un legado de humor ácido y humanidad en Springfield.</p><br>"
);


const dorisData = new Personaje(
    "doris",
    "Doris Freedman",
    "homer.html",
    "doris.png",
    "Cocinera de la Escuela Primaria de Springfield",
    "<p>Doris Freedman, la cocinera de la Escuela Primaria de Springfield, es uno de esos personajes secundarios que, con pocas palabras, logra dejar una impresión duradera. Con su voz ronca y actitud indiferente, representa a la perfección el estereotipo de la trabajadora escolar hastiada. Su cocina es famosa por servir platos poco apetecibles, como la “pizza con sabor a cartón” o el misterioso “estofado de carne no especificada”. Aunque rara vez se le ve interactuar con los alumnos más allá de la ventanilla del comedor, su presencia contribuye al ambiente caótico y descuidado del sistema educativo de Springfield.</p><br>" +
    "<p>A lo largo de la serie, Doris ha aparecido en momentos clave que reflejan el abandono institucional de la escuela. Su despreocupación por la calidad de los alimentos y su actitud de “esto es lo que hay” la convierten en un símbolo de la falta de recursos y motivación del personal escolar. Curiosamente, el personaje fue retirado durante varias temporadas tras el fallecimiento de la actriz que le daba voz, pero luego regresó con una nueva intérprete. Su regreso fue recibido con nostalgia por los fans, que la consideran parte esencial del ecosistema escolar de Los Simpson.</p><br>"
);

const musicoData = new Personaje(
    "musico",
    "Sr Largo",
    "homer.html",
    "musico.png",
    "Profesor de la Escuela Primaria de Springfield",
    "<p>El profesor de música de la Escuela Primaria de Springfield, conocido como Sr. Largo, es uno de los personajes más discretos pero memorables del entorno escolar. Con su rostro alargado, su voz monótona y su actitud eternamente apática, representa al maestro que ha perdido toda pasión por su trabajo. A menudo se le ve dirigiendo la banda escolar con desgana, frustrado por la falta de talento y disciplina de sus alumnos. Su sarcasmo y su indiferencia lo convierten en una figura cómica, especialmente cuando contrasta con el entusiasmo de personajes como Lisa Simpson.</p><br>" +
    "<p>Aunque no tiene muchos diálogos extensos, el Sr. Largo ha protagonizado momentos curiosos que revelan su personalidad. En algunos episodios, se insinúa que tiene una vida personal más compleja, incluyendo referencias a su orientación sexual o su frustración con el sistema educativo. Su presencia constante en las clases de música y eventos escolares lo convierte en parte esencial del paisaje de la escuela, y aunque rara vez sonríe, su expresión de resignación es parte del encanto de Los Simpson.</p><br>"
);
const lisapData = new Personaje(
    "lisap",
    "Elizabeth Hoover",
    "homer.html",
    "lisap.png",
    "Profesora de la Escuela Primaria de Springfield",
    "<p>La profesora de Lisa Simpson, la señorita Hoover, es una figura que representa la apatía y el desencanto dentro del sistema educativo de Springfield. A diferencia de Lisa, que es curiosa, apasionada y brillante, la señorita Hoover suele mostrarse desmotivada, indiferente y poco comprometida con la enseñanza. En muchos episodios se la ve leyendo revistas, ignorando a sus alumnos o dando clases sin entusiasmo, lo que genera una clara desconexión con Lisa, quien constantemente busca estímulo intelectual.</p><br>" +
    "<p>Aunque no tiene un papel tan destacado como otros personajes, la señorita Hoover sirve como contraste para resaltar la frustración de Lisa en un entorno que no valora el conocimiento ni la excelencia académica. Su actitud refleja el desgaste de muchos docentes atrapados en sistemas que no los apoyan, y aunque no es malintencionada, su falta de vocación convierte el aula en un lugar estancado. Esta dinámica entre alumna y maestra añade una capa de crítica social al universo de Los Simpson, mostrando cómo incluso los niños más brillantes pueden sentirse abandonados por la educación tradicional.</p><br>"
);

const skynermData = new Personaje(
    "skynerm",
    "Agnes Skinner",
    "homer.html",
    "skynerm.png",
    "Madre de Seymour Skinner",
    "<p>Agnes Skinner es la madre del director Seymour Skinner en Los Simpson, y uno de los personajes más autoritarios y dominantes de la serie. Su relación con su hijo es marcadamente controladora: lo trata como si aún fuera un niño, lo regaña constantemente y lo obliga a vivir bajo sus reglas, incluso en la adultez. Esta dinámica genera situaciones cómicas y a la vez incómodas, mostrando a Seymour como un hombre reprimido que nunca ha logrado independizarse emocionalmente.</p><br>" +
    "<p>Agnes es conocida por su voz áspera, su actitud crítica y su desprecio hacia casi todo lo que no encaje con sus estrictos estándares. A menudo se la ve interrumpiendo la vida personal de Skinner, saboteando sus relaciones o humillándolo en público. Su presencia en la serie sirve como una exageración del arquetipo de la madre dominante, y su influencia sobre Seymour explica muchas de sus inseguridades y comportamientos extraños como director de la escuela.</p><br>" +
    "<p>Aunque rara vez muestra afecto, Agnes tiene momentos en los que se deja ver como una madre preocupada, aunque siempre bajo su estilo severo. Su personaje añade una capa de humor oscuro y familiar a Los Simpson, y su relación con Skinner es una fuente constante de gags sobre la dependencia, la autoridad y los lazos familiares que nunca se rompen del todo.</p><br>"
);

const nelsonData = new Personaje(
    "nelson",
    "Nelson Muntz",
    "homer.html",
    "nelson1.png",
    "Abusón de la Escuela Primaria de Springfield",
    "<p>Nelson Muntz es uno de los personajes secundarios más reconocibles de Los Simpson, conocido principalmente por ser el matón de la Escuela Primaria de Springfield. Su risa burlona —“¡Ha-ha!”— se ha convertido en una de las expresiones más icónicas de la serie, usada cada vez que se burla de otros niños, especialmente de Milhouse, Martin o incluso Bart. Aunque su papel suele ser el del abusón clásico, Nelson tiene una personalidad más compleja de lo que parece a simple vista.</p><br>" +
    "<p>A lo largo de la serie, se han mostrado aspectos más humanos de Nelson. Vive en condiciones difíciles, con una madre ausente y un padre que lo abandonó, lo que explica en parte su comportamiento agresivo. En algunos episodios, se lo ha visto vulnerable, triste o incluso buscando afecto, como cuando tiene un breve romance con Lisa Simpson. Estos momentos revelan que Nelson no es simplemente un villano escolar, sino un niño que lucha con una vida complicada y que, en el fondo, desea ser aceptado.</p><br>" +
    "<p>Nelson también ha demostrado tener talentos y sensibilidad en ocasiones inesperadas. Ha mostrado interés por la poesía, el cine y hasta ha protagonizado episodios donde se convierte en un líder positivo entre sus compañeros. Aunque suele volver a su rol de matón, estos destellos de profundidad lo convierten en un personaje tridimensional que va más allá del cliché. Su evolución a lo largo de la serie ha permitido que los espectadores lo vean con más empatía.</p><br>" +
    "<p>En el contexto de Springfield, Nelson representa a los niños que crecen en entornos difíciles y que, por falta de apoyo, canalizan sus frustraciones en forma de violencia o sarcasmo. Su presencia en la serie sirve como una crítica sutil a los problemas sociales que afectan a los más jóvenes, y al mismo tiempo, aporta humor y dinamismo a las historias escolares. Nelson Muntz es mucho más que un “matón con risa burlona”; es un reflejo de las contradicciones que viven muchos niños en silencio</p><br>"
);

const bandaData = new Personaje(
    "banda",
    "Kearney, Jimbo y Dolph",
    "homer.html",
    "banda.png",
    "Abusones de la Escuela Primaria de Springfield",
    "<p>Jimbo Jones es el clásico adolescente rebelde de Springfield. Con su gorro morado inseparable y su actitud despreocupada, se ha convertido en uno de los matones más reconocibles de la serie. Aunque suele intimidar a los niños más pequeños, especialmente a Milhouse y Martin, también muestra momentos de vulnerabilidad, como cuando se enamora o se enfrenta a figuras de autoridad. Su estilo de vida rebelde y su sarcasmo lo hacen destacar entre los demás abusones.</p><br>" +
    "<p>A pesar de su fachada dura, Jimbo tiene una personalidad más compleja de lo que parece. En algunos episodios, se le ve participando en actividades escolares o mostrando interés por cosas más allá de la intimidación. Su relación con sus amigos matones es más de camaradería que de liderazgo absoluto, y aunque a veces parece seguir a Nelson, también toma la iniciativa en muchas travesuras. Jimbo representa ese tipo de adolescente que se esconde tras una actitud dura para encajar en un entorno difícil</p><br>" +
    "<p>Dolph Starbeam, con su peinado tipo cortina y su voz nasal, es el sarcástico del grupo. Siempre tiene una frase burlona lista y suele ser el primero en reírse de las desgracias ajenas. Aunque no es tan violento como Nelson, su humor cruel y su actitud cínica lo convierten en un personaje temido por los más pequeños. En ocasiones, se muestra más inteligente que sus compañeros, lo que le permite manipular situaciones a su favor.</p><br>" +
    "<p>Kearney Zzyzwicz es el más peculiar del grupo, principalmente porque, a pesar de estar en la primaria, tiene un hijo y aparenta ser mucho mayor. Su aspecto calvo y su voz grave lo hacen parecer más intimidante, y suele ser el músculo del grupo cuando se necesita fuerza bruta. Aunque no habla tanto como los demás, sus intervenciones suelen ser contundentes y memorables. Su presencia añade un toque absurdo y cómico al grupo de abusones.</p><br>"
);


const martinData = new Personaje(
    "martin",
    "Martin Prince",
    "homer.html",
    "martin.png",
    "Alumno prodigio de la Escuela Primaria de Springfield",
    "<p>Martin Prince es el niño prodigio por excelencia de la Escuela Primaria de Springfield. Con su inteligencia sobresaliente, su vocabulario sofisticado y su entusiasmo por el aprendizaje, Martin representa el estereotipo del estudiante modelo. Siempre está dispuesto a participar en concursos académicos, ferias de ciencias y cualquier actividad que le permita brillar intelectualmente. Sin embargo, su necesidad de aprobación por parte de los adultos y su falta de habilidades sociales lo convierten en blanco frecuente de burlas por parte de sus compañeros, especialmente de los abusones.</p><br>" +
    "<p>A pesar de ser marginado por muchos niños, Martin mantiene una actitud positiva y una confianza casi ingenua en sus capacidades. Su personalidad teatral y su gusto por la música clásica, la poesía y los disfraces lo hacen único entre los estudiantes. En varios episodios, ha demostrado tener una faceta más rebelde o competitiva, lo que añade profundidad a su personaje. Martin no solo es el cerebrito de la clase, sino también un símbolo de lo que significa ser diferente en un entorno escolar que no siempre valora la excelencia académica.<p><br>"
);

const terryData = new Personaje(
    "terry",
    "Sherri y Terri",
    "homer.html",
    "terry.png",
    "Alumnas y gemelas de la Escuela Primaria de Springfield",
    "<p>Sherri y Terri son las gemelas idénticas de la Escuela Primaria de Springfield, reconocibles por su cabello violeta, sus vestidos a juego y su actitud misteriosa. Aunque no suelen tener papeles protagónicos, su presencia constante en el aula y en el patio escolar las convierte en figuras icónicas del entorno infantil de Los Simpson. Son conocidas por su tono burlón y por hacer comentarios sarcásticos, especialmente dirigidos a Bart Simpson, a quien suelen rechazar con frialdad. Su sincronización al hablar y moverse refuerza su aura inquietante, como si compartieran pensamientos y emociones sin necesidad de palabras.</p><br>" +
    "<p>A lo largo de la serie, Sherri y Terri han mostrado una personalidad más compleja que la de simples niñas crueles. En algunos episodios, se las ve participando en actividades escolares con entusiasmo o mostrando momentos de vulnerabilidad. Aunque suelen actuar como una unidad, hay ocasiones en que se diferencian ligeramente, lo que sugiere que tienen identidades individuales más allá de su rol como gemelas. Su estilo sobrio y su actitud distante las hacen destacar entre los demás niños, aportando un toque de ironía y misterio al mundo escolar de Springfield<p><br>"
);

const alisonData = new Personaje(
    "alison",
    "Allison Taylor",
    "homer.html",
    "alison.png",
    "Alumna prodigio de la Escuela Primaria de Springfield",
    "<p>Allison Taylor es una estudiante brillante de la Escuela Primaria de Springfield que aparece como rival intelectual de Lisa Simpson. Su primera aparición se da en el episodio “Lisa’s Rival”, donde se traslada a la escuela y rápidamente destaca por su inteligencia, talento musical y habilidades académicas. Esto provoca en Lisa una mezcla de celos y admiración, ya que Allison representa todo lo que ella aspira a ser, pero con una naturalidad que la hace aún más intimidante. A pesar de la competencia, Allison no muestra arrogancia; al contrario, es amable y modesta, lo que intensifica el conflicto interno de Lisa.</p><br>" +
    "<p>Aunque Allison no aparece con frecuencia en la serie, su personaje dejó una huella importante al explorar el tema de la rivalidad entre niñas inteligentes. Su relación con Lisa evoluciona hacia una amistad basada en el respeto mutuo, demostrando que la competencia no siempre tiene que ser destructiva. Allison también ha aparecido en episodios posteriores como parte del grupo de estudiantes destacados, reforzando su papel como una figura académica dentro del entorno escolar. Su presencia aporta profundidad al universo infantil de Los Simpson, mostrando que incluso los personajes secundarios pueden tener historias significativas<p><br>"
);

const uterData = new Personaje(
    "uter",
    "Üter Zörker",
    "homer.html",
    "uter.png",
    "Alumno prodigio de la Escuela Primaria de Springfield",
    "<p>Üter Zörker es el niño alemán de la Escuela Primaria de Springfield, conocido por su acento marcado, su amor por los dulces y su aspecto regordete. Siempre aparece con una bolsa de golosinas en la mano y frases como “¡No me atrapen, estoy lleno de chocolate!” que lo han convertido en un personaje entrañable. Aunque no tiene un papel protagónico, su presencia es constante en el aula y en excursiones escolares, donde suele ser víctima de accidentes o del abandono por parte de los adultos, como en el famoso episodio en el que lo olvidan en el museo.</p><br>" +
    "<p>A pesar de ser blanco frecuente de burlas y descuidos, Üter representa una mezcla de inocencia y entusiasmo que contrasta con el cinismo de otros personajes. Su diseño caricaturesco y su personalidad exagerada lo hacen destacar entre los estudiantes secundarios. En algunos episodios, se ha insinuado que tiene una vida familiar peculiar y que su dieta poco saludable podría estar relacionada con su estilo de vida. Aunque aparece esporádicamente, Üter ha dejado huella como uno de los personajes más simpáticos y memorables del entorno escolar de Los Simpson.<p><br>"
);

const duffData = new Personaje(
    "duff",
    "Duffman",
    "homer.html",
    "duff.png",
    "Portavoz de la cerveza Duff",
    "<p>Duffman es el extravagante y musculoso portavoz de la cerveza Duff, una figura icónica dentro del universo de Los Simpson. Con su traje ajustado, capa roja, gafas de sol y cinturón lleno de latas, representa la exageración del marketing cervecero. Siempre aparece con poses dramáticas y frases como “¡Oh, sí!” que lo han convertido en un personaje de culto. Aunque su papel es principalmente promocional, Duffman ha protagonizado momentos que revelan una vida más compleja detrás del personaje, incluyendo dudas sobre su trabajo y su identidad.</p><br>" +
    "<p>A lo largo de la serie, se ha insinuado que Duffman no es una sola persona, sino un rol que ha sido interpretado por varios actores. Esto añade una capa de sátira sobre la industria publicitaria y la superficialidad del entretenimiento. A pesar de su actitud siempre festiva, hay episodios donde se muestra más reflexivo, cuestionando el impacto de su imagen en la sociedad. Duffman es mucho más que un simple símbolo de cerveza: es una crítica divertida al mundo del marketing, la fama y la cultura del exceso.<p><br>"
);

const profesorData = new Personaje(
    "profesor",
    "Profesor Frink",
    "homer.html",
    "profesor.png",
    "Científico de Springfield",
    "<p>El Profesor John Frink es el científico más excéntrico de Springfield, conocido por su inteligencia desbordante y su forma de hablar llena de tecnicismos y sonidos extraños como “glaven” o “flavin”. Con su bata blanca, gafas gruesas y voz nasal, Frink representa el estereotipo del genio nerd, siempre inmerso en experimentos que van desde lo brillante hasta lo completamente absurdos. Sus inventos, aunque a menudo tienen buenas intenciones, suelen causar caos o funcionar de manera impredecible, lo que lo convierte en una fuente constante de humor científico en Los Simpson.</p><br>" +
    "<p>A lo largo de la serie, Frink ha demostrado tener una mente brillante pero desconectada de la realidad cotidiana. Ha creado desde máquinas del tiempo hasta traductores de bebés, y ha participado en conferencias científicas y ferias tecnológicas. Sin embargo, su falta de habilidades sociales y su tendencia a perderse en explicaciones incomprensibles lo hacen más cómico que admirable. En algunos episodios, se ha explorado su vida personal, revelando una relación complicada con su padre y momentos de vulnerabilidad que humanizan al personaje.</p><br>" +
    "<p>Frink también sirve como una parodia de los científicos en la cultura pop, mezclando elementos de figuras como Jerry Lewis y Doc Brown de Volver al Futuro. Su presencia en Springfield aporta un toque de ciencia ficción y sátira académica, mostrando cómo incluso el mayor intelecto puede ser víctima de su propia genialidad. Aunque no es un personaje principal, sus apariciones suelen ser memorables, y su estilo único lo ha convertido en uno de los secundarios más queridos y reconocibles de la serie.</p><br>"
);


const cletusData = new Personaje(
    "cletus",
    "Cletus Spuckler",
    "homer.html",
    "cletus.png",
    "Campesino de Springfield",
    "<p>Cletus Spuckler, el entrañable y desaliñado personaje de Los Simpson, representa con humor exagerado el estereotipo del campesino estadounidense. Vive en las afueras de Springfield con su numerosa familia, compuesta por decenas de hijos cuyos nombres suelen ser tan peculiares como su estilo de vida. Su forma de hablar, su ropa raída y su actitud despreocupada lo convierten en una figura cómica que aparece en momentos clave para aportar un toque de absurdo y ternura rural.</p><br>" +
    "<p>A pesar de su aparente ignorancia, Cletus tiene una sabiduría muy particular. En varios episodios, demuestra una lógica propia que, aunque no siempre convencional, le permite sobrevivir con ingenio en situaciones disparatadas. Su relación con Brandine, su esposa (y en ocasiones insinuada como prima), está llena de momentos hilarantes, donde ambos comparten una visión del mundo que desafía cualquier expectativa urbana. Juntos forman una pareja que, aunque excéntrica, se mantiene unida por un vínculo genuino.</p><br>" +
    "<p>Cletus también ha protagonizado escenas memorables, como cuando recoge objetos del vertedero y los considera tesoros, o cuando intenta vender huevos de serpiente como si fueran productos gourmet. Su presencia en Los Simpson sirve como crítica social disfrazada de humor, mostrando cómo la marginalidad puede ser fuente de risa sin perder el respeto por la diversidad cultural. Aunque no es un personaje principal, su impacto en la serie es innegable, y cada aparición suya garantiza una carcajada inesperada.</p><br>"
);

const mujercData = new Personaje(
    "mujerc",
    "Brandine Spuckler",
    "homer.html",
    "mujerc.png",
    "Mujer de Cletus y campesina de Springfield",
    "<p>Brandine Spuckler, la esposa de Cletus en Los Simpson, es tan peculiar como su marido. Con su acento sureño y su actitud despreocupada, Brandine encarna el mismo estilo de vida rural y excéntrico que caracteriza a la familia Spuckler. Aunque a menudo parece confundida o distraída, tiene momentos de lucidez inesperada, como cuando revela que ha servido en el ejército o que posee conocimientos sorprendentes. Su relación con Cletus es una mezcla de cariño, caos y comedia, y juntos forman una pareja que, aunque disfuncional, se complementa perfectamente.</p><br>" +
    "<p>A lo largo de la serie, Brandine ha demostrado ser más que una simple figura secundaria. Su papel como madre de una cantidad descomunal de hijos, muchos con nombres insólitos, refuerza el tono satírico de la serie sobre la vida rural estadounidense. En ocasiones, se insinúa que Brandine podría ser pariente de Cletus, lo que añade una capa más de humor absurdo a su historia. A pesar de su apariencia descuidada y su entorno caótico, Brandine tiene una presencia entrañable que aporta momentos memorables y divertidos a la serie.</p><br>"
);


const jeffData = new Personaje(
    "cletus",
    "Jeff Albertson",
    "homer.html",
    "jeff.png",
    "Venderdor de la tienda de comics de Springfield",
    "<p>Jeff Albertson, más conocido como el Hombre de la Tienda de Cómics en Los Simpson, es el epítome del fanático de la cultura geek llevado al extremo. Dueño de La Mazmorra del Androide, su tienda está repleta de cómics, figuras coleccionables, videojuegos y todo tipo de memorabilia que hace las delicias de los habitantes más nerds de Springfield. Con su voz nasal, su camiseta ajustada y su actitud sarcástica, Jeff se ha convertido en un personaje icónico que representa tanto la pasión como la pedantería del mundo friki.</p><br>" +
    "<p>A menudo, Jeff se muestra arrogante y crítico, especialmente con los gustos ajenos. No duda en humillar a sus clientes con frases como “Peor episodio de la historia” o en corregir errores mínimos sobre datos de superhéroes o películas de ciencia ficción. Sin embargo, detrás de esa fachada de superioridad, se esconde alguien profundamente apasionado por su universo, que encuentra en los cómics una forma de escapar de la rutina y conectar con otros inadaptados como él.</p><br>" +
    "<p>Aunque no aparece en todos los episodios, sus intervenciones suelen ser memorables y cargadas de referencias culturales. Jeff ha protagonizado momentos hilarantes, como cuando intenta ligar en convenciones de cómics o cuando revela su sorprendente conocimiento sobre temas históricos y científicos. Su personaje sirve como una crítica divertida al elitismo dentro de los fandoms, pero también como un homenaje a quienes viven con intensidad sus pasiones, por más peculiares que parezcan.</p><br>"
);


const juliusData = new Personaje(
    "julius",
    "Dr. Julius Hibbert",
    "homer.html",
    "julius.png",
    "Doctor de Springfield",
    "<p>El Dr. Julius Hibbert es el médico más reconocido de Springfield en Los Simpson, y se caracteriza por su risa peculiar y su actitud siempre optimista, incluso en los momentos más inapropiados. Con su bata blanca y su voz calmada, representa una figura de autoridad médica, aunque a menudo sus diagnósticos y tratamientos rozan lo absurdo. Su risa contagiosa, que suele aparecer tras decir algo inquietante, se ha convertido en uno de sus rasgos más distintivos y cómicos.</p><br>" +
    "<p>A lo largo de la serie, el Dr. Hibbert ha atendido a numerosos personajes, desde Homer hasta Krusty el Payaso, y aunque parece competente, sus métodos no siempre son convencionales. En ocasiones, se muestra más interesado en el dinero que en la salud de sus pacientes, ofreciendo tratamientos costosos o innecesarios. Sin embargo, también ha demostrado tener un lado humano, ayudando a la comunidad y mostrando empatía en momentos clave, lo que lo convierte en un personaje complejo y divertido.</p><br>" +
    "<p>Además de su rol como médico, Hibbert ha sido retratado como un hombre de familia, con una esposa y varios hijos, y en algunos episodios se insinúa que tiene un pasado sorprendente, incluyendo vínculos con otros personajes como el Dr. Nick. Su presencia en la serie sirve como una parodia de los médicos televisivos, mezclando profesionalismo con humor absurdo, y su risa inconfundible asegura que cada aparición suya deje una huella cómica en el espectador.</p><br>"
);

const kentData = new Personaje(
    "kent",
    "Kent Brockman",
    "homer.html",
    "kent.png",
    "Presentador de las noticias de Springfield",
    "<p>Kent Brockman es el presentador estrella de las noticias en Los Simpson, conocido por su voz grave, su peinado impecable y su actitud dramática ante cualquier acontecimiento. Como rostro principal de Canal 6 Noticias, Kent representa la figura del periodista sensacionalista, siempre dispuesto a exagerar los hechos para captar la atención de la audiencia. Su estilo de narración, cargado de juicios rápidos y frases impactantes, lo convierte en una parodia perfecta de los medios de comunicación modernos.</p><br>" +
    "<p>A lo largo de la serie, Brockman ha cubierto desde invasiones alienígenas hasta escándalos locales, siempre con un tono alarmista y una tendencia a perder la objetividad. En más de una ocasión, ha mostrado su desprecio por el público o por sus propios colegas, dejando ver un ego inflado y una visión elitista del mundo. Sin embargo, también ha tenido momentos de vulnerabilidad, como cuando accidentalmente revela sus verdaderas opiniones al aire o se enfrenta a situaciones que lo sacan de su zona de confort.</p><br>" +
    "<p>Más allá de su rol como periodista, Kent Brockman es un símbolo de cómo los medios pueden moldear la percepción pública con solo unas palabras. Su personaje sirve como crítica a la manipulación informativa, al culto a la personalidad y a la obsesión por el rating. Cada vez que aparece en pantalla, su presencia garantiza una dosis de sarcasmo, exageración y una mirada irónica sobre el mundo del periodismo televisivo.</p><br>"
);

const timoData = new Personaje(
    "timo",
    "Reverendo Timothy Lovejoy",
    "homer.html",
    "timo.png",
    "Reverendo de Springfield",
    "<p>El Reverendo Timothy Lovejoy es el líder espiritual de la Primera Iglesia de Springfield en Los Simpson. Con su voz monótona y su actitud cada vez más apática, representa una figura religiosa que ha perdido parte de su entusiasmo por el ministerio. Aunque en sus inicios se mostraba comprometido con su comunidad, con el tiempo ha adoptado una postura más indiferente, especialmente ante las constantes preguntas de Ned Flanders, su feligrés más devoto. Su sermones suelen ser largos, poco inspiradores y cargados de referencias bíblicas que no siempre conectan con sus oyentes.</p><br>" +
    "<p>A pesar de su aparente desinterés, el Reverendo Lovejoy ha tenido momentos de reflexión y profundidad. En algunos episodios, se enfrenta a dilemas éticos que lo obligan a reconsiderar su papel como guía espiritual. También ha mostrado una faceta más humana, revelando que su vida personal no es tan perfecta como aparenta, y que incluso él lucha con la fe y la rutina. Su relación con su esposa Helen, chismosa y crítica, añade una capa de comedia a su vida fuera del púlpito.</p><br>" +
    "<p>Lovejoy sirve como una crítica sutil a la institucionalización de la religión y a la desconexión entre líderes religiosos y sus comunidades. Su personaje refleja cómo incluso quienes ocupan cargos de autoridad moral pueden sentirse agotados o cínicos. Sin embargo, su presencia en la serie también permite explorar temas como la espiritualidad, el perdón y la hipocresía, todo envuelto en el característico humor satírico de Los Simpson.</p><br>"
);

const timomData = new Personaje(
    "timom",
    "Helen Lovejoy",
    "homer.html",
    "timom.png",
    "Mujer del reverendo Timothy Lovejoy",
    "<p>Helen Lovejoy, la esposa del Reverendo Timothy Lovejoy en Los Simpson, es conocida por su actitud moralista y su afición al chisme. Como figura prominente en la comunidad religiosa de Springfield, Helen suele estar al frente de los eventos de la iglesia y no pierde oportunidad para juzgar a los demás, especialmente a Marge Simpson y sus amigas. Su frase recurrente, “¿Es que nadie piensa en los niños?”, se ha convertido en un símbolo de su dramatismo y su tendencia a exagerar los problemas sociales desde una postura conservadora.</p><br>" +
    "<p>A pesar de su aparente devoción, Helen no siempre practica lo que predica. Su inclinación por el cotilleo y su tono condescendiente revelan una personalidad contradictoria, lo que la convierte en una figura satírica de la hipocresía moral. Su relación con el Reverendo Lovejoy también muestra tensiones, ya que a menudo lo presiona para que actúe con más firmeza desde el púlpito. Helen aporta un toque de ironía a la serie, al representar cómo incluso los más piadosos pueden caer en actitudes poco caritativas.</p><br>"
);


const troyData = new Personaje(
    "troy",
    "Troy McClure",
    "homer.html",
    "troy.png",
    "Actor de Springfield",
    "<p>Troy McClure es uno de los personajes más carismáticos y satíricos de Los Simpson, conocido por su frase icónica: “Hola, soy Troy McClure. Tal vez me recuerden de películas como…”. Actor venido a menos, Troy aparece frecuentemente como presentador de videos educativos, anuncios y documentales absurdos, lo que parodia el uso de celebridades para dar credibilidad a contenidos cuestionables. Su voz engolada y su sonrisa artificial lo convierten en una figura inolvidable que representa el lado más superficial de Hollywood</p><br>" +
    "<p>Aunque su carrera está claramente en declive, Troy mantiene una actitud optimista y una imagen pública cuidadosamente construida. En el episodio donde se casa con Selma Bouvier para mejorar su reputación, se revela su desesperación por volver a ser relevante en la industria del entretenimiento. Su personaje sirve como crítica al culto a la fama, a la hipocresía del espectáculo y a la obsesión por la apariencia. Cada aparición de Troy McClure es una mezcla de nostalgia, comedia y una mirada mordaz al mundo del show business.</p><br>"
);

const abogadoData = new Personaje(
    "abogado",
    "Abogado de cabello azul",
    "homer.html",
    "abogado.png",
    "El abogado del Sr Burns",
    "<p>El abogado del Sr. Burns en Los Simpson es conocido como el abogado de cabello azul (Blue-Haired Lawyer). Es un personaje secundario que aparece frecuentemente en juicios, casi siempre representando a figuras poderosas como el Sr. Burns o grandes corporaciones. Su primera aparición fue en el episodio “Bart Gets Hit by a Car” de la segunda temporada.</p><br>" +
    "<p>Este abogado se caracteriza por su tono monótono, su actitud fría y calculadora, y por tener una habilidad casi infalible para ganar casos. Lionel Hutz, el abogado más torpe de Springfield, le tiene un miedo notable. En varios episodios, el abogado de cabello azul ha demostrado ser implacable, incluso reclamando derechos de autor sobre villancicos o notas musicales en nombre de Disney, lo que lo convierte en una sátira del exceso de legalismo y burocracia</p><br>"
);

const lionelData = new Personaje(
    "lionel",
    "Lionel Hutz",
    "homer.html",
    "lionel.png",
    "Abogado de Springfield",
    "<p>Lionel Hutz, también conocido como Leonardo Luna en Hispanoamérica, es el epítome del abogado que nunca debería ejercer. Con su traje barato, su oficina en un centro comercial (que también funciona como zapatería y expendedora de jugos), y una confianza desmedida en su nulo talento legal, Hutz ha representado a los Simpson en múltiples juicios, casi siempre con resultados desastrosos. Su tarjeta de presentación incluye frases como “Trabajos rápidos, sin preguntas” y su maletín contiene un sándwich a medio comer y un diploma dudoso. A pesar de todo, la familia Simpson lo sigue contratando, quizás por falta de opciones… o por puro cariño.</p><br>" +
    "<p>Lo que hace a Lionel inolvidable no es su competencia, sino su capacidad para convertir cada juicio en una comedia involuntaria. En el caso contra el restaurante “El Holandés Frito”, logró ganar alegando publicidad engañosa, aunque en otros juicios ha huido por la ventana al ver que iba perdiendo. En el episodio del juicio por el alma de Homero, vendido al Diablo por una rosquilla, Hutz desaparece justo antes del veredicto, solo para regresar cuando se entera de que ganó. Su legado en Los Simpson quedó congelado tras la muerte de Phil Hartman, su actor original, pero su torpeza legal sigue siendo parte del encanto de la serie</p><br>"
);

const juezData = new Personaje(
    "juez",
    "Roy Snyder",
    "homer.html",
    "juez.png",
    "Juez de Springfield",
    "<p>El juez Roy Snyder es el rostro de la justicia en Springfield, aunque su estilo para impartirla es todo menos convencional. Con su voz pausada y su expresión imperturbable, ha presidido algunos de los juicios más absurdos y memorables de Los Simpson. Desde casos de fraude hasta demandas por daños emocionales causados por payasos, Snyder mantiene la compostura mientras el caos se desata a su alrededor. Su reputación se basa en dictar sentencias sorprendentemente indulgentes, lo que ha hecho que muchos ciudadanos lo consideren más decorativo que efectivo. Aun así, su presencia es constante, y cuando se golpea el mazo, todos saben que el espectáculo legal está por comenzar.</p><br>" +
    "<p>Aunque su nombre original era “Juez Moulton”, los productores lo renombraron como Snyder sin saberlo, y así quedó para siempre. Su aspecto está inspirado en el juez estadounidense Robert Bork, y su tono de piel ha variado a lo largo de la serie, lo que ha generado cierta confusión entre los fans. En Hispanoamérica, ha sido doblado por varios actores, incluyendo Alfonso Mellado y Carlos Águila. Curiosamente, su hijo ha sido atropellado más de una vez por Lionel Hutz, lo que añade una capa de ironía a su papel como defensor de la ley. Aunque no tiene tantos diálogos como otros personajes, su figura es clave en el universo legal de Springfield</p><br>"
);


const abejaData = new Personaje(
    "abeja",
    "La Abeja",
    "homer.html",
    "abeja.png",
    "El hombre abeja",
    "<p>La Abeja, conocida como “El Hombre Abeja” o Bumblebee Man, es un personaje recurrente en Los Simpson que parodia los estereotipos de la televisión latina. Siempre vestido con un traje de abeja gigante, aparece en la pantalla de la familia Simpson como parte de un programa cómico en español, donde su humor físico exagerado y sus constantes desgracias provocan risas. Su personaje está inspirado en figuras como “El Chapulín Colorado” de Roberto Gómez Bolaños, y representa la forma en que la cultura estadounidense percibe los shows latinos: caóticos, ruidosos y llenos de slapstick.</p><br>" +
    "<p>Aunque sus apariciones suelen ser breves y caricaturescas, Bumblebee Man ha tenido momentos más profundos, como cuando se muestra su vida fuera del set, revelando que también enfrenta problemas personales como cualquier otro ciudadano de Springfield. Su presencia en la serie sirve como un guiño a la diversidad cultural y a la influencia de la televisión internacional en la vida cotidiana estadounidense. A pesar de ser un personaje secundario, su imagen es icónica y fácilmente reconocible por los fans de la serie en todo el mundo.</p><br>"
);



const capitanData = new Personaje(
    "capitan",
    "El Capitán Horatio",
    "homer.html",
    "capitan.png",
    "Capitán marinero de Springfield",
    "<p>El Capitán Horatio McCallister, conocido simplemente como el “Capitán”, es el marinero tuerto y barbudo de Los Simpson, famoso por su voz rasposa y su constante uso de frases náuticas como “¡Yarrr!” o “¡Arriad las velas!”. Su personaje es una parodia de los estereotipos de los viejos lobos de mar, con un parche en el ojo, una pipa y una actitud despreocupada. Aunque suele aparecer como dueño de un restaurante de mariscos —el “The Frying Dutchman”—, también ha sido representado como pescador, navegante y ocasional narrador de historias absurdas sobre el mar.</p><br>" +
    "<p>A pesar de su apariencia ruda y su lenguaje marinero, el Capitán McCallister es más cómico que temible. Sus intentos de parecer un experto en navegación suelen fracasar, y sus anécdotas están llenas de exageraciones y contradicciones. Su presencia en Springfield añade un toque pintoresco y absurdo, reforzando el estilo satírico de la serie. Aunque no es un personaje principal, sus intervenciones breves y su estilo exagerado lo han convertido en uno de los secundarios más memorables del universo de Los Simpson.</p><br>"
);



const discoData = new Personaje(
    "disco",
    "Disco Stu",
    "homer.html",
    "disco.png",
    "Bailarín de Springfield",
    "<p>Disco Stu es uno de los personajes secundarios más extravagantes y memorables de Los Simpson. Con su característico peinado afro, gafas de sol y atuendo setentero lleno de lentejuelas, Stu representa la encarnación viva de la era disco. Siempre habla en tercera persona y se presenta como un amante empedernido del ritmo, la pista de baile y todo lo relacionado con la música disco. Su nombre proviene de una broma visual en la serie, cuando Homero intenta escribir “Disco Stud” en una chaqueta, pero se queda sin espacio y termina con “Disco Stu”, dando origen al personaje.</p><br>" +
    "<p>Aunque sus apariciones suelen ser breves, Disco Stu ha protagonizado momentos cómicos que parodian la obsesión nostálgica por los años 70. Se le ha visto promocionando discos, bailando en eventos locales y hasta intentando vender productos relacionados con su estilo de vida. Su personalidad exagerada y su constante referencia a una época pasada lo convierten en una figura divertida y absurda dentro del universo de Springfield, aportando color y humor cada vez que aparece en pantalla</p><br>"
);



const nickData = new Personaje(
    "nick",
    "Dr Nick",
    "homer.html",
    "nick.png",
    "Doctor de Springfield",
    "<p>El Dr. Nick Riviera, conocido por su saludo característico “¡Hola, doctor Nick!”, es el médico más cuestionable de Springfield. Con su bata blanca, acento peculiar y métodos médicos dudosos, representa una parodia de los profesionales de la salud incompetentes y sensacionalistas. A menudo aparece en comerciales de televisión ofreciendo cirugías a precios ridículamente bajos o tratamientos milagrosos sin ninguna base científica. Su presencia en la serie sirve como una crítica cómica al sistema médico y a los charlatanes que priorizan el dinero sobre la ética profesional.</p><br>" +
    "<p>A pesar de su evidente falta de preparación, el Dr. Nick ha sido contratado en múltiples ocasiones por los ciudadanos de Springfield, incluyendo a Homero Simpson, lo que demuestra el nivel de desesperación (o ingenuidad) de la comunidad. Su actitud despreocupada y su optimismo desbordante lo hacen un personaje entrañable, aunque peligrosamente incompetente. Cada vez que aparece, es garantía de caos médico y risas aseguradas, consolidándolo como uno de los secundarios más icónicos y absurdos de Los Simpson.</p><br>"
);


const boxeadorData = new Personaje(
    "boxeador",
    "Drederick Tatum",
    "homer.html",
    "boxeador.png",
    "Boxeador de Springfield",
    "<p>El boxeador más famoso de Springfield es Drederick Tatum, una clara parodia de Mike Tyson tanto por su físico imponente como por su voz y pasado polémico. Tatum es el campeón de peso pesado en el universo de Los Simpson, conocido por su brutal estilo de pelea y su actitud arrogante. A pesar de su historial criminal y su comportamiento intimidante, es tratado como una celebridad local, apareciendo en eventos públicos y siendo admirado por muchos ciudadanos, incluido Homero, quien incluso lo enfrentó en un combate desastroso organizado por Moe.</p><br>" +
    "<p>Más allá del ring, Drederick Tatum representa el contraste entre fama y moralidad en la cultura popular. Aunque es temido por su fuerza y su pasado, también se le ha mostrado en situaciones más humanas, como cuando expresa preocupación por su hija o participa en causas sociales. Su personaje sirve como crítica a cómo la sociedad glorifica figuras públicas a pesar de sus defectos, y como fuente de humor por su mezcla de sofisticación y violencia. En Springfield, Tatum es sin duda el Campeón del Caos en el cuadrilátero</p><br>"
);


const locaData = new Personaje(
    "loca",
    "Eleanor Abernathy",
    "homer.html",
    "loca.png",
    "La loca de los gatos",
    "<p>La “Loca de los Gatos”, cuyo nombre real es Eleanor Abernathy, es uno de los personajes más caóticos y memorables de Los Simpson. Siempre aparece desaliñada, gritando incoherencias y lanzando gatos a su alrededor, lo que la ha convertido en un ícono del absurdo dentro de Springfield. Su personaje representa una caricatura extrema de la figura del “ermitaño urbano” y ha sido usada como símbolo de la decadencia mental y social en la ciudad. A pesar de su comportamiento errático, hay episodios donde se revela que fue una mujer brillante —abogada y médica— antes de caer en la locura, lo que añade una capa trágica a su historia.</p><br>" +
    "<p>En el ecosistema de Springfield, Eleanor es vista como una figura temida y evitada, pero también como parte del paisaje cotidiano. Su presencia sirve como crítica a la falta de apoyo a la salud mental y al abandono de personas vulnerables en la sociedad. Aunque rara vez tiene diálogo coherente, su sola aparición genera risas y desconcierto, consolidándola como la Reina del Caos Felino de Springfield</p><br>"
);

const mafiosoData = new Personaje(
    "mafioso",
    "Tony el Gordo",
    "homer.html",
    "mafioso.png",
    "Mafioso de Springfield",
    "<p>Tony el Gordo, conocido como Fat Tony en la versión original, es el jefe mafioso de Springfield y líder de la familia criminal local. Siempre vestido con traje elegante y hablando con tono pausado y amenazante, representa una parodia de los mafiosos clásicos del cine, especialmente de personajes como Vito Corleone de El Padrino. Fat Tony dirige operaciones ilegales que van desde apuestas clandestinas hasta tráfico de cigarrillos, y aunque sus actividades son claramente delictivas, es tratado con una mezcla de respeto y temor por los ciudadanos de Springfield, incluyendo al propio alcalde Quimby.</p><br>" +
    "<p>A pesar de su rol como criminal, Fat Tony tiene un código de honor peculiar y una actitud casi paternal con sus secuaces, como Louie y Legs. Su presencia aporta un toque de humor negro a la serie, mostrando cómo el crimen organizado puede coexistir con la absurda normalidad de Springfield. En el universo de la serie, Fat Tony sería sin duda el Capo de la Mafia Local, una figura que combina elegancia, amenaza y comedia en cada aparición.</p><br>"
);

const topoData = new Personaje(
    "topo",
    "Hans Topo",
    "homer.html",
    "topo.png",
    "Ciudadano Más Frágil de Springfield",
    "<p>Hans Topo, conocido como Hans Moleman en inglés, es uno de los personajes más infortunados y extrañamente entrañables de Los Simpson. De baja estatura, con voz temblorosa y apariencia frágil, Hans representa la personificación del infortunio en Springfield. Constantemente sufre accidentes absurdos, como ser atropellado, explotado o confundido con objetos inanimados, y aun así sigue apareciendo como si nada hubiera pasado. Su papel en la serie es el de víctima perpetua del caos cotidiano, y su presencia aporta un humor oscuro y surrealista que los fans han aprendido a esperar con cada aparición.</p><br>" +
    "<p>A pesar de su fragilidad, Hans Topo ha protagonizado momentos memorables, como su fallido intento de proyectar su película “El hombre que recibió un golpe en la ingle”, que se convirtió en un clásico involuntario. Su vida parece estar marcada por una cadena infinita de desgracias, pero su resistencia silenciosa lo convierte en una figura casi mítica dentro de Springfield. Si tuviera un título oficial en la ciudad, sin duda sería el Maestro del Desastre Involuntario.</p><br>"
);


const alcaldeData = new Personaje(
    "alcalde",
    "Alcalde Quimby",
    "homer.html",
    "alcalde.png",
    "Alcalde de Springfield",
    "<p>Joe Quimby es el alcalde de Springfield, la ciudad ficticia donde transcurre la serie Los Simpson. Inspirado en políticos como John F. Kennedy, Quimby es conocido por su acento marcado, su actitud arrogante y su estilo de vida escandaloso. A menudo se le retrata como corrupto, mujeriego y negligente en sus funciones públicas, aunque logra mantenerse en el cargo gracias a su carisma y manipulación política. Su primera aparición fue en el episodio “Bart Gets an F”, y desde entonces ha sido un personaje recurrente que representa la sátira política de la serie.</p><br>" +
    "<p>A pesar de sus múltiples escándalos, como tener hijos ilegítimos con varias amantes o desviar fondos públicos, el pueblo de Springfield sigue votando por él. Esto refleja el tono irónico y crítico de Los Simpson hacia la política y la apatía ciudadana. Quimby suele aparecer en eventos públicos con discursos vacíos y frases como “Yo no fui”, que se ha convertido en una de sus líneas más icónicas. Su personaje encarna el estereotipo del político corrupto pero encantador, y ha protagonizado momentos memorables que mezclan humor y crítica social.</p><br>"
);

const chefData = new Personaje(
    "chef",
    "Luigi Risotto",
    "homer.html",
    "chef.png",
    "Chef de Springfield",
    "<p>Luigi Risotto, conocido como el chef Luigi en Los Simpson, es el excéntrico propietario del restaurante italiano 'Luigi's' en Springfield. Su personaje es una parodia del estereotipo del inmigrante italiano: apasionado, ruidoso y con un acento marcado. Aunque su verdadero nombre es Lothar Folkman, lo cambió para atraer a los comensales que desconfiaban de un chef italiano con nombre germánico. Luigi es famoso por tratar a sus clientes con una mezcla de cortesía fingida y sarcasmo descarado, a menudo insultándolos en voz baja o gritándole al chef invisible Salvatore en la cocina.</p><br>" +
    "<p>Más allá de su actitud teatral, Luigi representa una figura cultural interesante dentro de la serie. Su restaurante es frecuentado por personajes como Fat Tony, el Sr. Burns y Krusty el Payaso, y está decorado con mapas de Italia y monumentos emblemáticos como el Coliseo y la Torre de Pisa. Además, forma parte del equipo de bolos 'Los estereotipos', junto a otros personajes que encarnan clichés culturales. Con su voz interpretada por Hank Azaria, Luigi se ha convertido en un personaje secundario memorable, que aporta sabor y humor a la vida cotidiana de Springfield.</p><br>"
);


const pistoleroData = new Personaje(
    "pistolero",
    "Richard O'Hara",
    "homer.html",
    "pistolero.png",
    "Pistolero de Springfield",
    "<p>El Rich Texan, cuyo nombre completo es Richard O'Hara, es un personaje recurrente en Los Simpson que representa el estereotipo del magnate petrolero sureño: ostentoso, ruidoso y amante de las armas. Siempre vestido con sombrero vaquero, botas y traje llamativo, suele aparecer gritando “¡Yee-haw!” mientras dispara al aire con sus pistolas. Su actitud exagerada y su fortuna descomunal lo convierten en una figura cómica que satiriza la riqueza desmedida y la arrogancia de ciertos empresarios estadounidenses.</p><br>" +
    "<p>A lo largo de la serie, el Rich Texan ha sido retratado como miembro del club de millonarios de Springfield, rival de personajes como el Sr. Burns, y ocasional inversionista en proyectos absurdos. Aunque su papel es generalmente secundario, su presencia aporta un toque de humor absurdo y crítica social, especialmente en episodios que abordan temas como el poder económico, la política o la cultura del dinero fácil. Su personalidad explosiva y su despreocupación por las consecuencias lo hacen inolvidable en cada aparición.</p><br>"
);









const characterData = [];
characterData.push(homerData);
characterData.push(margeData);
characterData.push(bartData);
characterData.push(lisaData);
characterData.push(maggieData);
characterData.push(abueloData);
characterData.push(monaData);
characterData.push(patyData);
characterData.push(madreData);
characterData.push(flandersData);
characterData.push(maudeData);
characterData.push(todData);
characterData.push(milhouseData);
characterData.push(padremData);
characterData.push(madremData);
characterData.push(burnsData);
characterData.push(smithersData);
characterData.push(lenyData);
characterData.push(moeData);
characterData.push(barnyData);
characterData.push(krustyData);
characterData.push(bobData);
characterData.push(melData);
characterData.push(snakeData);
characterData.push(apuData);
characterData.push(apumData);
characterData.push(bigunData);
characterData.push(ralphData);
characterData.push(bigunnData);
characterData.push(compisData);
characterData.push(skynerData);
characterData.push(skynerjData);
characterData.push(wilyData);
characterData.push(otoData);
characterData.push(ednaData);
characterData.push(dorisData);
characterData.push(musicoData);
characterData.push(lisapData);
characterData.push(skynermData);
characterData.push(nelsonData);
characterData.push(bandaData);
characterData.push(martinData);
characterData.push(terryData);
characterData.push(alisonData);
characterData.push(uterData);
characterData.push(duffData);
characterData.push(profesorData);
characterData.push(cletusData);
characterData.push(mujercData);
characterData.push(jeffData);
characterData.push(juliusData);
characterData.push(kentData);
characterData.push(timoData);
characterData.push(timomData);
characterData.push(troyData);
characterData.push(abogadoData);
characterData.push(lionelData);
characterData.push(juezData);
characterData.push(abejaData);
characterData.push(capitanData);
characterData.push(discoData);
characterData.push(nickData);
characterData.push(boxeadorData);
characterData.push(locaData);
characterData.push(mafiosoData);
characterData.push(topoData);
characterData.push(alcaldeData);
characterData.push(chefData);
characterData.push(pistoleroData);








fetch("http://localhost/Bootstrap/datatransfer.php", {
    method : "POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(characterData)
})
.then(() => console.log("ENVIADOS"));


















for (const character of characterData) {
    const card = document.createElement("div");
    card.classList.add("col-sm-10", "m-3");
    card.id = character.id;

    // Crear contenedor para imagen
    const imageWrapper = document.createElement("div");
    imageWrapper.style.display = "flex";
    imageWrapper.style.justifyContent = "center";
    imageWrapper.style.alignItems = "center";
    imageWrapper.style.marginBottom = "10px";

    const imagen = document.createElement("img");
    imagen.id = `${character.id}-image`;
    imagen.src = character.imagen;
    imagen.alt = character.nombre;
    imagen.style.height = "200px";
    imagen.style.objectFit = "cover";

    imageWrapper.appendChild(imagen);

    // Crear contenedor para la descripción con scroll
    const descripcionWrapper = document.createElement("div");
    descripcionWrapper.classList.add("descripcion-wrapper");
    descripcionWrapper.innerHTML = `<p>${character.descripcion}</p>`;

    card.innerHTML += `<h3>${character.nombre}</h3>`;
    card.appendChild(imageWrapper);
    card.innerHTML += `<h4>${character.titulo}</h4>`;
    card.appendChild(descripcionWrapper);

    contenedor.appendChild(card);

    const direccion = `${character.id}.html`;
    card.addEventListener("click", () => {
        window.location.href = direccion;
    });

}

