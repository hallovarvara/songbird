import { IObjectOfStrings } from './interfaces';
import { getCategoriesForData } from './utils';

const { detective, fantastic, drama, comedy, medicine, final } = getCategoriesForData();

const data: IObjectOfStrings[] = [
  {
    title: 'Доктор Хаус',
    originalTitle: 'House, M.D.',
    category: medicine,
    description:
      'Гениальный диагност-социопат пренебрегает правилами, врачебной этикой и моралью, лишь бы поставить больному верный диагноз и, если повезет, спасти его.',
    path: 'house-md',
  },
  {
    title: 'Хороший доктор',
    originalTitle: 'The Good Doctor',
    category: medicine,
    description:
      'Может ли аутист стать отличным хирургом и каково это — натурально видеть всё, что происходит в организме пациента? Гениальность, граничащая с коммуникативными проблемами делают главного героя воистину уникальным доктором.',
    path: 'good-doctor',
  },
  {
    title: 'Анатомия страсти',
    originalTitle: "Grey's Anatomy",
    category: medicine,
    description:
      'Каково быть женщиной в мире гениальных врачей-мужчин? А если ты еще интерн и дочь известного врача, требования запредельно высоки. Микс отношений и медицины в городской больнице Сиэтла.',
    path: 'greys-anatomy',
  },
  {
    title: 'Клиника',
    originalTitle: 'Scrubs',
    category: medicine,
    description:
      'Эпохальный сериал про двух друзей, вчерашних студентов медицинского, попавших работать больницу после университета и пытающихся не утонуть в круговерти врачебной жизни.',
    path: 'scrubs',
  },
  {
    title: 'Следствие по телу',
    originalTitle: 'Body of Proof',
    category: medicine,
    description:
      'После аварии ведущий нейрохирург уходит в судмедэксперты, и ей нет равных в понимании мертвых. Ее характер отбивает всякое желание общаться, и лишь малая доля окружающих ее могут вытерпеть это.',
    path: 'body-of-proof',
  },
  {
    title: 'Больница Никербокер',
    originalTitle: 'The Knick',
    category: medicine,
    description:
      'В нью-йоркской больнице применяют передовые методы лечения и стараются помочь всем пациентам — но до изобретения лазерного скальпеля и компьютерной томографии еще очень далеко, а в карету скорой помощи запрягают лошадей.',
    path: 'knick',
  },
  {
    title: 'Правосудие Декстера',
    originalTitle: 'Dexter',
    category: detective,
    description:
      'Как одновременно быть серийным убийцей и работать судебным экспертом полиции Майами? И при этом не попасть под подозрение, потому что не чувствуешь совершенно никаких эмоций.',
    path: 'dexter',
  },
  {
    title: 'Менталист',
    originalTitle: 'The Mentalist',
    category: detective,
    description:
      'Превосходный менталист, психолог-практик и манипулятор, некогда притворявшийся экстрасенсом и ясновидящим, вместе с Калифорнийским бюро расследований раскрывает самые запутанные дела об убийствах и ищет возмещдия для убитой маньяком семьи.',
    path: 'mentalist',
  },
  {
    title: 'Кости',
    originalTitle: 'Bones',
    category: detective,
    description:
      'Судебные антропологи вместе с ФБР расследуют самые странные преступления, в результате которых от жертв остаются только сгнившие останки или и вовсе лишь кости.',
    path: 'bones',
  },
  {
    title: 'Настоящий детектив',
    originalTitle: 'True detective',
    category: detective,
    description:
      '17 лет потребовалось на расследование дела серийного убийцы из Луизианы. Два напарника, которых сыграли Мэттью МакКонахи и Вуди Харрельсон, берутся за дело, и первым делом решают опросить детективов, расследовавших дело почти 2 десятка лет назад...',
    path: 'true-detective',
  },
  {
    title: 'Шерлок',
    originalTitle: 'Sherlock',
    category: detective,
    description:
      'Безупречный британский джентльмен из классического произведения превратился в эксцентричного сыщика с айфоном, «высокоактивного социопата», гения, супергероя из комикса.',
    path: 'sherlock',
  },
  {
    title: 'Джессика Джонс',
    originalTitle: 'Jessica Jones',
    category: detective,
    description:
      'После трагических событий, оборвавших короткую супергеройскую карьеру Джессики Джонс, девушка пытается восстановить личную жизнь и карьеру частного детектива, расследуя таинственную активность людей со сверхспособностями в Нью-Йорке.',
    path: 'jessica-jones',
  },
  {
    title: 'Сотня',
    originalTitle: 'The 100',
    category: fantastic,
    description:
      'Население Земли уничтожено ядерными взрывами. Спасшиеся обосновались на орбитальной станции, но постепенно и она выходит из строя. Тогда правительство решает рискнуть и отправить на радиоактивную Землю 100 молодых ребят, чтобы проверить, пригодна ли планета для возвращения человечества. Надо ли говорить, что на Земле их ждет сюрприз...',
    path: 'the-100',
  },
  {
    title: 'Очень странные дела',
    originalTitle: 'Stranger Things',
    category: fantastic,
    description:
      '80-ые, из секретной лаборатории сбегает девочка со способностью к телекинезу, пропадает мальчик и творятся очень странные и порой ужасающие дела.',
    path: 'stranger-things',
  },
  {
    title: 'Секретные материалы',
    originalTitle: 'The X-Files',
    category: fantastic,
    description:
      'Агенты специального отдела ФБР Дана Скалли и Фокс Малдер расследуют необычные дела, в которые замешаны паранормальные явления. Малдер ищет похищенную в детстве сестру, подозревая НЛО, а Скалли из скептика и агностика постепенно погружается в его мир.',
    path: 'x-files',
  },
  {
    title: 'Академия Амбрелла',
    originalTitle: 'The Umbrella Academy',
    category: fantastic,
    description:
      'Неблагополучная семья супергероев вновь возвращается домой, чтобы разгадать тайну смерти их приёмного отца и предотвратить надвигающийся апокалипсис.',
    path: 'umbrella-academy',
  },
  {
    title: 'Игра престолов',
    originalTitle: 'Game of Thrones',
    category: fantastic,
    description:
      'Политические интриги, родовитые лорды семи королевств, чудеса и надвигающиеся с севера ужасы откроют совершенно новый, непохожий на реальный, но невероятно живой мир. Кто выиграет в игру престолов и можно ли в нее вообще выиграть?',
    path: 'game-of-thrones',
  },
  {
    title: 'Ведьмак',
    originalTitle: 'The Witcher',
    category: fantastic,
    description:
      'Ведьмак Геральт из Ривии, мутант и убийца чудовищ, изо всех сил старается не потерять себя в мире, где люди часто оказываются намного хуже монстров.',
    path: 'witcher',
  },
  {
    title: 'Как я встретил вашу маму',
    originalTitle: 'How I Met Your Mother',
    category: comedy,
    description:
      'В 2030 году отец рассказывает детям-подросткам об обстоятельствах встречи с их матерью, подробно останавливаясь на событиях собственной жизни в 2000-ых.',
    path: 'how-i-met-your-mother',
  },
  {
    title: 'Теория Большого взрыва',
    originalTitle: 'The Big Bang Theory',
    category: comedy,
    description:
      'Ученые-физики и настоящие гики (любители комиксов, компьютерных игр и подобного) пытаются социализироваться, что вызывает множество забавных ситуаций.',
    path: 'big-bang-theory',
  },
  {
    title: 'Друзья',
    originalTitle: 'Friends',
    category: comedy,
    description:
      'Известнейший ситком о жизни шестерых друзей, самых обычных американцев, улучшит любое настроение, а разные типажи героев обязательно пробудят в вас сопереживание и чувство причастности.',
    path: 'friends',
  },
  {
    title: 'Отчаянные домохозяйки',
    originalTitle: 'Desperate Housewives',
    category: comedy,
    description:
      'Классический американский пригород, образцовая улица Вистерия Лен и идеальная жизнь ее обитателей. Вдруг местная домохозяйка кончает жизнь самоубийством, и ее четыре подруги пытаются разобраться, вдруг за идеальной картинкой скрывается нечто невообразимое?',
    path: 'desperate-housewives',
  },
  {
    title: 'Силиконовая долина',
    originalTitle: 'Silicon Valley',
    category: comedy,
    description:
      'Жизнь в Силиконовой долине – жестокая борьба за место под калифорнийским солнцем. Каждый здесь мечтает стать новым Джобсом. Шестеро молодых айтишников пытаются придумать прорывный стартап, который принесет им славу и деньги. Но великие изобретатели беспомощны в повседневной жизни, а толковые прагматики не могут справиться со звездной болезнью.',
    path: 'silicon-valley',
  },
  {
    title: 'Касл',
    originalTitle: 'Castle',
    category: comedy,
    description:
      'Щеголеватый автор детективов волею случая обосновался в департаменте убийств нью-йоркской полиции, где он питает свое писательское воображение.',
    path: 'castle',
  },
  {
    title: 'Ты',
    originalTitle: 'You',
    category: drama,
    description:
      'Одновременно отвратительно и невозможно оторваться. История про сталкерство, но при этом невероятно эстетичная, легкая и притягательная картинка. В стиле «Декстера» и фильма «Милые кости».',
    path: 'you',
  },
  {
    title: '13 причин почему',
    originalTitle: 'TH1RTEEN R3ASONS WHY',
    category: drama,
    description:
      'Ханна Бейкер совершает самоубийство. Несколько недель спустя ее одноклассник Клей находит коробку на пороге дома, в которой находится 7 кассет, записанных Ханной. Там она рассказывает 13 причин, почему она покончила жизнь самоубийством, и Клей — одна из них.',
    path: 'thirteen-reasons-why',
  },
  {
    title: 'Во все тяжкие',
    originalTitle: 'Breaking Bad',
    category: drama,
    description:
      'Школьный учитель химии Уолтер Уайт (Брайан Крэнстон) узнает, что болен раком легких и для обеспечения финансового благополучия семьи решает заняться изготовлением и продажей метамфетамина. Для этого он привлекает своего бывшего ученика Джесси Пинкмана (Аарон Пол). Вместе им предстоит погрузиться в опасный мир наркобизнеса и криминала',
    path: 'breaking-bad',
  },
  {
    title: 'Стыд',
    originalTitle: 'Skam',
    category: drama,
    description:
      'Всё что вы хотели (или нет) знать о проблемах подростков — трудности в отношениях, идентичность, расстройства пищевого поведения, сексуальное насилие, проблемы психического здоровья, религии и запретной любви',
    path: 'skam',
  },
  {
    title: 'Чёрное зеркало',
    originalTitle: 'Black Mirror',
    category: drama,
    description:
      'Создатель сериала, Чарли Брукер, сказал: «Если технологии — это наркотики, а они действительно похожи на наркотики, то каковы будут побочные эффекты? Пограничная область между наслаждением и дискомфортом и есть место действия моего драматического сериала „Чёрное зеркало“. Вы найдёте чёрное зеркало на каждой стене, на каждом столе, в каждой ладони: холодный и блестящий экран телевизора, монитора, смартфона»',
    path: 'black-mirror',
  },
  {
    title: 'Сплетница',
    originalTitle: 'Gossip Girl',
    category: drama,
    description:
      'В элитную школу в Верхнем Истсайде возвращается популярная и ранее покинувшая ее Серена. Почему она уехала, не знает никто, даже ее подруга Блэр, самая популярная ученица этой школы. Про это и многое другое поведает Сплетница, личность которой — еще одна большая загадка.',
    path: 'gossip-girl',
  },
  {
    title: 'Зачарованные',
    originalTitle: 'Charmed',
    category: final,
    description:
      'Три сестры живут в викторианском особняке своей покойной бабушки. Воссоединившись, они открывают в себе волшебные силы, которые как магнит притягивают всякую нечисть и не дают покоя самому дьяволу.',
    path: 'charmed',
  },
  {
    title: 'Удивительные истории',
    originalTitle: 'Amazing Stories',
    category: final,
    description:
      'Легенды, страшилки, невероятные, казалось бы, выдумки оживают в коротких ужасающих и одновременно по-чёрному смешных историях от режиссёра Стивена Спилберга.',
    path: 'amazing-stories',
  },
  {
    title: 'Секс в большом городе',
    originalTitle: 'Sex and the City',
    category: final,
    description:
      'Классика о том, как четыре девушки за 30 пытаются не потерять себя в поиске отношений в Нью-Йорке на стыке 20 и 21 века.',
    path: 'sex-and-the-city',
  },
  {
    title: 'Американская история ужасов',
    originalTitle: 'American Horror Story',
    category: final,
    description:
      'Дом с умершими жильцами, ужасающая психбольница, шабаш ведьм, шоу уродов не оставят вас равнодушными и заставят поджилки дрожать.',
    path: 'american-horror-story',
  },
  {
    title: 'Ходячие мертвецы',
    originalTitle: 'The Walking Dead',
    category: final,
    description:
      'Раненый в погоне за преступниками полицейский проснулся в больнице. Персонала нет, вокруг вообще никого. Встреченная на пути девочка почти лишена лица. Что же случилось и как теперь быть? А главное — остались ли в живых родные и друзья?',
    path: 'walking-dead',
  },
  {
    title: 'Настоящая кровь',
    originalTitle: 'True Blood',
    category: final,
    description:
      'Вампиры пьют синтетическую кровь и борются за свои права. Официантка из пригорода, умеющая читать мысли, знакомится с «хорошим» вампиром Биллом и сразу приобретает много врагов из «плохих».',
    path: 'true-blood',
  },
];

export default data;
