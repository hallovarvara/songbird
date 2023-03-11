import { IObjectOfStrings } from '@types';
import { getShowsCategories } from '@utils/get-shows-categories';
import { CATEGORIES } from './dictionary';

const { detective, fantastic, drama, comedy, medicine, final } =
  getShowsCategories(CATEGORIES);

export const TV_SHOWS: IObjectOfStrings[] = [
  {
    title: 'House, M.D.',
    originalTitle: 'House, M.D.',
    category: medicine,
    description:
      'A brilliant diagnostician-sociopath disregards rules, medical ethics, and morality in order to give the patient an accurate diagnosis and, if lucky, save their life.',
    path: 'house-md',
  },
  {
    title: 'The Good Doctor',
    originalTitle: 'The Good Doctor',
    category: medicine,
    description:
      "Can an autistic person become an excellent surgeon, and what is it like to naturally see everything that happens inside a patient's body? The brilliance, bordering on communicative problems, makes the main character a truly unique doctor.",
    path: 'good-doctor',
  },
  {
    title: "Grey's Anatomy",
    originalTitle: "Grey's Anatomy",
    category: medicine,
    description:
      "What is it like to be a woman in a world of brilliant male doctors? And if you're also an intern and the daughter of a famous doctor, the demands are incredibly high. A mix of relationships and medicine in a Seattle city hospital.",
    path: 'greys-anatomy',
  },
  {
    title: 'Scrubs',
    originalTitle: 'Scrubs',
    category: medicine,
    description:
      'A landmark series about two friends, recent medical school graduates who find themselves working at a hospital and trying not to drown in the whirlpool of the medical life.',
    path: 'scrubs',
  },
  {
    title: 'Body of Proof',
    originalTitle: 'Body of Proof',
    category: medicine,
    description:
      'After an accident, a leading neurosurgeon leaves clinical practice and becomes a medical examiner, where she has no equal in understanding the dead. Her personality makes her unwilling to communicate with others, and only a small fraction of those around her can tolerate it.',
    path: 'body-of-proof',
  },
  {
    title: 'The Knick',
    originalTitle: 'The Knick',
    category: medicine,
    description:
      'At a New York hospital, they use advanced treatment methods and try to help all patients, but laser scalpels and computer tomography are still far from being invented, and horses are still used to pull the ambulance carriage.',
    path: 'knick',
  },
  {
    title: 'Dexter',
    originalTitle: 'Dexter',
    category: detective,
    description:
      "How can you be a serial killer and work as a forensic expert for the Miami police at the same time? And not get caught because you don't feel any emotions at all.",
    path: 'dexter',
  },
  {
    title: 'The Mentalist',
    originalTitle: 'The Mentalist',
    category: detective,
    description:
      'A  brilliant mentalist, practicing psychologist, and manipulator who once pretended to be a psychic and clairvoyant, works with the California Bureau of Investigation to solve the most intricate murder cases and seeks justice for a family killed by a serial killer.',
    path: 'mentalist',
  },
  {
    title: 'Bones',
    originalTitle: 'Bones',
    category: detective,
    description:
      'Forensic anthropologists work with the FBI to investigate the strangest crimes, in which all that remains of the victims are decomposed remains or even just bones.',
    path: 'bones',
  },
  {
    title: 'True detective',
    originalTitle: 'True detective',
    category: detective,
    description:
      'It took 17 years to investigate the case of a serial killer in Louisiana. Two partners, played by Matthew McConaughey and Woody Harrelson, take on the case and first decide to interview detectives who investigated the case almost two decades ago...',
    path: 'true-detective',
  },
  {
    title: 'Sherlock',
    originalTitle: 'Sherlock',
    category: detective,
    description:
      'The impeccable British gentleman from the classic work has turned into an eccentric detective with an iPhone, a "high-functioning sociopath", a genius, and a superhero from a comic book.',
    path: 'sherlock',
  },
  {
    title: 'Jessica Jones',
    originalTitle: 'Jessica Jones',
    category: detective,
    description:
      'After the tragic events that ended her short superhero career, Jessica Jones tries to rebuild her personal life and private detective career by investigating the mysterious activities of people with superhuman abilities in New York.',
    path: 'jessica-jones',
  },
  {
    title: 'The 100',
    originalTitle: 'The 100',
    category: fantastic,
    description:
      "The Earth's population is destroyed by nuclear explosions. Those who survived settled on an orbital station, but gradually it also begins to fail. Then the government decides to take a risk and send 100 young people to the radioactive Earth to check whether the planet is suitable for the return of humanity. Needless to say, a surprise awaits them on Earth...",
    path: 'the-100',
  },
  {
    title: 'Stranger Things',
    originalTitle: 'Stranger Things',
    category: fantastic,
    description:
      'In the 80s, a girl with telekinetic abilities escapes from a secret laboratory, a boy goes missing, and very strange and sometimes terrifying things happen.',
    path: 'stranger-things',
  },
  {
    title: 'The X-Files',
    originalTitle: 'The X-Files',
    category: fantastic,
    description:
      'Special Agents of the FBI, Dana Scully and Fox Mulder, investigate unusual cases involving paranormal phenomena. Mulder searches for his sister who was abducted when he was a child, suspecting UFOs, while Scully, a skeptic and agnostic, gradually immerses herself in his world.',
    path: 'x-files',
  },
  {
    title: 'The Umbrella Academy',
    originalTitle: 'The Umbrella Academy',
    category: fantastic,
    description:
      "A dysfunctional family of superheroes returns home to solve the mystery of their adoptive father's death and prevent an impending apocalypse.",
    path: 'umbrella-academy',
  },
  {
    title: 'Game of Thrones',
    originalTitle: 'Game of Thrones',
    category: fantastic,
    description:
      'Political intrigue, noble lords of seven kingdoms, wonders, and approaching horrors from the north will reveal a completely new, unlike reality, but incredibly vivid world. Who will win the game of thrones, and can anyone really win in it?',
    path: 'game-of-thrones',
  },
  {
    title: 'The Witcher',
    originalTitle: 'The Witcher',
    category: fantastic,
    description:
      'The Witcher Geralt of Rivia, a mutant and monster hunter, does his best not to lose himself in a world where people often turn out to be much worse than monsters.',
    path: 'witcher',
  },
  {
    title: 'How I Met Your Mother',
    originalTitle: 'How I Met Your Mother',
    category: comedy,
    description:
      'In 2030, a father tells his teenage children about the circumstances of his meeting with their mother, elaborating on the events of his own life in the 2000s.',
    path: 'how-i-met-your-mother',
  },
  {
    title: 'The Big Bang Theory',
    originalTitle: 'The Big Bang Theory',
    category: comedy,
    description:
      'Physicist scientists and true geeks (fans of comics, computer games, and the like) try to socialize, which causes many funny situations.',
    path: 'big-bang-theory',
  },
  {
    title: 'Friends',
    originalTitle: 'Friends',
    category: comedy,
    description:
      'The famous sitcom about the lives of six friends, the most ordinary Americans, will improve any mood, and the different character types of the heroes will definitely evoke empathy and a sense of belonging in you.',
    path: 'friends',
  },
  {
    title: 'Desperate Housewives',
    originalTitle: 'Desperate Housewives',
    category: comedy,
    description:
      'A classic American suburb, the exemplary street of Wisteria Lane, and the perfect life of its inhabitants. Suddenly, a local housewife ends her life by suicide, and her four friends try to figure out if something unimaginable is hidden behind the perfect picture.',
    path: 'desperate-housewives',
  },
  {
    title: 'Silicon Valley',
    originalTitle: 'Silicon Valley',
    category: comedy,
    description:
      'Life in Silicon Valley is a tough competition for a place under the Californian sun. Everyone here dreams of becoming the next Steve Jobs. Six young IT specialists try to come up with a breakthrough startup that will bring them fame and fortune. But great inventors are helpless in everyday life, and practical pragmatists cannot cope with stardom syndrome.',
    path: 'silicon-valley',
  },
  {
    title: 'Castle',
    originalTitle: 'Castle',
    category: comedy,
    description:
      'A quirky detective novelist has found himself working in the homicide department of the New York Police Department, where he feeds his creative imagination.',
    path: 'castle',
  },
  {
    title: 'You',
    originalTitle: 'You',
    category: drama,
    description:
      'Disgusting and impossible to tear away from at the same time. A story about stalking, but at the same time incredibly aesthetic, light, and attractive picture. In the style of "Dexter" and the movie "Lovely Bones."',
    path: 'you',
  },
  {
    title: 'TH1RTEEN R3ASONS WHY',
    originalTitle: 'TH1RTEEN R3ASONS WHY',
    category: drama,
    description:
      'Hannah Baker commits suicide. A few weeks later, her classmate Clay finds a box on the doorstep of his home, which contains 7 tapes recorded by Hannah. There she tells 13 reasons why she ended her life by suicide, and Clay is one of them.',
    path: 'thirteen-reasons-why',
  },
  {
    title: 'Breaking Bad',
    originalTitle: 'Breaking Bad',
    category: drama,
    description:
      "A high school chemistry teacher, Walter White (Bryan Cranston), learns that he has lung cancer and decides to start manufacturing and selling methamphetamine to ensure his family's financial security. To do this, he enlists the help of his former student, Jesse Pinkman (Aaron Paul). Together, they must delve into the dangerous world of drug trafficking and crime.",
    path: 'breaking-bad',
  },
  {
    title: 'Skam',
    originalTitle: 'Skam',
    category: drama,
    description:
      "All you wanted (or didn't want) to know about teenage problems - difficulties in relationships, identity, eating disorders, sexual violence, mental health issues, religion, and forbidden love.",
    path: 'skam',
  },
  {
    title: 'Black Mirror',
    originalTitle: 'Black Mirror',
    category: drama,
    description:
      "The creator of the series, Charlie Brooker, said: „If technology is a drug - and it feels like a drug - then what are the side effects? This area - between delight and discomfort - is where „Black Mirror“, my drama series, is set. The 'black mirror' of the title is the one you'll find on every wall, on every desk, in every palm - the cold and shiny screen of a TV, a monitor, a smartphone.“",
    path: 'black-mirror',
  },
  {
    title: 'Gossip Girl',
    originalTitle: 'Gossip Girl',
    category: drama,
    description:
      'A popular and previously departed Serena returns to the elite school in the Upper East Side. No one knows why she left, not even her friend Blair, the most popular student in the school. Gossip Girl, whose identity is another big mystery, will reveal this and much more.',
    path: 'gossip-girl',
  },
  {
    title: 'Charmed',
    originalTitle: 'Charmed',
    category: final,
    description:
      "Three sisters live in their late grandmother's Victorian mansion. Reuniting, they discover magical powers within themselves, which like a magnet attract all kinds of evil and even disturb the devil himself.",
    path: 'charmed',
  },
  {
    title: 'Amazing Stories',
    originalTitle: 'Amazing Stories',
    category: final,
    description:
      'Legends, scary stories, incredible, seemingly made-up tales come to life in short, terrifying, and at the same time darkly humorous stories from director Steven Spielberg.',
    path: 'amazing-stories',
  },
  {
    title: 'Sex and the City',
    originalTitle: 'Sex and the City',
    category: final,
    description:
      'Classic story about how four women over 30 try not to lose themselves while searching for relationships in New York City at the turn of the 20th and 21st centuries.',
    path: 'sex-and-the-city',
  },
  {
    title: 'American Horror Story',
    originalTitle: 'American Horror Story',
    category: final,
    description:
      'The house with deceased residents, a terrifying mental hospital, a coven of witches, a freak show - they will not leave you indifferent and make your hairs stand on end.',
    path: 'american-horror-story',
  },
  {
    title: 'The Walking Dead',
    originalTitle: 'The Walking Dead',
    category: final,
    description:
      'A wounded police officer wakes up in a hospital after chasing criminals. There is no staff around, no one at all. He encounters a girl on his way who is almost devoid of a face. What happened and what to do now? And most importantly, are his family and friends still alive?',
    path: 'walking-dead',
  },
  {
    title: 'True Blood',
    originalTitle: 'True Blood',
    category: final,
    description:
      'Vampires drink synthetic blood and fight for their rights. A suburban waitress who can read minds meets "good" vampire Bill and immediately gains many enemies from the "bad" ones.',
    path: 'true-blood',
  },
];
