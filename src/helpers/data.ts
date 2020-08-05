import { categories } from './constants';
import { ObjectOfStrings } from './interfaces';

const { detective, fantastic, horror, comedy, medicine, twentiethCentury } = categories;

// TODO collect data: images
// TODO collect data: audio
// TODO collect data: 36 series

const data: ObjectOfStrings[] = [
  {
    title: 'Доктор Хаус',
    originalTitle: 'House, M.D.',
    category: medicine,
    description:
      'Гениальный диагност-социопат пренебрегает правилами, врачебной этикой и моралью, лишь бы поставить больному верный диагноз и, если повезет, спасти его',
    imagePath: '',
    audioPath: 'house-md',
  },
  {
    title: 'Хороший доктор',
    originalTitle: 'The Good Doctor',
    category: medicine,
    description:
      'Может ли аутист стать отличным хирургом и каково это — натурально видеть всё, что происходит в организме пациента? Гениальность, граничащая с коммуникативными проблемами делают главного героя воистине уникальным доктором',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Анатомия страсти',
    originalTitle: "Grey's Anatomy",
    category: medicine,
    description:
      'Каково быть женщиной в мире гениальных врачей-мужчин? А если ты еще интерн и дочь известного врача, требования запредельно высоки. Микс отношений и медицины в городской больнице Сиэтла',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Клиника',
    originalTitle: 'Scrubs',
    category: medicine,
    description:
      'Эпохальный сериал про двух друзей, вчерашних студентов медицинского, попавших работать больницу после университета и пытающихся не утонуть в круговерти врачебной жизни',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Следствие по телу',
    originalTitle: 'Body of Proof',
    category: medicine,
    description:
      'После аварии ведущий нейрохирург уходит в судмедэксперты, и ей нет равных в понимании мертвых. Ее характер отбивает всякое желание общаться, и лишь малая доля окружающих ее могут вытерпеть это',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Больница Никербокер',
    originalTitle: 'The Knick',
    category: medicine,
    description:
      'В нью-йоркской больнице применяют передовые методы лечения и стараются помочь всем пациентам — но до изобретения лазерного скальпеля и компьютерной томографии еще очень далеко, а в карету скорой помощи запрягают лошадей',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Правосудие Декстера',
    originalTitle: 'Dexter',
    category: detective,
    description:
      'Как одновременно быть серийным убийцей и работать судебным экспертом полиции Майами? И при этом не попасть под подозрение, потому что не чувствуешь совершенно никаких эмоций',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Менталист',
    originalTitle: 'The Mentalist',
    category: detective,
    description:
      'Превосходный менталист, психолог-практик и манипулятор, некогда притворявшийся экстрасенсом и ясновидящим, вместе с Калифорнийским бюро расследований раскрывает самые запутанные дела об убийствах и ищет возмещдия для убитой маньяком семьи',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Кости',
    originalTitle: 'Bones',
    category: detective,
    description:
      'Судебные антропологи вместе с ФБР расследуют самые странные преступления, в результате которых от жертв остаются только сгнившие останки или и вовсе лишь кости',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Сотня',
    originalTitle: 'The 100',
    category: fantastic,
    description:
      'Население Земли уничтожено ядерными взрывами. Спасшиеся обосновались на орбитальной станции, но постепенно и она выходит из строя. Тогда правительство решает рискнуть и отправить на радиоактивную Землю 100 молодых ребят, чтобы проверить, пригодна ли планета для возвращения человечества. Надо ли говорить, что на Земле их ждет сюрприз...',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Очень странные дела',
    originalTitle: 'Stranger Things',
    category: fantastic,
    description:
      '80-ые, из секретной лаборатории сбегает девочка со способностью к телекинезу, пропадает мальчик и творятся очень странные и порой ужасающие дела',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Секс в большом городе',
    originalTitle: 'Sex and the City',
    category: comedy,
    description:
      'Классика о том, как четыре девушки за 30 пытаются не потерять себя в поиске отношений в Нью-Йорке на стыке 20 и 21 века',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Как я встретил вашу маму',
    originalTitle: 'How I Met Your Mother',
    category: comedy,
    description:
      'В 2030 году отец рассказывает детям-подросткам об обстоятельствах встречи с их матерью, подробно останавливаясь на событиях собственной жизни в 2000-ых',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Теория Большого взрыва',
    originalTitle: 'The Big Bang Theory',
    category: comedy,
    description:
      'Ученые-физики и настоящие гики (любители комиксов, компьютерных игр и подобного) пытаются социализироваться, что вызывает множество забавных ситуаций',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Американская история ужасов',
    originalTitle: 'American Horror Story',
    category: horror,
    description:
      'Дом с умершими жильцами, ужасающая психбольница, шабаш ведьм, шоу уродов не оставят вас равнодушными и заставят поджилки дрожать',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Ходячие мертвецы',
    originalTitle: 'The Walking Dead',
    category: horror,
    description:
      'Раненый в погоне за преступниками полицейский проснулся в больнице. Персонала нет, вокруг вообще никого. Встреченная на пути девочка почти лишена лица. Что же случилось и как теперь быть? А главное — остались ли в живых родные и друзья?',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Друзья',
    originalTitle: 'Friends',
    category: twentiethCentury,
    description:
      'Известнейший ситком о жизни шестерых друзей, самых обычных американцев, улучшит любое настроение, а разные типажи героев обязательно пробудят в вас сопереживание и чувство причастности',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Зачарованные',
    originalTitle: 'Charmed',
    category: twentiethCentury,
    description:
      'Три сестры живут в викторианском особняке своей покойной бабушки. Воссоединившись, они открывают в себе волшебные силы, которые как магнит притягивают всякую нечисть и не дают покоя самому дьяволу',
    imagePath: '',
    audioPath: '',
  },
  {
    title: 'Удивительные истории',
    originalTitle: 'Amazing Stories',
    category: twentiethCentury,
    description:
      'Легенды, страшилки, невероятные, казалось бы, выдумки оживают в коротких ужасающих и одновременно по-чёрному смешных историях от режиссёра Стивена Спилберга',
    imagePath: '',
    audioPath: '',
  },
];

export default data;
